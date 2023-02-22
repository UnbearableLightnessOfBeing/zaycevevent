<script setup>
import { largeScreen } from '@/composables/useLargeScreen';
import LazyImage from '@/components/LazyImage.vue';

</script>

<template>
    <div v-if="!largeScreen" id="about" class="about  bg-white bg-opacity-90 pt-[45px] pb-[84px]">
        <div class="frame p-[10px] border border-[#3A3A3A] mx-auto mb-[45px] w-[340px]">
            <p class="text-background title-1">
                Я - Сергей Зайцев – свадебный ведущий, шоумен, <span class="text-primary">счастливый муж и отец</span>.
            </p>
        </div>
        <h1 class="header-2 uppercase text-background text-center mb-[25px]">Обо мне</h1>
        <ul class="text-[30px] text-primary list-disc ml-[50px] mr-[38px] md:w-fit md:mx-auto">
            <li>
                <p class="body-1 text-background">
                    Взрослый с душой ребенка, безмерно влюбленный в свою работу
                </p>
            </li>
            <li>
                <p class="body-1 text-background">
                    Человек-действие с неуемной энергией и самоиронией
                </p>
            </li>
            <li>
                <p class="body-1 text-background">
                    Веду просто на максимуме эмоций
                </p>
            </li>
            <li>
                <p class="body-1 text-background">
                    Развлекаю, не напрягая
                </p>
            </li>
            <li>
                <p class="body-1 text-background">
                    Направляю событие в русло позитива и уместного драйва
                </p>
            </li>
            <li>
                <p class="body-1 text-background">
                    Делаю чуть больше, чем вы ожидаете
                </p>
            </li>
        </ul>
    </div>
    <div v-if="!largeScreen" class="about-2 px-[26px] pt-[353px] relative overflow-hidden title-2 leading-[21.6px] tracking-[-1%]">
        <div class="image absolute w-full h-full top-0 left-0 z-[-1]">
            <LazyImage 
                src="/about.jpg" 
                format="webp" 
                alt="about"
                classes="w-full h-auto sm:h-full sm:object-cover sm:object-top"  
            />
        </div>
        <div class="blur-[100px] sm:blur-[50px] h-[396px] w-[200%] absolute top-[326px] z-[-1] left-[-50%] bg-background"></div>
        <div class="text sm:max-w-[600px] md:w-fit md:mx-auto">
            <span class="text-primary">Я в работе</span> – это легкость, динамика и адаптивный юмор, который делает мой стиль ведения особенным и непохожим на других. 
            <br><span class="text-primary">Доверьтесь мне, как профессионалу</span> и вам останется только наслаждаться впечатлениями. 
            <br><span class="text-primary">Позвоните.</span> Обсудим детали.
        </div>
    </div>
    <div v-if="largeScreen" id="about" class="large-screen mt-[180px] h-[671px] max-w-[1400px] mx-auto flex gap-5 relative">
        <div class="header header-2 absolute top-[120px] left-0 flex flex-col w-full">
            <h1 class="self-end">свадебный ведущий,</h1>
            <h1 class="self-start">шоумен, счастливый муж и отец</h1>
        </div>
        <div class="about-bg-gradient absolute top-[100px] left-[120px] w-[627px] h-[627px] bg-primary 
                    bg-opacity-30 blur-[150px] z-[-1]"></div>
        <LazyImage 
            src="/about-large.jpg" 
            format="webp" 
            alt="about"
            :width="548"
            :height="671"
            classes="w-auto h-full sm:h-full sm:object-cover sm:object-top"  
        />
        <ul class="text-[30px] text-white self-end mb-[25px] list-none md:w-fit space-y-[8px]">
            <li class="flex gap-[20px]">
                <nuxt-icon
                    name="стрелочка"
                    style="font-size: 45px;"
                />
                <p class="body-1 text-white opacity-60 h-fit self-center">
                    Взрослый с душой ребенка, безмерно влюбленный в свою работу
                </p>
            </li>
            <li class="flex gap-[20px]">
                <nuxt-icon
                    name="стрелочка"
                    style="font-size: 45px;"
                />
                <p class="body-1 text-white opacity-60 h-fit self-center">
                    Человек-действие с неуемной энергией и самоиронией
                </p>
            </li>
            <li class="flex gap-[20px]">
                <nuxt-icon
                    name="стрелочка"
                    style="font-size: 45px;"
                />
                <p class="body-1 text-white opacity-60 h-fit self-center">
                    Веду просто на максимуме эмоций
                </p>
            </li>
            <li class="flex gap-[20px]">
                <nuxt-icon
                    name="стрелочка"
                    style="font-size: 45px;"
                />
                <p class="body-1 text-white opacity-60 h-fit self-center">
                    Развлекаю, не напрягая
                </p>
            </li>
            <li class="flex gap-[20px]">
                <nuxt-icon
                    name="стрелочка"
                    style="font-size: 45px;"
                />
                <p class="body-1 text-white opacity-60 h-fit self-center">
                    Направляю событие в русло позитива и уместного драйва
                </p>
            </li>
            <li class="flex gap-[20px]">
                <nuxt-icon
                    name="стрелочка"
                    style="font-size: 45px;"
                />
                <p class="body-1 text-white opacity-60 h-fit self-center">
                    Делаю чуть больше, чем вы ожидаете
                </p>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

</style>