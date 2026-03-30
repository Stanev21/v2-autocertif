<template>
  <!-- ContentSquare-style customer results: white bg, big metric + quote side by side -->
  <section class="py-28 bg-white">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12">
      <!-- Header -->
      <div class="mb-14">
        <h2 class="text-[2rem] lg:text-[2.5rem] font-normal text-gray-900 leading-[1.1] font-heading">
          {{ $t('testimonials.title') }}
        </h2>
      </div>

      <!-- Main content: metric left + quote right -->
      <div class="grid lg:grid-cols-5 gap-0 rounded-[1.5rem] overflow-hidden min-h-[400px]">
        <!-- Left: burgundy panel with big stat -->
        <div class="lg:col-span-2 bg-burgundy p-10 lg:p-14 flex flex-col justify-between relative overflow-hidden">
          <div class="absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-[0.15] blur-[80px]" style="background: radial-gradient(circle, #3B82F6 0%, transparent 70%);"></div>
          <div>
            <p class="text-[4.5rem] lg:text-[5.5rem] font-normal font-heading text-white leading-none mb-2">4.8</p>
            <div class="flex items-center gap-1 mb-6">
              <svg v-for="s in 5" :key="s" class="w-4 h-4 text-coral" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            </div>
            <p class="text-white/50 text-[14px] font-inter leading-[1.6]">Based on 1,218 verified reviews from buyers across Europe.</p>
          </div>
          <div class="mt-10">
            <div class="flex -space-x-2">
              <img v-for="(src, i) in avatarImages.slice(0, 4)" :key="i" :src="src" class="w-9 h-9 rounded-full object-cover border-2 border-burgundy" />
            </div>
          </div>
        </div>

        <!-- Right: rotating quote on light bg -->
        <div class="lg:col-span-3 bg-grey-light p-10 lg:p-14 flex flex-col justify-between">
          <div>
            <svg class="w-10 h-10 text-gray-300 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" /></svg>
            <p class="text-[1.25rem] lg:text-[1.4rem] text-gray-900 font-inter leading-[1.6] mb-8 transition-all duration-500">
              {{ testimonials[active]?.text }}
            </p>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <img :src="avatarImages[active]" :alt="testimonials[active]?.name" class="w-11 h-11 rounded-full object-cover" />
              <div>
                <p class="text-gray-900 font-medium text-[14px] font-inter">{{ testimonials[active]?.name }}</p>
                <p class="text-gray-400 text-[12px] font-inter">{{ testimonials[active]?.city }}</p>
              </div>
            </div>
            <!-- Nav arrows -->
            <div class="flex items-center gap-2">
              <button @click="prev" class="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-900 transition-all cursor-pointer">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
              </button>
              <button @click="next" class="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-900 transition-all cursor-pointer">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
              </button>
            </div>
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
const { tm, rt } = useI18n()
const testimonials = computed(() => {
  const raw = tm('testimonials.items')
  return Array.isArray(raw) ? raw.map((item: any) => ({ name: rt(item.name), city: rt(item.city), text: rt(item.text) })) : []
})
const active = ref(0)
const next = () => { if (testimonials.value.length) active.value = (active.value + 1) % testimonials.value.length }
const prev = () => { if (testimonials.value.length) active.value = (active.value - 1 + testimonials.value.length) % testimonials.value.length }

onMounted(() => { setInterval(next, 7000) })
</script>
