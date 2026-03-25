<template>
  <!-- ContentSquare hero: burgundy bg, font-heading for H1, pill buttons -->
  <section class="relative min-h-0 lg:min-h-[92vh] flex items-center overflow-hidden bg-burgundy">
    <div class="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-[150px]" style="background: radial-gradient(circle, #ef4444 0%, transparent 70%);"></div>

    <div class="relative max-w-[1280px] mx-auto px-6 lg:px-12 pt-10 pb-8 lg:py-32 w-full">

      <!-- MOBILE LAYOUT: title + card stacked -->
      <div class="lg:hidden">
        <h1 class="text-[1.75rem] md:text-[2.5rem] font-normal text-white leading-[1.08] mb-1 font-heading text-center">
          {{ $t('hero.title') }}
        </h1>
        <p class="text-white/50 text-[13px] font-inter text-center mb-3">{{ $t('hero.subtitle') }}</p>

        <!-- Search card -->
        <div class="relative w-full max-w-[400px] mx-auto mb-6">
          <div class="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-coral/30 via-white/10 to-coral/20 blur-[1px]"></div>
          <div class="relative bg-white/90 backdrop-blur-xl rounded-2xl p-5 border border-white/40 shadow-2xl">
            <div class="flex items-center bg-gray-100 rounded-xl p-1 mb-4">
              <button
                v-for="(tab, i) in searchTabs"
                :key="i"
                class="flex-1 px-3 py-2.5 rounded-lg text-[12px] font-medium font-inter transition-all duration-300 cursor-pointer text-center"
                :class="activeSearchTab === i
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600'"
                @click="activeSearchTab = i">
                {{ tab }}
              </button>
            </div>
            <div class="relative mb-3">
              <div class="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
              <input
                type="text"
                :placeholder="activeSearchTab === 0 ? 'e.g. AB-123-CD' : 'e.g. WBA3A5C55DF123456'"
                class="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-[14px] font-inter text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 transition-all" />
            </div>
            <button class="w-full bg-coral hover:bg-coral-dark text-white font-semibold font-inter py-3 rounded-xl text-[14px] transition-all duration-300 cursor-pointer shadow-lg shadow-coral/20">
              {{ $t('hero.cta') }}
            </button>
            <p class="text-gray-400 text-[11px] font-inter text-center mt-3">{{ $t('hero.avgTime') }}</p>
            <div class="flex items-center justify-center gap-3 mt-3 pt-3 border-t border-gray-200/60">
              <div class="flex items-center gap-1">
                <svg class="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
                <span class="text-gray-500 text-[10px] font-inter">8,000+ sources</span>
              </div>
              <div class="flex items-center gap-1">
                <svg class="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
                <span class="text-gray-500 text-[10px] font-inter">25+ countries</span>
              </div>
              <div class="flex items-center gap-1">
                <svg class="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
                <span class="text-gray-500 text-[10px] font-inter">~55s</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Trust bar mobile -->
        <div class="flex items-center justify-center gap-6 flex-wrap">
          <span v-for="name in ['iCarros', 'Webmotors', 'OLX Autos', 'Kavak', 'Localiza']" :key="name"
            class="text-white/40 text-[13px] font-bold font-heading tracking-wider">{{ name }}</span>
        </div>
      </div>

      <!-- DESKTOP LAYOUT: unchanged -->
      <div class="hidden lg:block">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <!-- LEFT -->
          <div ref="heroLeft">
            <p class="text-white/50 text-[20px] font-inter mb-6">{{ $t('hero.badge') }}</p>

            <h1 class="text-[3rem] font-normal text-white leading-[1.1] mb-7 font-heading max-w-[520px]">
              {{ $t('hero.title') }}
            </h1>

            <p class="text-white/70 text-[1.25rem] leading-[1.4] mb-10 max-w-[480px] font-inter">
              {{ $t('hero.subtitle') }}
            </p>

            <!-- CTA buttons -->
            <div class="flex items-center gap-4 flex-wrap mb-16">
              <button class="group relative inline-flex justify-center overflow-hidden rounded-pill px-7 py-[0.8125rem] border border-transparent bg-coral text-white text-[14px] font-medium font-inter hover:bg-coral-dark transition-[background-color,color,opacity,border] duration-300 cursor-pointer">
                <span class="transition-transform duration-200 group-hover:-translate-y-10">{{ $t('hero.cta') }}</span>
                <span class="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-200 group-hover:translate-y-0" aria-hidden="true">{{ $t('hero.cta') }}</span>
              </button>
              <button class="group relative inline-flex justify-center overflow-hidden rounded-pill px-7 py-[0.8125rem] border border-white/30 text-white text-[14px] font-medium font-inter hover:bg-white/10 transition-[background-color,color,opacity,border] duration-300 cursor-pointer">
                <span class="transition-transform duration-200 group-hover:-translate-y-10">{{ $t('nav.pricing') }}</span>
                <span class="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-200 group-hover:translate-y-0" aria-hidden="true">{{ $t('nav.pricing') }}</span>
              </button>
            </div>
          </div>

          <!-- RIGHT: Glassmorphism search card -->
          <div ref="heroRight" class="flex items-center justify-center relative">
            <!-- Floating decorative elements -->
            <div class="absolute -top-6 -right-4 w-20 h-20 rounded-2xl bg-coral/15 border border-coral/25 flex items-center justify-center backdrop-blur-sm animate-float-slow">
              <svg class="w-8 h-8 text-coral/70" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
            </div>
            <div class="absolute -bottom-4 -left-6 w-16 h-16 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center backdrop-blur-sm animate-float-delayed">
              <svg class="w-7 h-7 text-white/40" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            </div>
            <div class="absolute top-1/2 -left-10 w-12 h-12 rounded-xl bg-coral/10 border border-coral/20 flex items-center justify-center animate-float-slow">
              <svg class="w-5 h-5 text-coral/60" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" /></svg>
            </div>

            <!-- Main card -->
            <div class="relative w-full max-w-[420px]">
              <div class="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-coral/30 via-white/10 to-coral/20 blur-[1px]"></div>
              <div class="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-2xl">
                <div class="flex items-center bg-gray-100 rounded-2xl p-1 mb-7">
                  <button
                    v-for="(tab, i) in searchTabs"
                    :key="i"
                    class="flex-1 px-4 py-3 rounded-xl text-[13px] font-medium font-inter transition-all duration-300 cursor-pointer text-center"
                    :class="activeSearchTab === i
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'"
                    @click="activeSearchTab = i">
                    {{ tab }}
                  </button>
                </div>
                <div class="relative mb-5">
                  <div class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    :placeholder="activeSearchTab === 0 ? 'e.g. AB-123-CD' : 'e.g. WBA3A5C55DF123456'"
                    class="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-12 pr-4 py-4 text-[15px] font-inter text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 transition-all" />
                </div>
                <button class="w-full bg-coral hover:bg-coral-dark text-white font-semibold font-inter py-4 rounded-2xl text-[15px] transition-all duration-300 cursor-pointer shadow-lg shadow-coral/20 hover:shadow-coral/30">
                  {{ $t('hero.cta') }}
                </button>
                <p class="text-gray-400 text-[12px] font-inter text-center mt-4">{{ $t('hero.avgTime') }}</p>
                <div class="flex items-center justify-center gap-4 mt-5 pt-5 border-t border-gray-200/60">
                  <div class="flex items-center gap-1.5">
                    <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
                    <span class="text-gray-500 text-[11px] font-inter">8,000+ sources</span>
                  </div>
                  <div class="w-px h-3 bg-gray-200"></div>
                  <div class="flex items-center gap-1.5">
                    <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
                    <span class="text-gray-500 text-[11px] font-inter">25+ countries</span>
                  </div>
                  <div class="w-px h-3 bg-gray-200"></div>
                  <div class="flex items-center gap-1.5">
                    <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
                    <span class="text-gray-500 text-[11px] font-inter">~55s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Trust bar desktop -->
        <div class="pt-10">
          <h3 class="text-white font-medium text-[18px] font-inter text-center mb-10">{{ $t('hero.trust') }}</h3>
          <div class="-ml-8 flex items-center justify-between min-h-[30px] md:min-h-[40px]">
            <div v-for="name in ['iCarros', 'Webmotors', 'OLX Autos', 'Kavak', 'Localiza']" :key="name"
              class="flex items-center justify-center pl-8" style="width: 100%; aspect-ratio: 92 / 26;">
              <span class="text-white text-[18px] md:text-[20px] font-bold font-heading tracking-wider whitespace-nowrap">{{ name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const heroLeft = ref<HTMLElement>()
const heroRight = ref<HTMLElement>()
const activeSearchTab = ref(0)
const searchTabs = ['License Plate', 'VIN Number']

onMounted(() => {
  if (!(window as any).gsap) return
  const gsap = (window as any).gsap
  gsap.from(heroLeft.value, { opacity: 0, y: 50, duration: 1, ease: 'power3.out' })
  gsap.from(heroRight.value, { opacity: 0, y: 30, duration: 1, delay: 0.3, ease: 'power3.out' })
})
</script>

<style scoped>
@keyframes float-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
@keyframes float-delayed {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
.animate-float-delayed { animation: float-delayed 5s ease-in-out 1s infinite; }
</style>
