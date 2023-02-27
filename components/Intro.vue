<script setup>
import { largeScreen } from '@/composables/useLargeScreen';

</script>

<template>
    <div v-if="!largeScreen" id="main" class="mobile-screen">
        <div class="img-wrapper absolute top-0 h-[780px] w-full left-0 z-[-1] overflow-hidden">
            <nuxt-img 
                src="/mobile-main.jpg" 
                alt="zaycev" 
                format="webp" 
                class="object-none h-full w-full object-bottom sm:object-cover md:object-[0_68%]"
            />
            <div class="absolute top-[60%] left-[-50%] w-[200%] h-[701px] bg-background blur-[100px]"></div>
        </div>
        <div class="heading ml-5 mt-[500px]">
            <h1 class="uppercase header-2"><span class="descriptor-1">Ведущий</span> <br> Сергей Зайцев</h1>
        </div>

        <a href="https://api.whatsapp.com/send?phone=79191922401&text="
            target="_blank"
            class="main-button mx-[23px] mt-[45px] link-1 pr-0
                sm:max-w-[400px] sm:mx-auto block">Связаться со мной</a>
    </div>
    <div v-else id="main" class="large-screen relative mb-[182px] pt-[81px] mx-5 max-w-[1440px] desktop:mx-auto">
        <div class="uppercase">
            <h1 class="header-1 ml-[20px]">Сергей</h1>
            <h1 class="header-1 ml-[210px] mb-[42px]">Зайцев</h1>
            <p class="title-1 ml-[283px] max-w-[500px]">
                ВЕДУЩИЙ, СЦЕНАРИСТ И КРЕАТИВНЫЙ
                ПРОДЮСЕР ВАШЕГО МЕРОПРИЯТИЯ
            </p>
        </div>
        <a href="https://api.whatsapp.com/send?phone=79191922401&text="
            target="_blank"
            class="main-button w-[40%] mt-[93px]  link-1 block">Связаться со мной</a>
        <h3 class="header-3 text-right lowercase mx-[9px]"><span class="text-primary">@</span>zaycevevent</h3>
        <div class="image absolute top-0 right-0 w-[59%] h-[725px] z-[-1] overflow-hidden">
            <nuxt-img 
                src="/main.png" 
                alt="zaycev" 
                format="webp" 
                class="w-full h-full object-cover scale-[99%] object-[100%_20%]"
            /> 
        </div>
        <div class="blur-[150px] absolute w-[627px] h-[627px] left-[315px] top-[-64px] bg-[#BB26484D] z-[-2]"></div>
    </div>
</template>

<style lang="scss" scoped>

</style>