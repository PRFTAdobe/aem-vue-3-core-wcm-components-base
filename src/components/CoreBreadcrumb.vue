<script lang="ts" setup>
  import { computed, h, inject, PropType } from 'vue';
  import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';
  import {
    componentClassNames,
    componentProperties,
  } from 'aem-vue-3-editable-components';
  import CoreLink from '@/components/CoreLink.vue';

  interface BreadcrumbLink {
    valid: boolean;
    url: string;
    attributes?: object;
  }

  interface BreadcrumbItem {
    active: boolean;
    link: BreadcrumbLink;
    navigable: boolean;
    title: string;
  }

  const props = defineProps({
    // eslint-disable-next-line vue/require-default-prop
    ariaLabel: {
      type: String,
    },
    // eslint-disable-next-line vue/require-default-prop
    items: {
      type: Array as PropType<BreadcrumbItem[]>,
    },
    ...componentProperties('cmp-breadcrumb'),
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

  const breadCrumbListItem = (item: BreadcrumbItem) => {
    const breadCrumbSpan = (title: string, current = false) => {
      const spanProperties: {
        itemProp: string;
        'aria-current'?: string;
      } = {
        itemProp: 'name',
      };
      if (current) {
        spanProperties['aria-current'] = 'page';
      }
      return h('span', spanProperties, title);
    };
    const breadCrumbLink = (breadCrumbItem: BreadcrumbItem) =>
      h(
        CoreLink,
        {
          href: breadCrumbItem.link.url,
          class: `${props.baseCssClass}__item-link`,
          itemProp: 'item',
          navigable: breadCrumbItem.navigable,
        },
        () => breadCrumbSpan(breadCrumbItem.title),
      );
    let child = breadCrumbLink(item);
    if (item.active) {
      child = breadCrumbSpan(item.title, true);
    }
    return h(
      'li',
      {
        class: [
          `${props.baseCssClass}__item`,
          {
            [`${props.baseCssClass}__item--active`]: item.active,
          },
        ],
        itemProp: 'itemListElement',
        itemScope: true,
        itemType: 'http://schema.org/ListItem',
      },
      child,
    );
  };

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <nav :id="props.id" :aria-label="props.ariaLabel" :class="className">
    <ol
      :class="`${props.baseCssClass}__list`"
      itemScope="true"
      itemType="http://schema.org/BreadcrumbList"
    >
      <component
        :is="breadCrumbListItem(item)"
        v-for="item in props.items"
        :key="item.toString()"
      ></component>
    </ol>
  </nav>
</template>

<style>
  :root {
    --color-indigo-grey: #254353;
    --color-silver-grey: #76797a;
    --size-1x: 8px;
    --size-2x: calc(var(--size-1x) * 2);
  }

  .cmp-breadcrumb {
    color: var(--color-silver-grey);
    display: inline-block;
    font-size: 16px;
    list-style: none;
    padding-block: var(--size-2x);
  }

  .cmp-breadcrumb__list {
    margin-block: 0;
    margin-inline: 0;
    padding-block: 0;
    padding-inline: 0;
  }

  .cmp-breadcrumb__item {
    display: inline-block;
    padding-inline-end: var(--size-2x);
    vertical-align: top;
  }

  .cmp-breadcrumb__item + .cmp-breadcrumb__item::before {
    block-size: 12px;
    content: '>';
    display: inline-block;
    margin-block: 0;
    margin-inline: 0 var(--size-2x);
  }

  .cmp-breadcrumb__item-link {
    color: inherit;
  }

  .cmp-breadcrumb__item--active [aria-current='page'] {
    color: var(--color-indigo-grey);
    font-weight: 700;
  }
</style>
