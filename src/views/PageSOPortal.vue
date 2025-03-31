<template>
    <section class="custom-bg">
        <div class="bg-decor"></div>

        <div class="floating-circle floating-circle-1"></div>
        <div class="floating-circle floating-circle-2"></div>
        <div class="floating-circle floating-circle-3"></div>
        <div class="floating-circle floating-circle-4"></div>
        <div class="floating-square"></div>
        <div class="floating-triangle"></div>

        <TemplateSOPortal @finalSubmit="onFinalSubmit"></TemplateSOPortal>
        <LoaderModal v-if="isLoading"></LoaderModal>
    </section>
</template>

<script>
import TemplateSOPortal from '../components/templates/TemplateSOPortal.vue';
import LoaderModal from '../components/extras/LoaderModal.vue';
import { mapActions } from 'vuex';
import { PAGE_TITLE } from '@/constant/constant';

export default {
    name: 'PageSOPortal',
    components: {
        TemplateSOPortal,
        LoaderModal,
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
    background-color: var(--parkspot-white);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 20px;
    overflow: hidden; // To contain floating elements
}

.bg-decor {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    opacity: 0.6;
    background-color: var(--primary-color);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 20%, 0 100%);
}

// Floating circles animation
@keyframes float {
    0% {
        transform: translateY(0) translateX(0) rotate(0);
    }
    33% {
        transform: translateY(-20px) translateX(20px) rotate(20deg);
    }
    66% {
        transform: translateY(20px) translateX(-20px) rotate(-50deg);
    }
    100% {
        transform: translateY(0) translateX(0) rotate(0);
    }
}

@keyframes floatReverse {
    0% {
        transform: translateY(0) translateX(0) rotate(0);
    }
    33% {
        transform: translateY(15px) translateX(-10px) rotate(-10deg);
    }
    66% {
        transform: translateY(-10px) translateX(10px) rotate(5deg);
    }
    100% {
        transform: translateY(0) translateX(0) rotate(0);
    }
}

// Multiple decorative elements instead of just before/after
.floating-circle {
    position: absolute;
    border-radius: 0%;
    opacity: 0.3;
    // pointer-events: none;
    z-index: 2;
}

.floating-circle-1 {
    width: 120px;
    height: 120px;
    background-color: var(--primary-color);
    top: 8%;
    
    left: 2%;
    animation: float 8s ease-in-out infinite;
}

.floating-circle-2 {
    border-radius: 100%;
    width: 60px;
    height: 60px;
    background-color: var(--primary-color);
    top: 14%;
    left: 8%;
    animation: floatReverse 12s ease-in-out infinite;
}

.floating-circle-3 {
    width: 150px;
    height: 150px;
    background-color: var(--primary-color);
    top: 6%;
    left: 16%;
    opacity: 0.2;
    animation: float 10s ease-in-out infinite;
}

.floating-circle-4 {
    width: 40px;
    height: 40px;
    background-color: var(--primary-color);
    top: 30%;
    left: 16%;
    animation: floatReverse 12s ease-in-out infinite;
}

.floating-square {
    z-index: 10;
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: var(--primary-color);
    opacity: 0.3;
    transform: rotate(45deg);
    top: 12%;
    left: 40%;
    animation: float 14s ease-in-out infinite;
}

.floating-triangle {
    z-index: 10;
    position: absolute;
    width: 0;
    height: 0;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 50px solid var(--primary-color);
    opacity: 0.2;
    top: 26%;
    left: 40%;
    animation: floatReverse 16s ease-in-out infinite;
}
</style>
