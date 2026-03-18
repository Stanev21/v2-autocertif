<template>
  <!-- ContentSquare Teams section: white bg, centered heading, lime pill tabs, 2-col -->
  <section class="py-28 bg-white">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12">
      <div class="text-center mb-12">
        <h2 class="text-[2rem] lg:text-[2.5rem] font-normal text-gray-900 leading-[1.1] mb-4 font-heading">
          {{ $t('reports.title') }}
        </h2>
        <p class="text-gray-500 text-[16px] font-inter max-w-2xl mx-auto leading-[1.7]">{{ $t('reports.subtitle') }}</p>
      </div>
      <!-- Tab pills -->
      <div class="flex items-center justify-center gap-2.5 flex-wrap mb-14">
        <button v-for="(v, i) in vehicles" :key="i"
          class="px-5 py-2.5 rounded-pill text-[13px] font-semibold font-heading transition-all duration-300 border cursor-pointer"
          :class="activeTab === i
            ? 'bg-lime text-gray-900 border-lime'
            : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'"
          @click="activeTab = i">
          {{ v.name }}
        </button>
      </div>
      <!-- 2-col content -->
      <div class="grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div class="flex items-baseline gap-3 mb-5">
            <span class="text-5xl font-normal font-heading" :class="parseFloat(vehicles[activeTab]?.score) >= 7 ? 'text-green-600' : 'text-red-500'">
              {{ vehicles[activeTab]?.score }}
            </span>
            <span class="text-gray-300 text-lg font-inter">/10</span>
            <span class="px-3 py-1 rounded-pill text-[11px] font-semibold font-heading"
              :class="parseFloat(vehicles[activeTab]?.score) >= 7 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'">
              {{ vehicles[activeTab]?.status }}
            </span>
          </div>
          <div class="space-y-0">
            <div v-for="(row, j) in detailRows" :key="j" class="flex items-center justify-between py-3.5 border-b border-gray-100 last:border-0">
              <span class="text-gray-400 text-[13px] font-inter">{{ row.label }}</span>
              <span class="text-gray-900 font-medium text-[13px] font-inter">{{ row.value }}</span>
            </div>
          </div>
          <p class="text-gray-300 text-[11px] font-mono mt-5">VIN: {{ vehicles[activeTab]?.vin }}</p>
        </div>
        <div class="bg-grey-light rounded-3xl overflow-hidden min-h-[320px] flex flex-col">
          <img :src="vehicleImages[activeTab]" :alt="vehicles[activeTab]?.name" class="w-full h-48 object-cover" />
          <div class="p-8 flex-1 flex flex-col items-center justify-center text-center">
            <p class="text-gray-900 text-xl font-bold font-heading mb-1">{{ vehicles[activeTab]?.name }}</p>
            <p class="text-gray-400 text-[13px] font-inter mb-4">{{ vehicles[activeTab]?.status }}</p>
            <p class="text-2xl font-normal font-heading" :class="parseFloat(vehicles[activeTab]?.score) >= 7 ? 'text-green-600' : 'text-red-500'">{{ vehicles[activeTab]?.value }}</p>
          </div>
        </div>
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
const vehicles = computed(() => {
  const raw = tm('vehicles')
  return Array.isArray(raw) ? raw.map((v: any) => ({
    name: rt(v.name), vin: rt(v.vin), score: rt(v.score), status: rt(v.status),
    mileage: rt(v.mileage), accidents: rt(v.accidents), theft: rt(v.theft), owners: rt(v.owners), value: rt(v.value),
  })) : []
})
const detailRows = computed(() => {
  const v = vehicles.value[activeTab.value]
  if (!v) return []
  return [
    { label: 'Mileage', value: v.mileage }, { label: 'Accidents', value: v.accidents },
    { label: 'Theft', value: v.theft }, { label: 'Owners', value: v.owners }, { label: 'Est. Value', value: v.value },
  ]
})
</script>
