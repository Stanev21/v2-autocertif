<template>
  <!-- Pricing hero + plans as one continuous flow -->
  <section class="bg-[#f7f8f6] pt-32 lg:pt-40 pb-6">
    <div class="max-w-[960px] mx-auto px-6 lg:px-12">
      <div ref="heroRef" class="text-center max-w-[600px] mx-auto mb-6">
        <h1 class="text-[2.5rem] lg:text-[3.25rem] font-normal text-gray-900 leading-[1.08] mb-5 font-heading">
          {{ $t('pricing.title') }}
        </h1>
        <p class="text-gray-400 text-[1rem] leading-[1.7] font-inter">
          {{ $t('pricing.subtitle') }}
        </p>
      </div>

      <!-- Trust signal -->
      <div class="flex items-center justify-center gap-6 flex-wrap">
        <div class="flex items-center gap-1.5">
          <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
          <span class="text-gray-400 text-[12px] font-inter">No hidden fees</span>
        </div>
        <div class="flex items-center gap-1.5">
          <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
          <span class="text-gray-400 text-[12px] font-inter">Cancel anytime</span>
        </div>
        <div class="flex items-center gap-1.5">
          <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
          <span class="text-gray-400 text-[12px] font-inter">100,000+ users</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const heroRef = ref<HTMLElement>()
onMounted(() => {
  if (!(window as any).gsap) return
  ;(window as any).gsap.from(heroRef.value, { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' })
})
</script>
