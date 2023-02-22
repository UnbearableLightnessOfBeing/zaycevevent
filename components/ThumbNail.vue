<script setup>
import LazyImage from '@/components/LazyImage.vue';

const props = defineProps({
    image: Number
});

const emits = defineEmits([
    'update:initialSlide',
    'update:galleryShown',
]);

function turnOnGallery() {
    emits('update:initialSlide', props.image);
    emits('update:galleryShown', true);
}

</script>

<template>
    <div class="thumb-nail w-[335px] h-[335px] rounded-xl overflow-hidden cursor-pointer
                saturate-0 hover:saturate-100 transition-all duration-200"
        @click="turnOnGallery">
        <LazyImage 
            :src="`/photo-galery/slide-${image}.jpg`" 
            format='webp'
            :alt="'photo-' + image"
            classes="w-full h-full object-cover"
        />

    </div>
</template>

<style lang="scss" scoped>

</style>