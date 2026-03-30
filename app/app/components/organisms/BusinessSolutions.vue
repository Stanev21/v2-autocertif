<template>
  <section class="py-16 sm:py-24 lg:py-36 bg-[#fafaf8] overflow-hidden">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
        <span class="text-[13px] font-medium font-inter text-coral uppercase tracking-wider mb-4 block">Solutions</span>
        <h2 class="text-[1.75rem] sm:text-[2.25rem] lg:text-[3.25rem] font-normal text-gray-900 leading-[1.08] font-heading mb-5">
          {{ $t('business.solutions.title') }}
        </h2>
        <p class="text-gray-500 text-[16px] leading-[1.7] font-inter">{{ $t('business.solutions.subtitle') }}</p>
      </div>

      <!-- Split layout: tabs left + content right -->
      <div class="grid lg:grid-cols-[320px,1fr] gap-6 lg:gap-10">
        <!-- Left: vertical tab list -->
        <div class="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
          <button
            v-for="(s, i) in solutions"
            :key="i"
            class="group relative flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-400 cursor-pointer shrink-0 lg:shrink"
            :class="active === i
              ? 'bg-[#0A1020] shadow-xl shadow-black/10'
              : 'bg-white hover:bg-gray-50 border border-gray-100 hover:border-gray-200'"
            @click="active = i"
          >
            <!-- Icon -->
            <div class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
              :class="active === i ? 'bg-coral/15' : 'bg-gray-100 group-hover:bg-gray-200/60'">
              <svg class="w-5 h-5 transition-colors duration-300"
                :class="active === i ? 'text-coral' : 'text-gray-400 group-hover:text-gray-500'"
                fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" :d="icons[i]" />
              </svg>
            </div>
            <!-- Label -->
            <div class="min-w-0">
              <span class="block text-[14px] font-inter font-semibold truncate transition-colors duration-300"
                :class="active === i ? 'text-white' : 'text-gray-900'">
                {{ s.title }}
              </span>
              <span class="hidden lg:block text-[12px] font-inter truncate mt-0.5 transition-colors duration-300"
                :class="active === i ? 'text-white/40' : 'text-gray-400'">
                {{ s.features[0] }}
              </span>
            </div>
            <!-- Active indicator -->
            <div v-if="active === i" class="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-[#0A1020] rotate-45 z-10"></div>
          </button>
        </div>

        <!-- Right: feature card -->
        <div class="relative">
          <div
            v-for="(s, i) in solutions"
            :key="i"
            class="transition-all duration-500"
            :class="active === i ? 'opacity-100 visible relative' : 'opacity-0 invisible absolute inset-0'"
          >
            <div class="bg-white rounded-[1.75rem] border border-gray-200/60 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500">
              <!-- Image header -->
              <div class="relative h-[240px] lg:h-[280px] overflow-hidden">
                <img :src="images[i]" :alt="s.title"
                  class="w-full h-full object-cover transition-transform duration-700"
                  :class="active === i ? 'scale-100' : 'scale-105'" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                <!-- Floating badge -->
                <div class="absolute bottom-5 left-6 flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" :d="icons[i]" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-white text-[1.25rem] font-heading font-normal leading-tight">{{ s.title }}</h3>
                    <span class="text-white/50 text-[12px] font-inter">{{ $t('business.solutions.subtitle') }}</span>
                  </div>
                </div>
              </div>

              <!-- Content -->
              <div class="p-7 lg:p-9">
                <p class="text-gray-500 text-[15px] leading-[1.75] font-inter mb-8">{{ s.desc }}</p>

                <!-- Features as horizontal pills -->
                <div class="flex flex-wrap gap-2.5 mb-8">
                  <div v-for="(feat, j) in s.features" :key="j"
                    class="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#fafaf8] border border-gray-100 transition-all duration-300 hover:border-coral/30 hover:bg-coral/[0.03]">
                    <svg class="w-3.5 h-3.5 text-coral shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-600 text-[13px] font-inter font-medium">{{ feat }}</span>
                  </div>
                </div>

                <!-- CTA -->
                <NuxtLink :to="localePath(i === 3 ? '/api' : '/contact')" class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gray-900 text-white text-[14px] font-medium font-inter hover:bg-gray-800 transition-all group">
                  {{ i === 3 ? $t('business.ctaSecondary') : $t('nav.contact') }}
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
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
