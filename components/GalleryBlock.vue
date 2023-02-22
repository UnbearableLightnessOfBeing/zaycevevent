<script setup>
import { disableBodyScroll, enableBodyScroll } from '@/assets/utils/prevent-body-scroll';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);
const largeScreen = breakpoints.greaterOrEqual('xl');

let initialSlide = ref(0);
const images = Array.from(Array(16).keys()).map(el => el + 1);

let galleryShown = ref(false);

function updateInitialSlide(prop) {
    initialSlide.value = +prop;
}

function changeGalleryShown(value) {
    galleryShown.value = value;

    if(value === true) {
        disableBodyScroll();
    }
    else {
        enableBodyScroll();
    }
}

</script>

<template>
    <div  v-if="!largeScreen"
        class="galery mt-[88px] flex w-full gap-[12px] mb-[88px]">
        <h1 class="font-[400] text-[16px] uppercase text-primary w-[20px] h-full rotate-[-90deg] 
                    ml-6 block text-center self-center pr-[0]">фотогалерея</h1>
        <PhotoGalerySwiper 
            :images="images" 
            @update:initialSlide="updateInitialSlide" 
            @update:galleryShown="changeGalleryShown"
            class="" 
        />
    </div>
    <div v-else class="gallery-large relative max-w-[1400px] w-fit mx-auto">
        <h1 class="header-1 uppercase absolute top-0 left-0 z-[1]">фотогалерея</h1>
        <div class="photo-container flex gap-5 flex-wrap w-fit justify-center pt-[128px]">
            <ThumbNail v-for="image in images" 
                :image="image" 
                @update:initialSlide="updateInitialSlide"
                @update:galleryShown="changeGalleryShown"
            />
        </div>
    </div>
    <PhotoGallery 
        v-show="galleryShown" 
        :images="images" 
        :initialSlide="+initialSlide" 
        @update:galleryShown="changeGalleryShown"
    />
</template>

<style lang="scss" scoped>

</style>