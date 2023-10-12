<script lang="ts" setup>
  import { computed, h, inject, PropType, VNode } from 'vue';
  import {
    componentClassNames,
    componentProperties,
  } from 'aem-vue-3-editable-components';
  import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';
  import CoreLink from '@/components/CoreLink.vue';

  interface LinkInterface {
    valid: boolean;
    url: string;
  }

  interface CoreLanguageNavigationItemInterface {
    level: number;
    active: boolean;
    title: string;
    link: LinkInterface;
    lastModified: number;
    path: string;
    locale: string;
    country: string;
    language: string;
    children?: CoreLanguageNavigationItemInterface[];
  }

  const props = defineProps({
    items: {
      type: Array as PropType<Array<CoreLanguageNavigationItemInterface>>,
      default: () => [],
    },
    accessibilityLabel: {
      type: String,
      default: '',
    },
    ...componentProperties('cmp-languagenavigation'),
  });

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

  const generateLanguageNavigationGroup = (
    items: CoreLanguageNavigationItemInterface[] | undefined,
  ) => {
    if ((items || []).length === 0 || typeof items === 'undefined') {
      return;
    }
    const languageNavigationItems: VNode[] = items.map((item) => {
      let languageNavigationLink = h(
        'span',
        {
          class: `${props.baseCssClass}__item-title`,
          lang: item.language,
        },
        [item.title],
      );
      if (item.level > 0) {
        languageNavigationLink = h(
          CoreLink,
          {
            'aria-current': `${item.active ? 'page' : false}`,
            class: `${props.baseCssClass}__item-link`,
            href: item.link.url,
            title: item.title,
            hrefLang: item.language,
            lang: item.language,
            rel: 'alternate',
          },
          () => item.title,
        );
      }
      return h(
        'li',
        {
          class: [
            `${props.baseCssClass}__item`,
            `${props.baseCssClass}__item--level-${item?.level}`,
            `${props.baseCssClass}__item--countrycode-${item.country}`,
            `${props.baseCssClass}__item--langcode-${item.language}`,
            {
              [`${props.baseCssClass}__item--active`]: item?.active,
            },
          ],
        },
        [
          languageNavigationLink,
          generateLanguageNavigationGroup(item.children),
        ],
      );
    });
    // eslint-disable-next-line consistent-return
    return h(
      'ul',
      { class: `${props.baseCssClass}__group` },
      languageNavigationItems,
    );
  };

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <nav
    :id="props.id"
    :aria-label="
      props.accessibilityLabel.length
        ? props.accessibilityLabel
        : 'Language Navigation'
    "
    :class="className"
    itemScope
    itemType="http://schema.org/SiteNavigationElement"
    role="navigation"
  >
    <component :is="generateLanguageNavigationGroup(props.items) as VNode" />
  </nav>
</template>
