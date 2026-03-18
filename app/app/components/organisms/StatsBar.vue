<template>
  <!-- ContentSquare "Smarter insights" centered section -->
  <section class="py-24 bg-white">
    <div class="max-w-[900px] mx-auto px-8 lg:px-12 text-center">
      <div class="flex items-center justify-center gap-6 mb-10">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
            <svg class="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
          </div>
          <span class="text-gray-600 text-[13px] font-medium font-inter">{{ $t('stats.verified') }}</span>
        </div>
        <span class="text-gray-200">|</span>
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center">
            <svg class="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3" /></svg>
          </div>
          <span class="text-gray-600 text-[13px] font-medium font-inter">{{ $t('stats.coverage') }}</span>
        </div>
      </div>
      <h2 class="text-[2.5rem] lg:text-[3.25rem] font-normal text-gray-900 leading-[1.1] mb-5 font-heading">
        {{ $t('trust.title') }}
      </h2>
      <p class="text-gray-500 text-[16px] leading-[1.7] mb-8 font-inter">
        {{ $t('trust.body').substring(0, 200) }}...
      </p>
      <a href="#checks" class="inline-flex items-center gap-1.5 text-gray-900 text-[14px] font-medium font-inter underline underline-offset-4 decoration-1 hover:decoration-2 transition-all">
        ↳ {{ $t('checks.cta') }}
      </a>
    </div>
  </section>
</template>
