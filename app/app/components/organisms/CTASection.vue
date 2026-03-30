<template>
  <!-- ContentSquare Final CTA: burgundy bg, big heading font-heading, outline pill buttons -->
  <section class="py-32 bg-burgundy relative overflow-hidden">
    <div class="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.15] blur-[120px]" style="background: radial-gradient(circle, #3B82F6 0%, transparent 70%);"></div>
    <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.08] blur-[100px]" style="background: radial-gradient(circle, #8b5cf6 0%, transparent 70%);"></div>
    <div class="relative max-w-[900px] mx-auto px-8 lg:px-12">
      <h2 class="text-[2.75rem] lg:text-[3.75rem] font-normal text-white leading-[1.1] mb-12 font-heading">
        {{ $t('cta.title') }}
      </h2>
      <div class="flex items-center gap-4 flex-wrap">
        <button class="px-7 py-3 rounded-pill border-2 border-white text-white text-[14px] font-semibold font-heading hover:bg-white hover:text-burgundy transition-all duration-300 cursor-pointer">
          {{ $t('cta.button') }}
        </button>
        <button class="px-7 py-3 rounded-pill border-2 border-white/30 text-white text-[14px] font-semibold font-heading hover:bg-white/10 transition-all duration-300 cursor-pointer">
          {{ $t('nav.pricing') }}
        </button>
      </div>
    </div>
  </section>

</template>
