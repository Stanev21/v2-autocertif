<template>
  <section class="py-24 lg:py-32 bg-white">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12">
      <div class="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
        <span class="text-[13px] font-medium font-inter text-coral uppercase tracking-wider mb-4 block">Commitments</span>
        <h2 class="text-[2.25rem] lg:text-[3rem] font-normal text-gray-900 leading-[1.08] font-heading">
          {{ $t('about.commitmentsTitle') }}
        </h2>
      </div>

      <div class="grid lg:grid-cols-3 gap-6">
        <div
          v-for="(c, i) in commitments"
          :key="i"
          class="group relative rounded-[1.5rem] overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
          :class="i === 0 ? 'bg-[#111827] lg:col-span-1' : 'bg-[#fafaf8] border border-gray-200/60'"
        >
          <!-- Glow for first card -->
          <div v-if="i === 0" class="absolute -top-20 -right-20 w-[250px] h-[250px] rounded-full opacity-20 blur-[80px]" style="background: radial-gradient(circle, #3B82F6, transparent 70%);"></div>

          <div class="relative z-10 p-8 lg:p-10 min-h-[360px] flex flex-col">
            <!-- Icon -->
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300"
              :class="i === 0 ? 'bg-coral/15' : 'bg-gray-100 group-hover:bg-coral/10'">
              <svg class="w-5 h-5 transition-colors duration-300"
                :class="i === 0 ? 'text-coral' : 'text-gray-400 group-hover:text-coral'"
                fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" :d="icons[i]" />
              </svg>
            </div>

            <!-- Note badge -->
            <span v-if="c.note" class="inline-block self-start px-3 py-1 rounded-full text-[10px] font-inter font-semibold uppercase tracking-wider mb-4"
              :class="i === 0 ? 'bg-coral/10 text-coral' : 'bg-gray-100 text-gray-500'">
              {{ c.note }}
            </span>

            <h3 class="text-[1.35rem] lg:text-[1.5rem] font-heading font-normal leading-[1.2] mb-4"
              :class="i === 0 ? 'text-white' : 'text-gray-900'">
              {{ c.title }}
            </h3>
            <p class="text-[14px] leading-[1.75] font-inter mt-auto"
              :class="i === 0 ? 'text-white/40' : 'text-gray-400'">
              {{ c.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()

const commitments = computed(() => {
  const raw = tm('about.commitments')
  return Array.isArray(raw) ? raw.map((c: any) => ({
    title: rt(c.title),
    desc: rt(c.desc),
    note: c.note ? rt(c.note) : null,
  })) : []
})

const icons = [
  'M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  'M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5',
  'M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418',
]
</script>
