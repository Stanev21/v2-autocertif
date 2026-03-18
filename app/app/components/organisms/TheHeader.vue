<template>
  <header class="sticky inset-x-0 top-0 z-50 w-full border-b transition-all duration-200 will-change-transform"
    :class="scrolled ? 'border-gray-200/20 bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]' : 'border-transparent bg-burgundy text-white'">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12 h-[3.75rem] md:h-16 lg:h-20 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink :to="localePath('/')" class="flex items-center flex-[0_0_110px]">
        <span class="text-[22px] font-normal tracking-[0.01em] font-heading transition-colors duration-200"
          :class="scrolled ? 'text-gray-900' : 'text-coral'">
          Autocertif
        </span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden lg:flex items-center lg:gap-5 xl:gap-7">
        <NuxtLink v-for="item in navItems" :key="item.key"
          :to="localePath(item.to)"
          class="text-[14px] font-inter font-medium border-b border-transparent hover:border-current transition-all duration-100 pb-0.5"
          :class="scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'">
          {{ $t(item.key) }}
        </NuxtLink>
      </nav>

      <!-- Right side -->
      <div class="flex items-center gap-3">
        <!-- Language switcher -->
        <NuxtLink :to="switchLocalePath(locale === 'en' ? 'fr' : 'en')"
          class="text-[13px] font-inter font-medium transition-colors duration-200 hidden sm:inline"
          :class="scrolled ? 'text-gray-400 hover:text-gray-700' : 'text-white/50 hover:text-white'">
          {{ locale === 'en' ? 'FR' : 'EN' }}
        </NuxtLink>

        <!-- My Account — outline pill like ContentSquare "Book a demo" -->
        <button class="group hidden md:inline-flex relative justify-center overflow-hidden rounded-pill px-5 py-[0.6875rem] border text-[13px] font-medium font-inter transition-[background-color,color,opacity,border] duration-300 cursor-pointer"
          :class="scrolled ? 'border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900' : 'border-white/30 text-white hover:bg-white/10'">
          <span class="transition-transform duration-200 group-hover:-translate-y-10">{{ $t('nav.myAccount') }}</span>
          <span class="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-200 group-hover:translate-y-0" aria-hidden="true">{{ $t('nav.myAccount') }}</span>
        </button>

        <!-- Primary CTA — red pill like ContentSquare "Start for free" -->
        <button class="group hidden sm:inline-flex relative justify-center overflow-hidden rounded-pill px-5 py-[0.6875rem] border border-transparent bg-coral text-white text-[13px] font-medium font-inter hover:bg-coral-dark transition-[background-color,color,opacity,border] duration-300 cursor-pointer">
          <span class="transition-transform duration-200 group-hover:-translate-y-10">{{ $t('nav.checkVehicle') }}</span>
          <span class="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-200 group-hover:translate-y-0" aria-hidden="true">{{ $t('nav.checkVehicle') }}</span>
        </button>

        <!-- Mobile toggle -->
        <button class="lg:hidden" :class="scrolled ? 'text-gray-900' : 'text-white'" @click="mobileOpen = !mobileOpen">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileOpen" class="lg:hidden bg-white border-t px-6 py-6 space-y-4">
      <NuxtLink v-for="item in navItems" :key="item.key"
        :to="localePath(item.to)" class="block text-gray-700 hover:text-gray-900 font-medium font-inter text-[15px]" @click="mobileOpen = false">
        {{ $t(item.key) }}
      </NuxtLink>
      <NuxtLink :to="switchLocalePath(locale === 'en' ? 'fr' : 'en')"
        class="block text-gray-400 text-[14px] font-inter" @click="mobileOpen = false">
        {{ locale === 'en' ? 'Français' : 'English' }}
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const scrolled = ref(false)
const mobileOpen = ref(false)
const navItems = [
  { key: 'nav.features', to: '/features' },
  { key: 'nav.pricing', to: '/pricing' },
  { key: 'nav.business', to: '/business' },
  { key: 'nav.unsubscribe', to: '/unsubscribe' },
]
onMounted(() => { window.addEventListener('scroll', () => { scrolled.value = window.scrollY > 50 }) })
</script>
