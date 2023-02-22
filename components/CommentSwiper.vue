<script setup>
import LazyImage from '@/components/LazyImage.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const modules = [Navigation];

const props = defineProps({
    images: {
        type: Array,
        default: []
    }
});

</script>

<template>
    <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="12"
        :free-mode="false"
        :centered-slides="true"
        :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
        :grab-cursor="true"
        :breakpoints="{
            640: {
                slidesPerView: 1.8
            }, 
            1024: {
                slidesPerView: 3,
                // navigation: {
                //     nextEl: '.arrow-right',
                //     prevEl: '.arrow-left',
                // },
                centeredSlides: false,
            },
            1440: {
                slidesPerView: 5,
                centeredSlides: false,
            }
        }"
        class="w-full h-[570px] lg:h-[600px]"
        >
        <swiper-slide  v-for="image in images"
            class="swiper-slide rounded-lg overflow-hidden w-[310px] h-full flex items-center justify-center" 
        >
            <LazyImage 
                :src="`/comments/slide-${image}.png`" 
                format="webp" 
                :alt="image.toString()" 
                classes="w-full h-full object-contain rounded-lg"
                 />
        </swiper-slide>

        <div class="swiper-button-prev">
            <nuxt-icon class="arrow-left hidden sm:block" name="arrow-left" style="font-size: 40px;" />
        </div>
        <div class="swiper-button-next">
            <nuxt-icon class="arrow-right hidden sm:block" name="arrow-right" style="font-size: 40px;" />
        </div>
    </swiper>
</template>

<style lang="scss" scoped>

@media screen and (min-width: 640px) {
    .swiper {
        padding-bottom: 3rem;
    }

    .swiper-button-prev {
        left: 38%;
        top: 98%;
    }

    .swiper-button-next {
        right: 38%;
        top: 98%;
    }

    .swiper-button-next,
    .swiper-button-prev {

        &::after {
            display: none;
        }
    }
}

.swiper-button-next,
.swiper-button-prev {
    color: white;

    &:hover {
        color: #9B1333; 
    }
}



</style>