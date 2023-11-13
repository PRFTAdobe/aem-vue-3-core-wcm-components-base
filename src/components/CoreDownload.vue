<script lang="ts" setup>
  import {
    componentClassNames,
    ComponentMapping,
    componentProperties,
  } from 'aem-vue-3-editable-components';
  import { computed, h, inject, VNode } from 'vue';
  import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';
  import CoreLink from '@/components/CoreLink.vue';

  const props = defineProps({
    actionText: {
      type: String,
      default: 'Download',
    },
    // eslint-disable-next-line vue/require-default-prop
    description: {
      type: String,
    },
    // eslint-disable-next-line vue/require-default-prop
    extension: {
      type: String,
    },
    // eslint-disable-next-line vue/require-default-prop
    filename: {
      type: String,
    },
    // eslint-disable-next-line vue/require-default-prop
    format: {
      type: String,
    },
    // eslint-disable-next-line vue/require-default-prop
    handleOnClick: {
      type: Function,
    },
    // eslint-disable-next-line vue/require-default-prop
    size: {
      type: String,
    },
    // eslint-disable-next-line vue/require-default-prop
    title: {
      type: String,
    },
    titleType: {
      type: String,
      default: 'h3',
    },
    // eslint-disable-next-line vue/require-default-prop
    url: {
      type: String,
    },
    ...componentProperties('cmp-download'),
  });

  const isInEditor = inject('isInEditor', AuthoringUtils.isInEditor());
  const componentMapping = inject('componentMapping', new ComponentMapping());

  const className = computed(() => {
    const classNameAsArray = componentClassNames(
      props.baseCssClass,
      props.appliedCssClassNames,
      props.cssClassNames,
      props.containerProps,
      isInEditor,
      props.aemNoDecoration,
    );
    if (isInEditor) {
      classNameAsArray.push('cq-dd-file');
    }
    return classNameAsArray;
  });

  const isEmpty = computed(
    () =>
      !(props.url && props.url.length > 0) ||
      (props.handleOnClick && typeof props.handleOnClick === 'function'),
  );

  const actionButton = computed((): VNode => {
    const buttonComponent = componentMapping.get(
      'stanley/components/button',
    ) as VNode;
    return h(buttonComponent, {
      class: `${props.baseCssClass}__action`,
      link: props.url || '#',
      handleOnClick: props.handleOnClick,
      text: props.actionText,
    });
  });

  const onClick = (event: MouseEvent) => {
    if (props.handleOnClick && typeof props.handleOnClick === 'function') {
      props.handleOnClick(event);
    }
  };

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <div v-if="!isEmpty" :id="props.id" :class="className">
    <component
      :is="props.titleType"
      v-if="props.title"
      :class="`${props.baseCssClass}__title`"
    >
      <CoreLink
        v-if="props.url || props.handleOnClick"
        :class="`${props.baseCssClass}__title-link`"
        :href="props.url || '#'"
        @click="onClick"
        >{{ props.title }}
      </CoreLink>
      <template v-else>
        {{ props.title }}
      </template>
    </component>
    <div
      v-if="props.description"
      :class="`${props.baseCssClass}__description`"
      v-html="props.description"
    />
    <dl
      v-if="props.filename || props.size || props.format"
      :class="`${props.baseCssClass}__properties`"
    >
      <div
        v-if="props.filename"
        :class="[
          `${props.baseCssClass}__property`,
          `${props.baseCssClass}__property--filename`,
        ]"
      >
        <dt :class="`${props.baseCssClass}__property-label`">Filename</dt>
        <dd :class="`${props.baseCssClass}__property-content`">
          {{ props.filename }}
        </dd>
      </div>
      <div
        v-if="props.size"
        :class="[
          `${props.baseCssClass}__property`,
          `${props.baseCssClass}__property--size`,
        ]"
      >
        <dt :class="`${props.baseCssClass}__property-label`">Size</dt>
        <dd :class="`${props.baseCssClass}__property-content`">
          {{ props.size }}
        </dd>
      </div>
      <div
        v-if="props.format"
        :class="[
          `${props.baseCssClass}__property`,
          `${props.baseCssClass}__property--format`,
        ]"
      >
        <dt :class="`${props.baseCssClass}__property-label`">Format</dt>
        <dd :class="`${props.baseCssClass}__property-content`">
          {{ props.format }}
        </dd>
      </div>
    </dl>
    <component :is="actionButton" />
  </div>
</template>

<style>
  .cmp-download {
    border: 1px solid #eee;
    border-radius: 4px;
    display: inline-block;
    overflow: hidden;
    padding-block: 16px;
    padding-inline: 16px;
    position: relative;
  }

  .cmp-download__title {
    margin-block: 0 8px;
    margin-inline: 0 0;
  }

  .cmp-download__title-link {
    text-decoration: none;
  }

  .cmp-download__description {
    margin-block: 0 16px;
    margin-inline: 0 0;
  }

  .cmp-download__description p {
    margin-block: 0;
    margin-inline: 0;
    padding-block: 0;
    padding-inline: 0;
  }

  .cmp-download__properties {
    margin-block: 0 16px;
    margin-inline: 0 0;
  }

  .cmp-download__property {
    background-color: #eee;
    border-radius: 4px;
    color: #000;
    display: inline-block;
    margin-inline-end: 4px;
    padding-block: 4px;
    padding-inline: 8px;
  }

  .cmp-download__property-label {
    display: none;
  }

  .cmp-download__property-content {
    margin-block: 0;
    margin-inline: 0;
  }
</style>
