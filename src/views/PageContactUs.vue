<template>
    <div class="bg-wrap">
        <TemplateContactUs @contactUs="fireContact"></TemplateContactUs>
        <LoaderModal v-if="isLoading"></LoaderModal>
    </div>
</template>

<script>
import TemplateContactUs from '../components/templates/TemplateContactUs.vue';
import LoaderModal from '../components/extras/LoaderModal.vue';
import { mapActions } from 'vuex';
import { PAGE_TITLE } from '@/constant/constant';
export default {
    name: 'PageContactUs',
    components: {
        TemplateContactUs,
        LoaderModal,
    },
    metaInfo() {
        return {
            title: this.title,
            titleTemplate: PAGE_TITLE.TITLE_TEMPLATE + '%s',
        };
    },
    data() {
        return {
            isLoading: false,
            title: undefined,
            PAGE_TITLE,
        };
    },
    watch: {
        $route: {
            handler: function (to) {
                if (to.name == 'contactUs') {
                    this.title = PAGE_TITLE.CONTACT;
                }
            },
            deep: true,
            immediate: true,
        },
    },
    methods: {
        ...mapActions({
            onlyContact: 'user/onlyContact',
        }),
        async fireContact() {
            try {
                this.isLoading = true;

                await this.onlyContact();

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

                this.$router.push({ name: 'Home' });
            }
            this.isLoading = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.bg-wrap {
    position: relative;
    padding: 2.5rem 0;
    background-color: var(--parkspot-white);
}

.bg-wrap::before {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    clip-path: polygon(300px 0, 100% 0, 100% 100%, 0 100%);
    content: '';
    width: calc(50vw + 150px);
    height: 100%;
    background-color: var(--bg-color-tertiary);
}

@media only screen and (max-width: 760px) {
    .bg-wrap::before {
        clip-path: polygon(300px 70%, 100% 33%, 100% 100%, 0% 100%);
        width: calc(50vw + 360px);
    }
}
</style>
