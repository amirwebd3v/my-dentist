import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            locally: {
                getItem(item: string): string | null | undefined {
                    if (process.client) {
                        return localStorage.getItem(item)
                    } else {
                        return undefined
                    }
                },
                setItem(item: string, value: string): void {
                    if (process.client) {
                        localStorage.setItem(item, value)
                    }
                },
                clearItem(item:string): void {
                    if(process.client) {
                        localStorage.removeItem(item)
                    }
                }
            }
        }
    }
})