<template>
  <section class="py-24 lg:py-32 bg-white">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12">
      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
        <span class="text-[13px] font-medium font-inter text-coral uppercase tracking-wider mb-4 block">Endpoints</span>
        <h2 class="text-[2.25rem] lg:text-[3rem] font-normal text-gray-900 leading-[1.08] font-heading">
          {{ $t('api.endpointsTitle') }}
        </h2>
      </div>

      <!-- Endpoint cards -->
      <div class="space-y-4">
        <div
          v-for="(ep, i) in endpoints"
          :key="i"
          class="group rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer"
          :class="active === i ? 'border-gray-200 bg-[#fafaf8] shadow-sm' : 'border-gray-100 bg-white hover:border-gray-200'"
          @click="active = active === i ? -1 : i"
        >
          <!-- Header row -->
          <div class="flex items-center justify-between px-7 py-5">
            <div class="flex items-center gap-4">
              <!-- Method badge -->
              <span class="inline-flex px-3 py-1 rounded-lg text-[12px] font-mono font-bold tracking-wide"
                :class="ep.method === 'POST' ? 'bg-blue-500/10 text-blue-600' : 'bg-green-500/10 text-green-600'">
                {{ ep.method }}
              </span>
              <!-- Path -->
              <code class="text-[14px] font-mono text-gray-900 font-medium">{{ ep.path }}</code>
            </div>

            <div class="flex items-center gap-4">
              <span class="hidden md:inline text-gray-400 text-[13px] font-inter">{{ ep.desc }}</span>
              <svg class="w-5 h-5 text-gray-300 transition-transform duration-300 shrink-0"
                :class="active === i ? 'rotate-45' : ''"
                fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </div>

          <!-- Expanded -->
          <div v-if="active === i" class="px-7 pb-7 border-t border-gray-100">
            <div class="pt-5">
              <p class="text-gray-500 text-[14px] font-inter leading-[1.7] mb-5">{{ ep.desc }}</p>
              <!-- Example code -->
              <div class="rounded-xl bg-[#0a0a0a] p-5 font-mono text-[12px] leading-[1.8] overflow-x-auto">
                <p class="text-white/30"># Example request</p>
                <p>
                  <span class="text-green-400">curl</span>
                  <span class="text-blue-300"> -X {{ ep.method }}</span>
                  <span class="text-yellow-300"> {{ $t('api.baseUrl') }}{{ ep.path.replace('{vin}', 'WVWZZZ3CZWE123456').replace('{id}', 'rpt_abc123') }}</span>
                  <span class="text-white/50"> \</span>
                </p>
                <p class="pl-4"><span class="text-blue-300">-H</span> <span class="text-orange-300">"Authorization: Bearer YOUR_API_KEY"</span></p>
              </div>
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

const endpoints = computed(() => {
  const raw = tm('api.endpoints')
  return Array.isArray(raw) ? raw.map((ep: any) => ({
    method: rt(ep.method),
    path: rt(ep.path),
    desc: rt(ep.desc),
  })) : []
})
</script>
