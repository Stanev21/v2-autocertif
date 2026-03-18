<template>
  <div class="relative">
    <input
      :placeholder="placeholder"
      :value="modelValue"
      class="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-lime focus:ring-2 focus:ring-lime/30 transition-all duration-300"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <div v-if="$slots.suffix" class="absolute right-2 top-1/2 -translate-y-1/2">
      <slot name="suffix" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  placeholder?: string
  modelValue?: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>
