import {defineStore} from 'pinia'
import type {Comment} from "~/utils/types";

interface PostCommentState {
    comments: Comment[]
    currentPage: number
    totalPages: number
}


interface CommentPayload {
    comment: string
}

export const useCommentStore = defineStore('comment', () => {
    const { paginate, prepareQueryParams, post } = useNuxtApp().$api


    const comments = reactive(new Map<number, PostCommentState>())
    const loading = ref(false)
    const error = ref<string | null>(null)

    const getComments = async (postId: number, page = 1, itemsPerPage = 5) => {
        loading.value = true
        error.value = null

        try {
            const queryParams = prepareQueryParams({page, itemsPerPage})
            queryParams.sort = { created_at: 'desc' }
            queryParams.search = `commentable_id:${postId.toString()};is_approved:true`

            const response = await paginate<Comment>('/api/comment', queryParams)

            const currentState = comments.get(postId) || { comments: [], currentPage: 0, totalPages: 0 }

            if (page === 1) {
                currentState.comments = response.data
            } else {
                currentState.comments = [...currentState.comments, ...response.data]
            }

            currentState.currentPage = response.meta.current_page
            currentState.totalPages = response.meta.last_page

            comments.set(postId, currentState)
        } catch (err) {
            error.value = 'Failed to fetch comments'
            console.error('Error fetching comments:', err)
        } finally {
            loading.value = false
        }
    }

    const loadMoreComments = async (postId: number) => {
        const currentState = comments.get(postId)
        if (currentState && currentState.currentPage < currentState.totalPages) {
            await getComments(postId, currentState.currentPage + 1)
        }
    }

    const getCommentsForPost = computed(() => (postId: number) => {
        return comments.get(postId)?.comments || []
    })

    const getCurrentPage = computed(() => (postId: number) => {
        return comments.get(postId)?.currentPage || 1
    })

    const getTotalPages = computed(() => (postId: number) => {
        return comments.get(postId)?.totalPages || 1
    })

    const saveComment = async (postId: number, comment: CommentPayload): Promise<Comment> => {
        loading.value = true
        error.value = null

        try {
            return await post<Comment>(`/api/post/${postId}/comment`, comment)
        } catch (err) {
            error.value = 'Failed to save comment'
            console.error('Error saving comment:', err)
            throw err
        } finally {
            loading.value = false
        }
    }


    return {
        getComments,
        loadMoreComments,
        saveComment,
        getCommentsForPost,
        getCurrentPage,
        getTotalPages,
        loading,
        error
    }
})
