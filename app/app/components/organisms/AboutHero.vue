<template>
  <section class="relative min-h-[85vh] flex items-center overflow-hidden bg-[#0A1020]">
    <!-- Orbs -->
    <div class="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full opacity-[0.12] blur-[120px]" style="background: radial-gradient(circle, #3B82F6 0%, transparent 70%);"></div>
    <div class="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[100px]" style="background: radial-gradient(circle, #f59e0b 0%, transparent 70%);"></div>
    <!-- Grid -->
    <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 80px 80px;"></div>

    <div class="relative max-w-[1280px] mx-auto px-8 lg:px-12 py-32 w-full">
      <div class="max-w-3xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-8">
          <div class="w-2 h-2 rounded-full bg-coral animate-pulse"></div>
          <span class="text-white/60 text-[13px] font-inter font-medium tracking-wide">{{ $t('about.badge') }}</span>
        </div>

        <h1 class="text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] font-normal text-white leading-[1.05] mb-7 font-heading tracking-[-0.02em]">
          {{ $t('about.title') }}
        </h1>

        <p class="text-white/45 text-[1.05rem] lg:text-[1.15rem] leading-[1.7] mb-14 max-w-2xl mx-auto font-inter">
          {{ $t('about.subtitle') }}
        </p>

        <!-- Stats -->
        <div class="flex items-center justify-center gap-6 lg:gap-10 flex-wrap">
          <div v-for="stat in stats" :key="stat.value" class="text-center">
            <p class="text-[1.75rem] lg:text-[2rem] font-heading font-normal text-white leading-none mb-1">{{ stat.value }}</p>
            <p class="text-white/25 text-[11px] font-inter tracking-wide uppercase">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const stats = computed(() => [
  { value: '100K+', label: t('about.statUsers') },
  { value: '8.8M+', label: t('about.statVehicles') },
  { value: '8,000+', label: t('about.statSources') },
  { value: '25+', label: t('about.statCountries') },
  { value: '~55s', label: t('about.statTime') },
])
</script>
