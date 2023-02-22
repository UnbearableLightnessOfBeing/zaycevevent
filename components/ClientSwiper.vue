<script setup>
import LazyImage from '@/components/LazyImage.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, FreeMode } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/autoplay';

const modules = [Autoplay, FreeMode];

const props = defineProps({
    clients: {
        type: Array,
        default: []
    }
});

</script>

<template>
    <swiper
        :modules="modules"
        :loop="true"
        :autoplay="{ delay: 0, disableOnInteraction: false }"
        :prevent-interaction-on-transition="true"
        :speed="1500"
        :slides-per-view="2.3"
        :breakpoints="{ 640: {slidesPerView: 4, spaceBetween: 25} }"
        :space-between="50"
        :free-mode="true"
        class="client-swiper w-full h-[150px] mb-[85px]"
    >
        <swiper-slide  v-for="image in clients"
            class="swiper-slide rounded-lg overflow-hidden w-[310px] h-full flex items-center justify-center" 
        >
            <LazyImage 
                :src="`/clients/${image?.mobileSrc}`" 
                :alt="image?.title.toString()" 
                classes="w-full h-full object-contain rounded-lg"
                 />
        </swiper-slide>
    </swiper>
</template>

<style lang="scss" scoped>

</style>