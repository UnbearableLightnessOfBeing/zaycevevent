<script setup>
import { ref } from 'vue';
import { largeScreen } from '@/composables/useLargeScreen';
import { scrollTo } from '@/assets/utils/smooth-scroll';

let menuOpen = ref(false);


</script>

<template>
    <div class="nuxt-app min-h-screen flex flex-col justify-items-stretch">
        <header>
            <div v-if="!largeScreen" 
                class="mobile-screen fixed top-0 lef-0 z-10 w-full flex justify-between items-center px-5 py-5">
                <p class="title-1"><span class="text-primary">@</span>zaycevevent</p>
                <div class="open-close-btn overflow-hidden w-10 h-10" @click="menuOpen = !menuOpen">
                    <Transition name="menu-btn" mode="out-in">
                        <nuxt-icon v-if="!menuOpen" name="hamburger" style="font-size: 40px;" />
                        <nuxt-icon v-else name="x-mark" style="font-size: 40px;" />
                    </Transition>
                </div>
                <transition name="menu-bg">
                    <div v-if="menuOpen" class="menu fixed -z-10 backdrop-blur-lg top-0 left-0 
                            w-screen h-screen bg-black bg-opacity-20 flex justify-center items-center">
                        <ul class="flex flex-col gap-6 body-2">
                            <li><a @click.prevent="scrollTo('#main'); menuOpen=false;" 
                                class="cursor-pointer">Главная</a></li>
                            <li><a @click.prevent="scrollTo('#projects'); menuOpen=false;" 
                                class="cursor-pointer">Мои проекты</a></li>
                            <li><a @click.prevent="scrollTo('#comments'); menuOpen=false;" 
                                class="cursor-pointer">Клиенты и отзывы</a></li>
                            <li><a @click.prevent="scrollTo('#contacts'); menuOpen=false;" 
                                class="cursor-pointer">Контакты</a></li>
                            <li><a @click.prevent="scrollTo('#about'); menuOpen=false;" 
                                class="cursor-pointer">Обо мне</a></li>
                        </ul>
                    </div>
                </transition>
            </div>
            <div v-if="largeScreen" 
                class="large-screen w-full h-[150px] flex 
                        justify-between items-center px-5 py-5 backdrop-blur">
                <ul class="flex gap-[96px] body-2 w-full justify-center">
                    <li><a @click.prevent="scrollTo('#main')" 
                        class="hover:text-primary transition duration-100 cursor-pointer">Главная</a></li>
                    <li><a @click.prevent="scrollTo('#projects')" 
                        class="hover:text-primary transition duration-100 cursor-pointer">Мои проекты</a></li>
                    <li><a @click.prevent="scrollTo('#comments')" 
                        class="hover:text-primary transition duration-100 cursor-pointer">Клиенты и отзывы</a></li>
                    <li><a @click.prevent="scrollTo('#contacts')" 
                        class="hover:text-primary transition duration-100 cursor-pointer">Контакты</a></li>
                    <li><a @click.prevent="scrollTo('#about')" 
                        class="hover:text-primary transition duration-100 cursor-pointer">Обо мне</a></li>
                </ul>
            </div>
        </header>
        <div class="page-content flex-1">
            <slot />
        </div>
        <footer v-if="largeScreen" class="border-t-[1.5px] border-primary">
            <div class="content-wrapper max-w-[1200px] mx-auto my-[24px] flex justify-between">
                <div class="left flex gap-[22px] flex-wrap body-3 max-w-[470px] opacity-90">
                    <a @click.prevent="scrollTo('#main')"  
                        class="hover:text-primary cursor-pointer">Главная</a>
                    <a @click.prevent="scrollTo('#about')" 
                        class="hover:text-primary cursor-pointer">Обо мне</a>
                    <a @click.prevent="scrollTo('#projects')" class="hover:text-primary cursor-pointer">Мои проекты</a>
                    <a @click.prevent="scrollTo('#comments')" class="hover:text-primary cursor-pointer">Клиенты и отзывы</a>
                    <a @click.prevent="scrollTo('#contacts')" class="hover:text-primary cursor-pointer">Контакты</a>
                    <a class="hover:text-primary cursor-pointer">media@uniswap.org</a>
                    <a class="hover:text-primary cursor-pointer">+7 919 192-24-01</a>
                </div>
                <div class="right space-y-[20px]">
                    <p class="body-3 opacity-90">Made with love by <a href="https://www.sar-media.ru" target="_blank" class="uppercase text-primary">Sarmedia</a></p>
                    <div class="media-links flex gap-[26px]">
                        <a href="https://t.me/zaycevevent"
                            target="_blank"
                            class="w-[24px] h-[24px]">
                            <nuxt-img
                                src="/telegram-link.png"
                                alt="telegram link"
                            />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=79191922401&text="
                            target="_blank"
                            class="w-[24px] h-[24px]">
                            <nuxt-img
                                src="/whatsapp-link.png"
                                alt="whatsapp link"
                            />
                        </a>
                        <a href="https://vk.com/zaycevevent"
                            target="_blank"
                            class="w-[24px] h-[24px]">
                            <nuxt-img
                                src="/vk-link.png"
                                alt="vk link"
                            />
                        </a>
                        <a href="https://instagram.com/zaycevevent?igshid=YmMyMTA2M2Y="
                            target="_blank"
                            class="w-[24px] h-[24px]">
                            <nuxt-img
                                src="/instagram-link.png"
                                alt="instagram link"
                            />
                        </a>
                        <a href="https://www.youtube.com/@user-dz6ns8qs4x"
                            target="_blank"
                            class="w-[24px] h-[24px]">
                            <nuxt-img
                                src="/youtube-link.png"
                                alt="youtube link"
                            />
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<style lang="scss" scoped>

.menu-bg-enter-active,
.menu-bg-leave-active,
.menu-btn-enter-active,
.menu-btn-leave-active {
    transition: opacity 0.2s ease;
}

.menu-bg-leave-to,
.menu-bg-enter-from,
.menu-btn-leave-to,
.menu-btn-enter-from {
    opacity: 0;
}

</style>