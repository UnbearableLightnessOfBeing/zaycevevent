<script setup>
import { largeScreen } from '@/composables/useLargeScreen';
import LazyImage from '@/components/LazyImage.vue';
import clients from '@/assets/data/clients';

</script>

<template>
    <div class="mb-[64px] xl:mb-[182px] xl:max-w-[1400px] xl:mx-auto">
        <div class="clients space-y-[40px] xl:space-y-[62px]">
            <h3 v-if="!largeScreen" class="header-3 text-center mx-[16px]">
                Корпоративные клиенты
            </h3>
            <div v-else class="large-screen-heading uppercase mx-auto w-[940px] pl-[105px] flex flex-col">
                <h2 class="header-2 self-end">Корпоративные</h2>
                <h2 class="header-2 self-start">клиенты</h2>
            </div>
            <ClientSwiper 
                v-if="!largeScreen"
                :clients="clients" 
            />
            <div v-else 
                class="large-client-container grid grid-cols-4 desktop:grid-cols-5 gap-5 w-fit mx-auto">
                <div  v-for="image in clients"
                    class="rounded-2xl overflow-hidden w-[264px] h-[264px] flex items-center 
                            justify-center flex-col gap-[30px] border-[1.5px] border-[#3a3a3a]">
                    <LazyImage 
                        :src="`/clients/${image?.src}`" 
                        :alt="image?.src.toString()" 
                        :width="120"
                        :height="120"
                        classes="w-auto max-w-[166px] h-[120px] object-contain rounded-lg"
                    />
                    <p class="title-1 text-center">{{ image?.title }}</p>
                </div>
                <div class="main-button col-span-2 col-start-1 row-start-3 desktop:row-start-2 
                            w-[548px] h-[80px] link-1 pr-40 self-end">Связаться со мной</div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>