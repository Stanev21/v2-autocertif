<template>
  <section class="min-h-screen pt-20 lg:pt-0">
    <div class="grid lg:grid-cols-2 min-h-screen">
      <!-- Left: dark info panel -->
      <div class="relative bg-[#0a0a0a] overflow-hidden flex items-center">
        <!-- Orbs -->
        <div class="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full opacity-[0.12] blur-[120px]" style="background: radial-gradient(circle, #CD3246 0%, transparent 70%);"></div>
        <div class="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full opacity-[0.06] blur-[80px]" style="background: radial-gradient(circle, #6d28d9 0%, transparent 70%);"></div>
        <!-- Grid -->
        <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 60px 60px;"></div>

        <div class="relative z-10 p-10 lg:p-16 xl:p-20 w-full">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] mb-8">
            <div class="w-2 h-2 rounded-full bg-coral animate-pulse"></div>
            <span class="text-white/60 text-[13px] font-inter font-medium tracking-wide">{{ $t('contact.badge') }}</span>
          </div>

          <h1 class="text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem] font-normal text-white leading-[1.05] mb-6 font-heading tracking-[-0.02em]">
            {{ $t('contact.title') }}
          </h1>

          <p class="text-white/40 text-[1rem] lg:text-[1.1rem] leading-[1.7] font-inter max-w-md mb-14">
            {{ $t('contact.subtitle') }}
          </p>

          <!-- Info cards -->
          <div class="space-y-4">
            <div v-for="(info, i) in infoCards" :key="i"
              class="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div class="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center shrink-0">
                <svg class="w-4.5 h-4.5 text-coral" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="info.icon" />
                </svg>
              </div>
              <div>
                <p class="text-white/30 text-[11px] font-inter uppercase tracking-wider mb-1">{{ info.label }}</p>
                <p class="text-white/70 text-[13px] font-inter leading-snug">{{ info.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: form panel -->
      <div class="bg-[#fafaf8] flex items-center">
        <div class="w-full p-10 lg:p-16 xl:p-20 max-w-xl mx-auto lg:mx-0">
          <h2 class="text-[1.5rem] lg:text-[1.75rem] font-heading font-normal text-gray-900 mb-8">
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
            <button type="submit" class="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gray-900 text-white text-[14px] font-semibold font-inter hover:bg-gray-800 transition-all cursor-pointer">
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
