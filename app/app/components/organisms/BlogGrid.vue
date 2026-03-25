<template>
  <section class="py-16 lg:py-20 bg-white border-t border-gray-100">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12">
      <!-- Filter bar -->
      <div class="flex items-center justify-between mb-12 lg:mb-14">
        <h2 class="text-[1.5rem] lg:text-[1.75rem] font-heading font-normal text-gray-900">Latest articles</h2>

        <!-- Topic dropdown -->
        <div class="relative">
          <button
            class="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white text-[13px] font-inter font-medium text-gray-600 hover:border-gray-300 transition-colors cursor-pointer"
            @click="showDropdown = !showDropdown"
          >
            {{ activeLabel }}
            <svg class="w-4 h-4 text-gray-400 transition-transform duration-200" :class="showDropdown ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div v-if="showDropdown" class="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl border border-gray-200 shadow-lg z-20 py-2">
            <button
              v-for="cat in categories"
              :key="cat.key"
              class="w-full text-left px-4 py-2.5 text-[13px] font-inter transition-colors cursor-pointer flex items-center justify-between"
              :class="activeFilter === cat.key ? 'text-coral font-medium bg-coral/[0.04]' : 'text-gray-600 hover:bg-gray-50'"
              @click="activeFilter = cat.key; showDropdown = false"
            >
              {{ cat.label }}
              <span class="text-[11px] text-gray-300">{{ cat.key === 'all' ? articles.length : getCategoryCount(cat.key) }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Articles grid: 3 columns -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12">
        <article
          v-for="(article, i) in filteredArticles"
          :key="i"
          class="group cursor-pointer"
        >
          <!-- Image -->
          <div class="rounded-xl overflow-hidden mb-5 aspect-[16/9]">
            <img :src="article.image" :alt="article.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>

          <!-- Category + read time -->
          <div class="flex items-center gap-3 mb-3">
            <span class="text-coral text-[12px] font-inter font-semibold uppercase tracking-wider">{{ article.category }}</span>
            <span class="text-gray-300 text-[12px] font-inter">{{ article.readTime }} {{ $t('blog.readTime') }}</span>
          </div>

          <!-- Title -->
          <h3 class="text-[1.1rem] lg:text-[1.2rem] font-heading font-normal text-gray-900 leading-[1.3] mb-3 group-hover:text-coral transition-colors duration-300">
            {{ article.title }}
          </h3>

          <!-- Excerpt -->
          <p class="text-gray-400 text-[13px] leading-[1.7] font-inter line-clamp-2 mb-5">{{ article.desc }}</p>

          <!-- Author -->
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-[11px] font-inter font-bold">A</div>
            <span class="text-gray-500 text-[13px] font-inter">{{ $t('blog.author') }}</span>
          </div>
        </article>
      </div>

      <!-- Empty state -->
      <div v-if="filteredArticles.length === 0" class="text-center py-20">
        <p class="text-gray-400 text-[15px] font-inter">No articles found in this category.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n()
const activeFilter = ref('all')
const showDropdown = ref(false)

const categories = computed(() => [
  { key: 'all', label: t('blog.filterAll') },
  { key: 'Product', label: t('blog.filterProduct') },
  { key: 'Research', label: t('blog.filterResearch') },
  { key: 'Guides', label: t('blog.filterGuides') },
  { key: 'Industry', label: t('blog.filterIndustry') },
])

const activeLabel = computed(() => {
  const found = categories.value.find(c => c.key === activeFilter.value)
  return found ? found.label : ''
})

const articles = computed(() => {
  const raw = tm('blog.articles')
  if (!Array.isArray(raw)) return []
  // Skip the first 4 (shown in hero)
  return raw.slice(4).map((a: any) => ({
    title: rt(a.title),
    category: rt(a.category),
    desc: rt(a.desc),
    readTime: rt(a.readTime),
    image: typeof a.image === 'string' ? a.image : rt(a.image),
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
  return articles.value.filter(a => {
    const mapped = categoryMap[a.category] || a.category
    return mapped === key
  }).length
}
</script>
