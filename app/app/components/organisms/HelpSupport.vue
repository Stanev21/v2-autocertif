<template>
  <section class="py-20 lg:py-28 bg-[#fafaf8]">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12">
      <div class="rounded-[1.75rem] overflow-hidden bg-[#0A1020] relative">
        <!-- Gradient orb -->
        <div class="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]" style="background: radial-gradient(circle, #14b8a6, transparent 70%);"></div>

        <div class="grid lg:grid-cols-[1fr,auto] gap-0">
          <!-- Content -->
          <div class="relative z-10 p-10 lg:p-14 flex flex-col justify-center">
            <h2 class="text-[2rem] lg:text-[2.5rem] font-heading font-normal text-white leading-[1.1] mb-4">
              {{ $t('help.supportTitle') }}
            </h2>
            <p class="text-white/45 text-[15px] leading-[1.7] font-inter mb-8 max-w-lg">
              {{ $t('help.supportDesc') }}
            </p>

            <!-- Stats -->
            <div class="flex items-center gap-8 mb-10">
              <div>
                <p class="text-[1.75rem] font-heading font-normal text-teal-400 leading-none mb-1">97%</p>
                <p class="text-white/30 text-[11px] font-inter uppercase tracking-wider">{{ $t('help.statSatisfaction') }}</p>
              </div>
              <div class="w-px h-10 bg-white/10"></div>
              <div>
                <p class="text-[1.75rem] font-heading font-normal text-teal-400 leading-none mb-1">~7 days</p>
                <p class="text-white/30 text-[11px] font-inter uppercase tracking-wider">{{ $t('help.statResponse') }}</p>
              </div>
              <div class="w-px h-10 bg-white/10"></div>
              <div>
                <p class="text-[1.75rem] font-heading font-normal text-teal-400 leading-none mb-1">24/7</p>
                <p class="text-white/30 text-[11px] font-inter uppercase tracking-wider">{{ $t('help.statAvailability') }}</p>
              </div>
            </div>

            <!-- CTA -->
            <div>
              <a href="/contact" class="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-gray-900 text-[14px] font-semibold font-inter hover:bg-gray-100 transition-all">
                {{ $t('help.supportCta') }}
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </a>
            </div>
          </div>

          <!-- Image -->
          <div class="hidden lg:block w-[320px] relative">
            <img src="/images/help-center/support.jpg" alt="Support team" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-r from-[#0A1020] via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
