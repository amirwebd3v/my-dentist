import {defineStore} from "pinia";
import type {Comment} from "~/utils/types";


export const useCommentStore = defineStore('comment', {
    state: () => ({
        comments: new Map<number, Comment>(),
    }),

    actions: {
        async fetch() {
            const response = await useApi().all<Comment>('/api/comment', {
                    sort: {created_at: 'desc'}
                });

            // @ts-ignore
            response.data.forEach(comment => {
                this.comments.set(comment.id, comment);
            });
        }
    },
})
