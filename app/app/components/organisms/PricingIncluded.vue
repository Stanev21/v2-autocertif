<template>
  <!-- Included in every plan — CS rose cards with notched corner -->
  <section class="py-16 lg:py-20 bg-white">
    <div class="max-w-[1080px] mx-auto px-6 lg:px-12">
      <div class="text-center mb-12">
        <h2 class="text-[1.75rem] lg:text-[2rem] font-normal text-gray-900 leading-[1.08] font-heading">
          {{ $t('pricing.included.title') }}
        </h2>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="(item, i) in items" :key="i"
          class="relative bg-[#eff6ff] rounded-2xl p-5 sm:p-7 pb-12 overflow-hidden">
          <div class="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center mb-5">
            <svg class="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" :d="icons[i]" />
            </svg>
          </div>
          <h3 class="text-[14px] font-medium font-inter text-gray-900 mb-2">{{ item.title }}</h3>
          <p class="text-gray-500 text-[12px] font-inter leading-[1.6]">{{ item.desc }}</p>

          <!-- CS notched corner -->
          <div class="absolute z-10 pointer-events-none bottom-0 right-0 bg-white" style="border-radius: 12px 0 0 0; height: 2rem; min-width: 20%;">
            <div class="absolute text-white" style="height: 12px; width: 12px; transform: rotate(-90deg); right: 0; bottom: 100%;">
              <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none"><path d="M0 0V100H100C44.8 100 0 55.2 0 0Z" fill="currentColor"/></svg>
            </div>
            <div class="absolute text-white" style="height: 12px; width: 12px; transform: rotate(-90deg); right: 100%; bottom: 0;">
              <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none"><path d="M0 0V100H100C44.8 100 0 55.2 0 0Z" fill="currentColor"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const icons = [
  'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375',
  'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z',
  'M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582',
]

const items = computed(() => [0, 1, 2, 3].map(i => ({
  title: t(`pricing.included.items[${i}].title`),
  desc: t(`pricing.included.items[${i}].desc`),
})))
</script>
