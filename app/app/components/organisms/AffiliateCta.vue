<template>
  <section class="py-24 lg:py-32 bg-[#1a0a14] relative overflow-hidden">
    <!-- Gradient orbs -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.12] blur-[120px]" style="background: radial-gradient(circle, #CD3246 0%, transparent 70%);"></div>

    <div class="relative max-w-3xl mx-auto px-8 lg:px-12 text-center">
      <h2 class="text-[2.25rem] lg:text-[3rem] font-normal text-white leading-[1.08] font-heading mb-5">
        {{ $t('affiliate.ctaBannerTitle') }}
      </h2>
      <p class="text-white/45 text-[16px] leading-[1.7] font-inter mb-10 max-w-xl mx-auto">
        {{ $t('affiliate.ctaBannerDesc') }}
      </p>

      <div class="flex items-center justify-center gap-4 flex-wrap mb-6">
        <button class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-coral text-white text-[15px] font-semibold font-inter hover:bg-coral-dark transition-all cursor-pointer shadow-[0_0_40px_rgba(205,50,70,0.3)]">
          {{ $t('affiliate.cta') }}
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
        </button>
        <button class="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white text-[15px] font-medium font-inter hover:bg-white/[0.06] transition-all cursor-pointer">
          {{ $t('affiliate.ctaTerms') }}
        </button>
      </div>

      <p class="text-white/25 text-[13px] font-inter">{{ $t('affiliate.ctaBannerNote') }}</p>
    </div>
  </section>
</template>
