<script setup>
import { largeScreen } from '@/composables/useLargeScreen';
import LazyImage from '@/components/LazyImage.vue';

</script>

<template>
    <div v-if="!largeScreen" id="contacts" class="contact border-t-[1px] border-primary">
        <div class="image relative flex h-[455px] overflow-hidden">
            <LazyImage 
                src="/contact.png"
                alt="zaycev laughing and pointing at you"
                format="webp"
                classes="absolute z-[-1] top-0 left-0 w-full sm:h-full sm:object-cover sm:object-[0_20%]"
            />
            <div class="blur-[25px] absolute top-[305px] left-[-266px] h-[345px] w-[250%] 
                bg-background z-[-1]"></div>
            <h3 class="header-3 self-end mx-[46px] text-center sm:text-center sm:w-full">Нас разделяет один звонок</h3>
        </div>
        <!-- <div class="phone-number px-[88px] py-[48px] border-[1px] border-primary rounded-lg
                w-[366px] mx-auto mt-[41px] relative group cursor-pointer active:bg-primary
                mb-[45px]">
            <div class="bg-gradient absolute w-full h-full top-0 left-0 opacity-0 transition
                    duration-200 z-[-1]"></div>
            <nuxt-img 
                src="/phone-number.svg"
                alt="phone number"
                class="w-fit group-hover:scale-110 transition-transform duration-200"
            />
        </div> -->
        <ContactItem 
            :classes="'px-[88px] py-[48px] w-[366px] mt-[41px] rounded-lg mb-[45px] mx-auto'"
            image="/phone-number.svg"
            alt="phone-number"
            link="https://api.whatsapp.com/send?phone=79191922401&text="
        />
        <div class="media-links flex justify-between items-center h-[136px] border 
                    border-t-1px border-b-1px border-l-transparent border-r-transparent 
                    border-primary pl-[48px] pr-[23px] sm:justify-center sm:gap-20">
            <p class="title-1"><span class="text-primary">@</span>zaycevevent</p>
            <a href="https://api.whatsapp.com/send?phone=79191922401&text="
                target="_blank"
                rel="noopener noreferrer">
                <nuxt-img  
                    src="/whatsapp.svg"
                    alt="whatsapp icon"
                />
            </a>
            <a href="https://instagram.com/zaycevevent?igshid=YmMyMTA2M2Y=" 
                target="_blank" 
                rel="noopener noreferrer">
                <nuxt-img  
                    src="/instagram.svg"
                    alt="instagram icon"
                />
            </a>
            <a href="https://vk.com/zaycevevent" 
                target="_blank" 
                rel="noopener noreferrer">
                <nuxt-img  
                    src="/vk.png"
                    alt="vk icon"
                />
            </a>
        </div>
    </div> 
    <div v-else id="contacts" class="large-screen-contact">
        <div class="larg-screen-wrapper max-w-[1425px] mx-auto flex flex-col gap-[58px] pb-[42px] relative">
            <div class="image absolute w-[437px] h-[962px] bottom-0 left-[139px]">
                <LazyImage 
                    src="/zaycev-end.png"
                    format="webp"
                    alt="zaycev"
                    classes="h-full w-auto"
                />
            </div>
            <div class="bg-gradient absolute top-[163px] left-0 bg-primary bg-opacity-30 
                        blur-[150px] w-[627px] h-[627px] z-[-1]"></div>
            <div class="heading text-center">
                <h1 class="header-1">Нас разделяет</h1>
                <h1 class="header-1">один звонок</h1>
            </div>
            <div class="contacts flex flex-col gap-5 items-end">
                <ContactItem 
                    :classes="'px-[200px] py-[110px] w-[832px] h-[264px] rounded-xl'"
                    image="/phone-number.svg"
                    alt="phone-number"
                    link="https://api.whatsapp.com/send?phone=79191922401&text="
                />
                <div class="links flex gap-5 justify-center">
                    <ContactItem 
                        :classes="'px-[92px] py-[92px] w-[264px] h-[264px] rounded-xl'"
                        image="/whatsapp-link.svg"
                        alt="whatsapp link"
                        link="https://api.whatsapp.com/send?phone=79191922401&text="
                    />
                    <ContactItem 
                        :classes="'px-[92px] py-[92px] w-[264px] h-[264px] rounded-xl'"
                        image="/vk-link.svg"
                        alt="vk link"
                        link="https://vk.com/zaycevevent"
                    />
                    <ContactItem 
                        :classes="'px-[92px] py-[92px] w-[264px] h-[264px] rounded-xl'"
                        image="/instagram-link.svg"
                        alt="instagram link"
                        link="https://instagram.com/zaycevevent?igshid=YmMyMTA2M2Y="
                    />
                </div>
                <h2 class="header-2 uppercase w-[832px] z-[10]"><span class="text-primary">@</span>zaycevevent</h2>
            </div>
        </div> 
    </div>
</template>

<style lang="scss" scoped>


</style>