<template>
  <!-- ContentSquare Final CTA: burgundy bg, big heading font-heading, outline pill buttons -->
  <section class="py-32 bg-burgundy">
    <div class="max-w-[900px] mx-auto px-8 lg:px-12">
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
