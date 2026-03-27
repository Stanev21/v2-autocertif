<template>
  <section class="py-20 lg:py-28 bg-[#0B1426]">
    <div class="max-w-[1280px] mx-auto px-6 lg:px-12">
      <!-- Section header -->
      <div class="text-center mb-14">
        <h2 class="text-[2rem] lg:text-[2.75rem] font-normal text-white leading-[1.1] mb-4 font-heading">
          {{ $t('reports.title') }}
        </h2>
        <p class="text-white/50 text-[16px] font-inter max-w-2xl mx-auto leading-[1.6]">{{ $t('reports.subtitle') }}</p>
      </div>

      <!-- Avon-style layout -->
      <div class="flex flex-col gap-6 md:flex-row md:gap-5 lg:gap-6 max-w-5xl mx-auto">
        <!-- LEFT: Report card (flex-1 = large like Avon image) -->
        <div class="flex-1 rounded-lg p-3 sm:p-4 bg-[#132040]">
          <div class="relative overflow-hidden rounded-xl rounded-tl-none bg-white">
            <!-- Top-left corner cutout -->
            <div class="absolute z-10 top-0 left-0" style="border-radius: 0px 0px 12px 0px; background: #132040;">
              <div class="absolute" style="height: 12px; width: 12px; transform: rotate(90deg); left: 0px; top: 100%; color: #132040;">
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0V100H100C44.8 100 0 55.2 0 0Z" fill="currentColor" />
                </svg>
              </div>
              <div class="absolute" style="height: 12px; width: 12px; transform: rotate(90deg); left: 100%; top: 0px; color: #132040;">
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0V100H100C44.8 100 0 55.2 0 0Z" fill="currentColor" />
                </svg>
              </div>
              <div class="h-6 md:h-10 aspect-[148/40]"></div>
            </div>

            <!-- Report content -->
            <div class="p-4 pt-10 lg:p-6 lg:pt-12">
              <!-- Vehicle name + score row -->
              <div class="flex items-start justify-between mb-2">
                <div>
                  <h3 class="text-[17px] lg:text-[19px] font-medium font-inter text-gray-900 mb-1">{{ vehicles[activeTab]?.name }}</h3>
                  <p class="text-gray-400 text-[10px] font-mono">VIN: {{ vehicles[activeTab]?.vin }}</p>
                </div>
                <div class="w-14 h-14 rounded-xl flex flex-col items-center justify-center flex-shrink-0"
                  :class="parseFloat(vehicles[activeTab]?.score) >= 7 ? 'bg-green-500' : 'bg-red-500'">
                  <span class="text-white text-lg font-bold font-inter leading-none">{{ vehicles[activeTab]?.score }}</span>
                  <span class="text-white/70 text-[9px] font-inter">/10</span>
                </div>
              </div>

              <!-- Meta -->
              <div class="flex items-center gap-2 text-[11px] text-gray-400 font-inter mb-3">
                <span>{{ vehicleMeta[activeTab]?.year }}</span><span>·</span>
                <span>{{ vehicleMeta[activeTab]?.engine }}</span><span>·</span>
                <span>{{ vehicleMeta[activeTab]?.country }}</span>
              </div>

              <!-- Two-column data -->
              <div class="grid grid-cols-2 gap-x-6">
                <!-- Verifications -->
                <div>
                  <span class="text-[10px] font-inter font-medium text-[#3B82F6] uppercase tracking-wider">Verifications</span>
                  <div class="mt-2">
                    <div v-for="(row, j) in checkRows" :key="j"
                      class="flex items-center justify-between py-[5px] border-b border-gray-100 last:border-0">
                      <span class="text-gray-500 text-[11px] font-inter">{{ row.label }}</span>
                      <div class="flex items-center gap-1">
                        <span class="text-gray-900 font-medium text-[11px] font-inter">{{ row.value }}</span>
                        <svg v-if="row.ok" class="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" />
                        </svg>
                        <svg v-else class="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Maintenance + Technical -->
                <div>
                  <span class="text-[10px] font-inter font-medium text-[#3B82F6] uppercase tracking-wider">Maintenance</span>
                  <div class="mt-2">
                    <div v-for="(row, j) in maintenanceRows" :key="j"
                      class="flex items-center justify-between py-[5px] border-b border-gray-100 last:border-0">
                      <span class="text-gray-400 text-[11px] font-inter">{{ row.label }}</span>
                      <span class="text-gray-900 font-medium text-[11px] font-inter">{{ row.value }}</span>
                    </div>
                  </div>
                  <span class="text-[10px] font-inter font-medium text-[#3B82F6] uppercase tracking-wider mt-3 block">Technical</span>
                  <div class="mt-2">
                    <div v-for="(row, j) in techRows" :key="j"
                      class="flex items-center justify-between py-[5px] border-b border-gray-100 last:border-0">
                      <span class="text-gray-400 text-[11px] font-inter">{{ row.label }}</span>
                      <span class="text-gray-900 font-medium text-[11px] font-inter">{{ row.value }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Value -->
              <div class="flex items-center justify-between mt-2 pt-2 border-t border-gray-200">
                <span class="text-gray-500 text-[12px] font-inter">Est. Value</span>
                <span class="text-[1.1rem] font-heading font-normal text-gray-900">{{ vehicles[activeTab]?.value }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT: Small image card with colored border (like Avon white card) -->
        <div class="w-full shrink-0 rounded-3xl border p-2 md:w-1/3 md:max-w-[22.75rem] lg:p-3 border-[#3B82F6]">
          <div class="flex h-full flex-col rounded-2xl overflow-hidden bg-white">
            <!-- Image -->
            <div class="relative flex-1">
              <transition name="fade" mode="out-in">
                <img :key="activeTab" :src="vehicleImages[activeTab]" :alt="vehicles[activeTab]?.name"
                  class="absolute inset-0 h-full w-full object-cover" />
              </transition>
            </div>
            <!-- Small info area at bottom (fixed height) -->
            <div class="p-5 lg:p-6 space-y-4 shrink-0">
              <div>
                <div class="text-[12px] text-black/50 font-inter mb-1.5">Status</div>
                <div class="flex items-center gap-2">
                  <div class="w-2.5 h-2.5 rounded-full"
                    :class="parseFloat(vehicles[activeTab]?.score) >= 7 ? 'bg-green-500' : 'bg-red-500'"></div>
                  <span class="text-[14px] font-medium font-inter text-gray-900">{{ vehicles[activeTab]?.status }}</span>
                </div>
              </div>
              <div>
                <div class="text-[12px] text-black/50 font-inter mb-2">Highlights</div>
                <div class="flex flex-wrap gap-1.5 min-h-[60px]">
                  <span v-for="(tag, j) in techTags" :key="j"
                    class="text-[11px] font-inter rounded-full bg-gray-100 px-2.5 py-1.5 text-gray-700 h-fit">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dots -->
      <div class="flex items-center justify-center gap-2 mt-8">
        <button v-for="(v, i) in vehicles" :key="i" @click="selectTab(i)"
          class="h-2 rounded-full transition-all duration-300 cursor-pointer"
          :class="activeTab === i ? 'w-8 bg-[#3B82F6]' : 'w-2 bg-white/20 hover:bg-white/30'">
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const activeTab = ref(0)

const vehicleImages = [
  '/images/vehicles/toyota-corolla.jpg',
  '/images/vehicles/renault-megane.jpg',
  '/images/vehicles/ford-focus.jpg',
]

const vehicleMeta = [
  { year: '2021', engine: '1.8L Hybrid', country: 'France' },
  { year: '2018', engine: '1.5 dCi 110', country: 'Netherlands' },
  { year: '2022', engine: '1.0 EcoBoost', country: 'Germany' },
]

const maintenanceData = [
  { records: '6', lastService: '11/2025' },
  { records: '3', lastService: '01/2026' },
  { records: '4', lastService: '09/2025' },
]

const techData = [
  { emissions: 'Euro 6d', control: '03/2027', recalls: '0/1 open', crossBorder: 'No' },
  { emissions: 'Euro 6b', control: '02/2026', recalls: '1/2 open', crossBorder: 'Yes' },
  { emissions: 'Euro 6d-ISC', control: '01/2028', recalls: '0/0', crossBorder: 'No' },
]

const vehicles = computed(() => {
  const raw = tm('vehicles')
  return Array.isArray(raw) ? raw.map((v: any) => ({
    name: rt(v.name), vin: rt(v.vin), score: rt(v.score), status: rt(v.status),
    mileage: rt(v.mileage), accidents: rt(v.accidents), theft: rt(v.theft), owners: rt(v.owners), value: rt(v.value),
  })) : []
})

const checkRows = computed(() => {
  const v = vehicles.value[activeTab.value]
  if (!v) return []
  return [
    { label: 'Mileage', value: v.mileage, ok: true },
    { label: 'Accidents', value: v.accidents, ok: v.accidents === '0 found' },
    { label: 'Theft', value: v.theft, ok: v.theft === 'Not reported' },
    { label: 'Owners', value: v.owners, ok: true },
    { label: 'Flood damage', value: 'None', ok: true },
    { label: 'Finance', value: parseFloat(v.score) >= 7 ? 'No liens' : 'Outstanding', ok: parseFloat(v.score) >= 7 },
  ]
})

const maintenanceRows = computed(() => {
  const m = maintenanceData[activeTab.value]
  return [
    { label: 'Records', value: `${m.records} found` },
    { label: 'Last service', value: m.lastService },
  ]
})

const techRows = computed(() => {
  const t = techData[activeTab.value]
  return [
    { label: 'Emissions', value: t.emissions },
    { label: 'Control', value: t.control },
    { label: 'Recalls', value: t.recalls },
    { label: 'Cross-border', value: t.crossBorder },
  ]
})

const techTags = computed(() => {
  const data = [
    ['Euro 6d', 'Hybrid', '1 owner', 'No recalls'],
    ['Euro 6b', 'Diesel', '5 owners', '1 recall'],
    ['Euro 6d-ISC', 'Petrol', '1 owner'],
  ]
  return data[activeTab.value] || data[0]
})

const selectTab = (i: number) => {
  activeTab.value = i
  resetInterval()
}

const next = () => { activeTab.value = (activeTab.value + 1) % vehicles.value.length }
let interval: ReturnType<typeof setInterval>
const resetInterval = () => { clearInterval(interval); interval = setInterval(next, 4000) }
onMounted(() => { interval = setInterval(next, 4000) })
onUnmounted(() => { clearInterval(interval) })
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
