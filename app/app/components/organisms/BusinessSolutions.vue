<template>
  <!-- CS Accordion Pattern: white bg, left heading + right accordion with expandable items, progressive disclosure -->
  <section class="py-24 lg:py-32 bg-white">
    <div class="max-w-[1280px] mx-auto px-6 lg:px-12">
      <!-- Header -->
      <div class="max-w-xl mb-14">
        <span class="inline-block px-3 py-1 rounded-md bg-[#d3ffb6] text-[11px] font-inter font-semibold text-gray-900 uppercase tracking-wider mb-5">Solutions</span>
        <h2 class="text-[2rem] lg:text-[2.5rem] font-normal text-gray-900 leading-[1.08] font-heading mb-4">
          {{ $t('business.solutions.title') }}
        </h2>
        <p class="text-gray-500 text-[15px] leading-[1.7] font-inter">{{ $t('business.solutions.subtitle') }}</p>
      </div>

      <!-- Accordion list -->
      <div class="space-y-3">
        <div v-for="(s, i) in solutions" :key="i"
          class="border rounded-2xl overflow-hidden transition-all duration-300"
          :class="active === i ? 'border-gray-200 bg-[#f7f8f6]' : 'border-gray-100 bg-white hover:border-gray-200'">
          <!-- Accordion header -->
          <button class="w-full flex items-center justify-between px-7 py-5 cursor-pointer" @click="active = active === i ? -1 : i">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200"
                :class="active === i ? 'bg-coral/10' : 'bg-gray-100'">
                <svg class="w-5 h-5 transition-colors duration-200" :class="active === i ? 'text-coral' : 'text-gray-400'" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="icons[i]" />
                </svg>
              </div>
              <span class="text-[15px] font-inter font-medium" :class="active === i ? 'text-gray-900' : 'text-gray-600'">{{ s.title }}</span>
            </div>
            <svg class="w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0" :class="active === i ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          <!-- Expanded content -->
          <div v-if="active === i" class="px-7 pb-7">
            <div class="grid lg:grid-cols-[1fr,auto] gap-8 pt-2">
              <!-- Left: description + features + CTA -->
              <div>
                <p class="text-gray-500 text-[15px] leading-[1.7] font-inter mb-6">{{ s.desc }}</p>
                <!-- Feature grid -->
                <div class="grid grid-cols-2 gap-3 mb-6">
                  <div v-for="(feat, j) in s.features" :key="j"
                    class="flex items-start gap-2.5 bg-white rounded-xl px-4 py-3.5 border border-gray-100">
                    <svg class="w-4 h-4 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-600 text-[13px] font-inter leading-snug">{{ feat }}</span>
                  </div>
                </div>
                <a href="#" class="inline-flex items-center gap-2 text-gray-900 text-[14px] font-medium font-inter group">
                  <span class="underline underline-offset-4 decoration-1 group-hover:decoration-2 transition-all">{{ $t('business.cta') }}</span>
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </a>
              </div>
              <!-- Right: contextual image -->
              <div class="hidden lg:block w-[280px] flex-shrink-0">
                <img :src="images[i]" :alt="s.title" class="w-full h-[200px] object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const active = ref(0)

const images = [
  '/images/business/dealerships.jpg',
  '/images/business/insurance.jpg',
  '/images/business/leasing.jpg',
  '/images/business/api.jpg',
  '/images/business/partner.jpg',
  '/images/business/marketplace.jpg',
]

const icons = [
  'M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12',
  'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',
  'M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z',
  'M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5',
  'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z',
  'M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z',
]

const solutions = computed(() => {
  return [0, 1, 2, 3, 4, 5].map(i => ({
    title: t(`business.solutions.items[${i}].title`),
    desc: t(`business.solutions.items[${i}].desc`),
    features: [0, 1, 2, 3].map(j => t(`business.solutions.items[${i}].features[${j}]`)),
  }))
})
</script>
