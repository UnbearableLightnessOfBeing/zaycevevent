<script setup>
import { ref, defineEmits } from 'vue';
import LazyImage from '@/components/LazyImage.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from 'swiper';
import 'swiper/css';

const props = defineProps({
    images: {
        type: Array,
        default: [],
    }
});

const emits = defineEmits([
    'update:initialSlide',
    'update:galleryOn',
    'update:galleryShown'
]);

const modules = [FreeMode];


function turnOnGallery(e) {
    emits('update:galleryShown', true);
    emits('update:initialSlide', e.target.alt)
}

</script>

<template>
    <swiper
        :modules="modules"
        :slides-per-view="1.1"
        :space-between="12"
        :free-mode="true"
        :grab-cursor="true"
        :breakpoints="{
            640: {
                slidesPerView: 2.3,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 2.3,
                spaceBetween: 30
            } 
        }"
        class="w-[90%]   h-[440px] mr-0"
        >
        <swiper-slide  v-for="image in images"
            @click="turnOnGallery($event)"
            class="swiper-slide rounded-lg overflow-hidden h-full flex items-center justify-center" 
        >
            <LazyImage 
                :src="`/photo-galery/slide-${image}.jpg`" 
                format="webp" 
                :alt="image.toString()" 
                classes="w-full h-full object-cover rounded-lg"
            />
        </swiper-slide>
    </swiper>

</template>

<style lang="scss" scoped>

.swiper {
    margin-right: 0px;
}



</style>
