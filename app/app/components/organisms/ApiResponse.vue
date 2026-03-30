<template>
  <section class="py-16 sm:py-24 lg:py-32 bg-[#fafaf8]">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <!-- Left: schema table -->
        <div>
          <span class="text-[13px] font-medium font-inter text-coral uppercase tracking-wider mb-4 block">Schema</span>
          <h2 class="text-[2rem] lg:text-[2.5rem] font-normal text-gray-900 leading-[1.08] font-heading mb-4">
            {{ $t('api.responseTitle') }}
          </h2>
          <p class="text-gray-500 text-[15px] leading-[1.7] font-inter mb-10">{{ $t('api.responseDesc') }}</p>

          <!-- Fields -->
          <div class="space-y-0">
            <div
              v-for="(f, i) in fields"
              :key="i"
              class="flex items-start gap-4 py-4 border-b border-gray-200/60 group"
            >
              <code class="text-[13px] font-mono font-semibold text-gray-900 min-w-[120px] pt-0.5">{{ f.field }}</code>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-500 shrink-0">{{ f.type }}</span>
              <span class="text-gray-500 text-[13px] font-inter leading-snug flex-1">{{ f.desc }}</span>
            </div>
          </div>
        </div>

        <!-- Right: JSON preview -->
        <div class="lg:sticky lg:top-28">
          <div class="rounded-2xl bg-[#0A1020] border border-white/[0.06] overflow-hidden shadow-xl">
            <div class="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06]">
              <div class="w-3 h-3 rounded-full bg-red-500/60"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/60"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/60"></div>
              <span class="ml-3 text-white/30 text-[12px] font-mono">response.json</span>
            </div>
            <div class="p-6 font-mono text-[12px] leading-[1.9] overflow-x-auto">
              <p><span class="text-white/40">{</span></p>
              <p class="pl-4"><span class="text-blue-300">"status"</span><span class="text-white/40">:</span> <span class="text-green-400">"completed"</span><span class="text-white/40">,</span></p>
              <p class="pl-4"><span class="text-blue-300">"report"</span><span class="text-white/40">: {</span></p>
              <p class="pl-8"><span class="text-blue-300">"vin"</span><span class="text-white/40">:</span> <span class="text-green-400">"WVWZZZ3CZWE123456"</span><span class="text-white/40">,</span></p>
              <p class="pl-8"><span class="text-blue-300">"make"</span><span class="text-white/40">:</span> <span class="text-green-400">"Volkswagen"</span><span class="text-white/40">,</span></p>
              <p class="pl-8"><span class="text-blue-300">"model"</span><span class="text-white/40">:</span> <span class="text-green-400">"Golf"</span><span class="text-white/40">,</span></p>
              <p class="pl-8"><span class="text-blue-300">"year"</span><span class="text-white/40">:</span> <span class="text-purple-400">2019</span><span class="text-white/40">,</span></p>
              <p class="pl-8"><span class="text-blue-300">"mileage"</span><span class="text-white/40">: {</span></p>
              <p class="pl-12"><span class="text-blue-300">"value"</span><span class="text-white/40">:</span> <span class="text-purple-400">42380</span><span class="text-white/40">,</span></p>
              <p class="pl-12"><span class="text-blue-300">"unit"</span><span class="text-white/40">:</span> <span class="text-green-400">"km"</span><span class="text-white/40">,</span></p>
              <p class="pl-12"><span class="text-blue-300">"verified"</span><span class="text-white/40">:</span> <span class="text-orange-400">true</span></p>
              <p class="pl-8"><span class="text-white/40">},</span></p>
              <p class="pl-8"><span class="text-blue-300">"accidents"</span><span class="text-white/40">: [],</span></p>
              <p class="pl-8"><span class="text-blue-300">"theft_records"</span><span class="text-white/40">: [],</span></p>
              <p class="pl-8"><span class="text-blue-300">"title_status"</span><span class="text-white/40">:</span> <span class="text-green-400">"clean"</span><span class="text-white/40">,</span></p>
              <p class="pl-8"><span class="text-blue-300">"owners_count"</span><span class="text-white/40">:</span> <span class="text-purple-400">2</span></p>
              <p class="pl-4"><span class="text-white/40">}</span></p>
              <p><span class="text-white/40">}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()

const fields = computed(() => {
  const raw = tm('api.responseFields')
  return Array.isArray(raw) ? raw.map((f: any) => ({
    field: rt(f.field),
    type: rt(f.type),
    desc: rt(f.desc),
  })) : []
})
</script>
