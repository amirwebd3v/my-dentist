import {defineStore} from "pinia";
import type {Service} from "~/utils/types";


export const useServiceStore = defineStore('service', {
    state: () => ({
        services: new Map<number, Service>(),
    }),

    actions: {
        async fetch() {
            const response = await useApi().all<Service>('/api/service', {
                    sort: {created_at: 'desc'}
                });

            // @ts-ignore
            response.data.forEach(service => {
                this.services.set(service.id, service);
            });
        }
    },
})
