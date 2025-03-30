<template>
    <BodyWrapper>
        <div class="heading-container">
            <AtomHeading :level="'h2'">
                We Would love to serve you!
            </AtomHeading>
            <p class="sub-heading">
                Get your safe and secure hassle-free parking space near you
            </p>
        </div>
        <div class="form-section-wrapper">
            <div class="form-wrapper">
                <div class="request-form">
                    <div class="text">
                        <div class="whatsapp-link">
                            <p>
                                Chat with us directly on
                                <a href="https://api.whatsapp.com/send/?phone=917488239471&text=I%27m+interested+in+car+parking.&type=phone_number&app_absent=0" target="_blank">
                                    <AtomIcon :icon="'whatsapp'"></AtomIcon> WhatsApp
                                </a>
                                for instant support.
                            </p>
                        </div>
                        <div class="dividing-line">
                            <span>OR</span>
                        </div>
                        <p class="sub-heading">Apply for Parking Service</p>
                    </div>
                    <OrganismContactForm :formSubmitted="formSubmitted" @submitForm="submitForm"></OrganismContactForm>
                </div>
            </div>
            <div class="join-benefits">
                <div class="join-parkspot-container">
                    <AtomHeading class="custom-subtitle" :level="'h3'">
                        Why should you choose Parkspot?
                    </AtomHeading>
                    <ul>
                        <li v-for="(benefit, index) in JOINING_BENEFITS" :key="index">
                            <span class="material-symbols-outlined icon">{{ benefit.icon }}</span>
                            {{ benefit.text }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <WhatNext />
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
.form-section-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    gap: 2rem;
}

.form-wrapper, .join-benefits {
    flex: 1;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-wrapper {
    // background: var(--parkspot-white);
}

.join-benefits {
    // background: var(--parkspot-black);
    // color: var(--parkspot-white);
}

.benefits ul {
    list-style: none;
    padding: 0;
}

.benefits li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1rem;
    padding: 0.5rem 0;
}

.icon {
    font-size: 1.5rem;
    color: var(--parkspot-green);
}

@media screen and (max-width: 768px) {
    .form-section-wrapper {
        flex-direction: column;
        align-items: center;
    }
    .form-wrapper, .join-benefits {
        max-width: 100%;
    }
}
</style>