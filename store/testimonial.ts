import { defineStore } from "pinia";
import type { Testimonial } from "~/utils/types";

export const useTestimonialStore = defineStore('testimonial', {
    state: () => ({
        testimonials: new Map<number, Testimonial>(),
    }),
    actions: {
        async fetch() {
            const response = await useNuxtApp().$api.all<Testimonial>('/api/testimonial', {
                sort: { created_at: 'desc' },
                pagination: { page: 1, perPage: -1 }
            });

            // @ts-ignore
            const allTestimonials = response.data;
            const shuffled = allTestimonials.sort(() => 0.5 - Math.random());
            const selectedTestimonials = shuffled.slice(0, 10);
            this.testimonials.clear();
            // @ts-ignore
            selectedTestimonials.forEach(testimonial => {
                this.testimonials.set(testimonial.id, testimonial);
            });
        }
    },
})