<template>
  <div>
    <OrganismsTheHeader />

    <template v-if="article && articleData">
      <!-- Floating TOC (desktop only) -->
      <nav class="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
        <div class="flex flex-col items-center gap-0">
          <template v-for="(section, i) in tocSections" :key="i">
            <a
              :href="'#' + slugify(section)"
              class="group relative flex items-center py-2"
              @click.prevent="scrollToSection(slugify(section))"
            >
              <span
                class="block w-2 h-2 rounded-full transition-colors duration-300"
                :class="activeSection === slugify(section) ? 'bg-coral' : 'bg-gray-300'"
              ></span>
              <span
                class="absolute left-6 whitespace-nowrap text-[11px] font-inter text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
              >{{ section }}</span>
            </a>
            <div v-if="i < tocSections.length - 1" class="w-px h-4 bg-gray-200"></div>
          </template>
        </div>
      </nav>

      <!-- Section 1 — Article Header -->
      <section class="bg-white pt-28 sm:pt-36 lg:pt-40 pb-10">
        <div class="max-w-[800px] mx-auto px-4 sm:px-8 lg:px-12">
          <!-- Breadcrumb -->
          <div class="text-[13px] font-inter">
            <NuxtLink :to="localePath('/blog')" class="text-coral hover:text-coral-dark transition-colors">{{ $t('blog.title') || 'Blog' }}</NuxtLink>
            <span class="text-gray-300 mx-1.5">/</span>
            <span class="text-gray-400">{{ article.category }}</span>
          </div>

          <!-- Category pill -->
          <span class="inline-block px-3 py-1.5 rounded-full bg-coral/10 text-coral text-[12px] font-inter font-semibold uppercase tracking-wider mt-4 mb-6">
            {{ article.category }}
          </span>

          <!-- Title -->
          <h1 class="font-heading text-[1.75rem] sm:text-[2.25rem] lg:text-[3rem] text-gray-900 leading-[1.1] mb-6">
            {{ article.title }}
          </h1>

          <!-- Meta row -->
          <div class="flex items-center gap-3 mb-10">
            <div class="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center text-coral text-[13px] font-inter font-bold shrink-0">A</div>
            <span class="text-gray-500 text-[13px] font-inter font-medium">{{ $t('blog.author') }}</span>
            <span class="text-gray-300 text-[13px]">&middot;</span>
            <span class="text-gray-400 text-[13px] font-inter">{{ article.readTime }} {{ $t('blog.readTime') }}</span>
          </div>

        </div>

        <!-- Article image (wider - breaks out of 800px) -->
        <div class="max-w-[1080px] mx-auto px-4 sm:px-8 lg:px-12 mt-10">
          <div class="w-full rounded-2xl overflow-hidden aspect-[21/9]">
            <img :src="articleData.image" :alt="article.title" class="w-full h-full object-cover" />
          </div>
        </div>

        <!-- Table of Contents -->
        <div v-if="tocSections.length > 0" class="max-w-[800px] mx-auto px-4 sm:px-8 lg:px-12 mt-10 mb-4">
          <div class="rounded-2xl bg-[#f7f8f6] border border-gray-100 p-6 sm:p-8">
            <p class="text-[12px] font-inter font-semibold text-gray-400 uppercase tracking-wider mb-5">In this article</p>
            <div class="grid sm:grid-cols-2 gap-x-6 gap-y-1">
              <a
                v-for="(section, i) in tocSections"
                :key="i"
                :href="'#' + slugify(section)"
                class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-inter text-gray-600 hover:text-coral hover:bg-white transition-all"
                @click.prevent="scrollToSection(slugify(section))"
              >
                <span class="text-coral text-[12px] font-semibold font-inter">{{ String(i + 1).padStart(2, '0') }}</span>
                {{ section }}
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2 — Article Body -->
      <section class="bg-white py-12 lg:py-16">
        <div class="max-w-[720px] mx-auto px-4 sm:px-8 lg:px-12">
          <!-- Intro paragraph (first section without heading) -->
          <p
            v-if="articleData.sections[0] && !articleData.sections[0].heading"
            class="text-gray-600 text-[1.1rem] leading-[1.9] font-inter mb-12 border-l-4 border-coral pl-6 italic"
          >
            {{ articleData.sections[0].body }}
          </p>

          <!-- Sections -->
          <template v-for="(section, i) in contentSections" :key="i">
            <div class="mb-12 last:mb-0">
              <h2
                v-if="section.heading"
                :id="slugify(section.heading)"
                class="font-heading text-[1.35rem] lg:text-[1.5rem] text-gray-900 mb-4 scroll-mt-32"
              >
                {{ section.heading }}
              </h2>
              <p class="text-gray-500 text-[15px] leading-[1.9] font-inter whitespace-pre-line">{{ section.body }}</p>
            </div>

            <!-- Inline CTA after 3rd section -->
            <div v-if="i === 2" class="rounded-2xl bg-[#0A1020] p-8 sm:p-10 text-center mb-12 relative overflow-hidden">
              <!-- Orb decoration -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] rounded-full opacity-15 blur-[80px] pointer-events-none" style="background: radial-gradient(circle, #3B82F6, transparent 70%);"></div>
              <div class="relative z-10">
                <h3 class="text-[1.25rem] sm:text-[1.5rem] font-heading text-white mb-3">Check Your Vehicle</h3>
                <p class="text-white/40 text-[13px] font-inter mb-6 max-w-sm mx-auto">Get a comprehensive vehicle history report in seconds.</p>
                <NuxtLink
                  :to="localePath('/')"
                  class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-coral text-white text-[13px] font-semibold font-inter hover:bg-coral-dark transition-all cursor-pointer"
                >
                  Get Your Report
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </NuxtLink>
              </div>
            </div>
          </template>
        </div>
      </section>

      <!-- Section 4 — Tags + Back link -->
      <section class="bg-white">
        <div class="max-w-[720px] mx-auto px-4 sm:px-8 lg:px-12 border-t border-gray-100 pt-8 mt-8 pb-12">
          <div class="flex items-center justify-between">
            <span class="px-3 py-1.5 rounded-full bg-coral/10 text-coral text-[12px] font-inter font-semibold uppercase tracking-wider">
              {{ article.category }}
            </span>
            <NuxtLink
              :to="localePath('/blog')"
              class="inline-flex items-center gap-2 text-gray-400 text-[13px] font-inter font-medium hover:text-coral transition-colors"
            >
              <svg class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              Back to all articles
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Section 5 — Continue Reading (DARK) -->
      <section class="bg-[#0A1020] py-16 sm:py-24">
        <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
          <h3 class="text-white font-heading text-[1.5rem] lg:text-[1.75rem] mb-10">Continue reading</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <NuxtLink
              v-for="(next, i) in nextArticles"
              :key="i"
              :to="localePath(`/blog/${next.slug}`)"
              class="group block"
            >
              <div class="rounded-2xl overflow-hidden mb-4 aspect-[16/9]">
                <img :src="next.image" :alt="next.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <span class="text-coral text-[11px] font-inter font-semibold uppercase tracking-wider">{{ next.category }}</span>
              <h4 class="text-white font-heading text-[1rem] leading-[1.3] mt-2 mb-1 group-hover:text-coral transition-colors">
                {{ next.title }}
              </h4>
              <span class="text-white/40 text-[11px] font-inter">{{ next.readTime }} {{ $t('blog.readTime') }}</span>
            </NuxtLink>
          </div>
        </div>
      </section>
    </template>

    <!-- 404 -->
    <template v-else>
      <section class="pt-40 pb-20 bg-white text-center">
        <div class="max-w-[600px] mx-auto px-4 sm:px-8">
          <h1 class="text-[2rem] font-heading text-gray-900 mb-4">Article not found</h1>
          <p class="text-gray-400 text-[15px] font-inter mb-8">The article you're looking for doesn't exist.</p>
          <NuxtLink :to="localePath('/blog')" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-coral text-white text-[14px] font-semibold font-inter">
            Back to Blog
          </NuxtLink>
        </div>
      </section>
    </template>

    <OrganismsTheFooter />
  </div>
</template>

<script setup lang="ts">
import { blogArticles } from '~/composables/useBlogArticles'

const localePath = useLocalePath()
const route = useRoute()
const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const { t, tm, rt } = useI18n()

const slug = computed(() => route.params.slug as string)
const articleData = computed(() => blogArticles.find(a => a.slug === slug.value))
const slugMap = blogArticles.map(a => a.slug)
const articleIndex = computed(() => slugMap.indexOf(slug.value))

const allArticles = computed(() => {
  const raw = tm('blog.articles')
  if (!Array.isArray(raw)) return []
  return raw.map((a: any, idx: number) => ({
    title: rt(a.title),
    category: rt(a.category),
    desc: rt(a.desc),
    readTime: rt(a.readTime),
    image: blogArticles[idx]?.image || '',
    slug: blogArticles[idx]?.slug || '',
  }))
})

const article = computed(() => articleIndex.value >= 0 ? allArticles.value[articleIndex.value] : null)

// Content sections (skip first if it has no heading — that's the intro)
const contentSections = computed(() => {
  if (!articleData.value) return []
  const sections = articleData.value.sections
  return sections[0]?.heading ? sections : sections.slice(1)
})

// Table of contents from section headings
const tocSections = computed(() => {
  if (!articleData.value) return []
  return articleData.value.sections.filter(s => s.heading).map(s => s.heading)
})

// Related articles (same category, excluding current)
const relatedArticles = computed(() => {
  if (!article.value) return []
  return allArticles.value
    .filter((a, i) => i !== articleIndex.value)
    .filter(a => a.category === article.value!.category)
    .slice(0, 3)
})

// Next articles (next 3 in sequence, wrapping around)
const nextArticles = computed(() => {
  if (articleIndex.value < 0) return []
  const total = allArticles.value.length
  return [1, 2, 3].map(offset => {
    const idx = (articleIndex.value + offset) % total
    return allArticles.value[idx]
  })
})

// Floating TOC — active section tracking
const activeSection = ref('')

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

onMounted(() => {
  const headings = tocSections.value.map(s => slugify(s))
  if (!headings.length) return

  // Set initial active section
  activeSection.value = headings[0] || ''

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      }
    },
    {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    }
  )

  // Observe all section headings
  nextTick(() => {
    for (const id of headings) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
  })

  onBeforeUnmount(() => {
    observer.disconnect()
  })
})

useHead({ title: computed(() => article.value ? `${article.value.title} - Autocertif Blog` : 'Article Not Found') })
</script>
