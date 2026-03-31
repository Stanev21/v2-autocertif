<template>
  <section class="bg-[#0A1020] py-16 sm:py-24 lg:py-28">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
      <div class="grid lg:grid-cols-[2fr,3fr] gap-12 lg:gap-20 items-start">
        <!-- LEFT: Sticky header -->
        <div class="lg:sticky lg:top-32">
          <h2 class="font-heading text-[1.75rem] lg:text-[2.25rem] font-normal text-white leading-[1.1] tracking-[-0.02em] mb-4">
            {{ $t('contact.faqTitle') }}
          </h2>
          <p class="text-white/40 text-[15px] font-inter leading-[1.7] mb-8">
            {{ $t('contact.faqSubtitle') }}
          </p>
          <NuxtLinkLocale to="/help-center" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/10 text-white text-[14px] font-inter font-medium hover:bg-white/20 transition-all">
            {{ $t('contact.faqCta') || 'Visit Help Center' }}
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </NuxtLinkLocale>
        </div>

        <!-- RIGHT: FAQ accordion -->
        <div class="space-y-3">
          <div
            v-for="(item, i) in faqItems"
            :key="i"
            class="rounded-2xl border overflow-hidden transition-all duration-300"
            :class="active === i ? 'bg-white/[0.06] border-coral/30' : 'bg-white/[0.04] border-white/[0.08] hover:border-white/[0.14]'"
          >
            <button
              class="w-full flex items-center justify-between px-6 sm:px-7 py-5 text-left cursor-pointer"
              @click="active = active === i ? -1 : i"
            >
              <span class="text-[15px] font-inter font-medium pr-4" :class="active === i ? 'text-white' : 'text-white/70'">
                {{ item.q }}
              </span>
              <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200"
                :class="active === i ? 'bg-coral/10' : 'bg-white/[0.06]'">
                <svg class="w-4 h-4 transition-transform duration-300"
                  :class="[active === i ? 'rotate-45 text-coral' : 'text-white/40']"
                  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
            </button>
            <div v-if="active === i" class="px-6 sm:px-7 pb-6">
              <p class="text-white/50 text-[14px] leading-[1.75] font-inter">{{ item.a }}</p>
            </div>
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
  const raw = tm('contact.faq')
  return Array.isArray(raw) ? raw.map((f: any) => ({ q: rt(f.q), a: rt(f.a) })) : []
})
</script>
