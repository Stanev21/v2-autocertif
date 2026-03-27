<template>
  <!-- Contentsquare-inspired deep burgundy hero -->
  <section class="relative min-h-[85vh] flex items-center overflow-hidden bg-[#0B1426]">
    <!-- Gradient orbs -->
    <div class="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full opacity-[0.2] blur-[120px]" style="background: radial-gradient(circle, #3B82F6 0%, transparent 70%);"></div>
    <div class="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.1] blur-[100px]" style="background: radial-gradient(circle, #f59e0b 0%, transparent 70%);"></div>

    <!-- Grid overlay -->
    <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 80px 80px;"></div>

    <div class="relative max-w-[1280px] mx-auto px-8 lg:px-12 py-32 w-full">
      <div class="grid lg:grid-cols-[1fr,auto] gap-16 items-center">
        <!-- Left: text -->
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm mb-8">
            <div class="w-2 h-2 rounded-full bg-coral animate-pulse"></div>
            <span class="text-white/60 text-[13px] font-inter font-medium tracking-wide">{{ $t('affiliate.badge') }}</span>
          </div>

          <h1 class="text-[3rem] md:text-[3.75rem] lg:text-[4.5rem] font-normal text-white leading-[1.04] mb-7 font-heading tracking-[-0.02em]">
            {{ $t('affiliate.title') }}
          </h1>

          <p class="text-white/45 text-[1.1rem] lg:text-[1.2rem] leading-[1.65] mb-10 font-inter max-w-xl">
            {{ $t('affiliate.subtitle') }}
          </p>

          <div class="flex items-center gap-4 flex-wrap">
            <button class="group relative inline-flex justify-center overflow-hidden rounded-full px-8 py-4 bg-coral text-white text-[15px] font-semibold font-inter hover:bg-coral-dark transition-all duration-300 cursor-pointer shadow-[0_0_40px_rgba(59,130,246,0.3)]">
              <span class="transition-transform duration-200 group-hover:-translate-y-10">{{ $t('affiliate.cta') }}</span>
              <span class="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-200 group-hover:translate-y-0" aria-hidden="true">{{ $t('affiliate.cta') }}</span>
            </button>
            <button class="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/20 text-white text-[15px] font-medium font-inter hover:bg-white/[0.06] transition-all cursor-pointer">
              {{ $t('affiliate.ctaTerms') }}
            </button>
          </div>
        </div>

        <!-- Right: stats grid -->
        <div class="grid grid-cols-2 gap-4 w-full lg:w-[340px]">
          <div
            v-for="(stat, i) in stats"
            :key="i"
            class="rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 aspect-square flex flex-col justify-center"
            :class="i === 0 ? 'bg-coral/15 border border-coral/20' : 'bg-white/[0.04] border border-white/[0.06]'"
          >
            <p class="text-[2rem] lg:text-[2.25rem] font-heading font-normal leading-none mb-2"
              :class="i === 0 ? 'text-coral' : 'text-white'">{{ stat.value }}</p>
            <p class="text-[11px] font-inter uppercase tracking-wider leading-tight"
              :class="i === 0 ? 'text-coral/60' : 'text-white/30'">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()

const stats = computed(() => {
  const raw = tm('affiliate.stats')
  return Array.isArray(raw) ? raw.map((s: any) => ({ value: rt(s.value), label: rt(s.label) })) : []
})
</script>
