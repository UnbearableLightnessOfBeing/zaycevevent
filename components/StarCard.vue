<script setup>
import LazyImage from '@/components/LazyImage.vue';

const props = defineProps({
    star: {
        type: Object,
        default: {},
    }
});

</script>

<template>

    <div class="project-card flex items-center border-[1px] border-[#3a3a3a]   
            rounded-lg gap-5 h-[134px] sm:max-w-[400px] sm:mx-auto lg:w-[390px] lg:mx-0
            xl:flex-col xl:w-[264px] xl:h-[335px] xl:justify-between xl:p-[27px]">
        <div class="image w-[35%] min-h-[116px] relative rounded-full overflow-hidden xl:w-[210px] xl:h-[210px]">
            <LazyImage
                :src="'/stars/' + star?.image"
                :alt="star?.text"
                :width="210"
                :height="210"
                classes="w-[115px] mx-auto xl:w-[210px]"
            />
        </div>
        <div class="text opacity-90 title-1 max-w-[210px]">
            {{ star?.text }}
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>