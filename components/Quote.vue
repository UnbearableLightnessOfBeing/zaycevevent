<script setup>
import { largeScreen } from '@/composables/useLargeScreen';
import LazyImage from '@/components/LazyImage.vue';

</script>

<template>
    <div v-if="!largeScreen" class="quote mt-[56px] flex flex-col items-center sm:max-w-[600px] sm:mx-auto">
        <p class="text-[64px] text-primary text-center font-montserrat leading-[78px]">“</p>
        <div class="text title-1 mx-[39px] text-center relative after:content-[''] after:absolute after:w-[100%]
                    after:h-[1px] after:bg-primary after:left-0 after:bottom-[-15px] before:content-[''] before:absolute 
                    before:w-[174px] before:h-[1px] before:bg-primary before:left-[calc(50vw-39px-86px)] sm:before:left-[calc(300px-39px-86px)] 
                    before:top-[-15px]">
            <p class="opacity-90">
                Воспринимаю свою работу серьезно, и делаю это, не воспринимая слишком серьезно себя
            </p>
        </div>
        <p class="text-[64px] text-primary text-center font-montserrat leading-[78px] rotate-180">“</p>
        <p class="opacity-60 title-1">Алан Рикман</p>
    </div>
    <div v-else class="large-screen relative flex justify-between h-[420px] overflow-hidden w-fit mx-auto">
        <div class="image w-[535px] min-h-[675px] absolute top-0 left-0 z-[-1] overflow-hidden">
            <LazyImage 
                :src="'/about2.png'" 
                format="webp" 
                alt="zaycev quote" 
                classes="object-none object-right scale-[110%]"
                :width="535"
                :height="420"
            />
            <div class="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-transparent to-black opacity-60"></div>
        </div>
        <div class="quote-block ml-[400px] mt-[20px] max-w-[650px] flex flex-col justify-between">
            <div class="qoute flex gap-6">
                <p class="text-[120px] text-primary text-center font-montserrat leading-[78px]">“</p>
                <h3 class="header-3">
                    Воспринимаю свою работу серьезно, и делаю это, не воспринимая слишком серьезно себя
                </h3> 
                <p class="text-[120px] text-primary text-center font-montserrat leading-[78px] rotate-180">“</p>
            </div>
            <h3 class="header-3 text-end">Алан Рикман</h3>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>