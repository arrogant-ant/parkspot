<template>
    <section class="custom-bg">
        <div class="bg-decor"></div>
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
}

.bg-decor {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background-color: var(--primary-color);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%);
}

.custom-bg::before {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: var(--secondary-color);
    border-radius: 50%;
    top: 15%;
    left: 10%;
    opacity: 0.5;
}

.custom-bg::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: var(--parkspot-muted-black);
    border-radius: 50%;
    bottom: 10%;
    right: 15%;
    opacity: 0.3;
}
</style>