import {defineStore} from "pinia";
import type {Testimonial} from "~/utils/types";


export const useTestimonialStore = defineStore('testimonial', {
    state: () => ({
        testimonials: new Map<number, Testimonial>(),
    }),

    actions: {
        async fetch() {
            const response = await useApi().all<Testimonial>('/api/testimonial', {
                    sort: {created_at: 'desc'}
                });

            // @ts-ignore
            response.data.forEach(testimonial => {
                this.testimonials.set(testimonial.id, testimonial);
            });
        }
    },
})
