<template>
    <div>
        <div id="app">
            <Navbar></Navbar>
            <OrganismLogin></OrganismLogin>
            <main class="body-container">
                <router-view :key="$route.fullPath" />
            </main>
            <TemplateFooter></TemplateFooter>
        </div>
        <AtomChat />
    </div>
</template>

<script>
import TemplateFooter from './components/templates/TemplateFooter.vue';
import Navbar from './components/extras/NavbarBody.vue';
import OrganismLogin from './components/organisms/OrganismLogin.vue';
import AtomChat from './components/atoms/AtomChat.vue';
import { PAGE_TITLE } from '@/constant/constant';
import { mapActions } from 'vuex';

export default {
    components: {
        TemplateFooter,
        Navbar,
        OrganismLogin,
        AtomChat,
    },
    async created() {
        await this.getHelplineNumber();
    },
    metaInfo() {
        return {
            title: PAGE_TITLE.HOMEPAGE,
        };
    },
    methods: {
        ...mapActions('config', ['getHelplineNumber']),
    },
};
</script>

<style lang="scss" src="@/styles/app.scss"></style>
