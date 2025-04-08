<template>
    <!-- <BodyWrapper> -->
    <div class="heading-container">
        <AtomHeading :level="'h2'"> We Would love to serve you! </AtomHeading>
        <p class="sub-heading">
            Get your safe and secure hassle free parking space near you
        </p>
    </div>
    <div class="form-section-wrapper">
        <!-- Joining benefites container -->
        <div class="join-benefites">
            <div class="join-parkspot-container">
                <AtomHeading class="custom-subtitle" :level="'h3'"
                    >Why should you choose Parkspot?</AtomHeading
                >
                <div class="benefits">
                    <ul>
                        <li
                            v-for="(benefit, index) in JOINING_BENEFITS"
                            :key="index"
                        >
                            <span class="material-symbols-outlined icon">
                                {{ benefit.icon }}
                            </span>
                            {{ benefit.text }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Parking request form -->
        <div class="form-wrapper">
            <div class="request-form">
                <div class="text">
                    <div class="whatsapp-link">
                        <p>
                            Chat with us directly on
                            <a
                                href="https://api.whatsapp.com/send/?phone=917488239471&text=I%27m+interested+in+car+parking.&type=phone_number&app_absent=0"
                                target="_blank"
                                ><AtomIcon :icon="'whatsapp'"></AtomIcon>
                                WhatsApp
                            </a>
                            for instant support.
                        </p>
                    </div>
                    <div class="dividing-line">
                        <span>OR</span>
                    </div>
                    <p class="sub-heading">Apply for Parking Service</p>
                </div>
                <TemplateSOPortal
                    @finalSubmit="onFinalSubmit"
                ></TemplateSOPortal>
                <LoaderModal v-if="isLoading"></LoaderModal>
            </div>
        </div>
    </div>
    <!-- </BodyWrapper> -->
</template>

<script>
import TemplateSOPortal from '../components/templates/TemplateSOPortal.vue';
import LoaderModal from '../components/extras/LoaderModal.vue';
import { mapActions } from 'vuex';
import { PAGE_TITLE } from '@/constant/constant';
import { JOINING_BENEFITS } from '@/constant/constant';
import AtomHeading from '@/components/atoms/AtomHeading.vue';
import AtomIcon from '@/components/atoms/AtomIcon.vue';
export default {
    name: 'PageSOPortal',
    components: {
        TemplateSOPortal,
        LoaderModal,
        AtomHeading,
        AtomIcon,
    },
    metaInfo() {
        return {
            title: PAGE_TITLE.SO_PORTAL,
            titleTemplate: PAGE_TITLE.TITLE_TEMPLATE + '%s',
        };
    },
    data() {
        return {
            isLoading: false,
            JOINING_BENEFITS: JOINING_BENEFITS,
        };
    },
    methods: {
        ...mapActions({
            register: 'user/register',
            login: 'user/login',
            kyc: 'user/kyc',
            contact: 'user/contact',
        }),
        async onFinalSubmit() {
            try {
                this.isLoading = true;
                this.contact();
                this.isLoading = false;
                this.$buefy.toast.open({
                    message: 'ParkSpot registered successfully!',
                    type: 'is-success',
                    duration: 2000,
                });
                this.$router.push({ name: 'thankYou' });
            } catch (error) {
                console.error({ error });
                this.$buefy.toast.open({
                    message: `Something went wrong!`,
                    type: 'is-danger',
                    duration: 2000,
                });
                this.$router.push({
                    name: 'error',
                    params: { msg: error.DisplayMsg },
                });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.custom-bg {
    background-color: var(--bg-color-tertiary);
}

.bg-decor {
    position: absolute;
    top: -7px;
    left: 0;
    width: 100%;
    height: 526px;
    clip-path: polygon(-54% 0, 184% 0, 50% 100%);
    background-color: var(--parkspot-white);
}

// .card-wrapper {
//     max-width: 600px;
//     margin: 0 auto;
//     padding: 2rem 1rem;
// }

// .footer-buttons {
//     display: flex;
//     justify-content: space-between;
// }

.heading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
    margin-bottom: 40px;
}

.sub-heading {
    color: var(--secondary-color);
    font-weight: var(--semi-bold-font);
}

.custom-subtitle {
    color: var(--secondary-color);
    font-weight: var(--semi-bold-font);
    text-align: left;
    font-size: 2rem;
}

.form-section-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0rem;
    width: 100%;
    padding: 0rem 6rem;

    .join-benefites {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .form-wrapper {
        width: 48%;
    }
}

.join-parkspot-container {
    display: flex;
    flex-direction: column;
    color: var(--secondary-color);

    .benefits {
        margin-top: 20px;

        ul {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding-left: 0;

            li {
                list-style: none;
                display: flex;
                align-items: center;
                gap: 1rem;
                color: var(--parkspot-black);
                font-weight: var(--semi-bold-font);
                margin: 8px 0;
            }

            .icon {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: 1px solid var(--primary-color);
                color: var(--secondary-color);
                font-size: 1.5rem;
                box-shadow: 0 2px 4px var(--parkspot-muted-black);
                transition:
                    transform 0.2s,
                    background-color 0.2s;
            }
        }
    }
}

.request-form {
    border-radius: var(--border-default);
    box-shadow:
        0 4px 8px rgba(0, 0, 0, 0.2),
        0 2px 4px rgba(0, 0, 0, 0.15);
    padding: 1rem;
    background-color: var(--parkspot-white);
}

.dividing-line {
    position: relative;
    text-align: center;
    border-bottom: 1px solid var(--secondary-color);
    margin: 1rem 0;

    span {
        position: absolute;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
        padding: 0 0.4rem;
        background-color: var(--parkspot-white);
        color: var(--parkspot-black);
        font-weight: var(--semi-bold-font);
    }
}

.whatsapp-link {
    text-align: center;
    margin-bottom: 0rem;

    p {
        color: var(--parkspot-black);

        a {
            color: var(--parkspot-green);
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}

// Media Queries
@media (max-width: 1100px) {
    .form-section-wrapper {
        flex-direction: column-reverse;

        .join-benefites,
        .form-wrapper {
            width: 100%;
            padding: 0rem 1rem;
        }
    }
}

@media (max-width: 768px) {
    .heading-container {
        margin-bottom: 20px;
    }

    .custom-subtitle {
        font-size: 1.25rem;
        text-align: center;
    }

    .benefits ul {
        gap: 6px;
    }
}
</style>
