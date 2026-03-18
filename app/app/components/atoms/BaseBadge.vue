<template>
  <span :class="[
    'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase',
    variantClasses,
  ]">
    <slot />
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: 'lime' | 'coral' | 'white' | 'dark'
}>()

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'coral':
      return 'bg-coral/20 text-coral'
    case 'white':
      return 'bg-white/10 text-white'
    case 'dark':
      return 'bg-forest-deep text-lime'
    default:
      return 'bg-lime/20 text-lime'
  }
})
</script>
