<script lang="ts" setup>
  import {
    componentClassNames,
    componentProperties,
  } from 'aem-vue-3-editable-components';
  import { computed, inject, PropType, ref, useAttrs, watch } from 'vue';
  import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';
  import { useRoute } from 'vue-router';
  import CoreLink from '@/components/CoreLink.vue';

  interface TitleLink {
    attributes?: { [key: string]: string };
    url?: string;
    valid: boolean;
  }

  const props = defineProps({
    isNested: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Object as PropType<TitleLink>,
      default: () => ({
        valid: true,
        attributes: {},
      }),
    },
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'h3',
    },
    ...componentProperties('cmp-title'),
  });

  const attrs = useAttrs();
  const route = useRoute();
  const isInEditor = inject('isInEditor', AuthoringUtils.isInEditor());

  const className = computed(() => {
    const computedClass = componentClassNames(
      props.baseCssClass,
      props.appliedCssClassNames,
      props.containerProps,
      isInEditor,
    );
    computedClass.push({
      'cq-dd-title': isInEditor,
    });
    return computedClass;
  });

  const includeLink = ref(attrs?.linkDisabled !== true);
  const bemModifierPrefix = computed(() => (props.isNested ? '-' : '__'));
  const currentRoutePath = computed(() => {
    if (route.path && typeof route.path !== 'undefined') {
      return route.path;
    }
    return null;
  });

  watch(
    () => attrs?.linkDisabled,
    async (current, previous) => {
      if (current !== previous) {
        includeLink.value = current !== true;
      }
    },
  );

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <div :id="props.id" :class="className">
    <component
      :is="props.type"
      :class="`${baseCssClass}${bemModifierPrefix}text`"
    >
      <CoreLink
        v-if="includeLink"
        :class="`${baseCssClass}${bemModifierPrefix}link`"
        :href="props.link?.url || currentRoutePath!"
        v-bind="props.link?.attributes"
        >{{ text }}
      </CoreLink>
      <template v-else>
        {{ text }}
      </template>
    </component>
  </div>
</template>
