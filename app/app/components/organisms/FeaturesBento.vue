<template>
  <section id="benefits" class="py-24 lg:py-32 bg-[#fafaf8]">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12">
      <!-- Section header -->
      <div class="max-w-2xl mb-16 lg:mb-20">
        <span class="text-[13px] font-medium font-inter text-coral uppercase tracking-wider mb-4 block">{{ $t('features.navBenefits') }}</span>
        <h2 class="text-[2.25rem] lg:text-[3rem] font-normal text-gray-900 leading-[1.08] font-heading">
          {{ $t('features.benefitsTitle') }}
        </h2>
      </div>

      <!-- Bento grid: top row 2 cols, bottom row full width -->
      <div class="grid lg:grid-cols-2 gap-4">
        <!-- Card 1 — dark, left -->
        <div
          class="group relative rounded-[1.25rem] overflow-hidden bg-[#0a0a0a] transition-all duration-500 cursor-pointer"
          @mouseenter="hoveredCard = 0"
          @mouseleave="hoveredCard = -1"
        >
          <div class="relative p-10 lg:p-12 h-full flex flex-col justify-between min-h-[320px]">
            <div class="absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-20 blur-[80px] transition-opacity duration-500"
              :class="hoveredCard === 0 ? 'opacity-30' : 'opacity-20'"
              style="background: radial-gradient(circle, #CD3246, transparent 70%);"></div>
            <div class="relative z-10">
              <div class="w-12 h-12 rounded-2xl bg-coral/15 border border-coral/20 flex items-center justify-center mb-8">
                <svg class="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 class="text-[1.5rem] lg:text-[1.75rem] font-heading font-normal text-white leading-[1.15] mb-4 max-w-md">
                {{ benefits[0]?.title }}
              </h3>
              <p class="text-white/50 text-[15px] leading-[1.7] font-inter max-w-lg">
                {{ benefits[0]?.desc }}
              </p>
            </div>
            <div class="relative z-10 flex items-center gap-3 mt-8 pt-6 border-t border-white/[0.08]">
              <span class="text-[2.5rem] font-heading font-normal text-coral leading-none">$3,400</span>
              <span class="text-white/30 text-[12px] font-inter leading-tight max-w-[140px]">average loss per uninformed buyer</span>
            </div>
          </div>
          <div class="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-500 origin-left"
            :class="hoveredCard === 0 ? 'bg-coral scale-x-100' : 'bg-transparent scale-x-0'"></div>
        </div>

        <!-- Card 2 — light, right -->
        <div
          class="group relative rounded-[1.25rem] overflow-hidden bg-white border border-gray-200/60 transition-all duration-500 cursor-pointer"
          @mouseenter="hoveredCard = 1"
          @mouseleave="hoveredCard = -1"
        >
          <div class="p-10 lg:p-12 h-full flex flex-col justify-between min-h-[320px]">
            <div>
              <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-7 transition-colors duration-300"
                :class="hoveredCard === 1 ? 'bg-coral/10' : 'bg-gray-100'">
                <svg class="w-5 h-5 transition-colors duration-300"
                  :class="hoveredCard === 1 ? 'text-coral' : 'text-gray-400'"
                  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
              </div>
              <h3 class="text-[1.25rem] lg:text-[1.5rem] font-heading font-normal text-gray-900 leading-[1.2] mb-3">
                {{ benefits[1]?.title }}
              </h3>
              <p class="text-gray-500 text-[14px] leading-[1.7] font-inter">
                {{ benefits[1]?.desc }}
              </p>
            </div>
            <div class="flex items-center gap-3 mt-8 pt-5 border-t border-gray-100">
              <span class="text-[2rem] font-heading font-normal leading-none transition-colors duration-300"
                :class="hoveredCard === 1 ? 'text-coral' : 'text-gray-900'">8,000+</span>
              <span class="text-gray-400 text-[12px] font-inter leading-tight max-w-[120px]">verified data sources</span>
            </div>
          </div>
          <div class="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-500 origin-left"
            :class="hoveredCard === 1 ? 'bg-coral scale-x-100' : 'bg-transparent scale-x-0'"></div>
        </div>

        <!-- Card 3 — full width bottom, accent background -->
        <div
          class="group relative lg:col-span-2 rounded-[1.25rem] overflow-hidden bg-white border border-gray-200/60 transition-all duration-500 cursor-pointer"
          @mouseenter="hoveredCard = 2"
          @mouseleave="hoveredCard = -1"
        >
          <div class="p-10 lg:p-12 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
            <div class="flex-1">
              <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-7 transition-colors duration-300"
                :class="hoveredCard === 2 ? 'bg-coral/10' : 'bg-gray-100'">
                <svg class="w-5 h-5 transition-colors duration-300"
                  :class="hoveredCard === 2 ? 'text-coral' : 'text-gray-400'"
                  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75" />
                </svg>
              </div>
              <h3 class="text-[1.25rem] lg:text-[1.5rem] font-heading font-normal text-gray-900 leading-[1.2] mb-3">
                {{ benefits[2]?.title }}
              </h3>
              <p class="text-gray-500 text-[14px] leading-[1.7] font-inter max-w-lg">
                {{ benefits[2]?.desc }}
              </p>
            </div>
            <div class="lg:shrink-0 flex items-center gap-4 lg:pr-4">
              <div class="flex items-center gap-3 pt-5 lg:pt-0 border-t lg:border-t-0 lg:border-l border-gray-100 lg:pl-8 w-full lg:w-auto">
                <span class="text-[2.5rem] font-heading font-normal leading-none transition-colors duration-300"
                  :class="hoveredCard === 2 ? 'text-coral' : 'text-gray-900'">~55s</span>
                <span class="text-gray-400 text-[12px] font-inter leading-tight max-w-[120px]">average report time</span>
              </div>
            </div>
          </div>
          <div class="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-500 origin-left"
            :class="hoveredCard === 2 ? 'bg-coral scale-x-100' : 'bg-transparent scale-x-0'"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const hoveredCard = ref(-1)

const benefits = computed(() => {
  const raw = tm('features.benefits')
  return Array.isArray(raw) ? raw.map((b: any) => ({ title: rt(b.title), desc: rt(b.desc) })) : []
})
</script>
