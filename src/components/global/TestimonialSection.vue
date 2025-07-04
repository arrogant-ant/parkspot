<template>
    <div class="component-wrapper">
        <AtomParagraph class="custom-subtitle">
            Testimonials
        </AtomParagraph>
        <AtomHeading class="custom-title" :level="'h2'">
            What Our Customers Say
        </AtomHeading>
        <div ref="swiperContainer" class="swiper">
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div
                    class="swiper-slide"
                    v-for="(item, i) in items"
                    :key="i"
                >
                    <TestimonialCard :item="item"></TestimonialCard>
                </div>
            </div>

            <!-- Navigation & Pagination -->
            <div class="swiper-nav-wrapper">
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Swiper } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { VO_PAGE_TESTIMONIALS } from '../../constant/constant';
import AtomHeading from '../atoms/AtomHeading.vue';
import AtomParagraph from '../atoms/AtomParagraph.vue';
import TestimonialCard from './TestimonialCard.vue';

export default {
    name: 'TestimonialSection',
        props: {
        testimonials: {
            type: Array,
            default: () => [],
        },
    },
    components: {
        AtomHeading,
        AtomParagraph,
        TestimonialCard,
    },
    setup(props) {
        console.log("props",props);
        const swiperContainer = ref(null);
        const items = ref(props.testimonials.length ? props.testimonials : VO_PAGE_TESTIMONIALS);

        onMounted(() => {
            new Swiper(swiperContainer.value, {
                modules: [Navigation, Pagination, Autoplay],
                direction: 'horizontal',
                loop: items.value.length > 1,
                autoHeight: false,
                centeredSlides: true,
                slidesPerView: 1,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        });

        return {
            swiperContainer,
            items,
        };
    },
};
</script>

<style lang="scss" scoped>
$g-line-height: 1.5 !default;
$g-spacing: $g-line-height * 1em;
$black: var(--parkspot-black);
$white: var(--parkspot-white);
$g-background-color-dark: #18181b;

.component-wrapper {
    margin-top: -40px;
    padding: 3rem 1.5rem;
}

.custom-subtitle {
    color: var(--secondary-color);
    font-weight: var(--semi-bold-font);
    text-align: center;
}

.custom-title {
    margin-bottom: 4rem;
    text-align: center;
}

@media(max-width : 768px){
    .custom-title{
        margin-bottom: 3rem;
    }
}

.swiper {
    max-height: 700px;
    .swiper-slide {
        background: rgba(255, 255, 255, 0.33);
        border-radius: 6px;
        height: auto;
        margin-top: -40px;
        opacity: 0.2;
        padding: 0;
        transition: all 0.5s ease-in-out;
        width: 100%;

        &.swiper-slide-active {
            background: rgba(255, 255, 255, 1);
            opacity: 1;
            transform: scale(1.1);
        }
    }

    .swiper-nav-wrapper {
        align-items: center;
        bottom: 0;
        display: flex;
        justify-content: center;
        left: 0;
        margin-top: 40px;
        right: 0;
        width: auto;

        .swiper-button-next,
        .swiper-button-prev {
            left: auto;
            position: relative !important;
            right: auto;
            top: auto;

            &:after {
                display: none;
            }
        }
         
        .swiper-button-next,
        .swiper-container-rtl .swiper-button-prev {
            background-image: url("https://cdn-icons-png.flaticon.com/128/271/271228.png") !important;
            background-repeat: no-repeat;
            background-size: 20px 20px;
            height: 20px;
            margin: 0;
            padding: 0;
            width: 20px;
        }

        .swiper-button-prev,
        .swiper-container-rtl .swiper-button-next {
            background-image: url("https://cdn-icons-png.flaticon.com/128/271/271220.png") !important;
            background-repeat: no-repeat;
            background-size: 20px 20px;
            height: 20px;
            margin: 0;
            padding: 0;
            width: 20px;
        }
    }
}

.swiper-pagination {
    display: block;
    margin: 0;
    padding: 0;
    position: relative !important;
    width: auto;

    .swiper-pagination-bullets {
        margin: 0;

        .swiper-pagination-bullet {
            background: var(--parkspot-white) !important;
            margin: 0;
        }
    }
}

.swiper-pagination-bullet {
    background: var(--parkspot-white) !important;
    transition: all 0.2s ease-in-out;
}

.swiper-pagination-bullet-active {
    transform: scale(1.5);
}

.swiper-pagination-bullets.swiper-pagination-horizontal {
    align-items: center;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0 $g-spacing;
    top: 0;
    width: auto;
}
</style>

<style lang="scss">
.swiper-pagination-bullet-active {
    background: var(--secondary-color);
}
</style>