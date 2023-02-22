<script setup>

const props = defineProps({
    award: {
        type: Object,
        default: {},
    }
});

</script>

<template>
    <div class="award-card flex items-center border-[1px] border-[#3a3a3a]   
            rounded-lg gap-5 h-[134px] sm:max-w-[400px] sm:mx-auto lg:w-[390px] lg:mx-0
            xl:py-[18px] xl:rounded-none xl:border-l-transparent xl:border-r-transparent
            xl:border-t-transparent xl:w-full xl:max-w-none xl:gap-[60px] xl:justify-start
            xl:pl-[60px] xl:h-fit">
        <div class="image w-[35%] xl:w-[60px] xl:h-[60px] flex items-center">
            <nuxt-img
                :src="'/awards/' +award?.image"
                alt="award"
                class="w-fit mx-auto"
            />
        </div>
        <div class="text opacity-60 body-1 max-w-[210px] xl:max-w-none">
            {{ award?.text?.regular }} <span class="text-primary">{{ award?.text?.ephasized }}</span> 
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>