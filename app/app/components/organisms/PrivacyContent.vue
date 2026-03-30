<template>
  <section class="py-16 lg:py-20 bg-[#fafaf8]">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
      <div class="grid lg:grid-cols-[240px,1fr] gap-10 lg:gap-16">

        <!-- Sticky sidebar nav -->
        <div class="hidden lg:block">
          <nav class="sticky top-28">
            <p class="text-[11px] font-inter font-semibold text-gray-400 uppercase tracking-wider mb-4">Contents</p>
            <div class="space-y-1">
              <a
                v-for="(navItem, i) in navItems"
                :key="i"
                :href="'#' + sections[i]?.id"
                class="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-inter font-medium transition-all duration-200"
                :class="activeSection === i
                  ? 'bg-white text-gray-900 shadow-sm border border-gray-200/60'
                  : 'text-gray-400 hover:text-gray-600 hover:bg-white/50'"
                @click.prevent="scrollTo(sections[i]?.id)"
              >
                <span class="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 transition-colors"
                  :class="activeSection === i ? 'bg-coral/10 text-coral' : 'bg-gray-100 text-gray-300'">
                  {{ i + 1 }}
                </span>
                {{ navItem }}
              </a>
            </div>
          </nav>
        </div>

        <!-- Main content -->
        <div class="space-y-6">
          <div
            v-for="(section, i) in sections"
            :key="i"
            :id="section.id"
            class="bg-white rounded-2xl border border-gray-200/60 p-5 sm:p-7 lg:p-10 scroll-mt-24"
          >
            <!-- Section header -->
            <div class="flex items-center gap-3 mb-5">
              <span class="w-8 h-8 rounded-lg bg-coral/10 flex items-center justify-center text-coral text-[12px] font-inter font-bold">
                {{ i + 1 }}
              </span>
              <h2 class="text-[1.35rem] lg:text-[1.5rem] font-heading font-normal text-gray-900">
                {{ section.title }}
              </h2>
            </div>

            <!-- Content -->
            <p class="text-gray-500 text-[14px] leading-[1.8] font-inter">
              {{ section.content }}
            </p>

            <!-- Cookie table (only for last section) -->
            <div v-if="section.id === 'cookies' && cookies.length > 0" class="mt-8">
              <div class="overflow-x-auto rounded-xl border border-gray-200/60">
                <table class="w-full">
                  <thead>
                    <tr class="bg-gray-50">
                      <th v-for="(header, j) in cookieHeaders" :key="j"
                        class="text-left px-5 py-3 text-[11px] font-inter font-semibold text-gray-400 uppercase tracking-wider">
                        {{ header }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(cookie, j) in cookies" :key="j" class="border-t border-gray-100">
                      <td class="px-5 py-3">
                        <code class="text-[12px] font-mono text-gray-900 bg-gray-100 px-2 py-0.5 rounded">{{ cookie.name }}</code>
                      </td>
                      <td class="px-5 py-3 text-gray-500 text-[13px] font-inter">{{ cookie.purpose }}</td>
                      <td class="px-5 py-3">
                        <span class="text-[11px] font-inter font-medium px-2.5 py-1 rounded-full"
                          :class="cookie.category === 'Required' || cookie.category === 'Obligatoire'
                            ? 'bg-blue-50 text-blue-600'
                            : 'bg-amber-50 text-amber-600'">
                          {{ cookie.category }}
                        </span>
                      </td>
                      <td class="px-5 py-3 text-gray-400 text-[13px] font-inter">{{ cookie.retention }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const activeSection = ref(0)

const navItems = computed(() => {
  const raw = tm('privacy.nav')
  return Array.isArray(raw) ? raw.map((n: any) => typeof n === 'string' ? n : rt(n)) : []
})

const sections = computed(() => {
  const raw = tm('privacy.sections')
  return Array.isArray(raw) ? raw.map((s: any) => ({
    id: typeof s.id === 'string' ? s.id : rt(s.id),
    title: rt(s.title),
    content: rt(s.content),
  })) : []
})

const cookies = computed(() => {
  const raw = tm('privacy.cookieTable')
  return Array.isArray(raw) ? raw.map((c: any) => ({
    name: rt(c.name),
    purpose: rt(c.purpose),
    category: rt(c.category),
    retention: rt(c.retention),
  })) : []
})

const cookieHeaders = computed(() => {
  const raw = tm('privacy.cookieHeaders')
  return Array.isArray(raw) ? raw.map((h: any) => typeof h === 'string' ? h : rt(h)) : []
})

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = sections.value.findIndex(s => s.id === entry.target.id)
          if (idx !== -1) activeSection.value = idx
        }
      })
    },
    { rootMargin: '-30% 0px -60% 0px' }
  )
  sections.value.forEach(s => {
    const el = document.getElementById(s.id)
    if (el) observer.observe(el)
  })
})
</script>
