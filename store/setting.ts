import {defineStore} from 'pinia';
import CaseClient from "@casejs/case-client";
import {baseURL} from "nuxt/dist/core/runtime/nitro/paths";
const cs = new CaseClient(baseURL('http://localhost:3001/api/dynamic'));
interface Items {
    id: number,
    group: string,
    key: string,
    value: string
}
export const useSettingsStore = defineStore({
    id: 'settings',
    state: () => ({
        items: [] as Items[],
    }),
    actions: {
        async fetchSettings() {
            // const response = await fetch('http://localhost:3001/api/dynamic/settings');
            // this.items = await response.json();

            const items = await cs.from('settings').find()
            console.log(items)
        },
    },
    getters: {
        getSetting: (state) => (group: string,key: string) => {
            return  state.items.filter((item) => item.group=== group)
                .find((item) => item.key === key);

        }
    }
});
