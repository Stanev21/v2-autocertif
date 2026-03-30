<template>
  <div>
    <!-- Hero -->
    <section class="bg-white pt-24 sm:pt-32 lg:pt-40 pb-12 lg:pb-16 border-b border-gray-100">
      <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
        <div class="max-w-3xl">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center">
              <svg class="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </div>
            <span class="text-coral text-[13px] font-inter font-semibold uppercase tracking-wider">{{ badge }}</span>
          </div>
          <h1 class="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-normal text-gray-900 leading-[1.02] font-heading tracking-[-0.03em] mb-5">
            {{ title }}
          </h1>
          <p class="text-gray-400 text-[1.1rem] lg:text-[1.2rem] leading-[1.6] font-inter mb-6">{{ subtitle }}</p>
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-500 text-[12px] font-inter font-medium">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>
            {{ effective }}
          </span>
        </div>
      </div>
    </section>

    <!-- Content with sidebar -->
    <section class="py-12 sm:py-16 lg:py-20 bg-[#fafaf8]">
      <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
        <div class="grid lg:grid-cols-[240px,1fr] gap-10 lg:gap-16">
          <!-- Sticky sidebar -->
          <div class="hidden lg:block">
            <nav class="sticky top-28">
              <p class="text-[11px] font-inter font-semibold text-gray-400 uppercase tracking-wider mb-4">Contents</p>
              <div class="space-y-1">
                <a
                  v-for="(navItem, i) in navItems"
                  :key="i"
                  :href="'#' + sections[i]?.id"
                  class="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-inter font-medium transition-all duration-200"
                  :class="activeSection === i
                    ? 'bg-white text-gray-900 shadow-sm border border-gray-200/60'
                    : 'text-gray-400 hover:text-gray-600 hover:bg-white/50'"
                  @click.prevent="scrollTo(sections[i]?.id)"
                >
                  <span class="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 transition-colors"
                    :class="activeSection === i ? 'bg-coral/10 text-coral' : 'bg-gray-100 text-gray-300'">
                    {{ i + 1 }}
                  </span>
                  {{ navItem }}
                </a>
              </div>
            </nav>
          </div>

          <!-- Sections -->
          <div class="space-y-6">
            <div
              v-for="(section, i) in sections"
              :key="i"
              :id="section.id"
              class="bg-white rounded-2xl border border-gray-200/60 p-5 sm:p-7 lg:p-10 scroll-mt-24"
            >
              <div class="flex items-center gap-3 mb-5">
                <span class="w-8 h-8 rounded-lg bg-coral/10 flex items-center justify-center text-coral text-[12px] font-inter font-bold">
                  {{ i + 1 }}
                </span>
                <h2 class="text-[1.35rem] lg:text-[1.5rem] font-heading font-normal text-gray-900">{{ section.title }}</h2>
              </div>
              <p class="text-gray-500 text-[14px] leading-[1.8] font-inter whitespace-pre-line">{{ section.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-12 sm:py-20 lg:py-28 bg-white">
      <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
        <div class="rounded-[1.75rem] bg-[#0A1020] overflow-hidden relative">
          <div class="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]" style="background: radial-gradient(circle, #14b8a6, transparent 70%);"></div>
          <div class="relative z-10 p-6 sm:p-10 lg:p-16 text-center max-w-2xl mx-auto">
            <div class="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/[0.06] flex items-center justify-center mx-auto mb-6">
              <svg class="w-7 h-7 text-teal-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>
            </div>
            <h2 class="text-[1.75rem] lg:text-[2.25rem] font-heading font-normal text-white leading-[1.1] mb-4">{{ ctaTitle }}</h2>
            <p class="text-white/40 text-[15px] leading-[1.7] font-inter mb-8">{{ ctaDesc }}</p>
            <a href="/contact" class="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-gray-900 text-[14px] font-semibold font-inter hover:bg-gray-100 transition-all">
              {{ ctaCta }}
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  badge: string
  title: string
  subtitle: string
  effective: string
  navItems: string[]
  sections: { id: string; title: string; content: string }[]
  ctaTitle: string
  ctaDesc: string
  ctaCta: string
}>()

const activeSection = ref(0)

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = props.sections.findIndex(s => s.id === entry.target.id)
          if (idx !== -1) activeSection.value = idx
        }
      })
    },
    { rootMargin: '-30% 0px -60% 0px' }
  )
  props.sections.forEach(s => {
    const el = document.getElementById(s.id)
    if (el) observer.observe(el)
  })
})
</script>
