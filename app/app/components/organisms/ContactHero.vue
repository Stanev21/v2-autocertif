<template>
  <section class="bg-white pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
      <!-- Centered header -->
      <div class="text-center mb-14 sm:mb-18 lg:mb-20">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 mb-6">
          <div class="w-2 h-2 rounded-full bg-coral animate-pulse"></div>
          <span class="text-gray-500 text-[13px] font-inter font-medium tracking-wide">{{ $t('contact.badge') }}</span>
        </div>

        <h1 class="font-heading text-[2rem] sm:text-[2.75rem] lg:text-[3.5rem] font-normal text-gray-900 leading-[1.08] tracking-[-0.02em] mb-4">
          {{ $t('contact.title') }}
        </h1>

        <p class="text-gray-400 text-[1rem] lg:text-[1.1rem] leading-[1.7] font-inter max-w-xl mx-auto">
          {{ $t('contact.subtitle') }}
        </p>
      </div>

      <!-- Two-column grid -->
      <div class="grid lg:grid-cols-[1fr,1.2fr] gap-10 lg:gap-16 items-start">
        <!-- LEFT: Info cards -->
        <div>
          <div class="space-y-4 mb-8">
            <div
              v-for="(info, i) in infoCards"
              :key="i"
              class="rounded-2xl bg-[#f7f8f6] p-6 sm:p-8"
            >
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" :d="info.icon" />
                  </svg>
                </div>
                <div>
                  <p class="text-gray-400 text-[11px] font-inter uppercase tracking-wider mb-1.5">{{ info.label }}</p>
                  <p class="text-gray-900 text-[15px] font-inter font-medium leading-snug">{{ info.value }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Trust row -->
          <div class="rounded-2xl bg-[#f7f8f6] p-6 sm:p-8">
            <p class="text-gray-400 text-[11px] font-inter uppercase tracking-wider mb-4">{{ $t('contact.trustedLabel') || 'Trusted by businesses worldwide' }}</p>
            <div class="flex flex-wrap gap-3">
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100">
                <span class="text-coral font-heading font-semibold text-[15px]">100K+</span>
                <span class="text-gray-400 text-[13px] font-inter">{{ $t('contact.statUsers') || 'Users' }}</span>
              </div>
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100">
                <span class="text-coral font-heading font-semibold text-[15px]">24h</span>
                <span class="text-gray-400 text-[13px] font-inter">{{ $t('contact.statResponse') || 'Avg response' }}</span>
              </div>
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100">
                <span class="text-coral font-heading font-semibold text-[15px]">4.9/5</span>
                <span class="text-gray-400 text-[13px] font-inter">{{ $t('contact.statRating') || 'Rating' }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT: Contact form -->
        <div class="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 lg:p-10 shadow-sm">
          <h2 class="font-heading text-[1.25rem] text-gray-900 font-normal mb-6">
            {{ $t('contact.formTitle') }}
          </h2>

          <form class="space-y-5" @submit.prevent>
            <!-- Name -->
            <div>
              <label class="block text-[12px] font-inter font-medium text-gray-500 uppercase tracking-wider mb-2">{{ $t('contact.fieldName') }}</label>
              <input type="text" class="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white text-[14px] font-inter text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/10 transition-all" />
            </div>

            <!-- Email -->
            <div>
              <label class="block text-[12px] font-inter font-medium text-gray-500 uppercase tracking-wider mb-2">{{ $t('contact.fieldEmail') }}</label>
              <input type="email" class="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white text-[14px] font-inter text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/10 transition-all" />
            </div>

            <!-- Subject -->
            <div>
              <label class="block text-[12px] font-inter font-medium text-gray-500 uppercase tracking-wider mb-2">{{ $t('contact.fieldSubject') }}</label>
              <select class="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white text-[14px] font-inter text-gray-900 focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/10 transition-all appearance-none cursor-pointer">
                <option value="" disabled selected>{{ $t('contact.subjectPlaceholder') }}</option>
                <option v-for="(sub, i) in subjects" :key="i" :value="sub">{{ sub }}</option>
              </select>
            </div>

            <!-- Message -->
            <div>
              <label class="block text-[12px] font-inter font-medium text-gray-500 uppercase tracking-wider mb-2">{{ $t('contact.fieldMessage') }}</label>
              <textarea rows="5" class="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white text-[14px] font-inter text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/10 transition-all resize-none"></textarea>
            </div>

            <!-- Submit -->
            <button type="submit" class="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-coral text-white text-[14px] font-semibold font-inter hover:bg-coral/90 transition-all cursor-pointer">
              {{ $t('contact.send') }}
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n()

const subjects = computed(() => {
  const raw = tm('contact.subjects')
  return Array.isArray(raw) ? raw.map((s: any) => typeof s === 'string' ? s : rt(s)) : []
})

const infoCards = computed(() => [
  {
    label: t('contact.officeLabel'),
    value: t('contact.office'),
    icon: 'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21',
  },
  {
    label: t('contact.hoursLabel'),
    value: t('contact.hours'),
    icon: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  },
  {
    label: t('contact.responseLabel'),
    value: t('contact.response'),
    icon: 'M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z',
  },
])
</script>
