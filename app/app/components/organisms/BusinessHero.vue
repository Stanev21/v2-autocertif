<template>
  <!-- CS Hero Pattern C: centered text, large image below -->
  <section class="bg-[#f7f8f6]">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12 pt-32 lg:pt-40 pb-16">
      <!-- Centered text block -->
      <div ref="heroText" class="text-center max-w-[720px] mx-auto mb-14">
        <span class="inline-block text-[13px] font-inter font-semibold text-coral uppercase tracking-widest mb-5">{{ $t('business.badge') }}</span>

        <h1 class="text-[2.5rem] lg:text-[3.5rem] font-normal text-gray-900 leading-[1.08] mb-6 font-heading">
          {{ $t('business.title') }}
        </h1>

        <p class="text-gray-500 text-[1.0625rem] leading-[1.7] mb-10 font-inter max-w-[560px] mx-auto">
          {{ $t('business.subtitle') }}
        </p>

        <!-- Dual CTAs -->
        <div class="flex items-center justify-center gap-3 flex-wrap mb-12">
          <button class="group relative inline-flex justify-center overflow-hidden rounded-pill px-7 py-[0.8125rem] bg-coral text-white text-[14px] font-medium font-inter hover:bg-coral-dark transition-colors duration-300 cursor-pointer">
            <span class="transition-transform duration-200 group-hover:-translate-y-10">{{ $t('business.cta') }}</span>
            <span class="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-200 group-hover:translate-y-0" aria-hidden="true">{{ $t('business.cta') }}</span>
          </button>
          <button class="group relative inline-flex justify-center overflow-hidden rounded-pill px-7 py-[0.8125rem] border border-gray-900 text-gray-900 text-[14px] font-medium font-inter hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer">
            <span class="transition-transform duration-200 group-hover:-translate-y-10">{{ $t('business.ctaSecondary') }}</span>
            <span class="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-200 group-hover:translate-y-0" aria-hidden="true">{{ $t('business.ctaSecondary') }}</span>
          </button>
        </div>

        <!-- Inline metrics -->
        <div class="flex items-center justify-center gap-8 flex-wrap">
          <div v-for="(m, i) in metrics" :key="i" class="flex items-baseline gap-1.5">
            <span class="text-gray-900 text-[1.25rem] font-heading font-normal">{{ m.value }}</span>
            <span class="text-gray-400 text-[11px] font-inter">{{ m.label }}</span>
          </div>
        </div>
      </div>

      <!-- Large dashboard image -->
      <div ref="heroImage" class="relative max-w-[1080px] mx-auto">
        <div class="rounded-2xl overflow-hidden shadow-[0_8px_60px_rgba(0,0,0,0.10)]">
          <img src="/images/business/dashboard.jpg" alt="Autocertif Business Dashboard" class="w-full h-auto object-cover" />
        </div>
        <!-- Floating metric card -->
        <div class="absolute -bottom-5 left-8 bg-white rounded-xl p-4 shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-gray-100 hidden sm:flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-coral/[0.08] flex items-center justify-center">
            <svg class="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>
          </div>
          <div>
            <p class="text-gray-900 text-[15px] font-inter font-semibold">99.9%</p>
            <p class="text-gray-400 text-[11px] font-inter">API Uptime</p>
          </div>
        </div>
        <!-- Floating badge -->
        <div class="absolute -top-3 right-8 bg-white rounded-lg px-3 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 hidden sm:flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span class="text-gray-600 text-[11px] font-inter font-medium">Live API</span>
        </div>
      </div>
    </div>

    <!-- Logo strip -->
    <div class="border-t border-gray-200/60 mt-10">
      <div class="max-w-[1280px] mx-auto px-8 lg:px-12 py-8">
        <div class="flex items-center justify-between">
          <p class="text-gray-300 text-[12px] font-inter mr-8 flex-shrink-0 hidden md:block">{{ $t('business.partners') }}</p>
          <div class="flex items-center justify-center gap-8 md:gap-12 flex-wrap flex-1">
            <span v-for="name in ['iCarros', 'Webmotors', 'OLX Autos', 'Kavak', 'Localiza', 'Mobianto', 'Karvi']" :key="name"
              class="text-gray-400 text-[14px] font-bold font-heading tracking-wider">{{ name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const heroText = ref<HTMLElement>()
const heroImage = ref<HTMLElement>()

const metrics = computed(() => [
  { value: t('business.metrics.sources'), label: t('business.metrics.sourcesLabel') },
  { value: t('business.metrics.response'), label: t('business.metrics.responseLabel') },
  { value: t('business.metrics.uptime'), label: t('business.metrics.uptimeLabel') },
  { value: t('business.metrics.countries'), label: t('business.metrics.countriesLabel') },
])

onMounted(() => {
  if (!(window as any).gsap) return
  const gsap = (window as any).gsap
  gsap.from(heroText.value, { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' })
  gsap.from(heroImage.value, { opacity: 0, y: 20, duration: 0.8, delay: 0.2, ease: 'power3.out' })
})
</script>
