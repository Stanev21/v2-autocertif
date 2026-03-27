<template>
  <!-- Like ContentSquare Footer: BURGUNDY bg, multi-column links, social icons -->
  <footer class="bg-burgundy-deep">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12 py-16">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.5fr,1fr,1fr,1fr,1fr] gap-8 lg:gap-12 mb-16">
        <!-- Brand column -->
        <div class="col-span-2 md:col-span-3 lg:col-span-1">
          <p class="text-xl font-extrabold text-white tracking-tight mb-4">AUTOCERTIF</p>
          <p class="text-white/40 text-sm leading-relaxed mb-6">{{ $t('footer.tagline') }}</p>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-white/50 text-xs cursor-pointer hover:border-white/20">
            🌐 {{ locale === 'en' ? 'English' : 'Français' }}
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
const { locale } = useI18n()
const localePath = useLocalePath()
</script>
