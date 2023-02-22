<script setup>
import { enableBodyScroll } from '@/assets/utils/prevent-body-scroll';

const props = defineProps({
    url: {
        type: String,
        default: '',
    },
});

const emits = defineEmits([
    'update:videoShown'
]);

const loaded = ref(false);

</script>

<template>
    <div class="video-boxx flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-95 z-[90]">
        <nuxt-icon 
            name="x-mark" 
            style="font-size: 40px;" 
            class="fixed top-2 right-2 z-[100] cursor-pointer"
            @click="emits('update:videoShown', false); enableBodyScroll();"
        />
        <div class="video-frame flex justify-center items-align w-full h-[55vw] xl:w-[80%] xl:h-[50%] desktop:w-[70%] desktop:h-[40vw]">
            <iframe v-show="loaded" 
                width="720" height="420" 
                :src="url" 
                class="w-full h-full object-contain"
                title="Youtube video player" frameborder="0" 
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                @load="loaded = true"
                allowfullscreen>
            </iframe>
            <div v-if="!loaded"  class="bg-primary flex justify-center items-center bg-opacity-30 title-2 w-full h-full">
                <p>Загрузка...</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>