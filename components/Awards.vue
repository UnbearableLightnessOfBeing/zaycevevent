<script setup>
import { largeScreen } from '@/composables/useLargeScreen';
import LazyImage from '@/components/LazyImage.vue';
import awards from '@/assets/data/awards';


</script>

<template>
    <div class="awards-wrapper xl:flex xl:flex-col xl:max-w-[1400px] xl:mx-[5px] desktop:mx-auto 
                xl:mb-[106px] overflow-hidden xl:pt-[258px]">
        <div class="awards mb-[64px] xl:max-w-[1400px] xl:mx-auto xl:flex gap-5 relative xl:pt-[154px]">
            <LazyImage v-if="!largeScreen"
                src="/awards.png"
                alt="awards"
                format="webp"
                classes="h-full w-full"
            />
            <LazyImage v-else
                src="/awards-large.jpg"
                alt="awards"
                format="webp"
                :width="547"
                :height="711"
                classes="h-full w-full"
            />
            <div class="awards-and-acheivements space-y-[40px] mt-[64px] xl:space-y-0 xl:mt-0
                        xl:self-end border-t-[1px] border-[#3a3a3a]">
                <h3 class="header-3 text-center xl:absolute xl:top-0
                        xl:left-0 xl:header-1 xl:text-start">
                    Награды и достижения
                </h3>
                <div v-if="largeScreen" 
                    class="awards-bg-gradient absolute top-[21px] left-[60px] bg-primary bg-opacity-30 
                            blur-[150px] w-[627px] h-[627px] z-[-1]"></div>
                <div class="award-cards space-y-[12px] mx-[20px] lg:flex lg:space-y-0 lg:flex-wrap lg:gap-5
                            justify-center xl:justify-start xl:m-0 xl:gap-0 ">
                    <AwardCard v-for="award in awards"
                        :award="award"
                    />
                </div>
            </div>
        </div>
        <a v-if="largeScreen" 
            href="https://api.whatsapp.com/send?phone=79191922401&text="
            target="_blank"
            class="main-button w-[832px] pr-[400px] self-end link-1">Связаться со мной</a>
    </div>

</template>

<style lang="scss" scoped>

</style>