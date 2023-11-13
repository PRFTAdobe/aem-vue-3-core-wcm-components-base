<script lang="ts" setup>
  import DOMPurify from 'dompurify';
  import { computed, h, inject, onMounted, onUpdated, PropType } from 'vue';
  import {
    componentClassNames,
    componentProperties,
  } from 'aem-vue-3-editable-components';
  import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';

  declare global {
    interface Window {
      PinUtils: {
        // eslint-disable-next-line @typescript-eslint/ban-types
        build?: Function;
      };
    }
  }

  interface OEmbedResponse {
    processor?: string;
    options?: {
      provider?: string;
      response?: {
        height?: string;
        html?: string;
        title?: string;
        type?: string;
        url?: string;
        width?: string;
      };
    };
  }

  interface YouTubeProps {
    layout: string;
    youtubeAspectRatio: string;
    youtubeAutoPlay: boolean;
    youtubeHeight: string;
    youtubeLoop: boolean;
    youtubeMute: boolean;
    youtubePlaysInline: boolean;
    youtubeRel: boolean;
    youtubeVideoId: string;
    youtubeWidth: string;
  }

  const props = defineProps({
    type: {
      type: String,
      default: 'URL',
      validator: (prop: string) => ['URL', 'HTML', 'EMBEDDABLE'].includes(prop),
    },
    // eslint-disable-next-line vue/require-default-prop
    result: {
      type: Object as PropType<OEmbedResponse>,
    },
    url: {
      type: String,
      default: '',
    },
    // eslint-disable-next-line vue/require-default-prop
    html: {
      type: String,
    },
    youTubeProps: {
      type: Object as PropType<YouTubeProps>,
      default: () => ({}),
    },
    ...componentProperties('cmp-embed'),
  });

  const isInEditor = inject('isInEditor', AuthoringUtils.isInEditor());

  const loadScript = (
    source: string,
    async: boolean = true,
    type: string = 'text/javascript',
  ) =>
    new Promise((resolve, reject) => {
      try {
        const scriptElement = document.createElement('script');
        scriptElement.type = type;
        scriptElement.async = async;
        scriptElement.src = source;

        scriptElement.addEventListener('load', () => {
          resolve({ status: true });
        });

        scriptElement.addEventListener('error', () => {
          const message = 'Failed to load the script ＄{FILE_URL}';
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({
            status: false,
            message,
          });
        });

        document.body.appendChild(scriptElement);
      } catch (error) {
        reject(error);
      }
    });

  const sanitize = (text: string) => DOMPurify.sanitize(text);

  const className = computed(() => {
    const componentClass = componentClassNames(
      props.baseCssClass,
      props.appliedCssClassNames,
      props.cssClassNames,
      props.containerProps,
      isInEditor,
      props.aemNoDecoration,
    );
    componentClass.push({
      'cq-dd-embed': isInEditor || false,
    });
    return componentClass;
  });

  const youTubeSource = () => {
    const videoId = props.youTubeProps?.youtubeVideoId;
    const autoPlay = props.youTubeProps?.youtubeAutoPlay;
    const loop = props.youTubeProps?.youtubeLoop;
    const mute = props.youTubeProps?.youtubeMute;
    const playsInline = props.youTubeProps?.youtubePlaysInline;
    const rel = props.youTubeProps?.youtubeRel;
    const youTubeUrl = `https://www.youtube.com/embed/${videoId}`;
    const paramsObj: Record<string, string> = {
      mute: `${+mute}`,
      autoplay: `${+autoPlay}`,
      loop: `${+loop}`,
      playlist: `${videoId}`,
      rel: `${+rel}`,
      playsinline: `${+playsInline}`,
    };
    const youTubeUrlParams = new URLSearchParams(paramsObj).toString();
    return `${youTubeUrl}?${youTubeUrlParams}`;
  };

  const embeddableElement = computed(() =>
    h('iFrame', {
      type: 'text/html',
      width:
        props.youTubeProps?.layout === 'responsive'
          ? '100%'
          : props.youTubeProps?.youtubeWidth,
      height:
        props.youTubeProps?.layout === 'responsive'
          ? '100%'
          : props.youTubeProps?.youtubeHeight,
      src: youTubeSource(),
      frameborder: 0,
      class: `${props.baseCssClass}__embeddable-iframe`,
      allowfullscreen: true,
      allow: props.youTubeProps?.youtubeAutoPlay
        ? 'autoplay; fullscreen;'
        : 'fullscreen;',
      title: 'YouTube Video',
      ariaLabel: 'YouTube Video',
    }),
  );

  const oEmbedImageElement = computed(() => {
    if (props.result && props.result.options && props.result.options.response) {
      const { response } = props.result.options;

      return h('img', {
        title: response?.title,
        width: response?.width,
        height: response?.height,
        src: response?.url,
      });
    }
    return h('img');
  });

  const oEmbedURLResponseType = computed(() => {
    if (props.result && props.result.options && props.result.options.response) {
      const { response } = props.result.options;
      return response.type;
    }
    return undefined;
  });

  const oEmbedLinkURL = computed(() => {
    if (props.result && props.result.options && props.result.options.response) {
      const response = props.result.options.response as {
        url: string;
      };
      return response.url;
    }
    return undefined;
  });

  const oEmbedLinkTitle = computed(() => {
    if (props.result && props.result.options && props.result.options.response) {
      const response = props.result.options.response as {
        title: string;
      };
      return response.title;
    }
    return undefined;
  });

  const oEmbedRichResponseHtml = computed(() => {
    if (props.result && props.result.options && props.result.options.response) {
      const { response } = props.result.options;
      return response.html;
    }
    return undefined;
  });

  const executeProcessorScript = () => {
    const isTwitter =
      props.result?.processor === 'oembed' &&
      props.result?.options?.provider === 'Twitter';
    let url = '//assets.pinterest.com/js/pinit.js';
    if (isTwitter) {
      url = '//platform.twitter.com/widgets.js';
    }
    let processorScript = document.querySelector(`script[src="${url}"]`);

    if (!processorScript) {
      loadScript(url)
        .then(() => {
          if (typeof window.PinUtils?.build === 'function') {
            window.PinUtils.build();
          }
          processorScript = document.querySelector(`script[src="${url}"]`);
          (processorScript as HTMLScriptElement).dataset.loaded =
            true.toString();
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (
      (processorScript as HTMLScriptElement).dataset.loaded === 'true'
    ) {
      if (typeof window.PinUtils?.build === 'function') {
        window.PinUtils.build();
      }
    } else {
      processorScript.addEventListener('load', () => {
        if (typeof window.PinUtils?.build === 'function') {
          window.PinUtils.build();
        }
      });
    }
  };

  onMounted(() => {
    executeProcessorScript();
  });

  onUpdated(() => {
    executeProcessorScript();
  });

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <div :id="props.id" :class="className">
    <div v-if="props.type === 'HTML'" v-html="`${sanitize(props.html!)}`"></div>
    <template v-else-if="props.type === 'EMBEDDABLE'">
      <div
        v-if="props.youTubeProps?.layout === 'responsive'"
        :class="`${baseCssClass}__embeddable-wrapper`"
        :style="{
          'padding-bottom':
            props.youTubeProps?.layout === 'responsive'
              ? `${youTubeProps?.youtubeAspectRatio}%`
              : 0,
        }"
      >
        <component :is="embeddableElement" />
      </div>
      <template v-else>
        <component :is="embeddableElement" />
      </template>
    </template>
    <template v-else-if="props.type === 'URL'">
      <a
        v-if="props.result?.processor === 'pinterest'"
        :href="props.url"
        data-pin-build="doBuild"
        data-pin-do="embedPin"
      >
        {{ props.url }}
      </a>
      <template v-else-if="props.result?.processor === 'oembed'">
        <component
          :is="oEmbedImageElement"
          v-if="oEmbedURLResponseType === 'photo'"
        ></component>
        <a v-else-if="oEmbedURLResponseType === 'link'" :href="oEmbedLinkURL">
          {{ oEmbedLinkTitle }}
        </a>
        <div
          v-else-if="
            oEmbedURLResponseType === 'video' ||
            oEmbedURLResponseType === 'rich'
          "
          v-html="oEmbedRichResponseHtml"
        ></div>
      </template>
    </template>
  </div>
</template>

<style>
  .cmp-embed__embeddable-wrapper {
    position: relative;
  }

  .cmp-embed__embeddable-wrapper > iframe {
    inset: 0;
    position: absolute;
  }
</style>
