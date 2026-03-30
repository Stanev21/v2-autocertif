<template>
  <section id="capabilities" class="py-16 sm:py-24 lg:py-32 bg-white">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
      <!-- Section header -->
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24 gap-6">
        <div class="max-w-xl">
          <span class="text-[13px] font-medium font-inter text-coral uppercase tracking-wider mb-4 block">{{ $t('features.navCapabilities') }}</span>
          <h2 class="text-[1.75rem] sm:text-[2.25rem] lg:text-[3rem] font-normal text-gray-900 leading-[1.08] font-heading">
            {{ $t('features.capabilitiesTitle') }}
          </h2>
        </div>
        <p class="text-gray-500 text-[15px] leading-[1.6] font-inter max-w-md">{{ $t('features.capabilitiesSubtitle') }}</p>
      </div>

      <!-- Capabilities accordion -->
      <div class="space-y-3">
        <div
          v-for="(cap, i) in capabilities"
          :key="i"
          class="group rounded-2xl border transition-all duration-500 overflow-hidden cursor-pointer"
          :class="expanded === i
            ? 'border-gray-200 bg-[#fafaf8] shadow-sm'
            : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50/50'"
          @click="expanded = expanded === i ? -1 : i"
        >
          <!-- Header row -->
          <div class="flex items-center justify-between p-6 lg:px-10 lg:py-7">
            <div class="flex items-center gap-5">
              <!-- Number -->
              <span class="text-[2rem] font-heading font-normal leading-none transition-colors duration-300 w-10 text-center"
                :class="expanded === i ? 'text-coral' : 'text-gray-200'">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <!-- Title -->
              <h3 class="text-[1.1rem] lg:text-[1.25rem] font-heading font-normal text-gray-900 leading-snug">
                {{ cap.title }}
              </h3>
            </div>
            <div class="flex items-center gap-4">
              <!-- Metric pill (visible on desktop) -->
              <div class="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 transition-colors duration-300"
                :class="expanded === i ? 'bg-coral/10' : 'bg-gray-100'">
                <span class="text-[13px] font-heading font-normal"
                  :class="expanded === i ? 'text-coral' : 'text-gray-500'">{{ cap.metric }}</span>
                <span class="text-[11px] font-inter text-gray-400">{{ cap.metricLabel }}</span>
              </div>
              <!-- Toggle icon -->
              <div class="w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300"
                :class="expanded === i ? 'border-coral bg-coral/5 rotate-45' : 'border-gray-200'">
                <svg class="w-4 h-4 transition-colors duration-300"
                  :class="expanded === i ? 'text-coral' : 'text-gray-400'"
                  fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Expanded content -->
          <transition
            @enter="onEnter"
            @leave="onLeave"
          >
            <div v-if="expanded === i" class="overflow-hidden">
              <div class="px-6 lg:px-10 pb-8 lg:pb-10">
                <div class="flex flex-col lg:flex-row gap-6 sm:gap-10 lg:gap-16 pl-0 lg:pl-[60px]">
                  <!-- Text content -->
                  <div class="flex-1">
                    <h4 class="text-[1.5rem] lg:text-[1.75rem] font-heading font-normal text-gray-900 leading-[1.15] mb-5">
                      {{ cap.headline }}
                    </h4>
                    <p class="text-gray-500 text-[15px] leading-[1.75] font-inter mb-8">
                      {{ cap.desc }}
                    </p>
                    <a href="#" class="inline-flex items-center gap-2 text-gray-900 text-[14px] font-medium font-inter group/link">
                      <span class="underline underline-offset-4 decoration-1 group-hover/link:decoration-2 transition-all">{{ $t('checks.cta') }}</span>
                      <svg class="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </div>

                  <!-- Visual card with image -->
                  <div class="lg:w-[340px] shrink-0">
                    <div class="rounded-2xl overflow-hidden h-full flex flex-col"
                      :class="i % 2 === 0 ? 'bg-[#0A1020]' : 'bg-white border border-gray-200/60'">
                      <!-- Image -->
                      <div class="relative h-[160px] overflow-hidden">
                        <img :src="capImages[i]" :alt="cap.title" class="w-full h-full object-cover" />
                        <div class="absolute inset-0"
                          :class="i % 2 === 0
                            ? 'bg-gradient-to-t from-[#0A1020] via-[#0A1020]/30 to-transparent'
                            : 'bg-gradient-to-t from-white via-white/30 to-transparent'"></div>
                      </div>
                      <!-- Metric display -->
                      <div class="p-6 flex-1 flex flex-col justify-end">
                        <p class="text-[3rem] font-heading font-normal leading-none mb-2"
                          :class="i % 2 === 0 ? 'text-coral' : 'text-gray-900'">{{ cap.metric }}</p>
                        <p class="text-[13px] font-inter"
                          :class="i % 2 === 0 ? 'text-white/40' : 'text-gray-400'">{{ cap.metricLabel }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const expanded = ref(0)

const capabilities = computed(() => {
  const raw = tm('features.capabilities')
  return Array.isArray(raw) ? raw.map((c: any) => ({
    title: rt(c.title), headline: rt(c.headline), desc: rt(c.desc),
    metric: rt(c.metric), metricLabel: rt(c.metricLabel),
  })) : []
})

const capImages = [
  '/images/features/mileage.jpg',
  '/images/features/damage.jpg',
  '/images/features/theft.jpg',
  '/images/features/inspection.jpg',
  '/images/features/fuel.jpg',
  '/images/features/disasters.jpg',
]

const capIcons = [
  'M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5',
  'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126Z',
  'M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z',
  'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',
  'M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418',
  'M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z',
]

const onEnter = (el: Element, done: () => void) => {
  const htmlEl = el as HTMLElement
  htmlEl.style.height = '0'
  htmlEl.style.opacity = '0'
  htmlEl.offsetHeight // force reflow
  htmlEl.style.transition = 'height 0.4s ease, opacity 0.3s ease 0.1s'
  htmlEl.style.height = htmlEl.scrollHeight + 'px'
  htmlEl.style.opacity = '1'
  htmlEl.addEventListener('transitionend', () => {
    htmlEl.style.height = 'auto'
    done()
  }, { once: true })
}

const onLeave = (el: Element, done: () => void) => {
  const htmlEl = el as HTMLElement
  htmlEl.style.height = htmlEl.scrollHeight + 'px'
  htmlEl.style.opacity = '1'
  htmlEl.offsetHeight
  htmlEl.style.transition = 'height 0.3s ease 0.05s, opacity 0.2s ease'
  htmlEl.style.height = '0'
  htmlEl.style.opacity = '0'
  htmlEl.addEventListener('transitionend', done, { once: true })
}
</script>
