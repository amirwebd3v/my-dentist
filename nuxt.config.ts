// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    typescript: {
        shim: false
    },
    build: {
        //   extractCSS: false,
        transpile: ['vuetify'],
    },
    modules: [
        '@pinia/nuxt',
    ],
    pinia: {
        autoImports: ['defineStore']
    },
    vite: {
        define: {
            "process.env.DEBUG": false,
        },
    },
    nitro: {
        serveStatic: true,
    },
})


  