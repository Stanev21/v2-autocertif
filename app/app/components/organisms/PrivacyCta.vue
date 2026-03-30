<template>
  <section class="py-12 sm:py-20 lg:py-28 bg-white">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
      <div class="rounded-[1.75rem] bg-[#0A1020] overflow-hidden relative">
        <!-- Orb -->
        <div class="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]" style="background: radial-gradient(circle, #14b8a6, transparent 70%);"></div>

        <div class="relative z-10 p-6 sm:p-10 lg:p-16 text-center max-w-2xl mx-auto">
          <!-- Shield icon -->
          <div class="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/[0.06] flex items-center justify-center mx-auto mb-6">
            <svg class="w-7 h-7 text-teal-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
          </div>

          <h2 class="text-[1.75rem] lg:text-[2.25rem] font-heading font-normal text-white leading-[1.1] mb-4">
            {{ $t('privacy.ctaTitle') }}
          </h2>
          <p class="text-white/40 text-[15px] leading-[1.7] font-inter mb-8">
            {{ $t('privacy.ctaDesc') }}
          </p>
          <a href="/contact" class="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-gray-900 text-[14px] font-semibold font-inter hover:bg-gray-100 transition-all">
            {{ $t('privacy.ctaCta') }}
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
