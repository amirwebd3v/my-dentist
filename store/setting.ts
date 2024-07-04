import { defineStore } from "pinia";
import type { Setting } from "~/utils/types";

type SettingGroup = 'testimonial' | 'about' | 'general' | 'slider-banner' | 'gallery' | 'footer';
interface SettingsState {
    settings: Setting[];
}
export const useSettingStore = defineStore('setting', {
    state: (): SettingsState => ({
        settings: [],
    }),

    getters: {
        getSettingsByGroup: (state) => async (group: SettingGroup)  => {
            const groupSettings = state.settings.filter(setting => setting.group === group);
            return groupSettings.reduce((acc, setting) => {
                acc[setting.name] = setting.payload;
                return acc;
            }, {} as { [key: string]: Setting['payload']});
        },
    },

    actions: {
        async fetch() {
            const response = await useApi().all<Setting>('/general/setting', {
                sort: { created_at: 'desc' },
            });

            // @ts-ignore
            this.settings = response.data;

        },
    },
});