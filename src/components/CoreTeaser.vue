<script lang="ts" setup>
  import {
    componentClassNames,
    componentProperties,
  } from 'aem-vue-3-editable-components';
  import { computed, inject, PropType } from 'vue';
  import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';
  import CoreTitle from '@/components/CoreTitle.vue';
  import CoreLink from '@/components/CoreLink.vue';
  import DOMPurify from 'dompurify';
  import CoreImage from '@/components/CoreImage.vue';

  interface TeaserLink {
    attributes: { [key: string]: string };
    url: string;
    valid: boolean;
  }

  interface TeaserAction {
    title: string;
    link: TeaserLink;
    id: unknown;
  }

  const props = defineProps({
    // eslint-disable-next-line vue/require-default-prop
    actions: {
      type: Array as PropType<TeaserAction[]>,
    },
    // eslint-disable-next-line vue/require-default-prop
    description: {
      type: String,
    },
    imageAlt: {
      type: String,
      default: '',
    },
    // eslint-disable-next-line vue/require-default-prop
    imagePath: {
      type: String,
    },
    // eslint-disable-next-line vue/require-default-prop
    link: {
      type: Object as PropType<TeaserLink>,
    },
    // eslint-disable-next-line vue/require-default-prop
    pretitle: {
      type: String,
    },
    // eslint-disable-next-line vue/require-default-prop
    title: {
      type: String,
    },
    titleType: {
      type: String,
      default: 'h2',
    },
    ...componentProperties('cmp-teaser'),
  });

  const isInEditor = inject('isInEditor', AuthoringUtils.isInEditor());

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
      'cq-dd-teaser': isInEditor,
    });
    return componentClass;
  });

  const linkProps = computed(() => ({
    class: `${props.baseCssClass}__link`,
    href: props.link?.url,
    ...props.link?.attributes,
  }));

  const titleProps = computed(() => ({
    baseCssClass: `${props.baseCssClass}__title`,
    isInEditor,
    isNested: true,
    link: props.link,
    linkDisabled: !props.link,
    text: props.title,
    type: props.titleType,
  }));

  const sanitize = (text: string) => DOMPurify.sanitize(text);

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <div :id="props.id" :class="className">
    <component
      :is="props.link ? CoreLink : 'section'"
      v-bind="props.link ? linkProps : false"
    >
      <div
        v-if="props.pretitle || props.title || props.description"
        :class="`${props.baseCssClass}__content`"
      >
        <p v-if="props.pretitle" :class="`${props.baseCssClass}__pretitle`">
          {{ props.pretitle }}
        </p>
        <CoreTitle v-if="props.title" v-bind="titleProps"></CoreTitle>
        <div
          v-if="props.description"
          :class="`${props.baseCssClass}__description`"
          v-html="`${sanitize(props.description)}`"
        ></div>
        <div
          v-if="props.actions && props.actions.length > 0"
          :class="`${props.baseCssClass}__action-container`"
        >
          <CoreLink
            v-for="(action, index) in props.actions"
            :id="action.id"
            :key="`link-${index}`"
            :class="`${props.baseCssClass}__action-link`"
            :href="action.link.url"
            :title="action.title"
            v-bind="action.link.attributes"
          >
            {{ action['title'] }}
          </CoreLink>
        </div>
      </div>
      <div v-if="props.imagePath" :class="`${props.baseCssClass}__image`">
        <CoreImage
          :alt="props.imageAlt"
          :is-in-editor="isInEditor"
          :src="props.imagePath"
          width="100%"
        />
      </div>
    </component>
  </div>
</template>

<style>
  :root {
    --color-pale-grey: #c4bfbc;
    --color-white: #fff;
    --size-1x: 8px;
    --size-2x: calc(var(--size-1x) * 2);
    --size-3x: calc(var(--size-1x) * 3);
  }

  .cmp-teaser {
    block-size: 100%;
    display: block;
    inline-size: 100%;
    overflow: hidden;
    position: relative;
  }

  .cmp-teaser > a,
  .cmp-teaser__title a {
    text-decoration: none;
  }

  .cmp-teaser > a:hover {
    text-decoration: underline;
  }

  .cmp-teaser__content {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    justify-content: flex-end;
    min-block-size: 160px;
    min-inline-size: 240px;
    padding-block: var(--size-3x);
    padding-inline: var(--size-3x);
  }

  .cmp-teaser__content:not(:only-child) {
    inset: 0;
    inset-block-end: 0;
    inset-inline: 0;
    min-block-size: auto;
    min-inline-size: auto;
    position: absolute;
    z-index: 1;
  }

  .cmp-teaser .cmp-teaser__content:only-child {
    background-color: var(--color-pale-grey);
  }

  .cmp-teaser__title-text {
    line-height: 1.5;
    margin-block: 0;
    margin-inline: 0;
  }

  .cmp-teaser__content:not(:only-child) .cmp-teaser__title-text,
  .cmp-teaser__content:not(:only-child) .cmp-teaser__title-text a {
    color: var(--color-white);
  }

  .cmp-teaser__content:not(:only-child) .cmp-teaser__title,
  .cmp-teaser__content:not(:only-child) .cmp-teaser__pretitle,
  .cmp-teaser__content:not(:only-child) .cmp-teaser__description {
    background-color: rgb(0 0 0 / 50%);
    box-decoration-break: clone;
    color: var(--color-white);
    display: table;
    font-weight: bolder;
    inline-size: fit-content;
    margin-block-end: 4px;
    padding-block: var(--size-1x);
    padding-inline: var(--size-1x);
  }

  .cmp-teaser__content p {
    margin-block: 0 var(--size-3x);
    margin-inline: 0 0;
    padding-block: 0;
    padding-inline: 0;
  }

  .cmp-teaser__content:not(:only-child) .cmp-teaser__description {
    --heading-color: var(--color-white);
  }

  .cmp-teaser__description p:last-child {
    margin-block-end: 0;
  }

  .cmp-teaser__action-link {
    border: 2px solid currentcolor;
    border-radius: 2px;
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    margin-block: var(--size-1x) 0;
    margin-inline: 0 4px;
    padding-block: 4px;
    padding-inline: var(--size-1x);
    text-decoration: none;
    text-transform: uppercase;
  }

  .cmp-teaser__content:not(:only-child) .cmp-teaser__action-link {
    background-color: rgb(0 0 0 / 50%);
    border-color: var(--color-white);
    color: var(--color-white);
  }

  @media only screen and (width >= 480px) {
    .cmp-teaser__content {
      font-size: var(--size-2x);
      padding-block: var(--size-3x);
      padding-inline: var(--size-3x);
    }

    .cmp-teaser__action-link {
      margin-block: var(--size-2x) 0;
      margin-inline: 0 var(--size-1x);
      padding-block: var(--size-1x);
      padding-inline: var(--size-2x);
    }
  }
</style>
