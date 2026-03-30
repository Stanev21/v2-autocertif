<template>
  <div>
    <OrganismsTheHeader />

    <template v-if="article && articleData">
      <!-- Hero with full-bleed image -->
      <section class="relative pt-24 lg:pt-32">
        <!-- Full-width hero image -->
        <div class="relative h-[300px] lg:h-[480px] overflow-hidden">
          <img :src="articleData.image" :alt="article.title" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0A1020] via-[#0A1020]/40 to-transparent"></div>

          <!-- Article meta overlay -->
          <div class="absolute bottom-0 left-0 right-0">
            <div class="max-w-[800px] mx-auto px-4 sm:px-8 lg:px-12 pb-10 lg:pb-14">
              <div class="flex items-center gap-3 mb-4">
                <span class="px-3 py-1 rounded-full text-[11px] font-inter font-semibold uppercase tracking-wider bg-white/15 backdrop-blur-sm text-white">
                  {{ article.category }}
                </span>
                <span class="text-white/50 text-[12px] font-inter">{{ article.readTime }} {{ $t('blog.readTime') }}</span>
              </div>
              <h1 class="text-[1.5rem] sm:text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-normal text-white leading-[1.08] font-heading tracking-[-0.02em]">
                {{ article.title }}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <!-- Article body with sidebar -->
      <section class="py-14 lg:py-20 bg-white">
        <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
          <div class="grid lg:grid-cols-[1fr,320px] gap-12 lg:gap-16">
            <!-- Main content -->
            <div>
              <!-- Author + description bar -->
              <div class="flex items-center gap-4 mb-10 pb-8 border-b border-gray-100">
                <div class="w-11 h-11 rounded-full bg-coral/10 flex items-center justify-center text-coral text-[13px] font-inter font-bold">A</div>
                <div>
                  <p class="text-gray-900 text-[14px] font-inter font-medium">{{ $t('blog.author') }}</p>
                  <p class="text-gray-400 text-[12px] font-inter">{{ article.readTime }} {{ $t('blog.readTime') }}</p>
                </div>
              </div>

              <!-- Intro -->
              <p v-if="articleData.sections[0] && !articleData.sections[0].heading" class="text-gray-600 text-[1.1rem] leading-[1.85] font-inter mb-10 font-medium">
                {{ articleData.sections[0].body }}
              </p>

              <!-- Sections -->
              <div v-for="(section, i) in articleData.sections.slice(articleData.sections[0]?.heading ? 0 : 1)" :key="i" class="mb-10 last:mb-0">
                <h2 v-if="section.heading" class="text-[1.35rem] lg:text-[1.5rem] font-heading font-normal text-gray-900 leading-[1.2] mb-4 pt-2">
                  {{ section.heading }}
                </h2>
                <p class="text-gray-500 text-[15px] leading-[1.85] font-inter whitespace-pre-line">{{ section.body }}</p>
              </div>

              <!-- Share / tags -->
              <div class="mt-14 pt-8 border-t border-gray-100 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="px-3 py-1.5 rounded-full bg-[#fafaf8] border border-gray-200/60 text-gray-500 text-[12px] font-inter font-medium">{{ article.category }}</span>
                </div>
                <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-gray-400 text-[13px] font-inter font-medium hover:text-coral transition-colors">
                  <svg class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                  {{ $t('blog.filterAll') }} articles
                </NuxtLink>
              </div>
            </div>

            <!-- Sidebar -->
            <div class="hidden lg:block">
              <div class="sticky top-28 space-y-6">
                <!-- CTA card -->
                <div class="rounded-2xl bg-[#0A1020] p-7 relative overflow-hidden">
                  <div class="absolute -top-10 -right-10 w-[150px] h-[150px] rounded-full opacity-20 blur-[60px]" style="background: radial-gradient(circle, #3B82F6, transparent 70%);"></div>
                  <div class="relative z-10">
                    <h3 class="text-[1.1rem] font-heading font-normal text-white mb-2">Check Your Vehicle</h3>
                    <p class="text-white/40 text-[12px] font-inter leading-snug mb-5">Get a comprehensive history report in ~55 seconds.</p>
                    <button class="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-coral text-white text-[13px] font-semibold font-inter hover:bg-coral-dark transition-all cursor-pointer">
                      Get Your Report
                      <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                    </button>
                  </div>
                </div>

                <!-- Table of contents -->
                <div class="rounded-2xl border border-gray-200/60 p-6">
                  <p class="text-[11px] font-inter font-semibold text-gray-400 uppercase tracking-wider mb-4">In this article</p>
                  <div class="space-y-1">
                    <a v-for="(section, i) in tocSections" :key="i" href="#"
                      class="block px-3 py-2 rounded-lg text-[13px] font-inter text-gray-500 hover:text-gray-900 hover:bg-[#fafaf8] transition-all">
                      {{ section }}
                    </a>
                  </div>
                </div>

                <!-- Related articles -->
                <div class="rounded-2xl border border-gray-200/60 p-6">
                  <p class="text-[11px] font-inter font-semibold text-gray-400 uppercase tracking-wider mb-4">Related articles</p>
                  <div class="space-y-4">
                    <NuxtLink
                      v-for="(rel, i) in relatedArticles"
                      :key="i"
                      :to="`/blog/${rel.slug}`"
                      class="group flex gap-3 cursor-pointer"
                    >
                      <div class="w-16 h-12 rounded-lg overflow-hidden shrink-0">
                        <img :src="rel.image" :alt="rel.title" class="w-full h-full object-cover" />
                      </div>
                      <div class="min-w-0">
                        <h4 class="text-[13px] font-inter font-medium text-gray-900 leading-snug line-clamp-2 group-hover:text-coral transition-colors">
                          {{ rel.title }}
                        </h4>
                        <span class="text-[11px] text-gray-400 font-inter">{{ rel.readTime }} {{ $t('blog.readTime') }}</span>
                      </div>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Next / Prev articles -->
      <section class="py-16 lg:py-20 bg-[#fafaf8] border-t border-gray-100">
        <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
          <h3 class="text-[1.5rem] lg:text-[1.75rem] font-heading font-normal text-gray-900 mb-10">Continue reading</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <NuxtLink
              v-for="(next, i) in nextArticles"
              :key="i"
              :to="`/blog/${next.slug}`"
              class="group block"
            >
              <div class="rounded-xl overflow-hidden mb-4 aspect-[16/9]">
                <img :src="next.image" :alt="next.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div class="flex items-center gap-3 mb-2">
                <span class="text-coral text-[11px] font-inter font-semibold uppercase tracking-wider">{{ next.category }}</span>
                <span class="text-gray-300 text-[11px] font-inter">{{ next.readTime }} {{ $t('blog.readTime') }}</span>
              </div>
              <h4 class="text-[1rem] font-heading font-normal text-gray-900 leading-[1.3] group-hover:text-coral transition-colors">
                {{ next.title }}
              </h4>
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
          <NuxtLink to="/blog" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-coral text-white text-[14px] font-semibold font-inter">
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

const route = useRoute()
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

useHead({ title: computed(() => article.value ? `${article.value.title} - Autocertif Blog` : 'Article Not Found') })
</script>
