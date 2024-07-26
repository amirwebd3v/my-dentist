import {defineStore} from "pinia";
import type {FaqItem} from "~/utils/types";


export const useFaqStore = defineStore('faq', {
    state: () => ({
        faqItems: new Map<number, FaqItem>(),
    }),

    actions: {
        async fetch() {
            const response = await useApi().all<FaqItem>('/api/faq', {
                    sort: {created_at: 'desc'}
                });

            // @ts-ignore
            response.data.forEach(faq => {
                this.faqItems.set(faq.id, faq);
            });
        }
    },
})
