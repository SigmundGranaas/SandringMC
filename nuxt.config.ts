// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/color-mode',
        '@nuxtjs/tailwindcss',
        '@nuxt/content'
    ],
    colorMode: {classSuffix: ''},
    srcDir: 'src/',
    css: [
        '@fortawesome/fontawesome-free/css/all.css'
    ],
    devServerHandlers: [],
})
