
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// Force Arabic locale on app initialization
const { $i18n } = useNuxtApp()
if (process.client) {
  $i18n.locale.value = 'ar'
  document.documentElement.setAttribute('lang', 'ar')
  document.documentElement.setAttribute('dir', 'rtl')
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
@import '/assets/css/custom.css';
body {
  margin: 0;
}
</style>
