import {defineStore} from "pinia";
import type {ReserveStoreRequest} from "~/utils/types";


export const useReserveStore = defineStore('reserve', {

    actions: {
        async store(request: ReserveStoreRequest): Promise<ReserveStoreRequest> {
            return await useNuxtApp().$api.post('/api/reserve', {body: request})
        },
    },
})
