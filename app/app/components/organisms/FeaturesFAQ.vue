<template>
  <section id="faq" class="py-24 lg:py-32 bg-[#fafaf8]">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12">
      <div class="grid lg:grid-cols-5 gap-12 lg:gap-20">
        <!-- Left: sticky header -->
        <div class="lg:col-span-2">
          <div class="lg:sticky lg:top-40">
            <span class="text-[13px] font-medium font-inter text-coral uppercase tracking-wider mb-4 block">{{ $t('features.navFaq') }}</span>
            <h2 class="text-[2.25rem] lg:text-[2.75rem] font-normal text-gray-900 leading-[1.08] font-heading mb-5">
              {{ $t('features.faqTitle') }}
            </h2>
            <p class="text-gray-500 text-[15px] leading-[1.6] font-inter mb-8">
              {{ $t('features.faqSubtitle') }}
            </p>
            <button class="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white text-[14px] font-medium font-inter hover:bg-gray-800 transition-all cursor-pointer">
              {{ $t('features.cta') }}
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Right: FAQ accordion -->
        <div class="lg:col-span-3 space-y-3">
          <div
            v-for="(item, i) in faqItems"
            :key="i"
            class="rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer"
            :class="openFaq === i ? 'border-gray-200 bg-white shadow-sm' : 'border-gray-200/60 bg-white hover:border-gray-300'"
            @click="openFaq = openFaq === i ? -1 : i"
          >
            <!-- Question -->
            <div class="flex items-center justify-between p-6">
              <h3 class="text-[15px] font-inter font-medium text-gray-900 leading-snug pr-4">{{ item.q }}</h3>
              <div class="w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300"
                :class="openFaq === i ? 'border-coral bg-coral/5 rotate-45' : 'border-gray-200'">
                <svg class="w-3.5 h-3.5 transition-colors duration-300"
                  :class="openFaq === i ? 'text-coral' : 'text-gray-400'"
                  fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
            </div>

            <!-- Answer -->
            <transition
              @enter="onEnter"
              @leave="onLeave"
            >
              <div v-if="openFaq === i" class="overflow-hidden">
                <div class="px-6 pb-6">
                  <p class="text-gray-500 text-[14px] leading-[1.75] font-inter border-t border-gray-100 pt-4">
                    {{ item.a }}
                  </p>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const openFaq = ref(0)

const faqItems = computed(() => {
  const raw = tm('features.faq')
  return Array.isArray(raw) ? raw.map((f: any) => ({ q: rt(f.q), a: rt(f.a) })) : []
})

const onEnter = (el: Element, done: () => void) => {
  const htmlEl = el as HTMLElement
  htmlEl.style.height = '0'
  htmlEl.style.opacity = '0'
  htmlEl.offsetHeight
  htmlEl.style.transition = 'height 0.35s ease, opacity 0.25s ease 0.1s'
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
  htmlEl.style.transition = 'height 0.25s ease 0.05s, opacity 0.15s ease'
  htmlEl.style.height = '0'
  htmlEl.style.opacity = '0'
  htmlEl.addEventListener('transitionend', done, { once: true })
}
</script>
