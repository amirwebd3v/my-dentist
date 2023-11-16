// store/scrollStore.ts
import { defineStore } from 'pinia'

export const useScrollStore = defineStore('scroll', {
    state: () => ({
        activeSection: null as string | null,
        sections: ['section1', 'section2', 'section3', 'section4', 'section6']
    }),

    // ...mutations and actions if needed
})