<template>
  <div>
    <OrganismsTheHeader />

    <!-- Split-screen layout: dark form left, light FAQ right -->
    <section class="min-h-[calc(100vh-80px)] bg-white">
      <div class="grid lg:grid-cols-[1fr,1fr] min-h-[calc(100vh-80px)]">

        <!-- LEFT: dark panel with form -->
        <div class="bg-burgundy px-4 sm:px-8 lg:px-16 py-16 sm:py-32 lg:py-40 flex items-start justify-center">
          <div class="w-full max-w-[420px]">
            <!-- Icon -->
            <div class="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-8">
              <svg class="w-6 h-6 text-coral" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
              </svg>
            </div>

            <h1 class="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-normal text-white leading-[1.08] mb-3 font-heading">
              {{ $t('unsubscribe.title') }}
            </h1>
            <p class="text-white/40 text-[15px] leading-[1.6] font-inter mb-10">
              {{ $t('unsubscribe.subtitle') }}
            </p>

            <!-- Form -->
            <form @submit.prevent class="space-y-5">
              <!-- Email -->
              <div>
                <label class="block text-[12px] font-inter font-semibold text-white/50 uppercase tracking-wider mb-2">{{ $t('unsubscribe.email') }}</label>
                <input
                  type="email"
                  :placeholder="$t('unsubscribe.emailPlaceholder')"
                  class="w-full bg-white/[0.06] border border-white/[0.1] rounded-xl px-4 py-3.5 text-[14px] font-inter text-white placeholder-white/25 outline-none focus:border-coral/50 focus:bg-white/[0.08] transition-all duration-200"
                />
              </div>

              <!-- Reason -->
              <div>
                <label class="block text-[12px] font-inter font-semibold text-white/50 uppercase tracking-wider mb-2">{{ $t('unsubscribe.reason') }}</label>
                <select
                  class="w-full bg-white/[0.06] border border-white/[0.1] rounded-xl px-4 py-3.5 text-[14px] font-inter text-white/60 outline-none focus:border-coral/50 focus:bg-white/[0.08] transition-all duration-200 appearance-none cursor-pointer"
                  style="background-image: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='2' stroke='rgba(255,255,255,0.3)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5'/%3E%3C/svg%3E&quot;); background-repeat: no-repeat; background-position: right 12px center; background-size: 18px;">
                  <option value="" disabled selected class="text-gray-400">{{ $t('unsubscribe.reasonPlaceholder') }}</option>
                  <option v-for="i in 6" :key="i" :value="i" class="text-gray-900">{{ $t(`unsubscribe.reasons[${i - 1}]`) }}</option>
                </select>
              </div>

              <!-- Submit -->
              <button type="submit" class="w-full py-3.5 rounded-xl bg-coral text-white text-[14px] font-medium font-inter hover:bg-coral-dark transition-colors duration-300 cursor-pointer mt-2">
                {{ $t('unsubscribe.cta') }}
              </button>
            </form>

            <!-- Note -->
            <div class="mt-6 flex items-start gap-2.5">
              <svg class="w-4 h-4 text-white/20 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
              <p class="text-white/25 text-[12px] font-inter leading-[1.6]">
                {{ $t('unsubscribe.note') }}
              </p>
            </div>
          </div>
        </div>

        <!-- RIGHT: light panel with FAQ + help -->
        <div class="px-4 sm:px-8 lg:px-16 py-12 sm:py-20 lg:py-40 flex items-start justify-center bg-[#f7f8f6]">
          <div class="w-full max-w-[420px]">
            <h2 class="text-[1.5rem] font-normal text-gray-900 leading-[1.08] mb-8 font-heading">
              {{ $t('unsubscribe.faq.title') }}
            </h2>

            <!-- FAQ accordion -->
            <div class="space-y-2 mb-14">
              <div v-for="(item, i) in faqItems" :key="i"
                class="rounded-xl border overflow-hidden transition-all duration-200"
                :class="faqOpen === i ? 'border-gray-200 bg-white' : 'border-gray-100 hover:border-gray-200'">
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

            <!-- Help CTA card -->
            <div class="relative bg-[#eff6ff] rounded-2xl p-5 sm:p-7 overflow-hidden">
              <!-- CS notched corner -->
              <div class="absolute z-10 pointer-events-none bottom-0 right-0 bg-[#f7f8f6]" style="border-radius: 12px 0 0 0; height: 2rem; min-width: 20%;">
                <div class="absolute" style="height: 12px; width: 12px; transform: rotate(-90deg); right: 0; bottom: 100%; color: #f7f8f6;">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none"><path d="M0 0V100H100C44.8 100 0 55.2 0 0Z" fill="currentColor"/></svg>
                </div>
                <div class="absolute" style="height: 12px; width: 12px; transform: rotate(-90deg); right: 100%; bottom: 0; color: #f7f8f6;">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none"><path d="M0 0V100H100C44.8 100 0 55.2 0 0Z" fill="currentColor"/></svg>
                </div>
              </div>

              <div class="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center mb-4">
                <svg class="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
              </div>
              <h3 class="text-[16px] font-medium font-inter text-gray-900 mb-2">{{ $t('unsubscribe.help.title') }}</h3>
              <p class="text-gray-500 text-[13px] font-inter leading-[1.6] mb-5">{{ $t('unsubscribe.help.desc') }}</p>
              <a href="#" class="inline-flex items-center gap-2 text-gray-900 text-[13px] font-medium font-inter group">
                <span class="underline underline-offset-4 decoration-1 group-hover:decoration-2 transition-all">{{ $t('unsubscribe.help.cta') }}</span>
                <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <OrganismsTheFooter />
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Autocertif — Cancel Subscription' })
const { t } = useI18n()
const faqOpen = ref(0)

const faqItems = computed(() => [0, 1, 2, 3].map(i => ({
  q: t(`unsubscribe.faq.items[${i}].q`),
  a: t(`unsubscribe.faq.items[${i}].a`),
})))
</script>
