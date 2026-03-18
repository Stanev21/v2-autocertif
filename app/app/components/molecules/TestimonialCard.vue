<template>
  <div class="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-lime/20 transition-all duration-300 flex flex-col h-full">
    <div class="mb-4 text-lime text-3xl">"</div>
    <p class="text-white/80 text-base leading-relaxed flex-1 italic">{{ text }}</p>
    <div class="mt-6 pt-4 border-t border-white/10">
      <div class="font-semibold text-white">{{ name }}</div>
      <div class="text-white-60 text-sm">{{ city }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  city: string
  text: string
}>()
</script>
