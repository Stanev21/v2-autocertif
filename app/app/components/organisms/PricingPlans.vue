<template>
  <!-- Plan cards: continuous from hero bg, then transitions to white -->
  <section class="bg-[#f7f8f6] pt-8 pb-20 lg:pb-24">
    <div class="max-w-[960px] mx-auto px-6 lg:px-12">
      <div class="grid md:grid-cols-2 gap-5">

        <!-- Trial -->
        <div class="rounded-2xl bg-white border border-gray-200 p-8 lg:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <p class="text-[18px] font-heading font-normal text-gray-900 mb-1">{{ $t('pricing.trial.name') }}</p>
          <p class="text-gray-400 text-[13px] font-inter mb-6">{{ $t('pricing.trial.tagline') }}</p>

          <div class="flex items-baseline gap-1.5 mb-8">
            <span class="text-[2.75rem] font-heading font-normal text-gray-900 leading-none">{{ $t('pricing.trial.price') }}</span>
            <span class="text-gray-400 text-[14px] font-inter">{{ $t('pricing.trial.period') }}</span>
          </div>

          <button class="w-full group relative inline-flex justify-center overflow-hidden rounded-pill py-3 border border-gray-900 text-gray-900 text-[14px] font-medium font-inter hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer mb-8">
            <span class="transition-transform duration-200 group-hover:-translate-y-10">{{ $t('pricing.trial.cta') }}</span>
            <span class="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-200 group-hover:translate-y-0" aria-hidden="true">{{ $t('pricing.trial.cta') }}</span>
          </button>

          <p class="text-[12px] font-inter font-semibold text-gray-900 mb-3">On Trial you'll get:</p>
          <ul class="space-y-2 mb-7 list-disc list-outside pl-4 marker:text-gray-300">
            <li class="text-gray-500 text-[13px] font-inter leading-[1.6]">Full access to all vehicle history checks for 2 days</li>
            <li class="text-gray-500 text-[13px] font-inter leading-[1.6]">Generate up to 15 complete reports</li>
            <li class="text-gray-500 text-[13px] font-inter leading-[1.6]">Export reports as PDF</li>
          </ul>

          <div class="pt-6 border-t border-gray-100">
            <p class="text-[11px] font-inter font-semibold text-gray-300 uppercase tracking-wider mb-4">Includes:</p>
            <div class="space-y-2.5">
              <div v-for="i in 7" :key="i" class="flex items-center gap-2.5">
                <svg class="w-3.5 h-3.5 text-gray-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-400 text-[12px] font-inter">{{ $t(`pricing.trial.features[${i - 1}]`) }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Subscription (Recommended) -->
        <div class="relative rounded-2xl bg-[#fff1f2] border border-[#fecdd3] p-8 lg:p-10 shadow-[0_1px_3px_rgba(205,50,70,0.06)]">
          <p class="text-[18px] font-heading font-normal text-burgundy mb-1">{{ $t('pricing.subscription.name') }}</p>
          <p class="text-coral text-[13px] font-inter font-medium mb-6">{{ $t('pricing.subscription.tagline') }}</p>

          <div class="mb-1">
            <span class="text-gray-400 text-[11px] font-inter">Starting from</span>
          </div>
          <div class="flex items-baseline gap-1.5 mb-8">
            <span class="text-[2.75rem] font-heading font-normal text-gray-900 leading-none">{{ $t('pricing.subscription.price') }}</span>
            <span class="text-gray-400 text-[14px] font-inter">{{ $t('pricing.subscription.period') }}</span>
          </div>

          <div class="flex items-center gap-3 mb-8">
            <button class="flex-1 group relative inline-flex justify-center overflow-hidden rounded-pill py-3 bg-burgundy text-white text-[14px] font-medium font-inter hover:bg-burgundy-deep transition-colors duration-300 cursor-pointer">
              <span class="transition-transform duration-200 group-hover:-translate-y-10">{{ $t('pricing.subscription.cta') }}</span>
              <span class="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-200 group-hover:translate-y-0" aria-hidden="true">{{ $t('pricing.subscription.cta') }}</span>
            </button>
            <button class="group relative inline-flex justify-center overflow-hidden rounded-pill px-5 py-3 border border-burgundy/20 text-burgundy text-[14px] font-medium font-inter hover:bg-burgundy/5 transition-all duration-300 cursor-pointer">
              <span class="transition-transform duration-200 group-hover:-translate-y-10">{{ $t('business.cta') }}</span>
              <span class="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-200 group-hover:translate-y-0" aria-hidden="true">{{ $t('business.cta') }}</span>
            </button>
          </div>

          <p class="text-[12px] font-inter font-semibold text-burgundy mb-3">On Subscription you'll:</p>
          <ul class="space-y-2 mb-7 list-disc list-outside pl-4 marker:text-coral/40">
            <li class="text-gray-600 text-[13px] font-inter leading-[1.6]">Get unlimited PDF exports and priority support</li>
            <li class="text-gray-600 text-[13px] font-inter leading-[1.6]">Run up to 15 vehicle history reports every month</li>
            <li class="text-gray-600 text-[13px] font-inter leading-[1.6]">Cancel anytime with no commitment</li>
          </ul>

          <div class="pt-6 border-t border-[#fecdd3]/60">
            <p class="text-[11px] font-inter font-semibold text-burgundy/30 uppercase tracking-wider mb-4">Everything in Trial, and:</p>
            <div class="space-y-2.5">
              <div v-for="i in 6" :key="i" class="flex items-center gap-2.5">
                <svg class="w-3.5 h-3.5 text-coral flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-600 text-[12px] font-inter">{{ $t(`pricing.subscription.features[${i - 1}]`) }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
