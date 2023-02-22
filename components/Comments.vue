<script setup>

</script>

<template>
    <div id="comments" class="mb-[64px] xl:mb-[182px] xl:max-w-[1400px] xl:mx-auto">
        <div class="comments space-y-[40px] xl:space-y-[62px]">
            <h3 class="header-3 text-center mx-[16px] xl:mx-0 xl:header-1 xl:text-start">
                Отзывы
            </h3>
            <CommentSwiper :images="Array.from(Array(8).keys()).map(key => +key + 1)" />
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>