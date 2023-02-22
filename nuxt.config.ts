// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    app: {
        head: {
            title: 'zaycevevent',
        }
    },

    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icons',
        '@nuxt/image-edge',
        '@vueuse/nuxt'
    ],

    image: {

    },

    css: [
        '~/assets/css/main.scss'
    ],
    
    ssr: false,

})
