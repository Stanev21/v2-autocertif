<template>
  <section class="py-16 sm:py-20 lg:py-24 bg-[#fafaf8]">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
      <h2 class="text-[1.75rem] lg:text-[2rem] font-heading font-normal text-gray-900 mb-12 lg:mb-14">
        {{ $t('help.guidesTitle') }}
      </h2>

      <div class="grid md:grid-cols-3 gap-6">
        <article
          v-for="(guide, i) in guides"
          :key="i"
          class="group relative rounded-[1.5rem] overflow-hidden cursor-pointer h-auto sm:h-[420px]"
        >
          <!-- Background image -->
          <img :src="guide.image" :alt="guide.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"></div>

          <!-- Tag at top -->
          <div class="absolute top-5 left-5">
            <span class="px-3 py-1 rounded-full text-[11px] font-inter font-semibold uppercase tracking-wider bg-white/15 backdrop-blur-sm text-white">
              {{ guide.tag }}
            </span>
          </div>

          <!-- Content panel at bottom -->
          <div class="absolute bottom-0 left-0 right-0 p-6 lg:p-7 transition-all duration-500"
            :class="hoveredGuide === i ? 'translate-y-0' : 'translate-y-4 opacity-90'"
            @mouseenter="hoveredGuide = i"
            @mouseleave="hoveredGuide = -1">
            <h3 class="text-[1.1rem] lg:text-[1.2rem] font-heading font-normal text-white leading-[1.3] mb-3">
              {{ guide.title }}
            </h3>
            <p class="text-white/50 text-[13px] leading-[1.6] font-inter mb-4 line-clamp-2">{{ guide.desc }}</p>
            <span class="inline-flex items-center gap-2 text-white/70 text-[13px] font-inter font-medium group-hover:text-white transition-colors">
              Read guide
              <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const hoveredGuide = ref(-1)

const guides = computed(() => {
  const raw = tm('help.guides')
  return Array.isArray(raw) ? raw.map((g: any) => ({
    title: rt(g.title),
    tag: rt(g.tag),
    desc: rt(g.desc),
    image: typeof g.image === 'string' ? g.image : rt(g.image),
  })) : []
})
</script>
