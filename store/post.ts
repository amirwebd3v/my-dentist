import {defineStore} from "pinia";
import type {Post} from "~/utils/types";
import type {PaginatorMeta, QueryParams} from "l5-client";


export const usePostStore = defineStore('post', {
    state: () => ({
        posts: new Map<number, Post>(),
        meta: {} as PaginatorMeta
    }),

    actions: {
        async paginate(queryParam: QueryParams) {

                const { data, meta } = await useNuxtApp().$api.paginate<Post>(
                    '/api/post',
                    queryParam
                );

                this.posts = new Map(data.map((entity) => [entity.id, entity]));
                this.meta = meta;
        },
    },
})
