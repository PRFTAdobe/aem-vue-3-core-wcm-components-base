<script lang="ts" setup>
  import { computed, useAttrs } from 'vue';
  import { useRouter } from 'vue-router';
  import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';

  const props = defineProps({
    baseCssClass: {
      type: String,
      default: 'cmp-link',
    },
    // eslint-disable-next-line vue/require-default-prop
    class: {
      type: String,
    },
    href: {
      type: String,
      required: true,
    },
    navigable: {
      type: Boolean,
      default: true,
    },
    target: {
      type: String,
      default: '_self',
      validator: (prop: string) =>
        ['_self', '_blank', '_parent', '_top'].includes(prop),
    },
  });
  const attrs = useAttrs();
  const router = useRouter();
  const className = computed(() => [props.class, props.baseCssClass]);

  const navigate = (event: Event) => {
    const routes: string[] = router.getRoutes().map((route) => route.path);
    if (
      !AuthoringUtils.isEditMode() &&
      !AuthoringUtils.isPreviewMode() &&
      props.target !== '_blank' &&
      routes.includes(props.href)
    ) {
      event.preventDefault();
      router.push({
        path: props.href,
      });
    }
  };

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <a
    v-if="props.navigable"
    :class="className"
    :href="props.href"
    :target="props.target"
    v-bind="{ ...attrs }"
    @click="navigate"
  >
    <slot />
  </a>
  <span v-else class="cmp-span">
    <slot />
  </span>
</template>
