<template>
  <section id="benefits" class="py-24 lg:py-32 bg-[#fafaf8]">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12">
      <!-- Section header -->
      <div class="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
        <span class="text-[13px] font-medium font-inter text-coral uppercase tracking-wider mb-4 block">{{ $t('features.navBenefits') }}</span>
        <h2 class="text-[2.25rem] lg:text-[3.25rem] font-normal text-gray-900 leading-[1.08] font-heading">
          {{ $t('features.benefitsTitle') }}
        </h2>
      </div>

      <!-- 3-column benefit cards -->
      <div class="grid lg:grid-cols-3 gap-6">
        <div
          v-for="(benefit, i) in benefits"
          :key="i"
          class="group relative rounded-[1.5rem] overflow-hidden transition-all duration-500 cursor-pointer"
          :class="[
            hoveredCard === i ? 'shadow-2xl -translate-y-1' : 'shadow-sm',
            cardStyles[i].bg
          ]"
          @mouseenter="hoveredCard = i"
          @mouseleave="hoveredCard = -1"
        >
          <!-- Ambient glow on hover -->
          <div class="absolute -top-20 -right-20 w-[250px] h-[250px] rounded-full blur-[100px] transition-opacity duration-700"
            :class="hoveredCard === i ? 'opacity-40' : 'opacity-0'"
            :style="{ background: cardStyles[i].glow }"></div>

          <div class="relative z-10 p-8 lg:p-10 h-full flex flex-col min-h-[420px]">
            <!-- Number tag -->
            <div class="flex items-center justify-between mb-10">
              <span class="text-[11px] font-inter font-semibold uppercase tracking-[0.2em]"
                :class="cardStyles[i].muted">0{{ i + 1 }}</span>
              <div class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                :class="hoveredCard === i ? cardStyles[i].iconActiveBg : cardStyles[i].iconBg">
                <svg class="w-[18px] h-[18px] transition-colors duration-300"
                  :class="hoveredCard === i ? cardStyles[i].iconActiveColor : cardStyles[i].iconColor"
                  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="icons[i]" />
                </svg>
              </div>
            </div>

            <!-- Content -->
            <div class="flex-1">
              <h3 class="text-[1.35rem] lg:text-[1.5rem] font-heading font-normal leading-[1.2] mb-4"
                :class="cardStyles[i].title">
                {{ benefit.title }}
              </h3>
              <p class="text-[14px] lg:text-[15px] leading-[1.75] font-inter"
                :class="cardStyles[i].desc">
                {{ benefit.desc }}
              </p>
            </div>

            <!-- Metric -->
            <div class="mt-8 pt-6 border-t flex items-end gap-3"
              :class="cardStyles[i].border">
              <span class="text-[2.75rem] lg:text-[3rem] font-heading font-normal leading-none tracking-tight transition-colors duration-300"
                :class="hoveredCard === i ? 'text-coral' : cardStyles[i].metric">
                {{ metrics[i].value }}
              </span>
              <span class="text-[11px] font-inter leading-tight max-w-[120px] pb-2"
                :class="cardStyles[i].metricLabel">
                {{ metrics[i].label }}
              </span>
            </div>
          </div>

          <!-- Bottom accent line -->
          <div class="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-500 origin-left"
            :class="hoveredCard === i ? 'bg-coral scale-x-100' : 'bg-transparent scale-x-0'"></div>
        </div>
      </div>

      <!-- CTA -->
      <div class="flex justify-center mt-14">
        <a href="#" class="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gray-900 text-white text-[14px] font-medium font-inter hover:bg-gray-800 transition-all">
          {{ $t('features.cta') }}
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
        </a>
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

const icons = [
  'M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',
  'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
  'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75',
]

const cardStyles = [
  {
    bg: 'bg-[#0a0a0a]',
    glow: 'radial-gradient(circle, #CD3246, transparent 70%)',
    muted: 'text-white/25',
    title: 'text-white',
    desc: 'text-white/45',
    border: 'border-white/[0.08]',
    metric: 'text-white',
    metricLabel: 'text-white/30',
    iconBg: 'bg-white/[0.06]',
    iconActiveBg: 'bg-coral/15',
    iconColor: 'text-white/40',
    iconActiveColor: 'text-coral',
  },
  {
    bg: 'bg-white border border-gray-200/60',
    glow: 'radial-gradient(circle, #CD3246, transparent 70%)',
    muted: 'text-gray-300',
    title: 'text-gray-900',
    desc: 'text-gray-500',
    border: 'border-gray-100',
    metric: 'text-gray-900',
    metricLabel: 'text-gray-400',
    iconBg: 'bg-gray-100',
    iconActiveBg: 'bg-coral/10',
    iconColor: 'text-gray-400',
    iconActiveColor: 'text-coral',
  },
  {
    bg: 'bg-white border border-gray-200/60',
    glow: 'radial-gradient(circle, #CD3246, transparent 70%)',
    muted: 'text-gray-300',
    title: 'text-gray-900',
    desc: 'text-gray-500',
    border: 'border-gray-100',
    metric: 'text-gray-900',
    metricLabel: 'text-gray-400',
    iconBg: 'bg-gray-100',
    iconActiveBg: 'bg-coral/10',
    iconColor: 'text-gray-400',
    iconActiveColor: 'text-coral',
  },
]

const metrics = [
  { value: '$3,400', label: 'average loss per uninformed buyer' },
  { value: '8,000+', label: 'verified data sources' },
  { value: '~55s', label: 'average report time' },
]
</script>
