<template>
  <!-- FAQ accordion, white bg -->
  <section class="py-20 lg:py-24 bg-white">
    <div class="max-w-[800px] mx-auto px-6 lg:px-12">
      <div class="text-center mb-12">
        <h2 class="text-[1.75rem] lg:text-[2rem] font-normal text-gray-900 leading-[1.08] font-heading">
          {{ $t('pricing.faq.title') }}
        </h2>
      </div>

      <div class="space-y-2">
        <div v-for="(item, i) in faqItems" :key="i"
          class="rounded-xl border overflow-hidden transition-all duration-200"
          :class="open === i ? 'border-gray-200 bg-[#f7f8f6]' : 'border-gray-100 hover:border-gray-200'">
          <button class="w-full flex items-center justify-between px-6 py-5 cursor-pointer text-left" @click="open = open === i ? -1 : i">
            <span class="text-[14px] font-inter font-medium pr-4" :class="open === i ? 'text-gray-900' : 'text-gray-600'">{{ item.q }}</span>
            <svg class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300" :class="open === i ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <div v-if="open === i" class="px-6 pb-5">
            <p class="text-gray-400 text-[13px] leading-[1.7] font-inter">{{ item.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const open = ref(0)

const faqItems = computed(() => [0, 1, 2, 3].map(i => ({
  q: t(`pricing.faq.items[${i}].q`),
  a: t(`pricing.faq.items[${i}].a`),
})))
</script>
