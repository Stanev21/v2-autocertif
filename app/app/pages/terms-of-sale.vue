<template>
  <div>
    <OrganismsTheHeader />
    <OrganismsLegalPage
      :badge="$t('termsSale.badge')"
      :title="$t('termsSale.title')"
      :subtitle="$t('termsSale.subtitle')"
      :effective="$t('termsSale.effective')"
      :nav-items="navItems"
      :sections="sections"
      :cta-title="$t('termsSale.ctaTitle')"
      :cta-desc="$t('termsSale.ctaDesc')"
      :cta-cta="$t('termsSale.ctaCta')"
    />
    <OrganismsTheFooter />
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Terms of Sale - Autocertif' })
const { tm, rt } = useI18n()
const navItems = computed(() => {
  const raw = tm('termsSale.nav')
  return Array.isArray(raw) ? raw.map((n: any) => typeof n === 'string' ? n : rt(n)) : []
})
const sections = computed(() => {
  const raw = tm('termsSale.sections')
  return Array.isArray(raw) ? raw.map((s: any) => ({
    id: typeof s.id === 'string' ? s.id : rt(s.id),
    title: rt(s.title),
    content: rt(s.content),
  })) : []
})
</script>
