<template>
  <!-- CS Company Page inspired: dark bg, large numbered cards, modern feel -->
  <section class="py-24 lg:py-32 bg-burgundy overflow-hidden relative">
    <div class="absolute top-1/4 left-1/5 w-[450px] h-[450px] rounded-full opacity-[0.12] blur-[120px]" style="background: radial-gradient(circle, #3B82F6 0%, transparent 70%);"></div>
    <div class="absolute bottom-1/3 right-1/5 w-[350px] h-[350px] rounded-full opacity-[0.06] blur-[100px]" style="background: radial-gradient(circle, #8b5cf6 0%, transparent 70%);"></div>
    <div class="relative max-w-[1280px] mx-auto px-6 lg:px-12">
      <!-- Header — centered, white on dark -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="inline-block px-3 py-1 rounded-md bg-coral/20 text-[11px] font-inter font-semibold text-coral uppercase tracking-wider mb-5">Setup</span>
        <h2 class="text-[2rem] lg:text-[2.5rem] font-normal text-white leading-[1.08] font-heading">
          {{ $t('business.steps.title') }}
        </h2>
      </div>

      <!-- 3 step cards — CS arrow border grid inspired -->
      <div class="grid md:grid-cols-3 gap-5 lg:gap-6">
        <div v-for="(step, i) in steps" :key="i"
          class="group relative rounded-2xl p-8 lg:p-10 transition-all duration-300 overflow-hidden"
          :class="i === 0 ? 'bg-coral' : 'bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.10]'">

          <!-- Large background number -->
          <span class="absolute -right-2 -top-6 text-[140px] font-heading font-normal leading-none select-none pointer-events-none"
            :class="i === 0 ? 'text-white/[0.15]' : 'text-white/[0.04]'">
            {{ String(i + 1).padStart(2, '0') }}
          </span>

          <!-- Icon -->
          <div class="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-8"
            :class="i === 0 ? 'bg-white/20' : 'bg-white/[0.06] border border-white/[0.08]'">
            <svg class="w-5 h-5" :class="i === 0 ? 'text-white' : 'text-coral'" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" :d="stepIcons[i]" />
            </svg>
          </div>

          <h3 class="relative z-10 text-[18px] font-medium font-inter mb-3"
            :class="i === 0 ? 'text-white' : 'text-white'">
            {{ step.title }}
          </h3>
          <p class="relative z-10 text-[14px] leading-[1.7] font-inter"
            :class="i === 0 ? 'text-white/70' : 'text-white/40'">
            {{ step.desc }}
          </p>

          <!-- Arrow connector (between cards on desktop) -->
          <div v-if="i < 2" class="hidden md:flex absolute top-1/2 -right-3.5 z-20 w-7 h-7 rounded-full items-center justify-center"
            :class="i === 0 ? 'bg-coral' : 'bg-burgundy-light'">
            <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const stepIcons = [
  'M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z',
  'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
  'M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5',
]

const steps = computed(() => [0, 1, 2].map(i => ({
  title: t(`business.steps.items[${i}].title`),
  desc: t(`business.steps.items[${i}].desc`),
})))
</script>
