<script lang="ts" setup>
  /* eslint-disable vue/no-deprecated-filter */
  import {
    componentClassNames,
    componentProperties,
  } from 'aem-vue-3-editable-components';
  import { computed, inject, useAttrs } from 'vue';
  import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';
  import CoreLink from '@/components/CoreLink.vue';

  const props = defineProps({
    // eslint-disable-next-line vue/require-default-prop
    ariaLabel: {
      type: String,
    },
    // eslint-disable-next-line vue/require-default-prop
    handleOnClick: {
      type: Function,
    },
    // eslint-disable-next-line vue/require-default-prop
    icon: {
      type: String,
    },
    // eslint-disable-next-line vue/require-default-prop
    link: {
      type: String,
    },
    // eslint-disable-next-line vue/require-default-prop
    text: {
      type: String,
    },
    type: {
      type: String,
      default: 'button',
      validator(value: string) {
        return ['submit', 'reset', 'button'].includes(value);
      },
    },
    ...componentProperties('cmp-button'),
  });

  const attrs = useAttrs();
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

  const buttonClick = (event: MouseEvent) => {
    if (props.handleOnClick && typeof props.handleOnClick === 'function') {
      props.handleOnClick(event);
    }
  };

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <template v-if="props.text">
    <CoreLink
      v-if="!!props.link"
      :aria-label="props.ariaLabel"
      :class="(className as string[]).join(' ')"
      :href="props.link"
      v-bind="attrs"
      @click="buttonClick"
    >
      <span
        v-if="props.icon"
        :class="`${props.baseCssClass}__icon ${props.baseCssClass}__icon--${props.icon}`"
      ></span>
      <span :class="`${props.baseCssClass}__text`">{{ props.text }}</span>
    </CoreLink>
    <button
      v-else
      :class="className"
      :type="props.type as 'submit' | 'reset' | 'button'"
      v-bind="attrs"
      @click="buttonClick"
    >
      <span
        v-if="props.icon"
        :class="`${props.baseCssClass}__icon ${props.baseCssClass}__icon--${props.icon}`"
      ></span>
      <span :class="`${props.baseCssClass}__text`">{{ props.text }}</span>
    </button>
  </template>
</template>

<style>
  .cmp-button {
    background: none;
    border: 2px solid #7b7b7b;
    border-radius: 4px;
    color: #7b7b7b;
    cursor: pointer;
    display: inline-block;
    font-size: 12px;
    font-weight: bold;
    padding-block: 8px;
    padding-inline: 16px;
    text-decoration: none;
    text-transform: uppercase;
  }

  .cmp-button:hover {
    border-color: #222;
    color: #222;
  }

  .cmp-button__text {
    display: inline-block;
    line-height: 1.5;
    vertical-align: top;
  }
</style>
