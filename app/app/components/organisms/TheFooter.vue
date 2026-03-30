<template>
  <!-- Like ContentSquare Footer: BURGUNDY bg, multi-column links, social icons -->
  <footer class="bg-burgundy-deep relative overflow-hidden">
    <div class="absolute top-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full opacity-[0.06] blur-[120px]" style="background: radial-gradient(circle, #3B82F6 0%, transparent 70%);"></div>
    <div class="relative max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.5fr,1fr,1fr,1fr,1fr] gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
        <!-- Brand column -->
        <div class="col-span-2 md:col-span-3 lg:col-span-1">
          <p class="text-xl font-extrabold text-white tracking-tight mb-4">AUTOCERTIF</p>
          <p class="text-white/40 text-sm leading-relaxed mb-6">{{ $t('footer.tagline') }}</p>
          <div class="relative">
            <button
              class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-white/50 text-xs cursor-pointer hover:border-white/20 transition-colors"
              @click="showLangMenu = !showLangMenu"
            >
              🌐 {{ locale === 'en' ? 'English' : 'Français' }}
              <svg class="w-3 h-3 transition-transform" :class="showLangMenu ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
            </button>
            <div v-if="showLangMenu" class="absolute bottom-full left-0 mb-2 w-36 bg-[#111827] border border-white/10 rounded-xl shadow-xl overflow-hidden z-20">
              <button
                class="w-full text-left px-4 py-2.5 text-[13px] font-inter transition-colors cursor-pointer flex items-center gap-2"
                :class="locale === 'en' ? 'text-coral bg-white/[0.04]' : 'text-white/50 hover:text-white hover:bg-white/[0.04]'"
                @click="switchLocale('en')"
              >
                <span class="text-[14px]">🇬🇧</span> English
              </button>
              <button
                class="w-full text-left px-4 py-2.5 text-[13px] font-inter transition-colors cursor-pointer flex items-center gap-2"
                :class="locale === 'fr' ? 'text-coral bg-white/[0.04]' : 'text-white/50 hover:text-white hover:bg-white/[0.04]'"
                @click="switchLocale('fr')"
              >
                <span class="text-[14px]">🇫🇷</span> Français
              </button>
            </div>
          </div>
        </div>

        <!-- Product -->
        <div>
          <h4 class="text-white font-semibold mb-5 text-sm">{{ $t('footer.product') }}</h4>
          <ul class="space-y-3">
            <li><NuxtLink :to="localePath('/features')" class="text-white/40 hover:text-white text-sm transition-colors">{{ $t('footer.links.features') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/pricing')" class="text-white/40 hover:text-white text-sm transition-colors">{{ $t('footer.links.pricing') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/business')" class="text-white/40 hover:text-white text-sm transition-colors">{{ $t('footer.links.business') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/api')" class="text-white/40 hover:text-white text-sm transition-colors">{{ $t('footer.links.api') }}</NuxtLink></li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h4 class="text-white font-semibold mb-5 text-sm">{{ $t('footer.resources') }}</h4>
          <ul class="space-y-3">
            <li><NuxtLink :to="localePath('/blog')" class="text-white/40 hover:text-white text-sm transition-colors">{{ $t('footer.links.blog') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/help-center')" class="text-white/40 hover:text-white text-sm transition-colors">{{ $t('footer.links.helpCenter') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/affiliate-program')" class="text-white/40 hover:text-white text-sm transition-colors">{{ $t('footer.links.affiliate') }}</NuxtLink></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="text-white font-semibold mb-5 text-sm">{{ $t('footer.company') }}</h4>
          <ul class="space-y-3">
            <li><NuxtLink :to="localePath('/about')" class="text-white/40 hover:text-white text-sm transition-colors">{{ $t('footer.links.about') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/contact')" class="text-white/40 hover:text-white text-sm transition-colors">{{ $t('footer.links.contact') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/unsubscribe')" class="text-white/40 hover:text-white text-sm transition-colors">{{ $t('footer.links.cancelSub') }}</NuxtLink></li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h4 class="text-white font-semibold mb-5 text-sm">{{ $t('footer.legal') }}</h4>
          <ul class="space-y-3">
            <li><NuxtLink :to="localePath('/privacy-policy')" class="text-white/40 hover:text-white text-sm transition-colors">{{ $t('footer.links.privacy') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/terms-of-use')" class="text-white/40 hover:text-white text-sm transition-colors">{{ $t('footer.links.terms') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/terms-of-sale')" class="text-white/40 hover:text-white text-sm transition-colors">{{ $t('footer.links.termsSale') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/legal-notice')" class="text-white/40 hover:text-white text-sm transition-colors">{{ $t('footer.links.legalNotice') }}</NuxtLink></li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="pt-8 border-t border-white/10">
        <p class="text-white/25 text-sm text-center">{{ $t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()
const showLangMenu = ref(false)

const switchLocale = (lang: string) => {
  setLocale(lang)
  showLangMenu.value = false
}
</script>
