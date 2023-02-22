<script setup>
import { largeScreen } from '@/composables/useLargeScreen';
import projects from '@/assets/data/projects';

</script>

<template>
    <div id="projects" class="projects-wrapper mb-[64px] xl:max-w-[1400px] xl:mx-[5px] xl:mb-[182px] desktop:mx-auto overflow-hidden">
        <div class="projects space-y-[40px] xl:flex xl:flex-col xl:gap-[80px] xl:space-y-0
                    xl:w-fit xl:items-end">
            <h3 v-if="!largeScreen"
                class="header-3 text-center mx-[16px]">
                Продюссер, ведущий и автор проектов:
            </h3>
            <div v-else 
                class="large-screen uppercase w-[1090px] pr-[85px] flex flex-col">
                <h2 class="header-2 self-end">
                    Продюсер, ведущий 
                </h2>
                <h2 class="header-2 ">
                    и автор проектов:
                </h2>
            </div>
            <div class="project-cards space-y-[12px] mx-[20px] xl:mx-0 lg:flex lg:flex-wrap lg:gap-5
                        lg:justify-center lg:space-y-0">
                <ProjectCard v-for="(project, index) in projects"
                    :project="project"
                    :index="+index"
                />
            </div> 
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>