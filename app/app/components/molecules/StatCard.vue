<template>
  <div class="text-center p-6">
    <div class="text-4xl font-extrabold text-lime mb-2">{{ value }}</div>
    <div class="text-white-60 text-sm">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: string
  label: string
}>()
</script>
