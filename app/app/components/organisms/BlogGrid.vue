<template>
  <div>
    <!-- Sticky filter bar -->
    <div class="sticky top-[80px] z-30 bg-white/90 backdrop-blur-md py-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
        <div class="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <button
            v-for="cat in categories"
            :key="cat.key"
            class="px-4 sm:px-5 py-2 rounded-full text-[13px] font-inter font-medium transition-all duration-200 cursor-pointer whitespace-nowrap"
            :class="activeFilter === cat.key
              ? 'bg-coral text-white shadow-sm'
              : 'border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900'"
            @click="activeFilter = cat.key"
          >
            {{ cat.label }}
            <span
              class="ml-1 text-[11px]"
              :class="activeFilter === cat.key ? 'text-white/70' : 'text-gray-400'"
            >{{ cat.count }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Grid section -->
    <section class="bg-[#f7f8f6] py-16 sm:py-20">
      <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
        <!-- Alternating row groups -->
        <template v-for="(group, gi) in articleGroups" :key="gi">
          <!-- Odd group: 1 large horizontal + 1 small vertical -->
          <div
            v-if="group.type === 'duo'"
            class="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-6 mb-6"
          >
            <!-- Large horizontal card -->
            <NuxtLink
              v-if="group.items[0]"
              :to="`/blog/${group.items[0].slug}`"
              class="group bg-white rounded-2xl overflow-hidden flex flex-col sm:flex-row hover:shadow-lg transition-all duration-300 block"
            >
              <div class="sm:w-[45%] shrink-0">
                <img
                  :src="group.items[0].image"
                  :alt="group.items[0].title"
                  class="w-full h-[200px] sm:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div class="p-5 sm:p-6 flex flex-col justify-center">
                <span class="text-coral text-[11px] font-inter font-semibold uppercase tracking-wider mb-2">
                  {{ group.items[0].category }}
                </span>
                <h3 class="text-[1.15rem] lg:text-[1.3rem] font-heading font-normal text-gray-900 leading-[1.3] mb-3 group-hover:text-coral transition-colors duration-300">
                  {{ group.items[0].title }}
                </h3>
                <p class="text-gray-400 text-[13px] leading-[1.7] font-inter line-clamp-2 mb-4">
                  {{ group.items[0].desc }}
                </p>
                <div class="flex items-center gap-3 mt-auto">
                  <div class="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-[10px] font-inter font-bold">A</div>
                  <span class="text-gray-500 text-[12px] font-inter">{{ $t('blog.author') }}</span>
                  <span class="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span class="text-gray-400 text-[12px] font-inter">{{ group.items[0].readTime }} {{ $t('blog.readTime') }}</span>
                </div>
              </div>
            </NuxtLink>

            <!-- Small vertical card -->
            <NuxtLink
              v-if="group.items[1]"
              :to="`/blog/${group.items[1].slug}`"
              class="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 block"
            >
              <div class="aspect-[4/3] overflow-hidden">
                <img
                  :src="group.items[1].image"
                  :alt="group.items[1].title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div class="p-5">
                <span class="text-coral text-[11px] font-inter font-semibold uppercase tracking-wider mb-2 block">
                  {{ group.items[1].category }}
                </span>
                <h3 class="text-[1.05rem] font-heading font-normal text-gray-900 leading-[1.3] mb-3 group-hover:text-coral transition-colors duration-300">
                  {{ group.items[1].title }}
                </h3>
                <p class="text-gray-400 text-[13px] leading-[1.7] font-inter line-clamp-2 mb-4">
                  {{ group.items[1].desc }}
                </p>
                <div class="flex items-center gap-3">
                  <div class="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-[10px] font-inter font-bold">A</div>
                  <span class="text-gray-500 text-[12px] font-inter">{{ $t('blog.author') }}</span>
                </div>
              </div>
            </NuxtLink>
          </div>

          <!-- Even group: 3 equal cards -->
          <div
            v-else
            class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
          >
            <NuxtLink
              v-for="(article, ai) in group.items"
              :key="ai"
              :to="`/blog/${article.slug}`"
              class="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 block"
            >
              <div class="aspect-[16/9] overflow-hidden">
                <img
                  :src="article.image"
                  :alt="article.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div class="p-5">
                <span class="text-coral text-[11px] font-inter font-semibold uppercase tracking-wider mb-2 block">
                  {{ article.category }}
                </span>
                <h3 class="text-[1.05rem] font-heading font-normal text-gray-900 leading-[1.3] mb-3 group-hover:text-coral transition-colors duration-300">
                  {{ article.title }}
                </h3>
                <p class="text-gray-400 text-[13px] leading-[1.7] font-inter line-clamp-2 mb-4">
                  {{ article.desc }}
                </p>
                <div class="flex items-center gap-3">
                  <div class="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-[10px] font-inter font-bold">A</div>
                  <span class="text-gray-500 text-[12px] font-inter">{{ $t('blog.author') }}</span>
                  <span class="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span class="text-gray-400 text-[12px] font-inter">{{ article.readTime }} {{ $t('blog.readTime') }}</span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </template>

        <!-- Empty state -->
        <div v-if="filteredArticles.length === 0" class="text-center py-20">
          <p class="text-gray-400 text-[15px] font-inter">No articles found in this category.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { blogArticles } from '~/composables/useBlogArticles'

const { t, tm, rt } = useI18n()
const slugs = blogArticles.map(a => a.slug)
const activeFilter = ref('all')

const articles = computed(() => {
  const raw = tm('blog.articles')
  if (!Array.isArray(raw)) return []
  // Skip the first 4 (shown in hero)
  return raw.slice(4).map((a: any, idx: number) => ({
    title: rt(a.title),
    category: rt(a.category),
    desc: rt(a.desc),
    readTime: rt(a.readTime),
    image: typeof a.image === 'string' ? a.image : rt(a.image),
    slug: slugs[idx + 4],
  }))
})

const categoryMap: Record<string, string> = {
  'Product': 'Product', 'Produit': 'Product',
  'Research': 'Research', 'Recherche': 'Research',
  'Guides': 'Guides',
  'Industry': 'Industry', 'Industrie': 'Industry',
}

const filteredArticles = computed(() => {
  if (activeFilter.value === 'all') return articles.value
  return articles.value.filter(a => {
    const mapped = categoryMap[a.category] || a.category
    return mapped === activeFilter.value
  })
})

const getCategoryCount = (key: string) => {
  if (key === 'all') return articles.value.length
  return articles.value.filter(a => {
    const mapped = categoryMap[a.category] || a.category
    return mapped === key
  }).length
}

const categories = computed(() => [
  { key: 'all', label: t('blog.filterAll'), count: articles.value.length },
  { key: 'Product', label: t('blog.filterProduct'), count: getCategoryCount('Product') },
  { key: 'Research', label: t('blog.filterResearch'), count: getCategoryCount('Research') },
  { key: 'Guides', label: t('blog.filterGuides'), count: getCategoryCount('Guides') },
  { key: 'Industry', label: t('blog.filterIndustry'), count: getCategoryCount('Industry') },
])

// Build alternating row groups: duo (2 cards) then trio (3 cards)
const articleGroups = computed(() => {
  const items = filteredArticles.value
  const groups: { type: 'duo' | 'trio'; items: typeof items }[] = []
  let idx = 0
  let groupIndex = 0

  while (idx < items.length) {
    if (groupIndex % 2 === 0) {
      // Odd group (0-indexed even): duo layout
      groups.push({ type: 'duo', items: items.slice(idx, idx + 2) })
      idx += 2
    } else {
      // Even group (0-indexed odd): trio layout
      groups.push({ type: 'trio', items: items.slice(idx, idx + 3) })
      idx += 3
    }
    groupIndex++
  }

  return groups
})
</script>
