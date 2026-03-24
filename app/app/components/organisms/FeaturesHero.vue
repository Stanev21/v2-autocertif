<template>
  <section class="relative min-h-[85vh] flex items-center overflow-hidden bg-[#0a0a0a]">
    <!-- Animated gradient orbs -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.15] blur-[120px] animate-orb-1" style="background: radial-gradient(circle, #CD3246 0%, transparent 70%);"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.1] blur-[100px] animate-orb-2" style="background: radial-gradient(circle, #6d28d9 0%, transparent 70%);"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.05] blur-[150px]" style="background: radial-gradient(circle, #f59e0b 0%, transparent 70%);"></div>
    </div>

    <!-- Grain overlay -->
    <div class="absolute inset-0 opacity-[0.03]" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E'); background-repeat: repeat;"></div>

    <!-- Grid lines -->
    <div class="absolute inset-0 opacity-[0.04]" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 80px 80px;"></div>

    <div class="relative max-w-[1280px] mx-auto px-8 lg:px-12 py-32 w-full">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Badge -->
        <div ref="heroBadge" class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-8">
          <div class="w-2 h-2 rounded-full bg-coral animate-pulse"></div>
          <span class="text-white/60 text-[13px] font-inter font-medium tracking-wide">{{ $t('features.badge') }}</span>
        </div>

        <!-- H1 -->
        <h1 ref="heroTitle" class="text-[3rem] md:text-[4rem] lg:text-[4.75rem] font-normal text-white leading-[1.05] mb-7 font-heading tracking-[-0.02em]">
          {{ $t('features.title') }}
        </h1>

        <!-- Subtitle -->
        <p ref="heroSub" class="text-white/50 text-[1.125rem] lg:text-[1.25rem] leading-[1.6] mb-12 max-w-2xl mx-auto font-inter">
          {{ $t('features.subtitle') }}
        </p>

        <!-- CTAs -->
        <div ref="heroCtas" class="flex items-center justify-center gap-4 flex-wrap">
          <button class="group relative inline-flex justify-center overflow-hidden rounded-full px-8 py-4 bg-coral text-white text-[15px] font-semibold font-inter hover:bg-coral-dark transition-all duration-300 cursor-pointer shadow-[0_0_40px_rgba(205,50,70,0.3)] hover:shadow-[0_0_60px_rgba(205,50,70,0.4)]">
            <span class="transition-transform duration-200 group-hover:-translate-y-10">{{ $t('features.cta') }}</span>
            <span class="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-200 group-hover:translate-y-0" aria-hidden="true">{{ $t('features.cta') }}</span>
          </button>
          <button class="group relative inline-flex justify-center overflow-hidden rounded-full px-8 py-4 border border-white/20 text-white text-[15px] font-medium font-inter hover:bg-white/[0.06] hover:border-white/30 transition-all duration-300 cursor-pointer">
            <span class="transition-transform duration-200 group-hover:-translate-y-10">{{ $t('features.ctaSecondary') }}</span>
            <span class="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-200 group-hover:translate-y-0" aria-hidden="true">{{ $t('features.ctaSecondary') }}</span>
          </button>
        </div>

        <!-- Stats row -->
        <div ref="heroStats" class="flex items-center justify-center gap-8 lg:gap-12 mt-16 pt-10 border-t border-white/[0.06]">
          <div v-for="stat in stats" :key="stat.value" class="text-center">
            <p class="text-[1.75rem] lg:text-[2rem] font-heading font-normal text-white leading-none mb-1">{{ stat.value }}</p>
            <p class="text-white/30 text-[12px] font-inter tracking-wide uppercase">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom fade -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
  </section>
</template>

<script setup lang="ts">
const heroBadge = ref<HTMLElement>()
const heroTitle = ref<HTMLElement>()
const heroSub = ref<HTMLElement>()
const heroCtas = ref<HTMLElement>()
const heroStats = ref<HTMLElement>()

const stats = [
  { value: '8,000+', label: 'Data Sources' },
  { value: '2,500+', label: 'Checkpoints' },
  { value: '25+', label: 'Countries' },
  { value: '~55s', label: 'Avg. Generation' },
]

onMounted(() => {
  if (!(window as any).gsap) return
  const gsap = (window as any).gsap
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  tl.from(heroBadge.value, { opacity: 0, y: 20, duration: 0.6 })
    .from(heroTitle.value, { opacity: 0, y: 30, duration: 0.8 }, '-=0.3')
    .from(heroSub.value, { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
    .from(heroCtas.value, { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
    .from(heroStats.value, { opacity: 0, y: 20, duration: 0.6 }, '-=0.2')
})
</script>

<style scoped>
@keyframes orb-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(50px, -30px) scale(1.1); }
  66% { transform: translate(-30px, 20px) scale(0.95); }
}
@keyframes orb-2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-40px, 20px) scale(0.9); }
  66% { transform: translate(30px, -40px) scale(1.05); }
}
.animate-orb-1 { animation: orb-1 12s ease-in-out infinite; }
.animate-orb-2 { animation: orb-2 15s ease-in-out infinite; }
</style>
