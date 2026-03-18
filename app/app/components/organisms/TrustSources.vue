<template>
  <section ref="sectionRef" class="py-24 bg-forest-deep">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: visual -->
        <div class="relative">
          <div class="aspect-square max-w-md mx-auto relative">
            <!-- Central globe-like element -->
            <div class="absolute inset-8 rounded-full border-2 border-lime/20 flex items-center justify-center">
              <div class="absolute inset-4 rounded-full border border-lime/10"></div>
              <div class="text-center z-10">
                <div class="text-5xl font-extrabold text-lime">8,000+</div>
                <div class="text-white-60 text-sm mt-2">{{ $t('stats.sourcesLabel') }}</div>
              </div>
            </div>
            <!-- Orbiting dots -->
            <div class="absolute top-4 left-1/2 w-3 h-3 bg-lime rounded-full animate-pulse"></div>
            <div class="absolute bottom-8 left-8 w-2 h-2 bg-coral rounded-full animate-pulse" style="animation-delay:0.5s;"></div>
            <div class="absolute top-1/3 right-4 w-2.5 h-2.5 bg-lime/60 rounded-full animate-pulse" style="animation-delay:1s;"></div>
            <div class="absolute bottom-1/4 right-12 w-2 h-2 bg-lime/40 rounded-full animate-pulse" style="animation-delay:1.5s;"></div>
          </div>
        </div>

        <!-- Right: text -->
        <div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            {{ $t('trust.title') }}
          </h2>
          <p class="text-white-60 text-lg leading-relaxed mb-8">
            {{ $t('trust.body') }}
          </p>

          <!-- Trust badges -->
          <div class="flex flex-wrap gap-4">
            <div class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <svg class="w-5 h-5 text-lime" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
              <span class="text-white text-sm font-medium">{{ $t('stats.verified') }}</span>
            </div>
            <div class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <svg class="w-5 h-5 text-lime" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <span class="text-white text-sm font-medium">{{ $t('stats.coverage') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sectionRef = ref<HTMLElement>()

onMounted(() => {
  if (typeof window === 'undefined' || !(window as any).gsap) return
  const gsap = (window as any).gsap
  const ScrollTrigger = (window as any).ScrollTrigger
  if (!ScrollTrigger) return
  gsap.registerPlugin(ScrollTrigger)

  gsap.from(sectionRef.value?.children?.[0]?.children || [], {
    opacity: 0,
    y: 40,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 80%',
    },
  })
})
</script>
