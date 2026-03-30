<template>
  <header class="sticky inset-x-0 top-0 z-50 w-full border-b transition-all duration-200 will-change-transform"
    :class="scrolled ? 'border-gray-200/20 bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]' : 'border-transparent bg-burgundy text-white'">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 h-[3.75rem] md:h-16 lg:h-20 flex items-center justify-between">
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
        <!-- Language switcher dropdown -->
        <div class="relative hidden sm:block" ref="langDropdownRef">
          <button @click="langOpen = !langOpen"
            class="flex items-center gap-1.5 text-[13px] font-inter font-medium transition-colors duration-200 cursor-pointer px-2 py-1 rounded-lg"
            :class="scrolled ? 'text-gray-500 hover:text-gray-700 hover:bg-gray-100' : 'text-white/60 hover:text-white hover:bg-white/10'">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <span>{{ locale === 'en' ? 'EN' : 'FR' }}</span>
            <svg class="w-3 h-3 transition-transform duration-200" :class="langOpen ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <!-- Dropdown -->
          <transition name="dropdown">
            <div v-if="langOpen" class="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 py-2 min-w-[160px] z-50">
              <NuxtLink :to="switchLocalePath('en')"
                class="flex items-center gap-3 px-4 py-2.5 text-[13px] font-inter transition-colors hover:bg-gray-50"
                :class="locale === 'en' ? 'text-gray-900 font-medium' : 'text-gray-500'"
                @click="langOpen = false">
                <span class="text-[11px] font-semibold text-gray-400 bg-gray-100 rounded px-1.5 py-0.5">GB</span>
                English
              </NuxtLink>
              <NuxtLink :to="switchLocalePath('fr')"
                class="flex items-center gap-3 px-4 py-2.5 text-[13px] font-inter transition-colors hover:bg-gray-50"
                :class="locale === 'fr' ? 'text-gray-900 font-medium' : 'text-gray-500'"
                @click="langOpen = false">
                <span class="text-[11px] font-semibold text-gray-400 bg-gray-100 rounded px-1.5 py-0.5">FR</span>
                Français
              </NuxtLink>
            </div>
          </transition>
        </div>

        <!-- My Account - outline pill like ContentSquare "Book a demo" -->
        <NuxtLink to="/account" class="group hidden md:inline-flex relative justify-center overflow-hidden rounded-pill px-5 py-[0.6875rem] border text-[13px] font-medium font-inter transition-[background-color,color,opacity,border] duration-300 cursor-pointer"
          :class="scrolled ? 'border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900' : 'border-white/30 text-white hover:bg-white/10'">
          <span class="transition-transform duration-200 group-hover:-translate-y-10">{{ $t('nav.myAccount') }}</span>
          <span class="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-200 group-hover:translate-y-0" aria-hidden="true">{{ $t('nav.myAccount') }}</span>
        </NuxtLink>

        <!-- Primary CTA - red pill like ContentSquare "Start for free" -->
        <NuxtLink :to="localePath('/')" class="group hidden sm:inline-flex relative justify-center overflow-hidden rounded-pill px-5 py-[0.6875rem] border border-transparent bg-coral text-white text-[13px] font-medium font-inter hover:bg-coral-dark transition-[background-color,color,opacity,border] duration-300 cursor-pointer">
          <span class="transition-transform duration-200 group-hover:-translate-y-10">{{ $t('nav.checkVehicle') }}</span>
          <span class="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-200 group-hover:translate-y-0" aria-hidden="true">{{ $t('nav.checkVehicle') }}</span>
        </NuxtLink>

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
    <div v-if="mobileOpen" class="lg:hidden bg-white border-t px-4 sm:px-6 py-5 space-y-4">
      <NuxtLink v-for="item in navItems" :key="item.key"
        :to="localePath(item.to)" class="block text-gray-700 hover:text-gray-900 font-medium font-inter text-[15px]" @click="mobileOpen = false">
        {{ $t(item.key) }}
      </NuxtLink>

      <div class="pt-4 border-t border-gray-100 space-y-3">
        <NuxtLink :to="localePath('/')" class="block w-full text-center rounded-pill py-3 bg-coral text-white text-[14px] font-medium font-inter cursor-pointer" @click="mobileOpen = false">
          {{ $t('nav.checkVehicle') }}
        </NuxtLink>
        <NuxtLink to="/account" class="block w-full text-center rounded-pill py-3 border border-gray-300 text-gray-700 text-[14px] font-medium font-inter" @click="mobileOpen = false">
          {{ $t('nav.myAccount') }}
        </NuxtLink>
      </div>

      <div class="pt-3 border-t border-gray-100">
        <NuxtLink :to="switchLocalePath(locale === 'en' ? 'fr' : 'en')"
          class="inline-flex items-center gap-2 text-gray-400 text-[14px] font-inter" @click="mobileOpen = false">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
          {{ locale === 'en' ? 'Français' : 'English' }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const scrolled = ref(false)
const mobileOpen = ref(false)
const langOpen = ref(false)
const langDropdownRef = ref<HTMLElement>()
const navItems = [
  { key: 'nav.features', to: '/features' },
  { key: 'nav.pricing', to: '/pricing' },
  { key: 'nav.business', to: '/business' },
  { key: 'nav.unsubscribe', to: '/unsubscribe' },
]

const onClickOutside = (e: MouseEvent) => {
  if (langDropdownRef.value && !langDropdownRef.value.contains(e.target as Node)) {
    langOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', () => { scrolled.value = window.scrollY > 50 })
  document.addEventListener('click', onClickOutside)
})
onUnmounted(() => {
  document.removeEventListener('click', onClickOutside)
})
</script>

<style scoped>
.dropdown-enter-active { transition: all 0.2s ease; }
.dropdown-leave-active { transition: all 0.15s ease; }
.dropdown-enter-from, .dropdown-leave-to { opacity: 0; transform: translateY(-4px); }
</style>
