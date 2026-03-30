<template>
  <!-- CS Pre-Footer CTA: burgundy bg, centered, dual CTAs -->
  <section class="py-16 sm:py-28 lg:py-36 bg-burgundy relative overflow-hidden">
    <div class="absolute top-1/3 right-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] rounded-full opacity-[0.12] blur-[120px]" style="background: radial-gradient(circle, #3B82F6 0%, transparent 70%);"></div>
    <div class="absolute bottom-1/4 left-1/3 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] rounded-full opacity-[0.07] blur-[100px]" style="background: radial-gradient(circle, #8b5cf6 0%, transparent 70%);"></div>
    <div class="relative max-w-[800px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
      <h2 class="text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem] font-normal text-white leading-[1.08] mb-5 font-heading">
        {{ $t('business.ctaSection.title') }}
      </h2>
      <p class="text-white/50 text-[1.0625rem] leading-[1.6] font-inter mb-12 max-w-lg mx-auto">
        {{ $t('business.ctaSection.desc') }}
      </p>
      <div class="flex items-center justify-center gap-4 flex-wrap mb-6">
        <button class="group relative inline-flex justify-center overflow-hidden rounded-pill px-7 py-[0.8125rem] bg-coral text-white text-[14px] font-medium font-inter hover:bg-coral-dark transition-colors duration-300 cursor-pointer">
          <span class="transition-transform duration-200 group-hover:-translate-y-10">{{ $t('business.cta') }}</span>
          <span class="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-200 group-hover:translate-y-0" aria-hidden="true">{{ $t('business.cta') }}</span>
        </button>
        <button class="group relative inline-flex justify-center overflow-hidden rounded-pill px-7 py-[0.8125rem] border border-white/30 text-white text-[14px] font-medium font-inter hover:bg-white/10 transition-all duration-300 cursor-pointer">
          <span class="transition-transform duration-200 group-hover:-translate-y-10">{{ $t('business.ctaSecondary') }}</span>
          <span class="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-200 group-hover:translate-y-0" aria-hidden="true">{{ $t('business.ctaSecondary') }}</span>
        </button>
      </div>
      <p class="text-white/25 text-[13px] font-inter">{{ $t('business.ctaSection.note') }}</p>
    </div>
  </section>
</template>
