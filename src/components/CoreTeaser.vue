<script lang="ts" setup>
  import {
    componentClassNames,
    ComponentMapping,
    componentProperties,
  } from 'aem-vue-3-editable-components';
  import { computed, h, inject, PropType, VNode } from 'vue';
  import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';
  import CoreTitle from '@/components/CoreTitle.vue';
  import CoreLink from '@/components/CoreLink.vue';
  import DOMPurify from 'dompurify';
  import CoreImage from '@/components/CoreImage.vue';
  import CoreButton from '@/components/CoreButton.vue';

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
    cqType: {
      type: String,
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
  const componentMapping = inject('componentMapping', new ComponentMapping());

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
    componentClass.push({
      [`${props.baseCssClass}--with-image`]:
        typeof props.imagePath !== 'undefined',
    });
    return componentClass;
  });

  const actionButton = (action: TeaserAction): VNode => {
    let buttonComponent = CoreButton;
    if (props.cqType?.endsWith('/teaser')) {
      buttonComponent = componentMapping.get(
        props.cqType!.replace('/teaser', '/button'),
      ) as typeof CoreButton;
    }
    return h(buttonComponent, {
      class: `${props.baseCssClass}__action-link`,
      'aria-label': action.title,
      link: action.link.url,
      text: action.title,
      id: action.id as string,
      ...action.link.attributes,
    });
  };

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
          <component
            :is="actionButton(action)"
            v-for="(action, index) in props.actions"
            :key="`link-${index}`"
          />
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
  .cmp-teaser {
    background-color: #f5f5f5;
    color: #555;
    display: block;
    inline-size: 100%;
    overflow: hidden;
  }

  .cmp-teaser--with-image > section {
    display: grid;
    grid-template-columns: 1fr;
  }

  .cmp-teaser__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-block-size: 160px;
    min-inline-size: 240px;
    padding-block: 16px;
    padding-inline: 16px;
  }

  .cmp-teaser--with-image .cmp-teaser__content {
    background-color: rgb(115 115 115 / 60%);
    color: #f5f5f5;
    grid-column-start: 1;
    grid-row-start: 1;
    min-block-size: auto;
    min-inline-size: auto;
  }

  .cmp-teaser__content > p {
    font-size: 12px;
  }

  .cmp-teaser__title-text {
    font-size: 20px;
    line-height: 1.5;
    margin-block: 0;
    margin-inline: 0;
  }

  .cmp-teaser__title-link {
    text-decoration: none;
  }

  .cmp-teaser__description *:last-child {
    margin-block-end: 0;
  }

  .cmp-teaser__image {
    grid-column-start: 1;
    grid-row-start: 1;
  }

  .cmp-teaser--with-image .cmp-teaser__title-link {
    color: #fff;
  }

  .cmp-teaser--with-image .cmp-teaser__title-link:hover {
    color: #eee;
  }

  @media only screen and (width >= 480px) {
    .cmp-teaser__content {
      font-size: 14px;
      padding-block: 32px;
      padding-inline: 32px;
    }

    .cmp-teaser__content > p {
      font-size: 14px;
    }

    .cmp-teaser__title-text {
      font-size: 30px;
    }
  }
</style>
