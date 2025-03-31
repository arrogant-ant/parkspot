<template>
  <BodyWrapper>
    <div class="heading-container">
      <AtomHeading class="primary-heading" :level="'h2'">
        We Would love to serve you!
      </AtomHeading>
      <p class="sub-heading">
        Get your safe and secure hassle-free parking space near you
      </p>
    </div>
    <div class="content-wrapper">
      <div class="left-section">
        <div class="join-benefits">
          <!-- <div class="accent-circle"></div> -->
          <AtomHeading class="benefits-title" :level="'h3'">
            Why should you choose Parkspot?
          </AtomHeading>
          <ul class="benefits-list">
            <li v-for="(benefit, index) in JOINING_BENEFITS" :key="index" class="benefit-item">
              <span class="material-symbols-outlined benefit-icon">{{ benefit.icon }}</span>
              {{ benefit.text }}
            </li>
          </ul>
        </div>
      </div>
      <div class="right-section">
        <div class="form-container">
          <div class="form-card">
            <div class="request-form">
              <div class="form-header">
                <div class="whatsapp-section">
                  <p>
                    Chat with us directly on
                    <a href="https://api.whatsapp.com/send/?phone=917488239471&text=I%27m+interested+in+car+parking.&type=phone_number&app_absent=0"
                      target="_blank" class="whatsapp-link">
                      <AtomIcon :icon="'whatsapp'"></AtomIcon>
                      WhatsApp
                    </a>
                    for instant support.
                  </p>
                </div>
                <div class="divider">
                  <span>OR</span>
                </div>
                <p class="form-title">Apply for Parking Service</p>
              </div>
              <OrganismContactForm :formSubmitted="formSubmitted" @submitForm="submitForm"></OrganismContactForm>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-section">
      <WhatNext />
    </div>
    <TestimonialSection />
  </BodyWrapper>
</template>

<script>
import BodyWrapper from '../extras/BodyWrapper.vue';
import OrganismContactForm from '../organisms/OrganismContactForm.vue';
import TestimonialSection from '../global/TestimonialSection.vue';
import WhatNext from '../vo-portal/WhatNext.vue';
import { JOINING_BENEFITS } from '@/constant/constant';

export default {
  name: 'TemplateParkingSpot',
  components: {
    BodyWrapper,
    OrganismContactForm,
    TestimonialSection,
    WhatNext,
  },
  emits: ['finalSubmit'],
  data() {
    return {
      formSubmitted: false,
      JOINING_BENEFITS: JOINING_BENEFITS,
    };
  },
  methods: {
    submitForm() {
      this.$emit('finalSubmit');
    },
  },
};
</script>

<style lang="scss" scoped>
/* CSS Variables */
:root {
  --parkspot-primary: #3498db;
  /* Main brand color */
  --parkspot-secondary: #2c3e50;
  /* Secondary brand color */
  --parkspot-accent: #1abc9c;
  /* Accent color for highlights */
  --parkspot-bg-light: #f8f9fa;
  /* Light background color */
  --parkspot-text-dark: #333333;
  /* Dark text color */
  --parkspot-text-light: #666666;
  /* Light text color */
  --parkspot-white: #ffffff;
  /* White color */
  --parkspot-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  /* Standard shadow */
  --parkspot-hover-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  /* Shadow on hover */
  --parkspot-border-radius: 12px;
  /* Standard border radius */
  --parkspot-spacing-sm: 0.5rem;
  /* Small spacing */
  --parkspot-spacing-md: 1rem;
  /* Medium spacing */
  --parkspot-spacing-lg: 2rem;
  /* Large spacing */
}

/* Header Section */
.heading-container {
    margin-top: -2%;
  text-align: center;
}

.primary-heading {
  color: var(--secondary-color);
  font-size: 2.25rem;
  font-weight: 700;
}

.sub-heading {
//   color: var(--parkspot-text-light);
  font-size: 1.2rem;
  font-weight: 500;
//   max-width: 600px;
//   margin: 0 auto;
}

/* Main Content Layout */
.content-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1250px;
  margin: 0 auto;
}

.left-section,
.right-section {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Benefits Card */
.join-benefits {
  padding: var(--parkspot-spacing-lg);
  border-radius: var(--parkspot-border-radius);
  box-shadow: var(--parkspot-shadow);
  background: var(--parkspot-white);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  height: 100%;
}

.join-benefits:hover {
  box-shadow: var(--parkspot-hover-shadow);
}

.accent-circle {
  position: absolute;
  width: 120px;
  height: 120px;
  background-color: var(--parkspot-secondary);
  border-radius: 50%;
  top: -40px;
  left: -40px;
  z-index: 0;
  opacity: 0.6;
}

.benefits-title {
  color: var(--parkspot-black);
  font-size: 2.25rem;
  font-weight: 600;
  padding-bottom: 10px;
  margin-bottom: 2px;
//   position: relative;
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin: var(--parkspot-spacing-md) 0 0;
  position: relative;
}

.benefit-item {
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  color: var(--parkspot-text-dark);
  padding: 4px 0;
  transition: transform 0.2s ease;
}

.benefit-item:hover {
  transform: translateX(4px);
}

.benefit-icon {
  margin-right: var(--parkspot-spacing-sm);
  font-size: 2rem;
  color: var(--parkspot-primary);
}

/* Form Section */
.form-container {
  display: flex;
  justify-content: center;
}

.form-card {
//   padding: var(--parkspot-spacing-lg);
//   border-radius: var(--parkspot-border-radius);
//   box-shadow: var(--parkspot-shadow);
//   background: var(--parkspot-white);
  max-width: 500px;
  width: 100%;
  transition: all 0.2s ease-in-out;
}

.form-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--parkspot-hover-shadow);
}

.form-header {
  margin-bottom: var(--parkspot-spacing-md);
}



.whatsapp-link {
  display: inline-flex;
  align-items: center;
  color: var(--parkspot-green);
  /* WhatsApp green */
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.whatsapp-link:hover {
  opacity: 0.8;
}

.divider {
  display: flex;
  align-items: center;
  margin: var(--parkspot-spacing-md) 0;
  position: relative;
  text-align: center;
}

.divider::before,
.divider::after {
  content: "";
  flex: 1;
  border-top: 1px solid #e0e0e0;
}

.divider span {
  padding: 0 var(--parkspot-spacing-sm);
  font-size: 0.85rem;
  color: var(--parkspot-text-light);
  font-weight: 500;
}

.form-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--parkspot-secondary);
  margin-bottom: var(--parkspot-spacing-md);
}

/* Bottom Section */
.bottom-section {
  margin-top: var(--parkspot-spacing-lg);
  padding: var(--parkspot-spacing-md);
}

/* Responsive Design */
@media screen and (max-width: 992px) {
  .content-wrapper {
    padding: var(--parkspot-spacing-md);
  }

  .form-card,
  .join-benefits {
    padding: var(--parkspot-spacing-md);
  }
}

@media screen and (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    gap: var(--parkspot-spacing-lg);
  }

  .left-section,
  .right-section {
    width: 100%;
  }

  .accent-circle {
    width: 80px;
    height: 80px;
    top: -20px;
    left: -20px;
  }

  .primary-heading {
    font-size: 1.75rem;
  }

  .form-card,
  .join-benefits {
    max-width: 100%;
  }
}

@media screen and (max-width: 480px) {
  .heading-container,
  .content-wrapper {
    padding: var(--parkspot-spacing-md) var(--parkspot-spacing-sm);
  }

  .primary-heading {
    font-size: 1.5rem;
  }

  .benefits-title,
  .form-title {
    font-size: 1.25rem;
  }
}
</style>