<script setup>
import { largeScreen } from '@/composables/useLargeScreen';
import LazyImage from '@/components/LazyImage.vue';

</script>

<template>
    <div v-if="!largeScreen" class="expirience relative flex flex-col justify-between pb-[60px] h-[640px]">
        <LazyImage 
            src="/experience.png"
            alt="experience"
            format="webp"
            classes="absolute left-0 w-full sm:object-center sm:object-cover sm:h-[462px] top-[28%] z-[-1]"
        />
        <div class="years ml-[12px] mt-[63px]">
            <h1 class="header-1 block">12+</h1>
            <div class="relative w-fit after:content-[''] after:w-[16px] after:h-[16px] after:rounded-full 
                    after:bg-primary after:right-[-20px] after:bottom-[10px] after:absolute">
                <h3 class="header-3">Лет работы</h3>
            </div>
        </div> 
        <div class="numbers flex mx-[20px] justify-between gap-[5px] md:justify-around">
            <div class="corp">
                <h3 class="header-3 block w-fit">675+</h3>
                <p class="title-3 max-w-[130px] w-fit text-primary">корпоративных мероприятий</p>
            </div>
            <div class="anniv">
                <h3 class="header-3 block w-fit">270+</h3>
                <p class="title-3 max-w-[130px] w-fit text-primary">юбилейных вечеров</p>
            </div>
            <div class="weddings">
                <h3 class="header-3 block w-fit">590+</h3>
                <p class="title-3 max-w-[130px] w-fit text-primary">свадебных событий</p>
            </div>
        </div>
    </div>
    <div v-else class="large-screen mt-16 max-w-[1400px] flex flex-col mx-auto">
        <div class="upper-line flex gap-[20px]">
            <div class="event-amount flex gap-[46px] w-[548px] py-[32px] border-b-[1.5px] border-[#3a3a3a]">
                <h3 class="header-2 text-secondary block w-fit">675+</h3>
                <p class="title-1 pt-4 uppercase w-fit">корпоративных мероприятий</p>
            </div>
            <div class="years flex gap-[46px] w-[548px] py-[32px] border-b-[1.5px] border-[#3a3a3a]">
                <h3 class="header-2 text-secondary block w-fit">12+</h3>
                <p class="title-1 pt-8 uppercase w-fit">лет работы</p>
            </div>
        </div>
        <div class="lower-line self-end flex gap-[20px]">
            <div class="annyversaries flex gap-[46px] w-[548px] py-[32px] border-b-[1.5px] border-[#3a3a3a]">
                <h3 class="header-2 text-secondary block w-fit">270+</h3>
                <p class="title-1 pt-8 uppercase w-fit">юбилейных вечеров</p>
            </div>
            <div class="weddings flex gap-[46px] w-[548px] py-[32px] border-b-[1.5px] border-[#3a3a3a]">
                <h3 class="header-2 text-secondary block w-fit">590+</h3>
                <p class="title-1 pt-8 uppercase w-fit">свадебных торжеств</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>