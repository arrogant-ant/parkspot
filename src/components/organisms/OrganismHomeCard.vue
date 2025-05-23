<template>
    <div class="home-card">
        <b-tabs @update:modelValue="onChange" v-model="activeTabValue">
            <b-tab-item value="VO">
                <template #header>
                    <div class="header-tab-btn">
                        <b-icon class="tab-icon" :icon="'car'"></b-icon>
                        <span class="tab-btn-text"> Find spot </span>
                    </div>
                </template>
                <template #default>
                    <div class="card-main-body">
                        <h2 class="title">Search parking spot in seconds</h2>
                        <SearchInput class="search-input"></SearchInput>
                        <AtomButton class="btn" @click.native="flyToSrp">
                            Search now
                        </AtomButton>
                    </div>
                </template>
            </b-tab-item>
            <b-tab-item value="SO">
                <template #header>
                    <div class="header-tab-btn">
                        <b-icon
                            class="tab-icon"
                            :icon="'home-map-marker'"
                        ></b-icon>
                        <span class="tab-btn-text"> Rent spot </span>
                    </div>
                </template>
                <template #default>
                    <div class="card-main-body">
                        <h2 class="title">
                            Make money by renting out your spot
                        </h2>
                        <div class="subtitle">
                            <p>
                                Start earning money by listing your spot in our
                                platform.
                            </p>
                        </div>
                        <AtomButton class="btn mb-5" @click.native="contactUs">
                            Get started
                        </AtomButton>
                        <div class="learn-more">
                            <span @click="contactUs">
                                Learn more about being a spot owner.
                            </span>
                        </div>
                    </div>
                </template>
            </b-tab-item>
        </b-tabs>
    </div>
</template>

<script>
import SearchInput from '../extras/SearchInput.vue';
import AtomButton from '../atoms/AtomButton.vue';
import { mapGetters } from 'vuex';
import { getCoordinate } from '../../includes/LatLng';
export default {
    name: 'HomeCard',
    data() {
        return {
            activeTabValue: 'VO',
        };
    },
    components: {
        SearchInput,
        AtomButton,
    },
    computed: {
        ...mapGetters({
            LocDetails: 'map/getLocDetails',
        }),
    },
    methods: {
        flyToSrp() {
            const coordinate = getCoordinate(this.LocDetails.lnglat.toString())
                .reverse()
                .toString();
            this.$router.push({
                name: 'srp',
                query: {
                    latlng: coordinate,
                },
                params: {
                    location: this.LocDetails.locDetails.locName,
                },
            });
        },
        onChange(tabName) {
            this.$emit('changed', tabName);
        },

        contactUs() {
            this.$router.push({ name: 'contactUs' });
        },
    },
};
</script>

<style lang="scss" scoped>
.home-card {
    max-width: 640px;
    height: 532px;
    border-radius: var(--border-default);
    background: var(--parkspot-white);

    @media only screen and (max-width: 1024px) {
        height: 480px;
    }

    .header-tab-btn {
        display: flex;
        flex-direction: column;
        padding: 28px 16px 12px;
        width: 104px;
        min-width: 104px;

        @media only screen and (max-width: 1024px) {
            padding: 28px 0px 12px;
        }

        .tab-icon {
            margin: 0 auto;
            width: 24px;
            height: 24px;
        }

        .tab-btn-text {
            display: flex;
            justify-content: center;
            margin-top: 16px;
            font-size: 14px;
            font-weight: 500;
        }
    }

    .card-main-body {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        @media only screen and (max-width: 1024px) {
        }

        .search-input {
            margin-bottom: 48px;
            width: 100%;
        }

        .title {
            margin-bottom: 30px;
            font-size: 48px;
            font-weight: 600;
            line-height: 58px;
            color: var(--parkspot-black);

            @media only screen and (max-width: 1024px) {
                margin-bottom: 62px;
                font-size: 32px;
                line-height: 39px;
            }
        }

        .subtitle {
            margin-top: 24px;
            margin-bottom: 32px;
            font-size: 16px;
            color: var(--parkspot-muted-black);
            line-height: 19px;

            @media only screen and (max-width: 1024px) {
                margin-top: 0;
            }
        }

        .learn-more {
            font-size: 14px;
            border-bottom: 1px solid var(--parkspot-muted-black);
            color: var(--parkspot-muted-black);
            line-height: 19px;
            cursor: pointer;
        }
    }

    .btn {
        font-weight: 700;
    }
}
</style>

<style lang="scss">
.home-card {
    .b-tabs {
        .tabs {
            ul {
                justify-content: space-around;

                @media only screen and (max-width: 1024px) {
                    justify-content: unset;
                }

                li {
                    a {
                        @media only screen and (max-width: 1024px) {
                            padding-right: 0;
                            padding-left: 0;
                        }

                        &:hover {
                            border-bottom: 0;
                        }
                    }
                }
            }

            li.is-active a {
                position: relative;
                border-bottom: 0;
                color: var(--secondary-color);

                &:focus {
                    border-bottom: 0;
                }

                &::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 75px;
                    height: 1px;
                    border-bottom: 4px solid var(--secondary-color);
                    transform: translateX(-50%);
                }
            }
        }

        .tab-content {
            padding: 3rem;

            @media only screen and (max-width: 1024px) {
                padding: 1.5rem 0.95rem;
            }
        }
    }
}
</style>
