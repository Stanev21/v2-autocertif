<template>
  <section class="py-28 bg-white">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12">
      <!-- Section header -->
      <div class="flex items-end justify-between mb-16">
        <div>
          <h2 class="text-[2rem] lg:text-[2.5rem] font-normal text-gray-900 leading-[1.1] mb-4 font-heading">
            {{ $t('reports.title') }}
          </h2>
          <p class="text-gray-500 text-[15px] leading-[1.7] font-inter max-w-xl">{{ $t('checks.subtitle') }}</p>
        </div>
        <!-- Nav arrows -->
        <div class="hidden md:flex items-center gap-2">
          <button @click="prev" class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-900 transition-all cursor-pointer">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
          </button>
          <button @click="next" class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-900 transition-all cursor-pointer">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
          </button>
        </div>
      </div>

      <!-- Single rotating element -->
      <div class="flex flex-col-reverse md:flex-row md:gap-6">
        <!-- Left: text column -->
        <div class="flex w-full flex-col gap-6 md:max-w-[18rem] md:gap-10 md:pt-3 lg:max-w-[21rem]">
          <div class="mb-auto">
            <h3 class="text-[1.25rem] lg:text-[1.4rem] font-medium text-gray-900 font-inter leading-snug mb-3 transition-all duration-500">
              {{ features[active].title }}
            </h3>
            <p class="text-gray-500 text-[14px] leading-[1.6] font-inter mb-4 transition-all duration-500">{{ features[active].desc }}</p>
            <a href="#" class="group inline-flex items-start gap-x-1.5">
              <span class="text-[15px] font-medium font-inter text-gray-900 relative pb-1">
                ↳ {{ $t('checks.cta') }}
                <span class="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden">
                  <span class="absolute inset-0 bg-current opacity-20"></span>
                  <span class="absolute left-0 right-0 top-0 h-[2px] -translate-x-full transform transition-transform duration-300 ease-in-out group-hover:translate-x-0 bg-current"></span>
                </span>
              </span>
            </a>
          </div>
          <!-- Metric -->
          <div>
            <div class="border-b border-black/5 pb-4 lg:pb-6">
              <figure class="max-w-[16.75rem] space-y-2">
                <span class="text-[2.5rem] lg:text-[3rem] font-normal font-heading text-gray-900 leading-none transition-all duration-500">{{ features[active].metric }}</span>
                <figcaption class="text-[14px] font-inter text-gray-500 transition-all duration-500">{{ features[active].metricLabel }}</figcaption>
              </figure>
            </div>
            <div class="pt-4 lg:pt-6">
              <h4 class="text-[13px] font-inter mb-2 text-gray-400">What's covered</h4>
              <ul class="flex flex-wrap">
                <li v-for="(tag, j) in features[active].tags" :key="j" class="mb-2 mr-2">
                  <span class="text-[13px] font-inter inline-block rounded-pill bg-black/5 px-3 py-1.5">{{ tag }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Right: big image with transition -->
        <div class="relative aspect-[52/33] w-full rounded-xl max-md:mb-6 overflow-hidden">
          <transition name="fade" mode="out-in">
            <img :key="active" :src="features[active].image" :alt="features[active].title" class="absolute inset-0 h-full w-full rounded-xl object-cover" />
          </transition>
          <div class="absolute inset-0 z-10 rounded-xl bg-gradient-to-t from-black/40 pointer-events-none"></div>
          <!-- Progress dots -->
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            <button v-for="(f, i) in features" :key="i" @click="active = i"
              class="h-1.5 rounded-pill transition-all duration-300 cursor-pointer"
              :class="active === i ? 'w-8 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'"></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n()

const items = computed(() => {
  const raw = tm('checks.items')
  return Array.isArray(raw) ? raw.map((item: any) => ({ title: rt(item.title), desc: rt(item.desc) })) : []
})

const active = ref(0)

const features = computed(() => [
  {
    title: items.value[0]?.title || 'Mileage',
    desc: items.value[0]?.desc || '',
    metric: '8,000+',
    metricLabel: 'Data sources cross-referenced',
    tags: ['Odometer history', 'Trend chart', 'Driving patterns', 'Rollback detection'],
    image: '/images/vehicles/toyota-corolla.jpg',
  },
  {
    title: items.value[1]?.title || 'Damages',
    desc: items.value[1]?.desc || '',
    metric: '300M+',
    metricLabel: 'Damage records analyzed',
    tags: ['Accident history', 'Repair records', 'Write-off status', 'Damage diagram'],
    image: '/images/vehicles/renault-megane.jpg',
  },
  {
    title: items.value[2]?.title || 'Theft',
    desc: items.value[2]?.desc || '',
    metric: '25+',
    metricLabel: 'Countries covered',
    tags: ['Stolen registries', 'Official databases', 'Cross-border checks', 'Real-time status'],
    image: '/images/vehicles/ford-focus.jpg',
  },
  {
    title: items.value[3]?.title || 'Vehicle Inspection',
    desc: items.value[3]?.desc || '',
    metric: '100%',
    metricLabel: 'Official records coverage',
    tags: ['Test results', 'Defect history', 'Technical control', 'MOT records'],
    image: '/images/blog/vehicle-history.jpg',
  },
  {
    title: items.value[4]?.title || 'Fuel & CO2 Emissions',
    desc: items.value[4]?.desc || '',
    metric: 'A–G',
    metricLabel: 'Emission class rating included',
    tags: ['Urban consumption', 'Extra-urban', 'Combined data', 'CO₂ class'],
    image: '/images/blog/ev-battery.jpg',
  },
  {
    title: items.value[5]?.title || 'Natural Disasters',
    desc: items.value[5]?.desc || '',
    metric: '15+',
    metricLabel: 'Years of disaster data',
    tags: ['Flood records', 'Hail damage', 'Storm exposure', 'Regional analysis'],
    image: '/images/blog/odometer-fraud.jpg',
  },
])

const next = () => { active.value = (active.value + 1) % features.value.length }
const prev = () => { active.value = (active.value - 1 + features.value.length) % features.value.length }

let interval: ReturnType<typeof setInterval>
onMounted(() => { interval = setInterval(next, 5000) })
onUnmounted(() => { clearInterval(interval) })
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
