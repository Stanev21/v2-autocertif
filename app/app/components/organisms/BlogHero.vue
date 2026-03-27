<template>
  <section class="bg-white pt-32 lg:pt-40 pb-12 lg:pb-16">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12">
      <!-- Simple editorial heading -->
      <div class="max-w-3xl mb-14 lg:mb-20">
        <h1 class="text-[3rem] md:text-[4rem] lg:text-[5rem] font-normal text-gray-900 leading-[1.02] font-heading tracking-[-0.03em] mb-6">
          {{ $t('blog.title') }}
        </h1>
        <p class="text-gray-400 text-[1.1rem] lg:text-[1.25rem] leading-[1.6] font-inter max-w-xl">
          {{ $t('blog.subtitle') }}
        </p>
      </div>

      <!-- Featured articles: 1 large + 3 small -->
      <div class="grid lg:grid-cols-[1.3fr,1fr] gap-5">
        <!-- Primary featured -->
        <NuxtLink v-if="featured.length > 0" :to="`/blog/${slugs[0]}`" class="group relative rounded-[1.25rem] overflow-hidden cursor-pointer h-[420px] lg:h-full block">
          <img :src="featured[0].image" :alt="featured[0].title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-7 lg:p-9">
            <span class="inline-block px-3 py-1 rounded-full text-[11px] font-inter font-semibold uppercase tracking-wider bg-white/15 backdrop-blur-sm text-white mb-4">
              {{ featured[0].category }}
            </span>
            <h2 class="text-[1.5rem] lg:text-[1.75rem] font-heading font-normal text-white leading-[1.2] mb-3 group-hover:text-coral transition-colors duration-300">
              {{ featured[0].title }}
            </h2>
            <p class="text-white/60 text-[14px] leading-[1.6] font-inter line-clamp-2 max-w-lg mb-4">{{ featured[0].desc }}</p>
            <div class="flex items-center gap-3">
              <div class="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-[10px] font-inter font-bold">A</div>
              <span class="text-white/50 text-[12px] font-inter">{{ $t('blog.author') }}</span>
              <span class="w-1 h-1 rounded-full bg-white/30"></span>
              <span class="text-white/50 text-[12px] font-inter">{{ featured[0].readTime }} {{ $t('blog.readTime') }}</span>
            </div>
          </div>
        </NuxtLink>

        <!-- 3 stacked cards -->
        <div class="flex flex-col gap-5">
          <NuxtLink
            v-for="(article, i) in featured.slice(1, 4)"
            :key="i"
            :to="`/blog/${slugs[i + 1]}`"
            class="group flex gap-5 rounded-[1.25rem] bg-[#f7f8f6] p-4 cursor-pointer hover:bg-[#f0f1ee] transition-colors duration-300"
          >
            <div class="w-[140px] h-[110px] rounded-xl overflow-hidden shrink-0">
              <img :src="article.image" :alt="article.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div class="flex flex-col justify-center min-w-0 py-1">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-coral text-[11px] font-inter font-semibold uppercase tracking-wider">{{ article.category }}</span>
                <span class="text-gray-300 text-[11px] font-inter">{{ article.readTime }} {{ $t('blog.readTime') }}</span>
              </div>
              <h3 class="text-[15px] font-heading font-normal text-gray-900 leading-[1.3] line-clamp-2 group-hover:text-coral transition-colors duration-300">
                {{ article.title }}
              </h3>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { blogArticles } from '~/composables/useBlogArticles'

const { t, tm, rt } = useI18n()
const slugs = blogArticles.map(a => a.slug)

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
</script>
