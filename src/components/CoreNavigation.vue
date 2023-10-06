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

  interface CoreNavigationItemInterface {
    level: number;
    active: boolean;
    title: string;
    link: LinkInterface;
    lastModified: number;
    navigable?: boolean;
    path: string;
    children?: CoreNavigationItemInterface[];
  }

  const props = defineProps({
    items: {
      type: Array as PropType<Array<CoreNavigationItemInterface>>,
      default: () => [],
    },
    accessibilityLabel: {
      type: String,
      default: '',
    },
    ...componentProperties('cmp-navigation'),
  });

  const isInEditor = inject('isInEditor', AuthoringUtils.isInEditor());

  const className = computed(() =>
    componentClassNames(
      props.baseCssClass,
      props.appliedCssClassNames,
      props.containerProps,
      isInEditor,
    ),
  );

  const generateNavigationGroup = (
    items: CoreNavigationItemInterface[] | undefined,
  ) => {
    if ((items || []).length === 0 || typeof items === 'undefined') {
      return;
    }
    const navigationItems: VNode[] = items.map((item) =>
      h(
        'li',
        {
          class: [
            `${props.baseCssClass}__item`,
            `${props.baseCssClass}__item--level-${item?.level}`,
            {
              [`${props.baseCssClass}__item--active`]: item?.active,
            },
          ],
        },
        [
          h(
            CoreLink,
            {
              'aria-current': `${item.active ? 'page' : false}`,
              class: `${props.baseCssClass}__item-link`,
              href: item.link.url,
              title: item.title,
              navigable: item?.navigable,
            },
            () => item.title,
          ),
          generateNavigationGroup(item.children),
        ],
      ),
    );
    // eslint-disable-next-line consistent-return
    return h('ul', { class: `${props.baseCssClass}__group` }, navigationItems);
  };

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <nav
    :id="props.id"
    :aria-label="
      props.accessibilityLabel.length ? props.accessibilityLabel : 'Navigation'
    "
    :class="className"
    itemScope
    itemType="http://schema.org/SiteNavigationElement"
    role="navigation"
  >
    <component :is="generateNavigationGroup(props.items) as VNode" />
  </nav>
</template>
