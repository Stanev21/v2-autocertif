<template>
  <div class="rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-lime/30 transition-all duration-300">
    <img v-if="image" :src="image" :alt="name" class="w-full h-44 object-cover" />
    <div class="p-6">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-semibold text-white">{{ name }}</h3>
      <div :class="[
        'text-2xl font-extrabold',
        parseFloat(score) >= 7 ? 'text-lime' : 'text-coral'
      ]">
        {{ score }}<span class="text-sm font-normal text-white-60">/10</span>
      </div>
    </div>
    <AtomsBaseBadge :variant="parseFloat(score) >= 7 ? 'lime' : 'coral'">
      {{ status }}
    </AtomsBaseBadge>
    <div class="mt-4 grid grid-cols-2 gap-3 text-sm">
      <div class="flex justify-between">
        <span class="text-white-40">Mileage</span>
        <span class="text-white">{{ mileage }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-white-40">Accidents</span>
        <span class="text-white">{{ accidents }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-white-40">Theft</span>
        <span class="text-white">{{ theft }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-white-40">Owners</span>
        <span class="text-white">{{ owners }}</span>
      </div>
    </div>
    <div class="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
      <span class="text-white-40 text-xs font-mono">{{ vin }}</span>
      <span class="text-lime font-bold">{{ value }}</span>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  vin: string
  score: string
  status: string
  mileage: string
  accidents: string
  theft: string
  owners: string
  value: string
  image?: string
}>()
</script>
