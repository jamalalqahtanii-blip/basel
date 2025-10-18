<template>
  <footer class="app-footer" dir="rtl">
    <div class="footer-container">
      <!-- Main Footer Content -->
      <div class="footer-main">
        

        <!-- Brand Section -->
        <div class="footer-brand">
          <p class="brand-description">
            {{ t('footer.brand.description1') }}
          </p>
          <p class="brand-description">
            {{ t('footer.brand.description2') }}
          </p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Google">
              <i class="fa-brands fa-google"></i>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#" class="social-link" aria-label="Instagram">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#" class="social-link" aria-label="LinkedIn">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="footer-links">
          <!-- Main Links -->
            <div class="link-section">
              <ul class="link-list">
                <li><NuxtLink to="/intellectual-property" class="footer-link">{{ t('footer.links.company.intellectual_property') }}</NuxtLink></li>
                <li><NuxtLink to="/blog" class="footer-link">{{ t('footer.links.company.blog') }}</NuxtLink></li>
              </ul>
            </div>



          <!-- Account Links -->
          <div class="link-section">
            <ul class="link-list">
              <li><NuxtLink to="/about" class="footer-link">{{ t('footer.links.company.about') }}</NuxtLink></li>
              <li><NuxtLink to="/account?orders=true" class="footer-link">{{ t('footer.links.account.orders') }}</NuxtLink></li>
            </ul>
          </div>
        </div>
        <!-- Newsletter Section -->
        <div class="newsletter-section">
                    <!-- Company Links -->
          <div class="link-section">
            <ul class="link-list">
              <li><NuxtLink to="/privacy-policy" class="footer-link">{{ t('footer.links.company.privacy_policy') }}</NuxtLink></li>
              <li><NuxtLink to="/shipping-return-policy" class="footer-link">{{ t('footer.links.company.shipping_return_policy') }}</NuxtLink></li>
            </ul>
            <img src="/images/footer-social.jpg" :style="{ width: '50px' , borderRadius: '10px' }" alt="logo" class="logo-img">
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const email = ref('')

const subscribe = () => {
  if (email.value) {
    // Handle newsletter subscription
    console.log('Subscribing email:', email.value)
    // You can add API call here
    email.value = ''
  }
}
</script>

<style scoped>
.app-footer {
  background-image: url('../images/BG.png');
  color: #ffffff;
  padding: 60px 0 100px;
  margin-top: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.newsletter-content {
  position: relative;
  z-index: 2;
  width: 100%;
}

.newsletter-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #ffffff;
}

.newsletter-form {
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px;
  border-radius: 10px;
  background: #ffffff;
  
}

.email-input-wrapper {
  position: relative;
  flex: 1;
  width: 50%;
}

.email-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 16px;
}

.email-input {
  width: 100%;
  padding: 15px 50px 15px 15px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  background: #ffffff;
  color: #333;
}

.email-input::placeholder {
  color: #999;
}

.subscribe-btn {
  background: #f58040;
  color: #ffffff;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.subscribe-btn:hover:not(:disabled) {
  background: #e67030;
  transform: translateY(-2px);
}

.subscribe-btn:disabled {
  cursor: not-allowed;
}

/* Main Footer Content */
.footer-main {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  align-items: start;
}

/* Brand Section */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.brand-logo {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.logo-text {
  display: flex;
  align-items: baseline;
  gap: 5px;
}

.logo-go {
  font-size: 36px;
  font-weight: 900;
  color: #f58040;
  position: relative;
}

.logo-go::after {
  content: '%';
  position: absolute;
  top: -5px;
  right: -15px;
  font-size: 20px;
  color: #f58040;
}

.logo-tawfeer {
  font-size: 24px;
  font-weight: 700;
  color: #4a90e2;
}

.logo-arabic {
  font-size: 18px;
  color: #4a90e2;
  font-weight: 500;
}

.brand-description {
  color: #cccccc;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

.social-links {
  display: flex;
  gap: 12px;
  margin-top: 10px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #3a3a3a;
  border-radius: 50%;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #f58040;
  transform: translateY(-2px);
}

.social-link i {
  font-size: 16px;
}

/* Footer Links */
.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.link-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.link-title {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
}

.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  color: #cccccc;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #f58040;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .newsletter-form {
    flex-direction: column;
    align-items: stretch;
  }
  
  .email-input-wrapper {
    min-width: auto;
  }
  
  .newsletter-title {
    font-size: 20px;
  }
  
  .brand-logo {
    text-align: center;
  }
}

@media (max-width: 1024px) {
  .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  
  .footer-links {
    grid-column: 1 / -1;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .app-footer {
    padding: 30px 0 15px;
  }
  
  .footer-container {
    padding: 0 15px;
  }
  
  .newsletter-section {
    padding: 20px;
    margin-bottom: 30px;
  }
  
  .newsletter-title {
    font-size: 18px;
  }
  
  .email-input {
    padding: 12px 45px 12px 12px;
    font-size: 14px;
  }
  
  .subscribe-btn {
    padding: 12px 20px;
    font-size: 14px;
  }
  
  .logo-go {
    font-size: 28px;
  }
  
  .logo-tawfeer {
    font-size: 20px;
  }
  
  .logo-arabic {
    font-size: 16px;
  }
  
  .link-title {
    font-size: 16px;
  }
  
  .footer-link {
    font-size: 13px;
  }
}

/* RTL Support */
[dir="ltr"] .app-footer {
  direction: ltr;
}

[dir="ltr"] .email-icon {
  right: auto;
  left: 15px;
}

[dir="ltr"] .email-input {
  padding: 15px 15px 15px 50px;
}

[dir="ltr"] .newsletter-section::before {
  right: auto;
  left: 0;
  background: linear-gradient(-45deg, #3a3a3a 0%, transparent 100%);
}

[dir="ltr"] .logo-go::after {
  right: auto;
  left: -15px;
}
</style>