<template>
  <div>
    <OrganismsTheHeader />

    <!-- Section 1 — Hero + Form -->
    <section class="bg-white pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20">
      <div class="max-w-[640px] mx-auto px-4 sm:px-6">
        <!-- Icon -->
        <div class="w-16 h-16 rounded-2xl bg-coral/10 flex items-center justify-center mx-auto mb-6">
          <svg class="w-7 h-7 text-coral" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
          </svg>
        </div>

        <!-- Heading -->
        <h1 class="font-heading text-[1.75rem] sm:text-[2.25rem] text-gray-900 text-center mb-3">
          {{ $t('unsubscribe.title') }}
        </h1>

        <!-- Subtitle -->
        <p class="text-gray-400 text-[15px] font-inter text-center max-w-md mx-auto mb-10">
          {{ $t('unsubscribe.subtitle') }}
        </p>

        <!-- Form card -->
        <div class="bg-[#f7f8f6] rounded-2xl p-6 sm:p-8">
          <form @submit.prevent class="space-y-5">
            <!-- Email -->
            <div>
              <label class="block text-[11px] font-inter font-semibold text-gray-500 uppercase tracking-wider mb-2">{{ $t('unsubscribe.email') }}</label>
              <input
                type="email"
                :placeholder="$t('unsubscribe.emailPlaceholder')"
                class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-[14px] font-inter text-gray-900 placeholder-gray-300 outline-none focus:border-coral/50 focus:ring-1 focus:ring-coral/20 transition-all duration-200"
              />
            </div>

            <!-- Reason -->
            <div>
              <label class="block text-[11px] font-inter font-semibold text-gray-500 uppercase tracking-wider mb-2">{{ $t('unsubscribe.reason') }}</label>
              <div class="relative">
                <select
                  class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-[14px] font-inter text-gray-500 outline-none focus:border-coral/50 focus:ring-1 focus:ring-coral/20 transition-all duration-200 appearance-none cursor-pointer pr-10"
                >
                  <option value="" disabled selected>{{ $t('unsubscribe.reasonPlaceholder') }}</option>
                  <option v-for="i in 6" :key="i" :value="i" class="text-gray-900">{{ $t(`unsubscribe.reasons[${i - 1}]`) }}</option>
                </select>
                <svg class="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>

            <!-- Submit -->
            <button type="submit" class="w-full py-3.5 rounded-xl bg-coral text-white text-[14px] font-medium font-inter hover:bg-coral-dark transition-colors duration-300 cursor-pointer mt-2">
              {{ $t('unsubscribe.cta') }}
            </button>
          </form>

          <!-- Note -->
          <div class="mt-6 flex items-start gap-2.5">
            <svg class="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            <p class="text-gray-400 text-[12px] font-inter leading-[1.6]">
              {{ $t('unsubscribe.note') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2 — FAQ -->
    <section class="bg-[#f7f8f6] py-16 sm:py-20">
      <div class="max-w-[640px] mx-auto px-4 sm:px-6">
        <h2 class="font-heading text-[1.5rem] text-gray-900 mb-8">
          {{ $t('unsubscribe.faq.title') }}
        </h2>

        <!-- FAQ accordion -->
        <div class="space-y-2">
          <div
            v-for="(item, i) in faqItems"
            :key="i"
            class="bg-white rounded-xl border overflow-hidden transition-all duration-200"
            :class="faqOpen === i ? 'border-gray-200' : 'border-gray-100 hover:border-gray-200'"
          >
            <button class="w-full flex items-center justify-between px-5 py-4 cursor-pointer text-left" @click="faqOpen = faqOpen === i ? -1 : i">
              <span class="text-[14px] font-inter font-medium pr-3" :class="faqOpen === i ? 'text-gray-900' : 'text-gray-600'">{{ item.q }}</span>
              <svg class="w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-300" :class="faqOpen === i ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div v-if="faqOpen === i" class="px-5 pb-4">
              <p class="text-gray-400 text-[13px] leading-[1.7] font-inter">{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3 — Help CTA -->
    <section class="bg-[#0A1020] py-14 sm:py-20">
      <div class="max-w-[640px] mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-white font-heading text-[1.5rem] mb-3">
          {{ $t('unsubscribe.help.title') }}
        </h2>
        <p class="text-white/40 text-[14px] font-inter mb-8">
          {{ $t('unsubscribe.help.desc') }}
        </p>
        <div class="flex flex-col items-center gap-4">
          <NuxtLink :to="localePath('/contact')" class="inline-block rounded-full bg-coral text-white px-7 py-3.5 text-[14px] font-medium font-inter hover:bg-coral-dark transition-colors duration-300">
            {{ $t('unsubscribe.help.cta') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/help-center')" class="text-white/50 underline text-[13px] font-inter hover:text-white/70 transition-colors duration-200">
            {{ $t('unsubscribe.help.helpCenter') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <OrganismsTheFooter />
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Autocertif - Cancel Subscription' })
const localePath = useLocalePath()
const { t, tm, rt } = useI18n()
const faqOpen = ref(0)

const faqItems = computed(() => {
  const items = tm('unsubscribe.faq.items')
  return Array.isArray(items)
    ? items.map((item: any) => ({
        q: rt(item.q),
        a: rt(item.a),
      }))
    : []
})
</script>
