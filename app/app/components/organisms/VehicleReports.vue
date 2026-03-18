<template>
  <section ref="sectionRef" class="py-24 bg-forest-deep">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          {{ $t('reports.title') }}
        </h2>
        <p class="text-white-60 text-lg max-w-2xl mx-auto">
          {{ $t('reports.subtitle') }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <MoleculesVehicleCard
          v-for="(v, i) in vehicles"
          :key="i"
          :name="v.name"
          :vin="v.vin"
          :score="v.score"
          :status="v.status"
          :mileage="v.mileage"
          :accidents="v.accidents"
          :theft="v.theft"
          :owners="v.owners"
          :value="v.value"
          :image="v.image"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm } = useI18n()

const vehicleImages = [
  '/images/vehicles/toyota-corolla.jpg',
  '/images/vehicles/renault-megane.jpg',
  '/images/vehicles/ford-focus.jpg',
]

const vehicles = computed(() => {
  const raw = tm('vehicles')
  if (Array.isArray(raw)) {
    return raw.map((v: any, i: number) => ({
      name: String(v.name),
      vin: String(v.vin),
      score: String(v.score),
      status: String(v.status),
      mileage: String(v.mileage),
      accidents: String(v.accidents),
      theft: String(v.theft),
      owners: String(v.owners),
      value: String(v.value),
      image: vehicleImages[i] || '',
    }))
  }
  return []
})

const sectionRef = ref<HTMLElement>()

onMounted(() => {
  if (typeof window === 'undefined' || !(window as any).gsap) return
  const gsap = (window as any).gsap
  const ScrollTrigger = (window as any).ScrollTrigger
  if (!ScrollTrigger) return
  gsap.registerPlugin(ScrollTrigger)

  gsap.from(sectionRef.value?.querySelectorAll('.rounded-2xl') || [], {
    opacity: 0,
    y: 40,
    stagger: 0.15,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 80%',
    },
  })
})
</script>
