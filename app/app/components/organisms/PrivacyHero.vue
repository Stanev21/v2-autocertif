<template>
  <section class="bg-white pt-32 lg:pt-40 pb-12 lg:pb-16 border-b border-gray-100">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12">
      <div class="max-w-3xl">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center">
            <svg class="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
          </div>
          <span class="text-coral text-[13px] font-inter font-semibold uppercase tracking-wider">{{ $t('privacy.badge') }}</span>
        </div>

        <h1 class="text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-normal text-gray-900 leading-[1.02] font-heading tracking-[-0.03em] mb-5">
          {{ $t('privacy.title') }}
        </h1>
        <p class="text-gray-400 text-[1.1rem] lg:text-[1.2rem] leading-[1.6] font-inter mb-6">
          {{ $t('privacy.subtitle') }}
        </p>

        <div class="flex items-center gap-4 flex-wrap">
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-500 text-[12px] font-inter font-medium">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>
            {{ $t('privacy.effective') }}
          </span>
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-500 text-[12px] font-inter font-medium">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" /></svg>
            LADEV LTD.
          </span>
        </div>
      </div>

      <!-- Trust badges row -->
      <div class="mt-12 flex items-center gap-3 flex-wrap">
        <div v-for="(item, i) in trustItems" :key="i"
          class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#f0fdf4] border border-green-200/60">
          <svg class="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" />
          </svg>
          <span class="text-green-700 text-[12px] font-inter font-medium">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const trustItems = computed(() => {
  const raw = tm('privacy.trustItems')
  return Array.isArray(raw) ? raw.map((i: any) => typeof i === 'string' ? i : rt(i)) : []
})
</script>
