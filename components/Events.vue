<script setup>
import { largeScreen } from '@/composables/useLargeScreen';
import events from '@/assets/data/events';
import { disableBodyScroll } from '@/assets/utils/prevent-body-scroll';

const videoShown = ref(false);
const urlRef = ref('');

function showVideo(url) {
    urlRef.value = url; 
    videoShown.value = true;

    disableBodyScroll();
}

</script>

<template>
    <div class="events border-t border-b border-[#3A3A3A] mt-[80px] sm:mb-[80px]
                sm:border-b-transparent pt-[30px] max-w-[1400px] xl:mx-auto xl:mb-[180px]
                xl:border-transparent">
        <h2 v-if="!largeScreen" class="header-2 text-center opacity-90">Я веду:</h2>
        <div v-else class="large-header flex">
            <h1 class="header-1 uppercase min-w-[573px]">Я веду</h1>
            <p class="title-1 self-end">
                Доверьтесь мне, как профессионалу и вам останется только наслаждаться впечатлениями. Позвоните мне. Обсудим детали.
            </p>
        </div>
        <div class="videos space-y-6 mt-[58px] lg:flex lg:flex-wrap lg:space-y-0 lg:gap-5
                    justify-center items-center">
            <Event 
                v-for="event in events" 
                :event="event" 
                @update:show-video="showVideo"
            />
        </div>
    </div>
    <transition name="video-box" mode="out-in" appear>
        <VideoBox 
            v-if="videoShown" 
            @update:video-shown="videoShown = false"
            :url="urlRef"
        />
    </transition>
</template>

<style lang="scss" scoped>
.video-box-enter-active,
.video-box-leave-active {
    transition: opacity 0.4s ease-out;
}

.video-box-enter-from,
.video-box-leave-to {
    opacity: 0;
}

.video-box-enter-to,
.video-box-leave-from {
    opacity: 1;
}

</style>