<script setup>
import { largeScreen } from '@/composables/useLargeScreen';
import Events from '@/components/Events.vue';
import Awards from '@/components/Awards.vue';
import Stars from '@/components/Stars.vue';
import Comments from '@/components/Comments.vue';
import Clients from '@/components/Clients.vue';
import Contact from '@/components/Contact.vue';

</script>
<template>
    <main>
        <Intro />
        <Quote />
        <Experience />
        <About />
        <Events />
        <GalleryBlock />
        <Awards />
        <Projects />
        <Stars />
        <Comments />
        <Clients />
        <Contact />
        <Presentation v-if="!largeScreen" />
    </main>
</template>

<style lang="scss" scoped>



</style>