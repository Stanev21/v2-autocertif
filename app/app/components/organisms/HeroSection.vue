<template>
  <!-- ContentSquare hero: burgundy bg, font-heading for H1, pill buttons -->
  <section class="relative min-h-[92vh] flex items-center overflow-hidden bg-burgundy">
    <div class="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-[150px]" style="background: radial-gradient(circle, #ef4444 0%, transparent 70%);"></div>

    <div class="relative max-w-[1280px] mx-auto px-8 lg:px-12 py-32 w-full">
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

          <!-- CTA buttons — ContentSquare style with slide-up hover animation -->
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

          <!-- Search bar -->
          <div class="max-w-[460px]">
            <div class="flex items-center bg-white/[0.08] border border-white/15 rounded-2xl p-1.5">
              <input type="text" :placeholder="$t('hero.placeholder')"
                class="flex-1 bg-transparent px-4 py-3 text-white placeholder-white/30 text-[14px] font-inter outline-none" />
              <button class="flex-shrink-0 bg-coral hover:bg-red-500 text-white font-semibold font-heading px-5 py-2.5 rounded-xl text-[13px] transition-all duration-300 cursor-pointer">
                {{ $t('hero.cta') }}
              </button>
            </div>
            <p class="text-white/40 text-[13px] font-inter mt-3">{{ $t('hero.avgTime') }}</p>
          </div>
        </div>

        <!-- RIGHT: circular visual like ContentSquare Sense area -->
        <div ref="heroRight" class="hidden lg:flex items-center justify-center relative">
          <div class="relative w-[380px] h-[380px]">
            <div class="absolute inset-0 rounded-full border border-white/[0.08]"></div>
            <div class="absolute inset-10 rounded-full border border-white/[0.06]"></div>
            <div class="absolute inset-20 rounded-full bg-white/[0.04] backdrop-blur-sm flex flex-col items-center justify-center">
              <p class="text-white text-4xl font-normal font-heading">9.1<span class="text-base font-normal text-white/60">/10</span></p>
              <p class="text-lime text-[13px] font-semibold font-heading mt-1">{{ $t('hero.noIssues') }}</p>
            </div>
            <!-- Floating icon badges like ContentSquare -->
            <div v-for="(pos, i) in badgePositions" :key="i"
              class="absolute w-10 h-10 rounded-full bg-coral/15 border border-coral/25 flex items-center justify-center"
              :style="`top: ${pos.top}; left: ${pos.left}; right: ${pos.right}; bottom: ${pos.bottom};`">
              <svg class="w-[18px] h-[18px] text-coral" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" :d="pos.icon" /></svg>
            </div>
            <!-- Review badge -->
            <div class="absolute top-10 right-2 bg-white/[0.08] backdrop-blur-sm rounded-xl px-3.5 py-2 border border-white/10">
              <div class="flex items-center gap-1.5">
                <span class="text-white text-[13px] font-bold font-heading">4.6</span>
                <div class="flex gap-px">
                  <svg v-for="s in 5" :key="s" class="w-3 h-3 text-coral" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
              </div>
              <p class="text-white/50 text-[9px] font-inter">(1,218 Reviews)</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust bar -->
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
  </section>
</template>

<script setup lang="ts">
const heroLeft = ref<HTMLElement>()
const heroRight = ref<HTMLElement>()
const badgePositions = [
  { top: '0', left: '45%', right: 'auto', bottom: 'auto', icon: 'M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5' },
  { top: '25%', left: 'auto', right: '-8px', bottom: 'auto', icon: 'M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z' },
  { top: 'auto', left: '-8px', right: 'auto', bottom: '25%', icon: 'M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75' },
  { top: 'auto', left: '35%', right: 'auto', bottom: '-4px', icon: 'M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047' },
]
onMounted(() => {
  if (!(window as any).gsap) return
  const gsap = (window as any).gsap
  gsap.from(heroLeft.value, { opacity: 0, y: 50, duration: 1, ease: 'power3.out' })
  gsap.from(heroRight.value, { opacity: 0, y: 30, duration: 1, delay: 0.3, ease: 'power3.out' })
})
</script>
