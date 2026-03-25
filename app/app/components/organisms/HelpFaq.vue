<template>
  <section class="py-20 lg:py-28 bg-white">
    <div class="max-w-[800px] mx-auto px-8 lg:px-12">
      <div class="text-center mb-14">
        <h2 class="text-[2rem] lg:text-[2.5rem] font-heading font-normal text-gray-900 leading-[1.08]">
          {{ $t('help.faqTitle') }}
        </h2>
      </div>

      <div class="space-y-3">
        <div
          v-for="(item, i) in faqItems"
          :key="i"
          class="border rounded-2xl overflow-hidden transition-all duration-300"
          :class="active === i ? 'border-gray-200 bg-[#fafaf8]' : 'border-gray-100 hover:border-gray-200'"
        >
          <button
            class="w-full flex items-center justify-between px-7 py-5 text-left cursor-pointer"
            @click="active = active === i ? -1 : i"
          >
            <span class="text-[15px] font-inter font-medium pr-4" :class="active === i ? 'text-gray-900' : 'text-gray-600'">
              {{ item.q }}
            </span>
            <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200"
              :class="active === i ? 'bg-coral/10' : 'bg-gray-100'">
              <svg class="w-4 h-4 transition-transform duration-300"
                :class="[active === i ? 'rotate-45 text-coral' : 'text-gray-400']"
                fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </button>

          <div v-if="active === i" class="px-7 pb-6">
            <p class="text-gray-500 text-[14px] leading-[1.75] font-inter">{{ item.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const active = ref(-1)

const faqItems = computed(() => {
  const raw = tm('help.faq')
  return Array.isArray(raw) ? raw.map((f: any) => ({ q: rt(f.q), a: rt(f.a) })) : []
})
</script>
