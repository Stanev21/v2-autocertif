<template>
  <section id="use-cases" class="py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12">
      <!-- Section header -->
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-20 gap-6">
        <div class="max-w-xl">
          <span class="text-[13px] font-medium font-inter text-coral uppercase tracking-wider mb-4 block">{{ $t('features.navUseCases') }}</span>
          <h2 class="text-[2.25rem] lg:text-[3rem] font-normal text-white leading-[1.08] font-heading">
            {{ $t('features.useCasesTitle') }}
          </h2>
        </div>
      </div>

      <!-- Horizontal scrolling cards -->
      <div class="flex gap-5 overflow-x-auto pb-4 -mx-8 px-8 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-4 snap-x snap-mandatory scrollbar-hide">
        <div
          v-for="(uc, i) in useCases"
          :key="i"
          class="group relative flex-shrink-0 w-[300px] lg:w-auto snap-start rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer"
          :class="activeCase === i
            ? 'bg-gradient-to-br from-coral/20 via-coral/5 to-transparent border border-coral/20'
            : 'bg-white/[0.03] border border-white/[0.06] hover:border-white/10 hover:bg-white/[0.05]'"
          @mouseenter="activeCase = i"
        >
          <div class="p-7 lg:p-8 h-full flex flex-col min-h-[360px]">
            <!-- Number + status -->
            <div class="flex items-center justify-between mb-8">
              <span class="text-[13px] font-inter font-medium px-3 py-1 rounded-full transition-colors duration-300"
                :class="activeCase === i ? 'text-coral bg-coral/10' : 'text-white/30 bg-white/[0.04]'">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <div class="w-2 h-2 rounded-full transition-colors duration-300"
                :class="activeCase === i ? 'bg-coral' : 'bg-white/10'"></div>
            </div>

            <!-- Content -->
            <div class="flex-1">
              <h3 class="text-[1.25rem] font-heading font-normal text-white leading-[1.2] mb-4">
                {{ uc.title }}
              </h3>
              <p class="text-white/40 text-[14px] leading-[1.7] font-inter">
                {{ uc.desc }}
              </p>
            </div>

            <!-- Stat -->
            <div class="mt-8 pt-6 border-t transition-colors duration-300"
              :class="activeCase === i ? 'border-coral/20' : 'border-white/[0.06]'">
              <p class="text-[2.5rem] font-heading font-normal leading-none mb-1 transition-colors duration-300"
                :class="activeCase === i ? 'text-coral' : 'text-white/80'">
                {{ uc.stat }}
              </p>
              <p class="text-white/30 text-[12px] font-inter">{{ uc.statLabel }}</p>
            </div>
          </div>

          <!-- Bottom glow on active -->
          <div class="absolute bottom-0 left-0 right-0 h-px transition-all duration-500"
            :class="activeCase === i ? 'bg-gradient-to-r from-transparent via-coral to-transparent' : 'bg-transparent'"></div>
        </div>
      </div>

      <!-- Trust logos -->
      <div class="mt-20 pt-12 border-t border-white/[0.06]">
        <p class="text-white/20 text-[13px] font-inter text-center mb-8">{{ $t('hero.trust') }}</p>
        <div class="flex items-center justify-center gap-14 flex-wrap">
          <span v-for="name in ['iCarros', 'Webmotors', 'OLX Autos', 'Kavak', 'Localiza']" :key="name"
            class="text-white/15 text-[16px] font-bold font-heading tracking-wider hover:text-white/30 transition-colors">{{ name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const activeCase = ref(0)

const useCases = computed(() => {
  const raw = tm('features.useCases')
  return Array.isArray(raw) ? raw.map((uc: any) => ({
    title: rt(uc.title), desc: rt(uc.desc), stat: rt(uc.stat), statLabel: rt(uc.statLabel),
  })) : []
})
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>
