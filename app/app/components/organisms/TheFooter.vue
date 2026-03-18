<template>
  <!-- Like ContentSquare Footer: BURGUNDY bg, multi-column links, social icons -->
  <footer class="bg-burgundy-deep">
    <div class="max-w-[1280px] mx-auto px-8 lg:px-12 py-16">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
        <!-- Brand column -->
        <div class="col-span-2 md:col-span-3 lg:col-span-1">
          <p class="text-xl font-extrabold text-white tracking-tight mb-4">AUTOCERTIF</p>
          <p class="text-white/40 text-sm leading-relaxed mb-6">{{ $t('footer.tagline') }}</p>
          <!-- Social icons like ContentSquare -->
          <div class="flex items-center gap-3 mb-6">
            <a href="#" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-all">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-all">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="#" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-all">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
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
            <li><a href="#" class="text-white/40 hover:text-white text-sm transition-colors">{{ $t('footer.links.api') }}</a></li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h4 class="text-white font-semibold mb-5 text-sm">{{ $t('footer.resources') }}</h4>
          <ul class="space-y-3">
            <li><NuxtLink :to="localePath('/blog')" class="text-white/40 hover:text-white text-sm transition-colors">{{ $t('footer.links.blog') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/help-center')" class="text-white/40 hover:text-white text-sm transition-colors">{{ $t('footer.links.helpCenter') }}</NuxtLink></li>
            <li><a href="#" class="text-white/40 hover:text-white text-sm transition-colors">{{ $t('footer.links.affiliate') }}</a></li>
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
      <div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-white/25 text-sm">{{ $t('footer.copyright') }}</p>
        <div class="flex items-center gap-6">
          <NuxtLink :to="localePath('/privacy-policy')" class="text-white/25 hover:text-white/50 text-xs transition-colors">{{ $t('footer.links.privacy') }}</NuxtLink>
          <NuxtLink :to="localePath('/terms-of-use')" class="text-white/25 hover:text-white/50 text-xs transition-colors">{{ $t('footer.links.terms') }}</NuxtLink>
          <NuxtLink :to="localePath('/terms-of-sale')" class="text-white/25 hover:text-white/50 text-xs transition-colors">{{ $t('footer.links.termsSale') }}</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()
</script>
