<template>
  <section class="py-24 lg:py-32 bg-[#fafaf8]">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12">
      <div class="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
        <h2 class="text-[2.25rem] lg:text-[3rem] font-normal text-gray-900 leading-[1.08] font-heading">
          {{ $t('affiliate.stepsTitle') }}
        </h2>
      </div>

      <div class="grid lg:grid-cols-3 gap-0 rounded-[1.75rem] overflow-hidden bg-[#111827]">
        <div
          v-for="(step, i) in steps"
          :key="i"
          class="group relative cursor-default overflow-hidden"
          @mouseenter="hoveredStep = i"
          @mouseleave="hoveredStep = -1"
        >
          <!-- Coral glow on hover -->
          <div class="absolute -top-20 -right-20 w-[250px] h-[250px] rounded-full blur-[80px] transition-opacity duration-700"
            :class="hoveredStep === i ? 'opacity-25' : 'opacity-0'"
            style="background: radial-gradient(circle, #3B82F6, transparent 70%);"></div>

          <!-- Divider -->
          <div v-if="i < 2" class="hidden lg:block absolute right-0 top-[12%] bottom-[12%] w-px bg-white/[0.06] z-10"></div>

          <div class="relative z-10 p-8 lg:p-10 min-h-[360px] flex flex-col">
            <!-- Top: number + icon -->
            <div class="flex items-start justify-between mb-auto">
              <span class="text-[5rem] lg:text-[6rem] font-heading font-normal leading-none transition-all duration-500"
                :class="hoveredStep === i ? 'text-coral' : 'text-white/25'">
                0{{ i + 1 }}
              </span>
              <div class="w-11 h-11 rounded-xl flex items-center justify-center mt-3 transition-all duration-300"
                :class="hoveredStep === i ? 'bg-coral/15' : 'bg-white/[0.06]'">
                <svg class="w-5 h-5 transition-colors duration-300"
                  :class="hoveredStep === i ? 'text-coral' : 'text-white/30'"
                  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="stepIcons[i]" />
                </svg>
              </div>
            </div>

            <!-- Bottom: content -->
            <div class="mt-auto">
              <h3 class="text-[1.4rem] lg:text-[1.5rem] font-heading font-normal text-white leading-[1.2] mb-3">
                {{ step.title }}
              </h3>
              <p class="text-white/35 text-[14px] leading-[1.75] font-inter">
                {{ step.desc }}
              </p>
            </div>

            <!-- Bottom accent line -->
            <div class="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-500 origin-left"
              :class="hoveredStep === i ? 'bg-coral scale-x-100' : 'bg-transparent scale-x-0'"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const hoveredStep = ref(-1)

const steps = computed(() => {
  const raw = tm('affiliate.steps')
  return Array.isArray(raw) ? raw.map((s: any) => ({ title: rt(s.title), desc: rt(s.desc) })) : []
})

const stepIcons = [
  'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z',
  'M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m9.86-2.54a4.5 4.5 0 0 0-1.242-7.244l4.5-4.5a4.5 4.5 0 0 1 6.364 6.364l-1.757 1.757',
  'M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z',
]
</script>
