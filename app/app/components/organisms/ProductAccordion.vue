<template>
  <!-- ContentSquare Product Accordion: white bg, pill tab buttons, centered content -->
  <section id="checks" class="py-28 bg-white">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12">
      <!-- Pill buttons row -->
      <div class="flex items-center justify-center gap-2.5 flex-wrap mb-12">
        <button v-for="(item, i) in items" :key="i"
          class="px-5 py-2.5 rounded-pill text-[13px] font-semibold font-heading transition-all duration-300 border cursor-pointer flex items-center gap-2"
          :class="activeIndex === i
            ? 'bg-gray-900 text-white border-gray-900'
            : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700'"
          @click="activeIndex = i">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" :d="icons[i]" /></svg>
          {{ item.title }}
        </button>
      </div>
      <div class="max-w-3xl mx-auto text-center">
        <h3 class="text-[2rem] lg:text-[2.5rem] font-normal text-gray-900 leading-[1.1] mb-5 font-heading">
          {{ items[activeIndex]?.title }}
        </h3>
        <p class="text-gray-500 text-[16px] leading-[1.7] mb-8 font-inter">
          {{ items[activeIndex]?.desc }}
        </p>
        <a href="#" class="inline-flex items-center gap-1.5 text-gray-900 text-[14px] font-medium font-inter underline underline-offset-4 decoration-1 hover:decoration-2 transition-all">
          ↳ {{ $t('checks.cta') }}
        </a>
      </div>
    </div>
    <!-- Logo trust bar -->
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12 mt-20 pt-12 border-t border-gray-100">
      <p class="text-gray-300 text-[13px] font-inter text-center mb-8">{{ $t('hero.trust') }}</p>
      <div class="flex items-center justify-center gap-14 flex-wrap">
        <span v-for="name in ['iCarros', 'Webmotors', 'OLX Autos', 'Kavak', 'Localiza']" :key="name"
          class="text-gray-400 text-[15px] font-bold font-heading tracking-wider hover:text-gray-600 transition-colors">{{ name }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const activeIndex = ref(0)
const icons = [
  'M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5',
  'M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.623',
  'M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75',
  'M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877',
  'M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047',
  'M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257',
]
const items = computed(() => {
  const raw = tm('checks.items')
  return Array.isArray(raw) ? raw.map((item: any) => ({ title: rt(item.title), desc: rt(item.desc) })) : []
})
</script>
