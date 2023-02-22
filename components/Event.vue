<script setup>
import LazyImage from '@/components/LazyImage.vue';

const props = defineProps({
    event: {
        type: Object,
        default: {},
    }
});

const emits = defineEmits([
    'update:showVideo'
]);

</script>

<template>
    <div class="video relative pb-[58px] border-b-[1px] border-[#3a3a3a]
                sm:max-w-[452px] sm:border-[1px] rounded-lg sm:h-[285px] sm:overflow-hidden 
                sm:mx-auto lg:mx-0 lg:hover:cursor-pointer lg:rounded-3xl group 
                xl:hover:border-primary xl:shadow-xl xl:hover:shadow-[0px_0px_40px_rgba(187,38,72,0.3)] 
                xl:transition-all xl:duration-[0.35s]"
        @click="$emit('update:showVideo', event?.videoUrl)">
        <div class="relative h-[220px] group-hover:h-[160px] transition-all duration-[0.35s] sm:h-[140px] 
                    w-full block overflow-hidden xl:mb-6 xl:group-hover:mb-3">
            <LazyImage
                :src="`/video-posters/poster-${event?.poster.toString()}.jpg`"
                alt="poster 1"
                format="webp"
                classes="w-full sm:object-center sm:object-cover sm:h-full group-hover:scale-110
                        transition-all duration-[0.35s]"
            /> 
            <div class="play-button absolute top-[50%] left-[50%] w-[50px] h-[50px]">
                <nuxt-img
                    src="/play-button.svg"
                    alt="paly button"
                    class="absolute top-[-50%] left-[-50%] w-full h-full"
                />
            </div>
        </div>
        <div class="text-content space-y-4">
            <p class="title-1 text-center sm:text-start opacity-90 sm:px-[12px] 
                    group-hover:text-primary transition-all duration-200">{{ event?.title }}</p>
            <p class="body-2 text-center sm:text-start opacity-60 px-[20px] sm:px-[12px]">
                {{ event?.text }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>