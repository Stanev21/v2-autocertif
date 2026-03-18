<template>
  <section class="py-28 bg-white overflow-hidden">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12">
      <!-- Heading -->
      <div class="text-center mb-20">
        <h2 class="text-[2rem] lg:text-[2.5rem] font-normal text-gray-900 leading-[1.1] font-heading">
          {{ $t('howItWorks.title') }}
        </h2>
      </div>

      <!-- 2x2 bento grid -->
      <div class="grid sm:grid-cols-2 gap-4 max-w-[900px] mx-auto auto-rows-fr">
        <div
          v-for="(step, i) in steps"
          :key="i"
          class="group relative rounded-2xl p-8 lg:p-10 transition-all duration-300 overflow-hidden"
          :class="'bg-burgundy-light hover:bg-burgundy'"
        >
          <!-- Large decorative number -->
          <span class="absolute -right-3 -top-5 text-[120px] font-heading font-normal text-white/[0.2] leading-none select-none pointer-events-none">
            {{ i + 1 }}
          </span>

          <!-- Icon -->
          <div class="relative z-10 w-12 h-12 rounded-xl bg-coral/20 border border-coral/30 flex items-center justify-center mb-8 group-hover:bg-coral/30 group-hover:scale-105 transition-all duration-300">
            <svg class="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" :d="icons[i]" />
            </svg>
          </div>

          <h3 class="relative z-10 text-[18px] font-medium text-white font-inter mb-3 group-hover:text-coral transition-colors duration-200">
            {{ step.title }}
          </h3>
          <p class="relative z-10 text-white/70 text-[14px] leading-[1.65] font-inter">
            {{ step.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const icons = [
  'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z',
  'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
  'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z',
  'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',
]

const steps = computed(() => [0, 1, 2, 3].map(i => ({
  title: t(`howItWorks.steps[${i}].title`),
  desc: t(`howItWorks.steps[${i}].desc`),
})))
</script>
