<template>
  <!--
    ContentSquare button styles:
    - primary (red filled): bg-coral, white text, pill
    - dark (black filled): bg-gray-900, white text, pill
    - outline (border only): border-gray-900 or border-white, pill
    - outline-white: border-white, white text, pill (on dark bg)
  -->
  <NuxtLink v-if="to" :to="localePath(to)" :class="classes"><slot /></NuxtLink>
  <button v-else :class="classes"><slot /></button>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

const props = defineProps<{
  variant?: 'primary' | 'dark' | 'outline' | 'outline-white'
  size?: 'sm' | 'md' | 'lg'
  to?: string
}>()

const classes = computed(() => {
  const base = 'inline-flex items-center justify-center font-semibold rounded-pill transition-all duration-300 cursor-pointer whitespace-nowrap font-heading'

  const sizeMap: Record<string, string> = {
    sm: 'px-5 py-2.5 text-[13px]',
    md: 'px-7 py-3 text-[14px]',
    lg: 'px-8 py-3.5 text-[15px]',
  }

  const variantMap: Record<string, string> = {
    primary: 'bg-coral text-white hover:bg-coral-dark shadow-sm hover:shadow-md',
    dark: 'bg-gray-900 text-white hover:bg-gray-800',
    outline: 'border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white',
    'outline-white': 'border border-white/40 text-white hover:bg-white/10',
  }

  return [
    base,
    sizeMap[props.size || 'md'],
    variantMap[props.variant || 'primary'],
  ].join(' ')
})
</script>
