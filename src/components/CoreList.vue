<script lang="ts" setup>
  import {
    componentClassNames,
    componentProperties,
  } from 'aem-vue-3-editable-components';
  import { computed, inject, PropType } from 'vue';
  import date from 'date-and-time';
  import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';
  import CoreLink from '@/components/CoreLink.vue';

  interface ListItemLink {
    valid: boolean;
    url: string;
    attributes?: object;
  }

  interface ListItem {
    index?: number;
    link?: ListItemLink;
    lastModified?: number;
    lastModifiedFormatted?: string;
    description?: string;
    path: string;
    title: string;
    showModificationDate?: boolean;
  }

  const props = defineProps({
    // eslint-disable-next-line vue/require-default-prop
    items: {
      type: Array as PropType<ListItem[]>,
    },
    // eslint-disable-next-line vue/require-default-prop
    dateFormatString: {
      type: String,
    },
    showDescription: {
      type: Boolean,
    },
    showModificationDate: {
      type: Boolean,
    },
    linkItems: {
      type: Boolean,
    },
    ...componentProperties('cmp-list'),
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

  const formattedDate = (item: ListItem, dateFormatString: string) => {
    if (item.lastModifiedFormatted) {
      return item.lastModifiedFormatted;
    }
    if (item.lastModified && dateFormatString) {
      const lastModifiedDate = new Date(item.lastModified);
      return date.format(lastModifiedDate, dateFormatString.toUpperCase());
    }
    return '';
  };

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <ul
    v-if="props.items && props.items.length"
    :id="props.id"
    :class="className"
  >
    <li
      v-for="(item, index) in props.items"
      :key="index"
      :class="`${props.baseCssClass}__item`"
    >
      <article>
        <CoreLink
          v-if="props.linkItems && item.link?.url"
          :class="`${props.baseCssClass}__item-link`"
          :href="item.link.url!"
        >
          <span :class="`${props.baseCssClass}__item-title`">{{
            item.title
          }}</span>
          <span
            v-if="props.showModificationDate"
            :class="`${props.baseCssClass}__item-date`"
            >{{ formattedDate(item, props.dateFormatString!) }}</span
          >
        </CoreLink>
        <template v-else>
          <span :class="`${props.baseCssClass}__item-title`">{{
            item.title
          }}</span>
          <span
            v-if="props.showModificationDate"
            :class="`${props.baseCssClass}__item-date`"
            >{{ formattedDate(item, props.dateFormatString!) }}</span
          >
        </template>
        <span
          v-if="props.showDescription"
          :class="`${props.baseCssClass}__item-description`"
          >{{ item.description }}</span
        >
      </article>
    </li>
  </ul>
</template>

<style>
  .cmp-list__item {
    margin-block-start: 8px;
  }

  .cmp-list__item:first-child {
    margin-block-start: 0;
  }

  .cmp-list__item article {
    display: inline;
  }

  .cmp-list__item-link {
    text-decoration: underline;
  }

  .cmp-list__item-title,
  .cmp-list__item-date,
  .cmp-list__item-description {
    font-size: 14px;
  }

  .cmp-list span:not(:first-child) {
    margin-inline-start: 8px;
  }

  .cmp-list__item-description {
    color: #7b7b7b;
  }
</style>
