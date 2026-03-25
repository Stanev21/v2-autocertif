<template>
  <section class="py-24 lg:py-32 bg-[#fafaf8]">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12">
      <div class="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
        <h2 class="text-[2.25rem] lg:text-[3rem] font-normal text-gray-900 leading-[1.08] font-heading">
          {{ $t('about.objectivesTitle') }}
        </h2>
      </div>

      <div class="grid lg:grid-cols-3 gap-0 rounded-[1.75rem] overflow-hidden bg-[#1a1a1f]">
        <div
          v-for="(obj, i) in objectives"
          :key="i"
          class="group relative overflow-hidden"
          @mouseenter="hovered = i"
          @mouseleave="hovered = -1"
        >
          <!-- Glow -->
          <div class="absolute -top-20 -right-20 w-[250px] h-[250px] rounded-full blur-[80px] transition-opacity duration-700"
            :class="hovered === i ? 'opacity-25' : 'opacity-0'"
            style="background: radial-gradient(circle, #CD3246, transparent 70%);"></div>

          <!-- Divider -->
          <div v-if="i < 2" class="hidden lg:block absolute right-0 top-[12%] bottom-[12%] w-px bg-white/[0.06] z-10"></div>

          <div class="relative z-10 p-8 lg:p-10 min-h-[340px] flex flex-col">
            <!-- Label tag -->
            <span class="inline-block self-start px-3 py-1 rounded-full text-[11px] font-inter font-semibold uppercase tracking-wider mb-8 transition-colors duration-300"
              :class="hovered === i ? 'bg-coral/15 text-coral' : 'bg-white/[0.06] text-white/30'">
              {{ obj.label }}
            </span>

            <div>
              <h3 class="text-[1.4rem] lg:text-[1.5rem] font-heading font-normal text-white leading-[1.2] mb-3">
                {{ obj.title }}
              </h3>
              <p class="text-white/35 text-[14px] leading-[1.75] font-inter">
                {{ obj.desc }}
              </p>
            </div>

            <!-- Accent -->
            <div class="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-500 origin-left"
              :class="hovered === i ? 'bg-coral scale-x-100' : 'bg-transparent scale-x-0'"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const hovered = ref(-1)

const objectives = computed(() => {
  const raw = tm('about.objectives')
  return Array.isArray(raw) ? raw.map((o: any) => ({
    label: rt(o.label),
    title: rt(o.title),
    desc: rt(o.desc),
  })) : []
})
</script>
