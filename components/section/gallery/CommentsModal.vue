<script setup lang="ts">
import {gallerySettings} from "~/data/CustomComponents";
import type {PropType} from "@vue/runtime-core";
import type {Comment,GallerySettings} from "~/utils/types";
import {useCommentStore} from "~/store/comment";
import {storeToRefs} from "pinia";


const properties = defineProps({

  settings: {
      type: Object as PropType<GallerySettings>,
      required: true,
      default: {
        posts: gallerySettings[0],
      },
    },

  commentsCount: {
    type: Number,
    required: true,
    default: {
      commentsCount: 0
    },
  },

  postId: {
    type: Number,
    required: true,
  },


})

const showCommentsModal = ref<boolean>(false)

const { loading, error } = storeToRefs(useCommentStore())
const comments = computed<Comment[]>(() => useCommentStore().getCommentsForPost(<number>properties.postId))

const currentPage = computed(() => useCommentStore().getCurrentPage(<number>properties.postId))
const totalPages = computed(() => useCommentStore().getTotalPages(<number>properties.postId))



const load = async ({ done }) => {
  if (currentPage.value < totalPages.value && !loading.value) {
    await useCommentStore().loadMoreComments(<number>properties.postId)
    done('ok')
  } else if (currentPage.value === totalPages.value) {
    done('empty')
  } else {
    done('error')
  }
}


onMounted(() => {
  useCommentStore().getComments(<number>properties.postId)
})

</script>

<template>
  <v-dialog
      v-model="showCommentsModal"
      scrollable
      width="auto"
      height="750px"
  >
    <template v-slot:activator="{ props }" v-if="!!properties.settings">
      <v-btn class="text-none px-0 py-0" size="small" v-bind="props">
        <v-badge :content="<number>properties.commentsCount" :color="properties.settings.iconColor" :text-color="properties.settings.iconBadgeTextColor" v-if="properties.commentsCount !== 0">
          <v-icon class="mdi mdi-comment-multiple-outline ml-1" :style="`color: ${properties.settings.iconColor}`"></v-icon>
        </v-badge>
        <v-icon v-if="properties.commentsCount === 0" class="mdi mdi-comment-multiple-outline ml-1" :style="`color: ${properties.settings.iconColor}`"></v-icon>
      </v-btn>
    </template>
    <v-card class="mx-auto"
            max-width="374">
      <v-card-title>نظرات</v-card-title>
      <v-divider></v-divider>
      <v-card-text>

        <v-infinite-scroll :items="comments" :onLoad="load">
          <template v-for="item in comments" :key="item.id">
            <!-- Render Comment -->
            <v-list>
              <v-list-item-title>
                <v-avatar image="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-avatar>
                <span class="mr-1">{{ item.commentator[0]?.name }}</span>
                <v-divider vertical thickness="8"/>
                <span class="mr-1 grey--text font-12">{{ item.created_at }}</span>
              </v-list-item-title>
              <div class="pr-7">
                <v-banner class="border-none text-wrap font-15" :text="item.comment" stacked>
                  <template v-slot:actions>
                    <v-list-item-subtitle>
                      <a @click="" class="text-decoration-none" style="cursor: pointer">پاسخ</a>
                    </v-list-item-subtitle>
                  </template>
                </v-banner>

              </div>
            </v-list>
<!--            <v-list class="pr-5">-->
<!--              <v-list-item style="color: black" v-for="(reply, replyIndex) in comment.replies" :key="replyIndex">-->
<!--                <v-list-item-title>-->
<!--                  <v-avatar image="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-avatar>-->
<!--                  <span class="mr-1">{{ reply.username }}</span>-->
<!--                  <v-divider vertical thickness="8"/>-->
<!--                  <span class="mr-1 grey&#45;&#45;text font-12">{{ reply.date }}</span>-->
<!--                </v-list-item-title>-->
<!--                <div class="pr-7">-->
<!--                  <v-banner class="border-none text-wrap font-15" :text="reply.text" stacked="">-->
<!--                    <template v-slot:actions>-->
<!--                      <v-list-item-subtitle>-->
<!--                        <a @click="" class="text-decoration-none" style="cursor: pointer">پاسخ</a>-->
<!--                      </v-list-item-subtitle>-->
<!--                    </template>-->
<!--                  </v-banner>-->
<!--                </div>-->
<!--              </v-list-item>-->
<!--              <div class="d-flex pr-5 pt-2" v-if="comment.replies.length > 0">-->
<!--                <v-divider thickness="1" length="30px" class="align-self-center"/>-->
<!--                <v-list-item-subtitle>-->
<!--                  <a variant="outlined"-->
<!--                     @click="toggleReplies(index)"-->
<!--                     class="pr-2 text-decoration-none"-->
<!--                     style="cursor: pointer"> {{ comment.hideReplies ? 'نمایش پاسخها' : 'مخفی کردن' }}-->
<!--                  </a>-->
<!--                </v-list-item-subtitle>-->
<!--              </div>-->
<!--            </v-list>-->
          </template>
        </v-infinite-scroll>
      </v-card-text>
      <v-divider/>
      <v-text-field label="پاسخ به " class="border-none p-0 m-0"></v-text-field>
      <v-card-actions>
        <v-btn
            color="blue-darken-1 pt-2"
            variant="text"
            @click="showCommentsModal = false"
        >
          بستن
        </v-btn>
        <v-btn
            color="blue-darken-1 pt-2"
            variant="text"
            @click="showCommentsModal = false"
        >
          ثبت نظر
        </v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
</template>

