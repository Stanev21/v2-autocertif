<template>
  <section class="relative py-20 sm:py-28 lg:py-32 bg-[#0A1020] overflow-hidden">
    <!-- Decorative orb -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[500px] aspect-square rounded-full bg-coral/5 blur-[120px] pointer-events-none" />

    <div class="relative max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
      <!-- Header area (left-aligned) -->
      <div>
        <span class="text-coral text-[12px] uppercase tracking-widest font-inter font-semibold mb-4 block">
          {{ $t('blog.subtitle') }}
        </span>
        <h2 class="text-white font-heading text-[2rem] lg:text-[2.5rem] leading-[1.1] mb-4">
          {{ $t('blog.title') }}
        </h2>
        <p class="text-white/40 text-[15px] font-inter max-w-lg mb-4">
          {{ $t('blog.desc') }}
        </p>
        <NuxtLink
          :to="localePath('/blog')"
          class="hidden md:inline-block text-white/60 text-[14px] font-inter font-medium underline underline-offset-4 hover:text-white transition-colors mb-14 block"
        >
          {{ $t('blog.cta') }}
        </NuxtLink>
      </div>

      <!-- 3-col cards -->
      <div class="grid md:grid-cols-3 gap-6">
        <NuxtLink
          v-for="(article, i) in articles"
          :key="i"
          :to="localePath(`/blog/${article.slug}`)"
          class="group block bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-300 hover:border-coral/30 hover:-translate-y-1"
        >
          <!-- Image wrapper -->
          <div class="p-3 pb-0">
            <div class="rounded-xl overflow-hidden aspect-[16/10]">
              <img
                :src="blogImages[i]"
                :alt="article.title"
                class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <!-- Content area -->
          <div class="p-5 pt-4">
            <span class="text-coral text-[11px] font-inter font-semibold uppercase tracking-wider mb-2 block">
              {{ article.tag }}
            </span>
            <h3 class="text-white font-heading text-[1rem] lg:text-[1.1rem] leading-[1.3] line-clamp-2 group-hover:text-coral transition-colors duration-300 mb-2">
              {{ article.title }}
            </h3>
            <span class="text-white/30 text-[12px] font-inter">
              {{ article.read }}
            </span>
          </div>
        </NuxtLink>
      </div>

      <!-- Mobile CTA -->
      <div class="mt-8 md:hidden">
        <NuxtLink
          :to="localePath('/blog')"
          class="text-white/60 text-[14px] font-inter font-medium underline underline-offset-4 hover:text-white transition-colors"
        >
          {{ $t('blog.cta') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const blogSlugs = [
  'vehicle-history-report-features',
  'understanding-odometer-fraud',
  'how-to-read-vehicle-history-report',
]
const blogImages = [
  '/images/blog/vehicle-history.jpg',
  '/images/blog/odometer-fraud.jpg',
  '/images/blog/ev-battery.jpg',
]
const localePath = useLocalePath()
const { tm, rt } = useI18n()
const articles = computed(() => {
  const raw = tm('blog.articles')
  return Array.isArray(raw)
    ? raw.slice(0, 3).map((a: any, i: number) => ({
        slug: blogSlugs[i],
        tag: rt(a.category),
        title: rt(a.title),
        desc: rt(a.desc),
        read: rt(a.readTime) + ' min',
      }))
    : []
})
</script>
