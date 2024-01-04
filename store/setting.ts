import { defineStore } from 'pinia';
import CaseClient from "@casejs/case-client";
const cs = new CaseClient('http://localhost:4000');

interface Items {
    id: number,
    group: string,
    key: string,
    value: string
}

function groupBy(list: Array<object>, keyGetter: Function) {
    const map = new Map();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
}

export const useSettingsStore = defineStore({
    id: 'settings',
    state: () => ({
        settings: [] as Items[],
    }),
    actions: {
        async fetch() {
            let items = Object.groupBy(await cs.from('settings').find(), s => s.group);
            for (let [k, v] of Object.entries(items)) {
                items[k] = Object.groupBy(items[k], i => i.key)
                for (let [key, val] of Object.entries(items[k])) {
                    items[k][key] = val[0]
                }
            }
            this.settings = items
        },
        async update(id, value) {
            const updatedCat = await cs.from('settings').update(id, {value})
        }
    },
});