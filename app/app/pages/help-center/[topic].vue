<template>
  <div>
    <OrganismsTheHeader />

    <!-- 404 state -->
    <template v-if="!isValidTopic">
      <section class="bg-white pt-28 sm:pt-36 lg:pt-40 pb-20">
        <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <h1 class="font-heading text-[2rem] sm:text-[2.5rem] text-gray-900 mb-4">
            {{ $t('helpTopics.topicNotFound') }}
          </h1>
          <p class="text-gray-400 text-[1.1rem] font-inter mb-8">
            {{ $t('helpTopics.topicNotFoundDesc') }}
          </p>
          <NuxtLink
            :to="localePath('/help-center')"
            class="inline-flex items-center gap-2 text-coral font-inter font-medium hover:underline"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            {{ $t('helpTopics.backToHelpCenter') }}
          </NuxtLink>
        </div>
      </section>
    </template>

    <!-- Topic page -->
    <template v-else>
      <!-- Header + Breadcrumb -->
      <section class="bg-white pt-28 sm:pt-36 lg:pt-40 pb-12">
        <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
          <!-- Breadcrumb -->
          <nav class="flex items-center gap-1 text-[14px] font-inter">
            <NuxtLink :to="localePath('/help-center')" class="text-coral hover:underline">
              {{ $t('help.title') }}
            </NuxtLink>
            <span class="text-gray-300">/</span>
            <span class="text-gray-400">{{ topicTitle }}</span>
          </nav>

          <!-- Topic icon -->
          <div class="w-16 h-16 rounded-2xl bg-coral/10 flex items-center justify-center mt-6 mb-6">
            <svg class="w-7 h-7 text-coral" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" :d="currentIcon" />
            </svg>
          </div>

          <!-- Title -->
          <h1 class="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3rem] text-gray-900 mb-4">
            {{ topicTitle }}
          </h1>

          <!-- Subtitle -->
          <p class="text-gray-400 text-[1.1rem] font-inter max-w-2xl mb-12">
            {{ topicSubtitle }}
          </p>
        </div>
      </section>

      <!-- Content sections -->
      <section class="bg-[#f7f8f6] py-16 sm:py-20">
        <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
          <div class="lg:grid lg:grid-cols-[280px,1fr] gap-12">
            <!-- Sidebar -->
            <aside class="hidden lg:block">
              <nav class="sticky top-28">
                <ul class="space-y-1">
                  <li v-for="(section, i) in sections" :key="i">
                    <a
                      :href="'#section-' + i"
                      class="block py-2 px-4 text-[14px] font-inter rounded-lg transition-colors duration-200"
                      :class="activeSection === i
                        ? 'text-coral border-l-2 border-coral bg-coral/5'
                        : 'text-gray-400 border-l-2 border-transparent hover:text-gray-600 hover:border-gray-200'"
                      @click.prevent="scrollToSection(i)"
                    >
                      {{ section.title }}
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>

            <!-- Content -->
            <div>
              <div
                v-for="(section, i) in sections"
                :key="i"
                :id="'section-' + i"
                class="bg-white rounded-2xl p-8 sm:p-10 mb-6"
              >
                <h2 class="font-heading text-[1.25rem] text-gray-900 mb-4">
                  {{ section.title }}
                </h2>
                <p class="text-gray-500 text-[15px] leading-[1.85] font-inter whitespace-pre-line">
                  {{ section.content }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom CTA -->
      <section class="bg-[#0A1020] py-16 sm:py-20">
        <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <h2 class="font-heading text-[1.75rem] sm:text-[2rem] text-white mb-6">
            {{ $t('helpTopics.stillNeedHelp') }}
          </h2>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink
              :to="localePath('/contact')"
              class="inline-flex items-center gap-2 bg-coral text-white font-inter font-medium px-6 py-3 rounded-xl hover:bg-coral/90 transition-colors"
            >
              {{ $t('helpTopics.contactSupport') }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/help-center')"
              class="inline-flex items-center gap-2 text-gray-400 font-inter font-medium px-6 py-3 rounded-xl border border-gray-700 hover:border-gray-500 hover:text-white transition-colors"
            >
              {{ $t('helpTopics.backToHelpCenter') }}
            </NuxtLink>
          </div>
        </div>
      </section>
    </template>

    <OrganismsTheFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { tm, rt } = useI18n()
const localePath = useLocalePath()

const topicSlugs = [
  'getting-started',
  'reports-data',
  'vehicle-information',
  'account-billing',
  'business-solutions',
  'privacy-security',
]

const topicIcons = [
  'M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5',
  'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z',
  'M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12',
  'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z',
  'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
  'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',
]

const slug = computed(() => route.params.topic as string)
const topicIndex = computed(() => topicSlugs.indexOf(slug.value))
const isValidTopic = computed(() => topicIndex.value !== -1)
const currentIcon = computed(() => topicIcons[topicIndex.value] || '')

const topicTitle = computed(() => {
  if (!isValidTopic.value) return ''
  const raw = tm(`helpTopics.${slug.value}.title`)
  return typeof raw === 'string' ? raw : rt(raw)
})

const topicSubtitle = computed(() => {
  if (!isValidTopic.value) return ''
  const raw = tm(`helpTopics.${slug.value}.subtitle`)
  return typeof raw === 'string' ? raw : rt(raw)
})

const sections = computed(() => {
  if (!isValidTopic.value) return []
  const raw = tm(`helpTopics.${slug.value}.sections`)
  if (!Array.isArray(raw)) return []
  return raw.map((s: any) => ({
    title: typeof s.title === 'string' ? s.title : rt(s.title),
    content: typeof s.content === 'string' ? s.content : rt(s.content),
  }))
})

const activeSection = ref(0)

function scrollToSection(index: number) {
  activeSection.value = index
  const el = document.getElementById('section-' + index)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

if (import.meta.client) {
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id
            const index = parseInt(id.replace('section-', ''))
            if (!isNaN(index)) {
              activeSection.value = index
            }
          }
        }
      },
      { rootMargin: '-100px 0px -60% 0px' }
    )

    sections.value.forEach((_, i) => {
      const el = document.getElementById('section-' + i)
      if (el) observer.observe(el)
    })

    onUnmounted(() => observer.disconnect())
  })
}

useHead({
  title: computed(() =>
    isValidTopic.value ? `${topicTitle.value} - Help Center - Autocertif` : 'Topic Not Found - Autocertif'
  ),
})
</script>
