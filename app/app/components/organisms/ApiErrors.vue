<template>
  <section class="py-24 lg:py-32 bg-white">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12">
      <div class="grid lg:grid-cols-[1fr,1fr] gap-16">
        <!-- Left: error codes -->
        <div>
          <span class="text-[13px] font-medium font-inter text-coral uppercase tracking-wider mb-4 block">Reference</span>
          <h2 class="text-[2rem] lg:text-[2.5rem] font-normal text-gray-900 leading-[1.08] font-heading mb-10">
            {{ $t('api.errorsTitle') }}
          </h2>

          <div class="space-y-3">
            <div
              v-for="(err, i) in errors"
              :key="i"
              class="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-[#fafaf8] hover:border-gray-200 transition-colors"
            >
              <span class="inline-flex items-center justify-center w-12 h-8 rounded-lg text-[13px] font-mono font-bold shrink-0"
                :class="codeColor(err.code)">
                {{ err.code }}
              </span>
              <div class="min-w-0">
                <p class="text-gray-900 text-[14px] font-inter font-semibold mb-0.5">{{ err.name }}</p>
                <p class="text-gray-500 text-[13px] font-inter leading-snug">{{ err.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: rate limiting -->
        <div>
          <span class="text-[13px] font-medium font-inter text-coral uppercase tracking-wider mb-4 block">Limits</span>
          <h2 class="text-[2rem] lg:text-[2.5rem] font-normal text-gray-900 leading-[1.08] font-heading mb-10">
            {{ $t('api.rateLimitTitle') }}
          </h2>

          <div class="space-y-4">
            <div
              v-for="(limit, i) in rateLimits"
              :key="i"
              class="relative p-7 rounded-2xl bg-[#0A1020] overflow-hidden"
            >
              <div class="absolute top-0 right-0 w-[150px] h-[150px] rounded-full opacity-10 blur-[60px]"
                style="background: radial-gradient(circle, #3b82f6, transparent 70%);"></div>
              <div class="relative z-10">
                <p class="text-white/40 text-[12px] font-inter uppercase tracking-wider mb-2">{{ limit.label }}</p>
                <p class="text-white text-[2rem] font-heading font-normal leading-none">{{ limit.value }}</p>
              </div>
            </div>
          </div>

          <!-- Extra info -->
          <div class="mt-6 p-5 rounded-xl border border-blue-100 bg-blue-50/50">
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
              <p class="text-blue-700 text-[13px] font-inter leading-snug">Rate limit headers are included in every response: <code class="text-[12px] bg-blue-100 px-1.5 py-0.5 rounded">X-RateLimit-Remaining</code> and <code class="text-[12px] bg-blue-100 px-1.5 py-0.5 rounded">X-RateLimit-Reset</code>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()

const errors = computed(() => {
  const raw = tm('api.errors')
  return Array.isArray(raw) ? raw.map((e: any) => ({
    code: rt(e.code),
    name: rt(e.name),
    desc: rt(e.desc),
  })) : []
})

const rateLimits = computed(() => {
  const raw = tm('api.rateLimits')
  return Array.isArray(raw) ? raw.map((r: any) => ({
    label: rt(r.label),
    value: rt(r.value),
  })) : []
})

const codeColor = (code: string) => {
  if (code.startsWith('4')) return 'bg-amber-100 text-amber-700'
  if (code.startsWith('5')) return 'bg-red-100 text-red-700'
  return 'bg-gray-100 text-gray-600'
}
</script>
