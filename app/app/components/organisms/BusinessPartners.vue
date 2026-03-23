<template>
  <!-- Partner logos bar: light bg, enterprise trust signal -->
  <section class="py-14 bg-white border-b border-gray-100">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12">
      <p class="text-gray-300 text-[12px] font-inter text-center mb-8 uppercase tracking-widest font-medium">{{ $t('business.partners') }}</p>
      <div class="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
        <span v-for="name in ['iCarros', 'Webmotors', 'OLX Autos', 'Kavak', 'Localiza', 'Mobianto', 'Karvi']" :key="name"
          class="text-gray-200 text-[16px] md:text-[18px] font-bold font-heading tracking-wider hover:text-gray-400 transition-colors duration-300 cursor-default">{{ name }}</span>
      </div>
    </div>
  </section>
</template>
