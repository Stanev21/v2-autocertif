<template>
  <div class="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-lime/30 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
    <div class="h-48 bg-gradient-to-br from-forest-light to-forest-deep flex items-center justify-center">
      <svg class="w-16 h-16 text-lime/30" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5" />
      </svg>
    </div>
    <div class="p-6 flex flex-col flex-1">
      <div class="flex items-center gap-3 mb-3">
        <AtomsBaseBadge variant="lime">{{ tag }}</AtomsBaseBadge>
        <span class="text-white-40 text-xs">{{ readTime }}</span>
      </div>
      <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-lime transition-colors duration-300">{{ title }}</h3>
      <p class="text-white-60 text-sm leading-relaxed flex-1">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  tag: string
  readTime: string
  title: string
  description: string
}>()
</script>
