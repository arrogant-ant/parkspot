<template>
    <footer class="custom-footer">
        <section class="primary-footer">
            <BodyWrapper>
                <section class="primary-container">
                    <div class="custom-parkspot">
                        <div class="mb-2">
                            <router-link
                                class="top-search-link"
                                :to="{ name: 'Home' }"
                            >
                                <figure class="image parkspot-logo">
                                    <img
                                        :src="psfooterImg"
                                        :alt="'parkspot footer logo'"
                                    />
                                </figure>
                            </router-link>
                        </div>
                        <AtomParagraph class="pl-4 mb-5 footer-para">
                            We provide the cheap and best parking spot in
                            India.<br />
                            You can't park cheaper!
                        </AtomParagraph>
                        <div class="app-links">
                            <span class="pl-2">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.parkspot.maya_nagri&utm_source=parkspot.in&utm_campaign=website"
                                    target="_blank"
                                >
                                    <figure class="card-img image is-128x128">
                                        <img
                                            alt="google app link"
                                            :src="appLinkImg"
                                        />
                                    </figure>
                                </a>
                            </span>
                            <span class="pl-2">
                                <a
                                    href="https://apps.apple.com/in/app/parkspot-find-book-parking/id6449634064"
                                    target="_blank"
                                >
                                    <figure class="card-img image is-128x128">
                                        <img
                                            alt="ios app link"
                                            :src="iosAppLinkImg"
                                        />
                                    </figure>
                                </a>
                            </span>
                        </div>
                    </div>

                    <div class="top-search">
                        <AtomParagraph
                            :variation="'large'"
                            class="footer-heading"
                        >
                            Top Searched Places
                        </AtomParagraph>
                        <div>
                            <p>
                                <router-link
                                    class="top-search-link"
                                    :to="{
                                        path: '/bangalore/parking-near-jp-nagar',
                                    }"
                                >
                                    Parking Spot in JP-Nagar
                                </router-link>
                            </p>
                            <p>
                                <router-link
                                    class="top-search-link"
                                    :to="{
                                        path: '/bangalore/parking-near-btm',
                                    }"
                                >
                                    Parking Spot in BTM
                                </router-link>
                            </p>
                            <p>
                                <router-link
                                    class="top-search-link"
                                    :to="{
                                        path: '/hyderabad/parking-near-hyderabad',
                                    }"
                                >
                                    Parking Spot in Hyderabad
                                </router-link>
                            </p>
                            <p>
                                <router-link
                                    class="top-search-link"
                                    :to="{
                                        path: '/bangalore/parking-near-rajajinagar',
                                    }"
                                    >Parking Spot in Rajajinagar</router-link
                                >
                            </p>
                            <p>
                                <router-link
                                    class="top-search-link"
                                    :to="{
                                        path: '/bangalore/parking-near-banashankari',
                                    }"
                                >
                                    Parking Spot in Banashankari
                                </router-link>
                            </p>
                            <p>
                                <router-link
                                    class="top-search-link"
                                    :to="{
                                        path: '/bangalore/parking-near-marathahalli',
                                    }"
                                >
                                    Parking Spot in marathahalli
                                </router-link>
                            </p>
                        </div>
                    </div>

                    <div class="contact-info">
                        <AtomParagraph
                            :variation="'large'"
                            class="footer-heading"
                        >
                            Contact Info
                        </AtomParagraph>
                        <div class="mb-4">
                            <AtomParagraph class="mb-2">
                                Corporate Office Address :
                            </AtomParagraph>
                            <span>
                                <AtomIcon
                                    class="location-icon"
                                    :icon="'map-marker-radius'"
                                    :size="'is-medium'"
                                >
                                </AtomIcon>
                            </span>
                            <AtomParagraph :type="'span'">
                                2nd Floor, Nextcoworks BTM Layout, BTM 2nd
                                Stage, Bengaluru, Karnataka 560076
                            </AtomParagraph>
                        </div>
                        <div>
                            <AtomParagraph class="mb-2">
                                Customer Service:
                            </AtomParagraph>
                            <span>
                                <a :href="helplineRef" class="phone-contact">
                                    <AtomIcon
                                        :icon="'phone-classic'"
                                        :size="'is-medium'"
                                    >
                                    </AtomIcon>
                                    <span
                                        class="top-search-link"
                                        style="margin-left: 8px"
                                        >{{ helplineNumber }}
                                    </span>
                                </a>
                            </span>
                        </div>
                    </div>

                    <div class="footer-discovery">
                        <AtomParagraph
                            :variation="'large'"
                            class="footer-heading"
                        >
                            Discover
                        </AtomParagraph>
                        <div class="footer-discovery-list">
                            <ul>
                                <li>
                                    <p>
                                        <router-link
                                            class="top-search-link"
                                            :to="{
                                                name: 'features',
                                            }"
                                        >
                                            Features
                                        </router-link>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <router-link
                                            class="top-search-link"
                                            :to="{
                                                name: 'blog',
                                            }"
                                        >
                                            Blogs
                                        </router-link>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <router-link
                                            class="top-search-link"
                                            :to="{
                                                name: 'VOPortal',
                                            }"
                                        >
                                            Request Spot
                                        </router-link>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <router-link
                                            class="top-search-link"
                                            :to="{
                                                name: 'SOPortal',
                                            }"
                                        >
                                            Register Spot
                                        </router-link>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <router-link
                                            class="top-search-link"
                                            :to="{
                                                name: 'Faq',
                                            }"
                                        >
                                            FAQ
                                        </router-link>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <router-link
                                            class="top-search-link"
                                            :to="{
                                                name: 'contactUs',
                                            }"
                                        >
                                            Contact Us
                                        </router-link>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </BodyWrapper>
        </section>

        <section class="secondary-footer">
            <BodyWrapper>
                <section class="secondary-container">
                    <div>
                        <AtomParagraph>
                            © {{ new Date().getFullYear() }} NeoSpot
                            Technologies Pvt Ltd.- ALL RIGHTS RESERVED
                        </AtomParagraph>
                        <AtomParagraph>
                            <a
                                class="footer-link"
                                href="/terms-and-conditions"
                                target="_blank"
                            >
                                Terms & Conditions
                            </a>
                            <a
                                class="footer-link"
                                href="/privacy"
                                target="_blank"
                            >
                                | Privacy Policy
                            </a>
                        </AtomParagraph>
                    </div>
                    <div class="social-groups">
                        <a
                            class="social-icon"
                            href="https://www.facebook.com/parkspot.in"
                            target="_blank"
                        >
                            <AtomIcon :icon="'facebook'" :size="'is-medium'">
                            </AtomIcon>
                        </a>
                        <a
                            class="social-icon"
                            href="https://www.instagram.com/parkspot.in/"
                            target="_blank"
                        >
                            <AtomIcon
                                :icon="'instagram'"
                                :size="'is-medium'"
                            ></AtomIcon>
                        </a>
                        <a
                            class="social-icon"
                            href="https://www.linkedin.com/company/parkspot-in/"
                            target="_blank"
                        >
                            <AtomIcon :icon="'linkedin'" :size="'is-medium'">
                            </AtomIcon>
                        </a>
                        <a
                            class="social-icon"
                            href="https://www.youtube.com/@parkspot4468"
                            target="_blank"
                        >
                            <AtomIcon
                                :icon="'youtube'"
                                style="font-size: 40px; padding: 1.2rem"
                            >
                            </AtomIcon>
                        </a>
                    </div>
                </section>
            </BodyWrapper>
        </section>
    </footer>
</template>

<script>
import BodyWrapper from '../extras/BodyWrapper.vue';
import AtomParagraph from '../atoms/AtomParagraph.vue';
import AtomIcon from '../atoms/AtomIcon.vue';
import { mapState } from 'vuex';
// import AtomImage from "../atoms/AtomImage.vue";
export default {
    name: 'TemplateFooter',
    components: {
        BodyWrapper,
        AtomParagraph,
        AtomIcon,
        // AtomImage,
    },
    computed: {
        ...mapState('config', ['helplineNumber', 'helplineRef']),
    },
    data() {
        return {
            psfooterImg: '/assets/psfooterlogo.png',
            appLinkImg: '/assets/google-play-badge.svg',
            iosAppLinkImg: '/assets/apple-store.svg',
        };
    },
};
</script>

<style lang="scss" scoped>
.parkspot-logo {
    width: 250px;
}

.custom-footer,
.top-search-link {
    color: #888d93;
    text-transform: capitalize;
}

.footer-para {
    color: #888d93;
    text-transform: none;
}

.top-search-link:hover {
    color: var(--primary-color);
}

.image {
    max-height: fit-content !important;
}

.primary-footer {
    background-color: #1f2e3b;
}

.secondary-footer {
    background-color: #162029;
}

.footer-link {
    color: #888d93;
}

.footer-heading {
    margin-bottom: 1rem;
    color: var(--parkspot-white);
}

.primary-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

@media only screen and (max-width: 600px) {
    .primary-container {
        flex-direction: column;
    }
}

.custom-parkspot {
    display: flex;
    flex: 22%;
    flex-direction: column;

    .app-links {
        display: flex;
    }
}

.contact-info {
    flex: 25%;
}

.top-search {
    flex: 25%;
}

.footer-discovery {
    flex: 20%;
}

.secondary-container {
    display: flex;
    justify-content: space-between;
}

.social-icon {
    padding: 0.5rem;
    color: var(--parkspot-white);
}

.social-icon:hover {
    color: var(--primary-color);
}

.footer-discovery-list ul {
    padding-left: 1rem;
}

.footer-discovery-list li {
    position: relative;
}

@media (max-width: 768px) {
    .secondary-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
    }
}

.footer-discovery-list ul li::before {
    position: absolute;
    top: -7px;
    left: -19px;
    font-size: 25px;
    color: var(--primary-color);
    content: '\2022';
}

.location-icon {
    color: var(--primary-color);
}

.phone-contact {
    color: var(--secondary-color);
    cursor: pointer;
}

.phone-contact:hover {
    color: var(--primary-color);
}
</style>
