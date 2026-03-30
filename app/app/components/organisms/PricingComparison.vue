<template>
  <!-- Feature comparison: single unified card with grouped sections -->
  <section class="py-16 lg:py-20 bg-[#f7f8f6]">
    <div class="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-12">
      <div class="text-center mb-12">
        <h2 class="text-[1.75rem] lg:text-[2rem] font-normal text-gray-900 leading-[1.08] font-heading">
          {{ $t('pricing.comparison.title') }}
        </h2>
      </div>

      <!-- Plan column headers -->
      <div class="flex items-end mb-4 pl-4">
        <div class="flex-1"></div>
        <div class="w-[80px] sm:w-[120px] text-center">
          <p class="text-[13px] font-inter font-semibold text-gray-900">{{ $t('pricing.trial.name') }}</p>
          <p class="text-[11px] font-inter text-gray-400">{{ $t('pricing.trial.price') }}</p>
        </div>
        <div class="w-[80px] sm:w-[120px] text-center">
          <div class="inline-block px-2 py-0.5 rounded-md bg-coral/10 mb-1">
            <p class="text-[13px] font-inter font-semibold text-coral">{{ $t('pricing.subscription.name') }}</p>
          </div>
          <p class="text-[11px] font-inter text-gray-400">{{ $t('pricing.subscription.price') }}{{ $t('pricing.subscription.period') }}</p>
        </div>
      </div>

      <!-- Single unified card -->
      <div class="rounded-xl bg-white border border-gray-100 overflow-hidden">

        <!-- Group header: Vehicle Data -->
        <div class="flex items-center gap-3 px-5 py-3.5 bg-[#f7f8f6]/60 border-b border-gray-100">
          <svg class="w-4 h-4 text-coral" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
          </svg>
          <span class="text-[12px] font-inter font-semibold text-gray-900 uppercase tracking-wider">Vehicle Data</span>
        </div>
        <div v-for="(feat, i) in dataFeatures" :key="'d'+i"
          class="flex items-center border-b border-gray-50 last:border-b-0 px-5 py-3">
          <span class="flex-1 text-[13px] font-inter text-gray-500 pl-7">{{ feat }}</span>
          <div class="w-[80px] sm:w-[120px] flex justify-center">
            <div class="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
              <svg class="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" /></svg>
            </div>
          </div>
          <div class="w-[80px] sm:w-[120px] flex justify-center">
            <div class="w-5 h-5 rounded-full bg-coral/10 flex items-center justify-center">
              <svg class="w-3 h-3 text-coral" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" /></svg>
            </div>
          </div>
        </div>

        <!-- Group header: Reports & Export -->
        <div class="flex items-center gap-3 px-5 py-3.5 bg-[#f7f8f6]/60 border-t border-b border-gray-100">
          <svg class="w-4 h-4 text-coral" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
          </svg>
          <span class="text-[12px] font-inter font-semibold text-gray-900 uppercase tracking-wider">Reports & Export</span>
        </div>
        <div v-for="(row, i) in reportFeatures" :key="'r'+i"
          class="flex items-center border-b border-gray-50 last:border-b-0 px-5 py-3">
          <span class="flex-1 text-[13px] font-inter text-gray-500 pl-7">{{ row.name }}</span>
          <div class="w-[80px] sm:w-[120px] flex justify-center">
            <span v-if="row.trialValue" class="text-[12px] font-inter font-medium text-gray-500">{{ row.trialValue }}</span>
            <div v-else class="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
              <svg class="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" /></svg>
            </div>
          </div>
          <div class="w-[80px] sm:w-[120px] flex justify-center">
            <span v-if="row.subValue" class="text-[12px] font-inter font-medium text-coral">{{ row.subValue }}</span>
            <div v-else class="w-5 h-5 rounded-full bg-coral/10 flex items-center justify-center">
              <svg class="w-3 h-3 text-coral" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" /></svg>
            </div>
          </div>
        </div>

        <!-- Group header: Support & Extras -->
        <div class="flex items-center gap-3 px-5 py-3.5 bg-[#f7f8f6]/60 border-t border-b border-gray-100">
          <svg class="w-4 h-4 text-coral" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>
          <span class="text-[12px] font-inter font-semibold text-gray-900 uppercase tracking-wider">Support & Extras</span>
        </div>
        <div v-for="(row, i) in supportFeatures" :key="'s'+i"
          class="flex items-center border-b border-gray-50 last:border-b-0 px-5 py-3">
          <span class="flex-1 text-[13px] font-inter text-gray-500 pl-7">{{ row.name }}</span>
          <div class="w-[80px] sm:w-[120px] flex justify-center">
            <div v-if="row.trial" class="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
              <svg class="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" /></svg>
            </div>
            <div v-else class="w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center">
              <svg class="w-2.5 h-2.5 text-gray-200" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
            </div>
          </div>
          <div class="w-[80px] sm:w-[120px] flex justify-center">
            <div class="w-5 h-5 rounded-full bg-coral/10 flex items-center justify-center">
              <svg class="w-3 h-3 text-coral" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const dataFeatures = computed(() => [
  t('pricing.comparison.features[0]'),
  t('pricing.comparison.features[1]'),
  t('pricing.comparison.features[2]'),
  t('pricing.comparison.features[3]'),
  t('pricing.comparison.features[4]'),
  t('pricing.comparison.features[5]'),
  t('pricing.comparison.features[6]'),
])

const reportFeatures = computed(() => [
  { name: t('pricing.pdfExport'), trialValue: t('pricing.included'), subValue: t('pricing.unlimited') },
  { name: t('pricing.reportsPerMonth'), trialValue: t('pricing.upTo15'), subValue: t('pricing.fifteenPerMonth') },
])

const supportFeatures = computed(() => [
  { name: t('pricing.prioritySupport'), trial: false },
  { name: t('pricing.cancelAnytime'), trial: true },
  { name: t('pricing.emailSupport'), trial: true },
])
</script>
