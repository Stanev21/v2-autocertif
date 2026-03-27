<template>
  <div>
    <OrganismsTheHeader />
    <OrganismsLegalPage
      :badge="$t('legalNotice.badge')"
      :title="$t('legalNotice.title')"
      :subtitle="$t('legalNotice.subtitle')"
      :effective="$t('legalNotice.effective')"
      :nav-items="navItems"
      :sections="sections"
      :cta-title="$t('legalNotice.ctaTitle')"
      :cta-desc="$t('legalNotice.ctaDesc')"
      :cta-cta="$t('legalNotice.ctaCta')"
    />
    <OrganismsTheFooter />
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Legal Notice — Autocertif' })
const { tm, rt } = useI18n()
const navItems = computed(() => {
  const raw = tm('legalNotice.nav')
  return Array.isArray(raw) ? raw.map((n: any) => typeof n === 'string' ? n : rt(n)) : []
})
const sections = computed(() => {
  const raw = tm('legalNotice.sections')
  return Array.isArray(raw) ? raw.map((s: any) => ({
    id: typeof s.id === 'string' ? s.id : rt(s.id),
    title: rt(s.title),
    content: rt(s.content),
  })) : []
})
</script>
