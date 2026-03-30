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
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    metric: '1 in 3',
    desc: 'used vehicles has a hidden defect, rolled-back odometers, undisclosed accidents, or outstanding finance.',
  },
  {
    metric: '$3,400',
    desc: 'is the average loss per buyer who purchased a vehicle without checking its history first.',
  },
  {
    metric: '~55s',
    desc: 'to generate a full report from 8,000+ verified sources across 25+ countries. One check, total clarity.',
  },
]
</script>
