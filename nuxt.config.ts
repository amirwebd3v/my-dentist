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
        'nuxt-auth-sanctum'
    ],
    pinia: {
        autoImports: ['defineStore']
    },
    vite: {
        define: {
            "process.env.DEBUG": false,
        },
    },

    appConfig: {
        api: {
            baseUrl: process.env.API_BASE_URL,
            headers: {
                Accept: "application/json"
            }
        },
    },

    nitro: {
        serveStatic: true,
    },
    devtools: {enabled: false},



    // runtimeConfig: {
    //     public: {
    //         sanctum: {
    //             baseUrl: process.env.API_BASE_URL, // Laravel API
    //             origin: process.env.APP_URL, // Nuxt app (required for CSRF cookie), by default uses `useRequestURL().origin`
    //             userStateKey: 'sanctum.user.identity', // user state key for Vue `useState` composable
    //             redirectIfAuthenticated: false, // Redirect to onLogin if already authenticated
    //             endpoints: {
    //                 csrf: '/sanctum/csrf-cookie', // CSRF cookie endpoint
    //                 login: '/auth/login', // Endpoint that accepts user credentials
    //                 logout: '/auth/logout', // Endpoint to destroy the current session
    //                 user: '/auth/me', // Endpoint that return current user information
    //             },
    //             csrf: {
    //                 cookie: 'XSRF-TOKEN', // CSRF cookie name
    //                 header: 'X-XSRF-TOKEN', // CSRF header name
    //             },
    //             client: {
    //                 retry: false, // ofetch retry option (number | false)
    //             },
    //             redirect: {
    //                 keepRequestedRoute: true, // Keep requested route in the URL for later redirect
    //                 onLogin: '/', // Redirect to this page after successful login
    //                 onLogout: '/', // Redirect to this page after successful logout
    //                 onAuthOnly: '/', // Redirect to this page if user is not authenticated
    //                 onGuestOnly: '/', // Redirect to this page if user is authenticated
    //             },
    //         },
    //     }
    // }
})


  