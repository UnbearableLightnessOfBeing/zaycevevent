<script setup>

const props = defineProps({
    classes: String,
    image: String,
    alt: String,
    link: String,
});

</script>

<template>
    <a :href="link" 
        target="_blank"
        class="contact-item border-[1.5px] border-primary
            relative group cursor-pointer active:bg-primary block"
        :class="classes">
        <div class="bg-gradient absolute w-full h-full top-0 left-0 opacity-0 transition
                duration-300 z-[-1]"></div>
        <nuxt-img 
            :src="image"
            :alt="alt"
            class="group-hover:scale-[137%] transition-transform duration-300"
        />
    </a>
</template>

<style lang="scss" scoped>
.contact-item {

    &:hover .bg-gradient {
        background: radial-gradient(50% 50% at 50% 50%, #BB2648 0%, rgba(187, 38, 72, 0.5) 0.01%, rgba(187, 38, 72, 0) 100%);
        opacity: 1;
    }
}

</style>