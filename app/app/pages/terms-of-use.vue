<template>
  <div>
    <OrganismsTheHeader />
    <OrganismsLegalPage
      :badge="$t('terms.badge')"
      :title="$t('terms.title')"
      :subtitle="$t('terms.subtitle')"
      :effective="$t('terms.effective')"
      :nav-items="navItems"
      :sections="sections"
      :cta-title="$t('terms.ctaTitle')"
      :cta-desc="$t('terms.ctaDesc')"
      :cta-cta="$t('terms.ctaCta')"
    />
    <OrganismsTheFooter />
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Terms of Use — Autocertif' })
const { tm, rt } = useI18n()
const navItems = computed(() => {
  const raw = tm('terms.nav')
  return Array.isArray(raw) ? raw.map((n: any) => typeof n === 'string' ? n : rt(n)) : []
})
const sections = computed(() => {
  const raw = tm('terms.sections')
  return Array.isArray(raw) ? raw.map((s: any) => ({
    id: typeof s.id === 'string' ? s.id : rt(s.id),
    title: rt(s.title),
    content: rt(s.content),
  })) : []
})
</script>
