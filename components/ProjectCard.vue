<script setup>
import { largeScreen } from '@/composables/useLargeScreen';
import { gsap } from 'gsap';
import LazyImage from '@/components/LazyImage.vue';


const props = defineProps({
    project: {
        type: Object,
        default: {},
    },
    
    index: Number,
});

const imageLoaded = ref(false);

onMounted(() => {
    if(largeScreen.value) {
        const card = document.querySelectorAll('a.project-card')[props.index];
        const text = document.querySelectorAll('a div.project-card-text')[props.index];
        const image = document.querySelectorAll('a div.image')[props.index];

        let imageAnimProps = {
            width: '302px',
            duration: 0.65,
            top: '17px',
            left: '16px',
            paused: true,
            ease: 'back.inOut'
        }

        const hover = {
            textAnim: gsap.to(text, {
                y: '200px',
                duration: 0.4,
                paused: true,
                ease: 'linear',
            }),

            imageAnim: gsap.to(image, imageAnimProps),
        };

        card.addEventListener('mouseenter', () => {
            hover.textAnim.play();
            hover.imageAnim.play();
        });
        card.addEventListener('mouseleave', () => {
            hover.textAnim.reverse();
            hover.imageAnim.reverse()
        });
    }
});

</script>

<template>
    <a  :href="project?.link" 
        target="_blank"
        class="project-card flex items-center border-[1px] border-[#3a3a3a]   
            rounded-lg gap-5 h-[134px] sm:max-w-[400px] sm:mx-auto lg:mx-0 lg:w-[390px]
            xl:w-[335px] xl:h-[335px] xl:flex-col xl:justify-end xl:relative group
            xl:hover:shadow-[0px_0px_40px_rgba(187,38,72,0.3)] xl:hover:border-primary
            transition-all duration-200" 
        :class="{ 'overflow-hidden': imageLoaded }"
            >
        <div class="image w-[35%] relative rounded-full overflow-hidden xl:w-[185px]
                    xl:absolute xl:top-[-22px] xl:left-[176px]">
            <LazyImage
                :src="'/projects/' + project?.image"
                :alt="project?.image"
                classes="w-[115px] mx-auto xl:w-full"
                :width="185"
                :height="185"
                @on-image-loaded="imageLoaded = true"
            />
            <div class="play-btn absolute top-[50%] left-[50%] h-[35px] w-[35px]">
                <nuxt-img
                    src="play-button.svg"
                    class="absolute top-[-50%] left-[-50%]"
                />
            </div>
        </div>
        <div class="project-card-text opacity-90 title-3 max-w-[210px] xl:max-w-[250px] xl:self-start 
                    xl:my-[10px] xl:mx-[20px] xl:body-1 xl:overflow-hidden"
        >
            {{ project?.text?.regular }} <span class="text-primary font-black">{{ project?.text?.ephasized }}</span> 
        </div>
    </a>
</template>

<style lang="scss" scoped>

</style>