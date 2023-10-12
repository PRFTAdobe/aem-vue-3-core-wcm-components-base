<script lang="ts" setup>
  import {
    componentClassNames,
    componentProperties,
  } from 'aem-vue-3-editable-components';
  import { computed, inject, onMounted, onUpdated, ref } from 'vue';
  import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';
  import DOMPurify from 'dompurify';
  import { useRouter } from 'vue-router';

  const props = defineProps({
    cqPath: {
      type: String,
      default: '',
    },
    richText: {
      type: Boolean,
      default: false,
    },
    // eslint-disable-next-line vue/require-default-prop
    text: {
      type: String,
    },
    ...componentProperties('cmp-text'),
  });

  const router = useRouter();
  const isInEditor = inject('isInEditor', AuthoringUtils.isInEditor());

  const className = computed(() =>
    componentClassNames(
      props.baseCssClass,
      props.appliedCssClassNames,
      props.cssClassNames,
      props.containerProps,
      isInEditor,
      props.aemNoDecoration,
    ),
  );

  const richTextElement = ref(null);
  const sanitize = (text: string) => DOMPurify.sanitize(text);

  const textId = computed(() => {
    const updatedCqPath = props.cqPath
      ? props.cqPath.substring(props.cqPath.lastIndexOf('/') + 1)
      : '';
    return props.id ? props.id : updatedCqPath;
  });

  const updateHyperLinks = () => {
    if (richTextElement.value) {
      const routes: string[] = router.getRoutes().map((route) => route.path);
      if (!AuthoringUtils.isEditMode() && !AuthoringUtils.isPreviewMode()) {
        (richTextElement.value as HTMLDivElement)
          .querySelectorAll('a')
          .forEach((anchorTag) => {
            anchorTag.classList.add('cmp-link');
            const target = anchorTag.getAttribute('target') || '_self';
            const href = anchorTag.getAttribute('href') || '#';
            anchorTag.onclick = (event) => {
              if (target !== '_blank' && routes.includes(href)) {
                event.preventDefault();
                router.push(href);
              }
            };
          });
      }
    }
  };

  onMounted(() => {
    updateHyperLinks();
  });

  onUpdated(() => {
    updateHyperLinks();
  });

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <div
    v-if="props.richText"
    :id="textId"
    ref="richTextElement"
    :class="className"
    data-rte-editelement
    v-html="`${sanitize(props.text!)}`"
  ></div>
  <div v-else :id="textId" :class="className">
    <p :class="`${props.baseCssClass}__paragraph`">{{ props.text }}</p>
  </div>
</template>
