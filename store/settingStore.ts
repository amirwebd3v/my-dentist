import { defineStore } from "pinia";
import api from "~/utils/api";

interface Setting {
  group: string;
  name: string;
  val: string | object | Array<object | string>;
}

const { filter, pagination } = {
  filter: ["id", "group", "name", "val"],
  pagination: { page: 1, perPage: 1000 },
};

export const useSettingStore = defineStore("setting", {
  state: () => ({
    headerMenu: Array<Setting>,
    about: Array<Setting>,
    services: Array<Setting>,
    gallery: Array<Setting>,
    testimonial: Array<Setting>,
    sliderBanner: Array<Setting>,
  }),

  actions: {
    async init() {
      this.$state.headerMenu = await this.list("header-menu");
      this.$state.about = await this.list("about");
      this.$state.services = await this.list("services");
      this.$state.gallery = await this.list("gallery");
      this.$state.testimonial = await this.list("testimonial");
      this.$state.sliderBanner = await this.list("slider-banner");
    },

    async set(setting: Setting) {
      return (await api.post<{ data: Setting }>("setting", setting)).data.data;
    },

    async remove(setting: Pick<Setting, "name" | "group">): Promise<void> {
      await api.delete(`setting/${setting.group}/${setting.name}`);
    },

    async list(group: string): Promise<Setting[]> {
      return (
        await api.paginate<Setting>("setting", {
          filter,
          pagination,
          search: [{ field: "group", operator: "=", value: group }],
        })
      ).data;
    },

    async get(setting: Pick<Setting, "name" | "group">): Promise<Setting> {
      return (
        await api.get<{ data: Setting }>(
          `setting/${setting.group}/${setting.name}`
        )
      ).data.data;
    },
  },
});
