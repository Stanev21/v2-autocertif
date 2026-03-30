<template>
  <!-- Contentsquare-inspired product accordion section -->
  <section class="py-16 sm:py-24 lg:py-32 bg-white">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
      <!-- Header -->
      <div class="max-w-2xl mb-16">
        <span class="text-[13px] font-medium font-inter text-coral uppercase tracking-wider mb-4 block">{{ $t('affiliate.termsTitle') }}</span>
        <h2 class="text-[1.75rem] sm:text-[2.25rem] lg:text-[3rem] font-normal text-gray-900 leading-[1.08] font-heading">
          {{ $t('affiliate.compensationTitle') }}
        </h2>
        <p class="text-gray-400 text-[15px] leading-[1.7] font-inter mt-4">{{ $t('affiliate.compensationDesc') }}</p>
      </div>

      <!-- Accordion terms -->
      <div class="space-y-3">
        <div
          v-for="(term, i) in terms"
          :key="i"
          class="group border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
          :class="active === i ? 'border-gray-200 shadow-sm' : 'border-gray-100 hover:border-gray-200'"
          @click="active = active === i ? -1 : i"
        >
          <!-- Header -->
          <div class="flex items-center justify-between px-7 py-5">
            <div class="flex items-center gap-5">
              <span class="text-coral text-[14px] font-heading font-normal w-8">0{{ i + 1 }}</span>
              <span class="text-[15px] font-inter font-semibold" :class="active === i ? 'text-gray-900' : 'text-gray-600'">
                {{ term.title }}
              </span>
            </div>
            <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200"
              :class="active === i ? 'bg-coral/10' : 'bg-gray-50'">
              <svg class="w-4 h-4 transition-transform duration-300"
                :class="active === i ? 'rotate-45 text-coral' : 'text-gray-400'"
                fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </div>

          <!-- Expanded -->
          <div v-if="active === i" class="px-7 pb-6">
            <div class="pl-13 lg:pl-[52px]">
              <p class="text-gray-500 text-[14px] leading-[1.75] font-inter max-w-2xl">{{ term.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const active = ref(0)

const terms = computed(() => {
  const raw = tm('affiliate.terms')
  return Array.isArray(raw) ? raw.map((t: any) => ({ title: rt(t.title), desc: rt(t.desc) })) : []
})
</script>
