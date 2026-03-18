<template>
  <div class="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-lime/30 transition-all duration-300">
    <div class="flex items-start gap-4">
      <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center text-lime">
        <slot name="icon">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </slot>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-lime transition-colors duration-300">{{ title }}</h3>
        <p class="text-white-60 text-sm leading-relaxed">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>
