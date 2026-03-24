<template>
  <section class="py-20 lg:py-24 bg-[#fafaf8]">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12">
      <div class="rounded-2xl bg-white border border-gray-200/60 p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center gap-8">
        <div class="flex items-center gap-4 shrink-0">
          <img src="/images/testimonials/james.jpg" alt="James Mitchell" class="w-14 h-14 rounded-full object-cover" />
          <div>
            <p class="text-gray-900 font-medium text-[14px] font-inter">{{ $t('features.testimonialName') }}</p>
            <p class="text-gray-400 text-[12px] font-inter">{{ $t('features.testimonialRole') }}</p>
          </div>
        </div>
        <div class="flex-1 lg:border-l lg:border-gray-200/60 lg:pl-8">
          <p class="text-gray-600 text-[15px] lg:text-[16px] leading-[1.6] font-inter italic mb-5">
            "{{ $t('features.testimonialQuote') }}"
          </p>
          <div class="flex items-center gap-3">
            <div class="flex -space-x-2">
              <img v-for="(src, j) in avatarImages" :key="j" :src="src" class="w-7 h-7 rounded-full object-cover border-2 border-white" />
            </div>
            <span class="text-gray-400 text-[12px] font-inter">{{ $t('features.verifiedReviews') }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const avatarImages = [
  '/images/testimonials/james.jpg',
  '/images/testimonials/sophie.jpg',
  '/images/testimonials/marco.jpg',
  '/images/testimonials/elena.jpg',
  '/images/testimonials/david.jpg',
]
</script>
