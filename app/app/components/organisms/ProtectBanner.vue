<template>
  <!-- ContentSquare customer results style: white bg, horizontal scroll cards with big metrics -->
  <section class="py-28 bg-white overflow-hidden">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12">
      <!-- Header row -->
      <div class="flex items-end justify-between mb-14">
        <div>
          <h2 class="text-[2rem] lg:text-[2.5rem] font-normal text-gray-900 leading-[1.1] mb-3 font-heading">
            {{ $t('protect.title') }}
          </h2>
          <p class="text-gray-500 text-[15px] leading-[1.7] font-inter max-w-lg">A vehicle history report protects you from hidden risks that cost thousands.</p>
        </div>
        <button class="group hidden md:relative md:inline-flex justify-center overflow-hidden rounded-pill px-7 py-[0.8125rem] bg-coral text-white text-[14px] font-medium font-inter hover:bg-coral-dark transition-[background-color] duration-300 cursor-pointer flex-shrink-0">
          <span class="transition-transform duration-200 group-hover:-translate-y-10">{{ $t('protect.cta') }}</span>
          <span class="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-200 group-hover:translate-y-0" aria-hidden="true">{{ $t('protect.cta') }}</span>
        </button>
      </div>

      <!-- 3 metric cards -->
      <div class="grid md:grid-cols-3 gap-5">
        <div v-for="(card, i) in cards" :key="i"
          class="group rounded-2xl p-8 lg:p-10 transition-all duration-300"
          :class="i === 2 ? 'bg-burgundy' : 'bg-grey-light'">
          <!-- Big metric -->
          <p class="text-[3.5rem] lg:text-[4rem] font-normal font-heading leading-none mb-6"
            :class="i === 2 ? 'text-coral' : 'text-coral'">
            {{ card.metric }}
          </p>
          <!-- Description -->
          <p class="text-[15px] leading-[1.6] font-inter mb-6"
            :class="i === 2 ? 'text-white/70' : 'text-gray-500'">
            {{ card.desc }}
          </p>
          <!-- Link -->
          <div class="flex items-center gap-2 transition-all duration-200">
            <span class="text-[14px] font-medium font-inter underline underline-offset-4 decoration-1 group-hover:decoration-2 transition-all"
              :class="i === 2 ? 'text-white' : 'text-gray-900'">
              {{ card.link }}
            </span>
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              :class="i === 2 ? 'text-white' : 'text-gray-900'"
              fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Mobile CTA -->
      <div class="mt-8 md:hidden">
        <button class="group relative inline-flex justify-center overflow-hidden rounded-pill px-7 py-[0.8125rem] bg-coral text-white text-[14px] font-medium font-inter hover:bg-coral-dark transition-[background-color] duration-300 cursor-pointer">
          <span class="transition-transform duration-200 group-hover:-translate-y-10">{{ $t('protect.cta') }}</span>
          <span class="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-200 group-hover:translate-y-0" aria-hidden="true">{{ $t('protect.cta') }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    metric: '1 in 3',
    desc: 'used vehicles has a hidden defect, rolled-back odometers, undisclosed accidents, or outstanding finance.',
    link: 'See what we check',
  },
  {
    metric: '$3,400',
    desc: 'is the average loss per buyer who purchased a vehicle without checking its history first.',
    link: 'View sample report',
  },
  {
    metric: '~55s',
    desc: 'to generate a full report from 8,000+ verified sources across 25+ countries. One check, total clarity.',
    link: 'Get your report',
  },
]
</script>
