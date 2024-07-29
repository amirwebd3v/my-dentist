import {defineStore} from "pinia";
import type {ContactUsStoreRequest} from "~/utils/types";


export const useContactUsStore = defineStore('contactus', {

    actions: {
        async store(request: ContactUsStoreRequest): Promise<ContactUsStoreRequest> {
            return  await useNuxtApp().$api.post<ContactUsStoreRequest>('/api/contact-us', {body: request})
        },
    },
})
