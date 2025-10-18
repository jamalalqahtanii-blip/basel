<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <h1 class="mb-4">{{ t('footer.links.company.blog') }}</h1>
        
        <div class="content">
          <p class="lead">{{ t('blog.coming_soon') }}</p>
          <p>{{ t('blog.description') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Set page title
useHead({
  title: t('footer.links.company.blog')
})
</script>

<style scoped>
.content .lead {
  font-size: 1.25rem;
  font-weight: 300;
  color: #6c757d;
}
</style>
