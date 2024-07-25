import {defineStore} from "pinia";
import type {Services} from "~/utils/types";


export const useServiceStore = defineStore('service', {
    state: () => ({
        services: new Map<number, Services>(),
    }),

    actions: {
        async fetch() {
            const response = await useApi().all<Services>('/api/service', {
                    sort: {created_at: 'desc'}
                });

            // @ts-ignore
            response.data.forEach(service => {
                this.services.set(service.id, service);
            });
        }
    },
})
