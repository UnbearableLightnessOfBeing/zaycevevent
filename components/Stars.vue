<script setup>
import { largeScreen } from '@/composables/useLargeScreen';
import stars from '@/assets/data/stars';

</script>

<template>
    <div class="mb-[64px] xl:mb-[182px] xl:max-w-[1400px] xl:mx-auto">
        <div class="stars space-y-[40px] xl:space-y-[62px]">
            <h3 v-if="!largeScreen" class="header-3 text-center mx-[16px]">
                Работаю со звездами:
            </h3>
            <div v-else class="large-heading w-[700px] pr-[35px] mx-auto flex flex-col uppercase">
                <h2 class="header-2 self-end">Работаю со</h2>
                <h2 class="header-2 self-start">звёздами:</h2>
            </div>
            <div class="star-cards space-y-[12px] mx-[20px] lg:space-y-0 lg:flex lg:flex-wrap lg:gap-5
                        lg:justify-center xl:mx-0">
                <StarCard v-for="star in stars"
                    :star="star"
                />
            </div> 
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>