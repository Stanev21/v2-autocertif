<template>
  <section class="py-16 sm:py-28 bg-white">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
      <!-- Heading row -->
      <div class="flex items-end justify-between mb-12">
        <div>
          <h2 class="text-[2rem] lg:text-[2.5rem] font-normal text-gray-900 leading-[1.1] mb-3 font-heading">
            {{ $t('blog.title') }}
          </h2>
          <p class="text-gray-500 text-[15px] leading-[1.7] font-inter max-w-lg">{{ $t('blog.desc') }}</p>
        </div>
        <NuxtLink :to="localePath('/blog')" class="hidden md:inline-flex items-center gap-1.5 text-gray-900 text-[14px] font-medium font-inter underline underline-offset-4 decoration-1 hover:decoration-2 transition-all flex-shrink-0">
          {{ $t('blog.cta') }}
        </NuxtLink>
      </div>

      <!-- 3-col cards -->
      <div class="grid md:grid-cols-3 gap-5">
        <NuxtLink v-for="(article, i) in articles" :key="i"
          :to="localePath(`/blog/${article.slug}`)"
          class="group flex flex-col rounded-lg p-3"
          style="background: #f5f5f0;">
          <div>
            <div class="relative flex aspect-[340/168] items-center justify-center rounded-md bg-white overflow-hidden">
              <!-- Tag with corner cutout -->
              <div class="absolute z-10" style="border-radius: 0px 0px 12px 0px; background: #f5f5f0; top: -1px; left: -1px;">
                <div class="absolute" style="height: 12px; width: 12px; transform: rotate(90deg); left: 0px; top: 100%; color: #f5f5f0;">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0V100H100C44.8 100 0 55.2 0 0Z" fill="currentColor" /></svg>
                </div>
                <div class="absolute" style="height: 12px; width: 12px; transform: rotate(90deg); left: 100%; top: 0px; color: #f5f5f0;">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0V100H100C44.8 100 0 55.2 0 0Z" fill="currentColor" /></svg>
                </div>
                <div class="pb-1.5 pr-1.5 md:pb-2">
                  <div class="text-[13px] rounded-pill bg-white px-3 py-1.5 font-medium leading-none text-gray-900 font-inter">
                    {{ article.tag }}
                  </div>
                </div>
              </div>
              <!-- Article image -->
              <img :src="blogImages[i]" :alt="article.title" class="w-full h-full object-cover" />
            </div>
          </div>
          <!-- Title -->
          <div class="mt-6 flex flex-auto flex-col px-2 pb-3 md:mt-10 md:px-5 md:pb-7">
            <h3 class="text-[16px] lg:text-[18px] font-medium text-gray-900 font-inter leading-snug max-w-[18.25rem] transition-colors duration-200 group-hover:text-coral">
              {{ article.title }}
            </h3>
          </div>
        </NuxtLink>
      </div>

      <!-- Mobile CTA -->
      <div class="mt-8 md:hidden">
        <NuxtLink :to="localePath('/blog')" class="inline-flex items-center gap-1.5 text-gray-900 text-[14px] font-medium font-inter underline underline-offset-4 decoration-1 hover:decoration-2 transition-all">
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
  return Array.isArray(raw) ? raw.slice(0, 3).map((a: any, i: number) => ({ slug: blogSlugs[i], tag: rt(a.category), read: rt(a.readTime) + ' min', title: rt(a.title), desc: rt(a.desc) })) : []
})
</script>
