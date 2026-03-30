<template>
  <!-- CS Icon Grid + Card Pattern: pale grey bg, 3-col icon grid header, then 2x2 detail cards -->
  <section class="py-16 sm:py-24 lg:py-32 bg-[#f7f8f6]">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="inline-block px-3 py-1 rounded-md bg-[#d3ffb6] text-[11px] font-inter font-semibold text-gray-900 uppercase tracking-wider mb-5">Platform</span>
        <h2 class="text-[2rem] lg:text-[2.5rem] font-normal text-gray-900 leading-[1.08] font-heading">
          {{ $t('business.infrastructure.title') }}
        </h2>
      </div>

      <!-- 2x2 cards with images -->
      <div class="grid md:grid-cols-2 gap-5 max-w-[1040px] mx-auto">
        <div v-for="(item, i) in items" :key="i"
          class="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-[0_4px_40px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all duration-300">
          <!-- Card image -->
          <div class="h-[180px] overflow-hidden">
            <img :src="infraImages[i]" :alt="item.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="p-5 sm:p-8 lg:p-9">
          <!-- Icon -->
          <div class="w-10 h-10 rounded-xl bg-coral/[0.08] flex items-center justify-center mb-6 group-hover:bg-coral/[0.12] transition-colors duration-200">
            <svg class="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" :d="icons[i]" />
            </svg>
          </div>

          <h3 class="text-[17px] font-medium font-inter text-gray-900 mb-2">{{ item.title }}</h3>
          <p class="text-gray-500 text-[14px] leading-[1.7] font-inter mb-6">{{ item.desc }}</p>

          <!-- Features -->
          <div class="space-y-2.5 pt-5 border-t border-gray-100">
            <div v-for="(feat, j) in item.features" :key="j" class="flex items-center gap-2.5">
              <div class="w-1.5 h-1.5 rounded-full bg-coral flex-shrink-0"></div>
              <span class="text-gray-400 text-[13px] font-inter">{{ feat }}</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const infraImages = [
  '/images/business/rest-api.jpg',
  '/images/business/monitoring.jpg',
  '/images/business/white-label.jpg',
  '/images/business/support.jpg',
]

const icons = [
  'M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5',
  'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z',
  'M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42',
  'M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z',
]

const items = computed(() => {
  return [0, 1, 2, 3].map(i => ({
    title: t(`business.infrastructure.items[${i}].title`),
    desc: t(`business.infrastructure.items[${i}].desc`),
    features: [0, 1, 2, 3].map(j => t(`business.infrastructure.items[${i}].features[${j}]`)),
  }))
})

</script>
