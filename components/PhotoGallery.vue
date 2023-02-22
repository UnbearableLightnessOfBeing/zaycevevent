<script setup>
import { ScalingSquaresSpinner } from 'epic-spinners';
import LazyImage from '@/components/LazyImage.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Zoom, Navigation, Pagination, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const modules = [Zoom, Navigation, Pagination, EffectCoverflow];

const props = defineProps({
    images: {
        type: Array,
        default: [],
    },

    initialSlide: {
        type: Number,
        default: 1,
    },

});

const emits = defineEmits([
    'update:galleryShown'
]);

const { initialSlide } = toRefs(props);

const swiperRef = ref(null);

watch(initialSlide, () => {
    if(initialSlide !== null && swiperRef.value !== null) {
        swiperRef.value.slideTo(props.initialSlide - 1);
    }
});

function onInit(swiper) {
    swiperRef.value = swiper;
}

</script>

<template>
    <transition name="photo-gallery" mode="out-in">
        <div class="photo-gallery lightbox fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-95 z-[90]">
            <nuxt-icon 
                name="x-mark" 
                style="font-size: 40px;" 
                class="fixed top-2 right-2 z-[100] hover:cursor-pointer"
                @click="swiperRef.zoom.out(); emits('update:galleryShown', false)"
            />
            <swiper
                :modules="modules"
                :slides-per-view="1"
                :space-between="0"
                :zoom="true"
                :grab-cursor="true"
                :effect="'coverflow'"
                :coverflow-effect="{ rotate: 90 }"
                :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
                :pagination="{ el: '.swiper-pagination', type: 'fraction' }"
                @swiper="onInit"
                class="w-full h-full"
                >
                <swiper-slide  v-for="image in images"
                    class="swiper-slide overflow-hidden w-fit h-full flex items-center justify-center relative" 
                    :zoom="true"
                >
                    <LazyImage 
                        :src="`/photo-galery/slide-${image}.jpg`" 
                        :alt="image.toString()" 
                        classes="w-full h-auto object-contain xl:w-[80%]"
                    />
                    <div class="slide-loader absolute top-[calc(50%-50px)] left-[clac(50%-50px)] w-fit h-fit z-[-1]">
                        <scaling-squares-spinner :animation-duration="1000" :size="100" color="#9B1333" /> 
                    </div>
                </swiper-slide>
                <div class="swiper-pagination font-garamond text-[20px]"></div>

                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </swiper>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
.swiper-button-prev {
    left: 50px;
    top: 90vh;
}

.swiper-button-next {
    right: 50px;
    top: 90vh;
}

@media (min-width: 1280px) {
    .swiper-button-prev,
    .swiper-button-next {
        top: 50vh;
    }
}

.swiper-button-next,
.swiper-button-prev {
    // color: #9B1333;
    color: white;

    &:active {
        color: #9B1333;
    }
}

.photo-gallery-enter-active,
.photo-gallery-leave-active {
    transition: all 0.2s ease-out;
}

.photo-gallery-enter-from,
.photo-gallery-leave-to {
    opacity: 0;
    transform: scale(0.0);
}

.photo-gallery-enter-to,
.photo-gallery-leave-from {
    opacity: 1;
    transform: scale(1.0);
}



</style>