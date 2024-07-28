import { defineNuxtPlugin } from '#app'
import useApi from '~/composables/useApi'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            api: useApi()
        }
    }
})