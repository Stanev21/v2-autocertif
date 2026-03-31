<template>
  <section class="relative bg-gradient-to-b from-[#eff6ff] via-[#f8fafb] to-white pt-32 lg:pt-40 pb-16 lg:pb-20 overflow-hidden">
    <!-- Subtle floating shapes -->
    <div class="absolute top-20 right-[15%] w-[300px] h-[300px] rounded-full opacity-[0.15] blur-[100px]" style="background: radial-gradient(circle, #3b82f6, transparent 70%);"></div>
    <div class="absolute bottom-10 left-[10%] w-[200px] h-[200px] rounded-full opacity-[0.1] blur-[80px]" style="background: radial-gradient(circle, #3b82f6, transparent 70%);"></div>

    <div class="relative max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
      <h1 class="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-normal text-gray-900 leading-[1.02] font-heading tracking-[-0.03em] mb-6">
        {{ $t('help.title') }}
      </h1>
      <p class="text-gray-400 text-[1.1rem] lg:text-[1.2rem] leading-[1.6] font-inter max-w-2xl mx-auto mb-10">
        {{ $t('help.subtitle') }}
      </p>

      <!-- Search bar -->
      <div class="max-w-2xl mx-auto relative">
        <svg class="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input
          type="text"
          :placeholder="$t('help.searchPlaceholder')"
          class="w-full pl-16 pr-8 py-6 rounded-2xl border-2 border-gray-200 bg-white text-[17px] font-inter text-gray-900 placeholder:text-gray-400 shadow-lg shadow-blue-500/5 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:shadow-blue-500/10 transition-all"
        />
      </div>
    </div>
  </section>
</template>
