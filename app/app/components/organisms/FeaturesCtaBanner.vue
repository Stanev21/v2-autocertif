<template>
  <section class="relative py-32 lg:py-40 overflow-hidden">
    <!-- Gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#0B1426] via-[#060D1A] to-[#0A1020]"></div>

    <!-- Animated orbs -->
    <div class="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
      style="background: radial-gradient(circle, #3B82F6, transparent 70%);"></div>
    <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]"
      style="background: radial-gradient(circle, #6d28d9, transparent 70%);"></div>

    <!-- Grid overlay -->
    <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 80px 80px;"></div>

    <div class="relative max-w-[900px] mx-auto px-8 lg:px-12 text-center">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-8">
        <div class="w-2 h-2 rounded-full bg-coral animate-pulse"></div>
        <span class="text-white/50 text-[13px] font-inter font-medium">{{ $t('features.badge') }}</span>
      </div>

      <h2 class="text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] font-normal text-white leading-[1.08] mb-6 font-heading tracking-[-0.02em]">
        {{ $t('features.ctaTitle') }}
      </h2>
      <p class="text-white/40 text-[1.1rem] leading-[1.6] font-inter mb-12 max-w-xl mx-auto">
        {{ $t('features.ctaSubtitle') }}
      </p>

      <div class="flex items-center justify-center gap-4 flex-wrap">
        <button class="group relative inline-flex justify-center overflow-hidden rounded-full px-8 py-4 bg-coral text-white text-[15px] font-semibold font-inter hover:bg-coral-dark transition-all duration-300 cursor-pointer shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.4)]">
          <span class="transition-transform duration-200 group-hover:-translate-y-10">{{ $t('features.cta') }}</span>
          <span class="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-200 group-hover:translate-y-0" aria-hidden="true">{{ $t('features.cta') }}</span>
        </button>
        <button class="group relative inline-flex justify-center overflow-hidden rounded-full px-8 py-4 border border-white/20 text-white text-[15px] font-medium font-inter hover:bg-white/[0.06] hover:border-white/30 transition-all duration-300 cursor-pointer">
          <span class="transition-transform duration-200 group-hover:-translate-y-10">{{ $t('nav.pricing') }}</span>
          <span class="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-200 group-hover:translate-y-0" aria-hidden="true">{{ $t('nav.pricing') }}</span>
        </button>
      </div>

      <!-- Bottom stats -->
      <div class="flex items-center justify-center gap-6 mt-14">
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
          <span class="text-white/40 text-[13px] font-inter">{{ $t('features.ctaSources') }}</span>
        </div>
        <div class="w-px h-3 bg-white/10"></div>
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
          <span class="text-white/40 text-[13px] font-inter">{{ $t('features.ctaCheckpoints') }}</span>
        </div>
        <div class="w-px h-3 bg-white/10"></div>
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
          <span class="text-white/40 text-[13px] font-inter">{{ $t('features.ctaCountries') }}</span>
        </div>
        <div class="w-px h-3 bg-white/10"></div>
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
          <span class="text-white/40 text-[13px] font-inter">{{ $t('features.ctaReports') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
