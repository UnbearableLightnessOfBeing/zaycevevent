<script setup>
import { ref } from 'vue';

const props = defineProps([
    'src', 
    'alt', 
    'format', 
    'classes',
    'width',
    'height',
    'sizes',
]);

const emits = defineEmits([
    'onImageLoaded'
]);

let loaded = ref(false);

const backGround = computed(() => {
    return !loaded.value? 'bg-primary' : 'bg-transparent';
});

function onLoaded() {
    loaded.value = true;
    emits('onImageLoaded', props.alt);
}

</script>

<template>
    <nuxt-img 
        :class="classes + ' ' + backGround"
        class="bg-opacity-30"
        :src="src" 
        :alt="alt"  
        :format="format" 
        :width="width"
        :height="height"
        :loading="'lazy'"
        @load="onLoaded" 
    />
</template>

<style lang="scss" scoped>

</style>