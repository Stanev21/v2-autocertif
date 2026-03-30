<template>
  <section class="relative min-h-[80vh] flex items-center overflow-hidden bg-[#0A1020]">
    <!-- Grid pattern -->
    <div class="absolute inset-0 opacity-[0.04]" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 60px 60px;"></div>

    <!-- Gradient orbs -->
    <div class="absolute top-1/3 left-1/3 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] rounded-full opacity-[0.12] blur-[120px]" style="background: radial-gradient(circle, #3b82f6 0%, transparent 70%);"></div>
    <div class="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] rounded-full opacity-[0.08] blur-[100px]" style="background: radial-gradient(circle, #8b5cf6 0%, transparent 70%);"></div>

    <div class="relative max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 py-20 sm:py-32 w-full">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: text -->
        <div>
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-8">
            <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span class="text-white/60 text-[13px] font-inter font-medium tracking-wide">{{ $t('api.badge') }}</span>
          </div>

          <h1 class="text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-normal text-white leading-[1.05] mb-6 font-heading tracking-[-0.02em]">
            {{ $t('api.title') }}
          </h1>

          <p class="text-white/50 text-[1.1rem] lg:text-[1.2rem] leading-[1.6] mb-10 max-w-lg font-inter">
            {{ $t('api.subtitle') }}
          </p>

          <div class="flex items-center gap-4 flex-wrap mb-12">
            <button class="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-gray-900 text-[14px] font-semibold font-inter hover:bg-gray-100 transition-all cursor-pointer">
              {{ $t('api.cta') }}
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </button>
            <button class="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white text-[14px] font-medium font-inter hover:bg-white/[0.06] transition-all cursor-pointer">
              {{ $t('api.ctaDocs') }}
            </button>
          </div>

          <!-- Stats row -->
          <div class="flex items-center gap-4 sm:gap-6 lg:gap-8 flex-wrap">
            <div v-for="stat in stats" :key="stat.value" class="text-center">
              <p class="text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] font-heading font-normal text-white leading-none mb-1">{{ stat.value }}</p>
              <p class="text-white/30 text-[11px] font-inter tracking-wide uppercase">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <!-- Right: code block -->
        <div class="hidden lg:block">
          <div class="rounded-2xl bg-[#111] border border-white/[0.06] overflow-hidden shadow-2xl">
            <!-- Terminal header -->
            <div class="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06]">
              <div class="w-3 h-3 rounded-full bg-red-500/60"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/60"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/60"></div>
              <span class="ml-3 text-white/30 text-[12px] font-mono">{{ $t('api.quickStartTitle') }}</span>
            </div>
            <!-- Code -->
            <div class="p-6 font-mono text-[13px] leading-[1.8] overflow-x-auto">
              <p class="text-white/30"># Install &amp; authenticate</p>
              <p><span class="text-green-400">curl</span> <span class="text-blue-300">-X POST</span> <span class="text-yellow-300">{{ $t('api.baseUrl') }}/reports</span> \</p>
              <p class="pl-4"><span class="text-blue-300">-H</span> <span class="text-orange-300">"Authorization: Bearer YOUR_API_KEY"</span> \</p>
              <p class="pl-4"><span class="text-blue-300">-H</span> <span class="text-orange-300">"Content-Type: application/json"</span> \</p>
              <p class="pl-4"><span class="text-blue-300">-d</span> <span class="text-orange-300">'{"vin": "WVWZZZ3CZWE123456"}'</span></p>
              <p class="mt-4 text-white/30"># Response</p>
              <p class="text-purple-300">{"status": "completed",</p>
              <p class="pl-4 text-purple-300">"report": {"vin": "WVWZZZ3CZWE123456",</p>
              <p class="pl-8 text-purple-300">"make": "Volkswagen",</p>
              <p class="pl-8 text-purple-300">"mileage": {"value": 42380, "verified": true},</p>
              <p class="pl-8 text-purple-300">"accidents": 0, "theft": false}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const stats = computed(() => [
  { value: '300', label: t('api.statRequests') },
  { value: '10K', label: t('api.statDaily') },
  { value: '20', label: t('api.statConcurrent') },
  { value: '99.9%', label: t('api.statUptime') },
])
</script>
