<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <h1 class="mb-4">{{ t('footer.links.company.shipping_return_policy') }}</h1>
        
        <div class="content">
          <h2>{{ t('shipping_policy.title') }}</h2>
          <p>{{ t('shipping_policy.content') }}</p>
          
          <h2>{{ t('return_policy.title') }}</h2>
          <p>{{ t('return_policy.content') }}</p>
          
          <h2>{{ t('shipping_policy.delivery') }}</h2>
          <p>{{ t('shipping_policy.delivery_content') }}</p>
          
          <h2>{{ t('return_policy.conditions') }}</h2>
          <p>{{ t('return_policy.conditions_content') }}</p>
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
  title: t('footer.links.company.shipping_return_policy')
})
</script>

<style scoped>
.content h2 {
  color: #333;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.content p {
  line-height: 1.6;
  margin-bottom: 1rem;
}
</style>
