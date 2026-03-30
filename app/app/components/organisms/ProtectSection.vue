<template>
  <section ref="sectionRef" class="py-24 bg-forest relative overflow-hidden">
    <!-- Background accent -->
    <div class="absolute inset-0 bg-gradient-to-r from-coral/5 to-transparent pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: content -->
        <div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-8">
            {{ $t('protect.title') }}
          </h2>

          <div class="space-y-6 mb-10">
            <div
              v-for="(stat, i) in protectStats"
              :key="i"
              class="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
            >
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-coral/20 flex items-center justify-center">
                <svg class="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
              </div>
              <p class="text-white/80 text-base leading-relaxed">{{ stat }}</p>
            </div>
          </div>

          <div class="flex items-center gap-4 flex-wrap">
            <NuxtLink :to="localePath('/')" class="px-7 py-3 rounded-pill bg-coral text-white text-[14px] font-medium font-inter hover:bg-coral-dark transition-all duration-300 cursor-pointer">
              Run a Vehicle Check
            </NuxtLink>
            <NuxtLink :to="localePath('/pricing')" class="px-7 py-3 rounded-pill border border-white/30 text-white text-[14px] font-medium font-inter hover:bg-white/10 transition-all duration-300 cursor-pointer">
              {{ $t('nav.pricing') }}
            </NuxtLink>
          </div>
        </div>

        <!-- Right: visual -->
        <div class="hidden lg:flex items-center justify-center">
          <div class="relative">
            <div class="w-64 h-64 rounded-full border-2 border-coral/20 flex items-center justify-center">
              <div class="w-48 h-48 rounded-full border border-coral/30 flex items-center justify-center">
                <div class="w-32 h-32 rounded-full bg-coral/10 flex items-center justify-center">
                  <svg class="w-16 h-16 text-coral" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-coral text-white text-sm font-bold">1/3</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { tm } = useI18n()

const protectStats = computed(() => {
  const raw = tm('protect.stats')
  return Array.isArray(raw) ? raw.map(String) : []
})

const sectionRef = ref<HTMLElement>()

onMounted(() => {
  if (typeof window === 'undefined' || !(window as any).gsap) return
  const gsap = (window as any).gsap
  const ScrollTrigger = (window as any).ScrollTrigger
  if (!ScrollTrigger) return
  gsap.registerPlugin(ScrollTrigger)

  gsap.from(sectionRef.value?.querySelectorAll('.rounded-xl, .rounded-full') || [], {
    opacity: 0,
    y: 30,
    stagger: 0.1,
    duration: 0.6,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 80%',
    },
  })
})
</script>
