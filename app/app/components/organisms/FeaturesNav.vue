<template>
  <nav class="sticky top-[3.75rem] md:top-16 lg:top-20 z-40 border-b border-gray-200/50 bg-white/80 backdrop-blur-xl transition-all duration-300"
    :class="{ 'shadow-sm': scrolled }">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
      <div class="flex items-center justify-between h-14">
        <div class="flex items-center gap-1 overflow-x-auto scrollbar-hide">
          <button
            v-for="item in navItems"
            :key="item.id"
            class="relative px-3 sm:px-4 py-2 text-[12px] sm:text-[13px] font-inter font-medium rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
            :class="activeSection === item.id
              ? 'text-gray-900 bg-gray-100'
              : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'"
            @click="scrollTo(item.id)">
            {{ $t(item.label) }}
            <span v-if="activeSection === item.id" class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-coral"></span>
          </button>
        </div>
        <NuxtLink :to="localePath('/')" class="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-900 text-white text-[13px] font-medium font-inter hover:bg-gray-800 transition-all cursor-pointer">
          {{ $t('features.cta') }}
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const scrolled = ref(false)
const activeSection = ref('benefits')

const navItems = [
  { id: 'benefits', label: 'features.navBenefits' },
  { id: 'capabilities', label: 'features.navCapabilities' },
  { id: 'use-cases', label: 'features.navUseCases' },
  { id: 'faq', label: 'features.navFaq' },
]

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    const offset = 140
    const y = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { rootMargin: '-200px 0px -60% 0px', threshold: 0 }
  )

  navItems.forEach((item) => {
    const el = document.getElementById(item.id)
    if (el) observer.observe(el)
  })

  window.addEventListener('scroll', () => { scrolled.value = window.scrollY > 100 })
})
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>
