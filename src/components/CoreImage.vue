<script lang="ts" setup>
  import {
    computed,
    h,
    inject,
    onMounted,
    onUnmounted,
    PropType,
    ref,
    useAttrs,
    watch,
  } from 'vue';
  import {
    componentClassNames,
    componentProperties,
  } from 'aem-vue-3-editable-components';
  import ResizeObserver from 'resize-observer-polyfill';
  import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';
  import CoreLink from '@/components/CoreLink.vue';

  interface ImageLink {
    valid: boolean;
    url: string;
    attributes?: object;
  }

  interface SmartCrop {
    set?: {
      relation?: {
        userdata: {
          SmartCropWidth: string;
          SmartCropDef: string;
        };
      };
    };
  }

  interface ResizeObserverCallback {
    (entries: ResizeObserverEntry[], observer: ResizeObserver): void;
  }

  const props = defineProps({
    alt: {
      type: String,
      required: true,
    },
    displayPopupTitle: {
      type: Boolean,
      default: false,
    },
    imageLink: {
      type: Object as PropType<ImageLink>,
      default: () => ({
        valid: false,
        attributes: {},
      }),
    },
    src: {
      type: String,
      required: true,
    },
    // eslint-disable-next-line vue/require-default-prop
    smartCropRendition: {
      type: String,
    },
    // eslint-disable-next-line vue/require-default-prop
    title: {
      type: String,
    },
    // eslint-disable-next-line vue/require-default-prop
    width: {
      type: String,
    },
    ...componentProperties('cmp-image'),
  });

  const attrs = useAttrs();
  const isInEditor = inject('isInEditor', AuthoringUtils.isInEditor());

  const image = ref(null);
  const imageSrc = ref(props.src);
  let smartCropSet: { [key: number]: string } = {};

  if (props.smartCropRendition && attrs.srcset) {
    imageSrc.value = attrs.srcset as string;
  }

  const assetMaxInlineSize = computed(() => {
    let assetMaxInlineSizeObject;
    if (props.width) {
      const { width } = props;
      let units = 'px';
      if (/^(\d+|(\.\d+))(\.\d+)?%$/.test(width!)) {
        units = '';
      }
      assetMaxInlineSizeObject = {
        '--asset-max-inline-size': `${width}${units}`,
      };
    }
    return assetMaxInlineSizeObject;
  });

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
      'cq-dd-image': isInEditor || false,
    });
    return componentClass;
  });

  const imageElement = computed(() => {
    const titleElement = h(
      'figcaption',
      {
        class: `${props.baseCssClass}__title`,
        itemProp: 'caption',
      },
      props.title,
    );

    const metaElement = h('meta', {
      content: props.title,
      itemProp: 'caption',
    });

    const imageElementNode = [
      h('img', {
        alt: props.alt,
        src: imageSrc.value,
        class: [
          `${props.baseCssClass}__image`,
          { 'cmp-asset': typeof props.width !== 'undefined' },
        ],
      }),
    ];
    if (props.title) {
      imageElementNode.push(titleElement);

      if (props.displayPopupTitle) {
        imageElementNode.push(metaElement);
      }
    }
    return () => imageElementNode;
  });

  let resizeObserver: ResizeObserver;

  const getOptimalWidth = (smartCropKeys: string[]) => {
    let optimalWidth;
    const { clientWidth } = (image.value! as HTMLImageElement)
      .parentNode as HTMLDivElement;
    smartCropKeys.reverse();
    smartCropKeys.forEach((smartCropKey) => {
      if (parseInt(smartCropKey, 10) > clientWidth) {
        optimalWidth = smartCropKey;
      }
    });
    return optimalWidth;
  };

  const getSmartCropSet = (): { [key: number]: string } => {
    const set: { [key: number]: string } = {};
    if (props.src) {
      const xmlHttpRequest = new XMLHttpRequest();
      const smartCropSetUrl = `${props.src.split('?')[0]}?req=set,json`;
      xmlHttpRequest.open('GET', smartCropSetUrl, false);
      xmlHttpRequest.onload = () => {
        if (xmlHttpRequest.status >= 200 && xmlHttpRequest.status < 400) {
          let data: SmartCrop | undefined;
          const { responseText } = xmlHttpRequest;
          const jsonpRegExp =
            /^(?:\/\*jsonp\*\/)?\s*([^()]+)\(([\s\S]+),\s*"[0-9]*"\);?$/gim;
          const matches = jsonpRegExp.exec(responseText);
          if (matches && matches.length >= 2) {
            const match = matches[2];
            const jsonRegExp = /^{[\s\S]*}$/gim;
            if (jsonRegExp.test(match)) {
              data = JSON.parse(match);
            }
          }

          if (data && data.set?.relation && Array.isArray(data.set.relation)) {
            data.set.relation.forEach(
              (relation: {
                userdata: {
                  SmartCropWidth: string;
                  SmartCropDef: string;
                };
              }) => {
                set[
                  parseInt(relation.userdata.SmartCropWidth, 10)
                ] = `:${relation.userdata.SmartCropDef}`;
              },
            );
          }
        }
      };
      xmlHttpRequest.send();
    }
    return set;
  };

  const setImageSrcBasedOnOptimalWidth = () => {
    if (Object.keys(smartCropSet).length === 0) {
      smartCropSet = getSmartCropSet();
    }
    const optimalWidth = getOptimalWidth(Object.keys(smartCropSet));
    if (optimalWidth) {
      const imgSrcWithOptimalWidth = props.src.replace(
        '?',
        `${smartCropSet[optimalWidth]}?`,
      );
      imageSrc.value = imgSrcWithOptimalWidth.replace(
        '{dpr}',
        (window.devicePixelRatio || 1).toString(),
      );
    } else {
      imageSrc.value = props.src.replace(
        '{dpr}',
        (window.devicePixelRatio || 1).toString(),
      );
    }
  };

  const setImageSrc = () => {
    if (props.smartCropRendition) {
      if (props.smartCropRendition === 'SmartCrop:Auto' && attrs.srcset) {
        imageSrc.value = attrs.srcset as string;
        setImageSrcBasedOnOptimalWidth();
      } else {
        imageSrc.value = props.src.replace(
          '{dpr}',
          (window.devicePixelRatio || 1).toString(),
        );
      }
    } else {
      imageSrc.value = props.src;
    }
  };

  onMounted(() => {
    const resizeObserverCallback: ResizeObserverCallback = (
      entries: ResizeObserverEntry[],
    ) => {
      window.requestAnimationFrame(() => {
        if (
          props.smartCropRendition === 'SmartCrop:Auto' &&
          attrs.srcset &&
          image.value
        ) {
          if (Array.isArray(entries) && entries.length) {
            entries.forEach(() => {
              setImageSrcBasedOnOptimalWidth();
            });
          }
        }
      });
    };
    // @ts-ignore
    resizeObserver = new ResizeObserver(resizeObserverCallback);
    resizeObserver.observe(image.value! as HTMLImageElement);
    setImageSrc();
  });

  onUnmounted(() => {
    if (image.value) {
      resizeObserver.unobserve(image.value as HTMLImageElement);
    }
  });

  watch(
    () => props.src,
    async (current, previous) => {
      if (current !== previous) {
        setImageSrc();
      }
    },
  );

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <div
    :id="props.id"
    ref="image"
    :class="className"
    :style="assetMaxInlineSize"
  >
    <template v-if="imageSrc">
      <CoreLink
        v-if="props.imageLink?.url"
        :class="`${props.baseCssClass}__link`"
        :href="props.imageLink.url"
        v-bind="props.imageLink.attributes"
      >
        <component :is="imageElement" :key="imageSrc" />
      </CoreLink>
      <template v-else>
        <component :is="imageElement" :key="imageSrc" />
      </template>
    </template>
  </div>
</template>

<style>
  :root {
    --asset-max-inline-size: none;
  }

  .cmp-image .cmp-image__image {
    inline-size: auto;
  }

  .cmp-image .cmp-asset {
    block-size: auto;
    display: block;
    inline-size: 100%;
    max-inline-size: var(--asset-max-inline-size);
    object-fit: cover;
  }
</style>
