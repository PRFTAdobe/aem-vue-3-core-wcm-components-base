<script lang="ts" setup>
  import {
    componentClassNames,
    componentProperties,
  } from 'aem-vue-3-editable-components';
  import { computed, inject } from 'vue';
  import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';

  const props = defineProps({
    ...componentProperties('cmp-separator'),
  });

  const isInEditor = inject('isInEditor', AuthoringUtils.isInEditor());

  const className = computed(() =>
    componentClassNames(
      props.baseCssClass,
      props.appliedCssClassNames,
      props.containerProps,
      isInEditor,
      props.aemNoDecoration,
    ),
  );

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <div :id="props.id" :class="className">
    <hr :class="`${props.baseCssClass}__horizontal-rule`" />
  </div>
</template>
