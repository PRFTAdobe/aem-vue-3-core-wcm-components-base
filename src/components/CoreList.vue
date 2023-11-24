<script lang="ts" setup>
  import {
    componentClassNames,
    componentProperties,
  } from 'aem-vue-3-editable-components';
  import { computed, inject, PropType } from 'vue';
  import date from 'date-and-time';
  import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';
  import CoreLink from '@/components/CoreLink.vue';

  interface ListItem {
    index?: number;
    url?: string;
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
      return date.format(lastModifiedDate, dateFormatString);
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
          v-if="props.linkItems && item.url"
          :class="`${props.baseCssClass}__item-link`"
          :href="item.url!"
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
