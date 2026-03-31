<template>
  <section ref="heroRef" class="relative bg-[#0A1020] pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-20 overflow-hidden">
    <!-- Decorative orbs -->
    <div class="absolute top-[-80px] left-[-80px] sm:top-[-160px] sm:left-[-160px] w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] rounded-full bg-coral/10 blur-[80px] sm:blur-[160px] pointer-events-none"></div>
    <div class="absolute bottom-[-60px] right-[-60px] sm:bottom-[-120px] sm:right-[-120px] w-[180px] h-[180px] sm:w-[360px] sm:h-[360px] rounded-full bg-burgundy/15 blur-[80px] sm:blur-[140px] pointer-events-none"></div>
    <div class="absolute top-[40%] right-[20%] w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] rounded-full bg-coral/5 blur-[60px] sm:blur-[120px] pointer-events-none"></div>

    <!-- Grid overlay -->
    <div class="absolute inset-0 pointer-events-none" style="background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 60px 60px;"></div>

    <div class="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
      <!-- Heading -->
      <div ref="headingRef" class="text-center mb-14 lg:mb-20">
        <h1 class="text-[2.5rem] sm:text-[3.5rem] lg:text-[5rem] font-heading font-normal text-white leading-[1.05] tracking-[-0.03em] mb-5">
          {{ $t('blog.title') }}
        </h1>
        <p class="text-white/50 text-[1.05rem] lg:text-[1.2rem] leading-[1.6] font-inter max-w-xl mx-auto">
          {{ $t('blog.subtitle') }}
        </p>
      </div>

      <!-- Featured card — horizontal split -->
      <NuxtLink
        v-if="featured.length > 0"
        ref="featuredRef"
        :to="`/blog/${slugs[0]}`"
        class="group block mb-10"
      >
        <div class="flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden bg-[#111827]">
          <!-- Image (left 55%) -->
          <div class="lg:w-[55%] shrink-0">
            <img
              :src="featured[0].image"
              :alt="featured[0].title"
              class="w-full h-[240px] sm:h-[320px] lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <!-- Content (right 45%) -->
          <div class="lg:w-[45%] p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <span class="inline-block self-start px-3 py-1 rounded-full text-[11px] font-inter font-semibold uppercase tracking-wider bg-coral/15 text-coral mb-4">
              {{ featured[0].category }}
            </span>
            <h2 class="text-[1.35rem] sm:text-[1.5rem] lg:text-[1.75rem] font-heading font-normal text-white leading-[1.2] mb-4 group-hover:text-coral transition-colors duration-300">
              {{ featured[0].title }}
            </h2>
            <p class="text-white/50 text-[14px] leading-[1.7] font-inter line-clamp-3 mb-6">
              {{ featured[0].desc }}
            </p>
            <div class="flex items-center gap-3 mb-6">
              <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-[11px] font-inter font-bold">A</div>
              <span class="text-white/40 text-[13px] font-inter">{{ $t('blog.author') }}</span>
              <span class="w-1 h-1 rounded-full bg-white/25"></span>
              <span class="text-white/40 text-[13px] font-inter">{{ featured[0].readTime }} {{ $t('blog.readTime') }}</span>
            </div>
            <span class="text-coral text-[14px] font-inter font-medium group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
              Read article
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </span>
          </div>
        </div>
      </NuxtLink>

      <!-- Secondary cards -->
      <div ref="secondaryRef" class="grid md:grid-cols-3 gap-5">
        <NuxtLink
          v-for="(article, i) in featured.slice(1, 4)"
          :key="i"
          :to="`/blog/${slugs[i + 1]}`"
          class="group block bg-[#111827] rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
        >
          <div class="aspect-[4/3] overflow-hidden">
            <img
              :src="article.image"
              :alt="article.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div class="p-5">
            <span class="text-coral text-[11px] font-inter font-semibold uppercase tracking-wider">
              {{ article.category }}
            </span>
            <h3 class="text-[1.05rem] font-heading font-normal text-white leading-[1.3] mt-2 mb-2 group-hover:text-coral transition-colors duration-300">
              {{ article.title }}
            </h3>
            <span class="text-white/40 text-[12px] font-inter">
              {{ article.readTime }} {{ $t('blog.readTime') }}
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { blogArticles } from '~/composables/useBlogArticles'

const { t, tm, rt } = useI18n()
const slugs = blogArticles.map(a => a.slug)

const heroRef = ref<HTMLElement>()
const headingRef = ref<HTMLElement>()
const featuredRef = ref<any>()
const secondaryRef = ref<HTMLElement>()

const featured = computed(() => {
  const raw = tm('blog.articles')
  if (!Array.isArray(raw)) return []
  return raw.slice(0, 4).map((a: any) => ({
    title: rt(a.title),
    category: rt(a.category),
    desc: rt(a.desc),
    readTime: rt(a.readTime),
    image: typeof a.image === 'string' ? a.image : rt(a.image),
  }))
})

onMounted(() => {
  const gsap = (window as any).gsap
  if (!gsap) return

  // Heading fade-in
  if (headingRef.value) {
    gsap.from(headingRef.value.children, {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out',
    })
  }

  // Featured card fade-in
  const featuredEl = featuredRef.value?.$el || featuredRef.value
  if (featuredEl) {
    gsap.from(featuredEl, {
      opacity: 0,
      y: 40,
      duration: 0.9,
      delay: 0.3,
      ease: 'power2.out',
    })
  }

  // Secondary cards stagger
  if (secondaryRef.value) {
    gsap.from(secondaryRef.value.children, {
      opacity: 0,
      y: 30,
      stagger: 0.12,
      duration: 0.7,
      delay: 0.5,
      ease: 'power2.out',
    })
  }
})
</script>
