<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <h1 class="mb-4">{{ t('footer.links.company.privacy_policy') }}</h1>
        
        <div class="content">
          <p class="lead">{{ t('privacy_policy.intro') }}</p>
          
          <h2>{{ t('privacy_policy.data_collection') }}</h2>
          <p>{{ t('privacy_policy.data_collection_content') }}</p>
          
          <h2>{{ t('privacy_policy.data_usage') }}</h2>
          <p>{{ t('privacy_policy.data_usage_content') }}</p>
          
          <h2>{{ t('privacy_policy.data_protection') }}</h2>
          <p>{{ t('privacy_policy.data_protection_content') }}</p>
          
          <h2>{{ t('privacy_policy.contact') }}</h2>
          <p>{{ t('privacy_policy.contact_content') }}</p>
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
  title: t('footer.links.company.privacy_policy')
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

.content .lead {
  font-size: 1.25rem;
  font-weight: 300;
  color: #6c757d;
}
</style>
