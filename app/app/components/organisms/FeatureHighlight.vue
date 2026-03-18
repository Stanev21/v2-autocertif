<template>
  <section class="py-20 lg:py-28 bg-[#f5f5f0]">
    <div class="max-w-[1280px] mx-auto px-6 lg:px-12">
      <!-- Section header -->
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 lg:mb-20 gap-6">
        <div class="max-w-xl">
          <span class="text-[13px] font-medium font-inter text-[#CD3246] uppercase tracking-wider mb-4 block">{{ $t('checks.title') }}</span>
          <h2 class="text-[2rem] lg:text-[2.75rem] font-normal text-gray-900 leading-[1.1] font-heading">
            {{ $t('reports.title') }}
          </h2>
        </div>
        <p class="text-gray-500 text-[15px] leading-[1.6] font-inter max-w-md">{{ $t('checks.subtitle') }}</p>
      </div>

      <!-- 2x3 grid of feature cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(feature, i) in features"
          :key="i"
          class="group relative bg-white rounded-2xl p-7 lg:p-8 transition-all duration-300 hover:shadow-lg cursor-pointer overflow-hidden"
          @mouseenter="active = i"
        >
          <!-- Large faded number -->
          <span class="absolute top-4 right-5 text-[5rem] font-heading font-normal leading-none text-black/[0.04] select-none">{{ i + 1 }}</span>

          <!-- Icon -->
          <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
            :class="active === i ? 'bg-[#CD3246]/10' : 'bg-black/[0.04]'">
            <div class="w-5 h-5 transition-colors duration-300"
              :class="active === i ? 'text-[#CD3246]' : 'text-gray-400'"
              v-html="feature.icon"></div>
          </div>

          <!-- Title -->
          <h3 class="text-[17px] font-medium font-inter text-gray-900 mb-3 leading-snug relative z-10">
            {{ feature.title }}
          </h3>

          <!-- Description -->
          <p class="text-gray-500 text-[14px] leading-[1.65] font-inter mb-5 relative z-10">
            {{ feature.desc }}
          </p>

          <!-- Metric bar -->
          <div class="flex items-center gap-3 pt-4 border-t border-black/[0.06] relative z-10">
            <span class="text-[1.5rem] font-heading font-normal leading-none transition-colors duration-300"
              :class="active === i ? 'text-[#CD3246]' : 'text-gray-900'">
              {{ feature.metric }}
            </span>
            <span class="text-[12px] font-inter text-gray-400 leading-tight">{{ feature.metricLabel }}</span>
          </div>

          <!-- Active indicator line at bottom -->
          <div class="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-500"
            :class="active === i ? 'bg-[#CD3246]' : 'bg-transparent'"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n()

const items = computed(() => {
  const raw = tm('checks.items')
  return Array.isArray(raw) ? raw.map((item: any) => ({ title: rt(item.title), desc: rt(item.desc) })) : []
})

const active = ref(0)

const icons = [
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"/><path stroke-linecap="round" d="m15.5 8.5-3 4.5"/><circle cx="12" cy="13" r="1" fill="currentColor"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2.5s-4 1-8 1v7c0 5.5 3.5 9 8 11.5 4.5-2.5 8-6 8-11.5v-7c-4 0-8-1-8-1Z"/><path stroke-linecap="round" d="M9 12h6"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="11" width="14" height="10" rx="2" stroke-linecap="round"/><path stroke-linecap="round" d="M8 11V7a4 4 0 0 1 8 0v4"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path stroke-linecap="round" d="m9 14 2 2 4-4"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21c-4-4-8-7.5-8-12A8.5 8.5 0 0 1 17 4.5C19.5 7 20 10 17 14"/><path stroke-linecap="round" d="M12 21c0-6 3-9 5-10"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 17H6a4 4 0 0 1-.88-7.9A5.5 5.5 0 0 1 16 6.3 4.5 4.5 0 0 1 19 17Z"/><path stroke-linecap="round" d="M13 20l-2 2m3-1l-2 2"/></svg>`,
]

const features = computed(() => [
  {
    title: items.value[0]?.title || 'Mileage',
    desc: items.value[0]?.desc || '',
    metric: '8,000+',
    metricLabel: 'Data sources',
    icon: icons[0],
  },
  {
    title: items.value[1]?.title || 'Damages',
    desc: items.value[1]?.desc || '',
    metric: '300M+',
    metricLabel: 'Records analyzed',
    icon: icons[1],
  },
  {
    title: items.value[2]?.title || 'Theft',
    desc: items.value[2]?.desc || '',
    metric: '25+',
    metricLabel: 'Countries covered',
    icon: icons[2],
  },
  {
    title: items.value[3]?.title || 'Vehicle Inspection',
    desc: items.value[3]?.desc || '',
    metric: '100%',
    metricLabel: 'Official records',
    icon: icons[3],
  },
  {
    title: items.value[4]?.title || 'Fuel & CO2 Emissions',
    desc: items.value[4]?.desc || '',
    metric: 'A–G',
    metricLabel: 'Emission rating',
    icon: icons[4],
  },
  {
    title: items.value[5]?.title || 'Natural Disasters',
    desc: items.value[5]?.desc || '',
    metric: '15+',
    metricLabel: 'Years of data',
    icon: icons[5],
  },
])
</script>
