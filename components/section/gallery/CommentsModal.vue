<script setup lang="ts">
import {gallerySettings} from "~/data/CustomComponents";
import type {PropType} from "@vue/runtime-core";
import type {Comment, GallerySettings} from "~/utils/types";
import {useCommentStore} from "~/store/comment";
import {storeToRefs} from "pinia";
import {DateTime} from 'luxon'

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

const {loading, error} = storeToRefs(useCommentStore())
const comments = computed<Comment[]>(() => useCommentStore().getCommentsForPost(<number>properties.postId))

const currentPage = computed(() => useCommentStore().getCurrentPage(<number>properties.postId))
const totalPages = computed(() => useCommentStore().getTotalPages(<number>properties.postId))


const load = async ({done}) => {
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
      height="752px"
  >
    <template v-slot:activator="{ props }" v-if="!!properties.settings">
      <v-btn class="text-none px-0 py-0" size="small" v-bind="props">
        <v-badge :content="usePersianNumber().formattedNumber(<number>properties.commentsCount)" :color="properties.settings.iconColor"
                 :text-color="properties.settings.iconBadgeTextColor" v-if="properties.commentsCount !== 0">
          <v-icon class="mdi mdi-comment-multiple-outline ml-1"
                  :style="`color: ${properties.settings.iconColor}`"></v-icon>
        </v-badge>
        <v-icon v-if="properties.commentsCount === 0" class="mdi mdi-comment-multiple-outline ml-1"
                :style="`color: ${properties.settings.iconColor}`"></v-icon>
      </v-btn>
    </template>
    <v-card class="mx-auto"
            max-width="400">
      <v-card-title>
        <v-row justify="space-between" align="center" class="py-3 px-2">
          <span>نظرات</span>
          <v-icon
              color="blue-darken-1"
              icon="mdi mdi-close"
              size="x-small"
              @click="showCommentsModal = false"
          />
        </v-row>
      </v-card-title>
      <v-divider/>
      <v-card-text class="pt-0">

        <v-infinite-scroll :items="comments" :onLoad="load">
          <template v-for="item in comments" :key="item.id">
            <!-- Render Comment -->
            <v-list >
              <v-list-item-title>
                <v-avatar>
                  <v-img :alt="<string>item.commentator?.name"
                         :src="item.commentator?.avatar?.original ?? 'images/icons/patient-avatar.png'"/>
                </v-avatar>
                <span class="mr-1">{{ item.commentator?.name }}</span>
                <v-divider vertical thickness="8"/>
                <span class="mr-1 grey--text font-12">{{
                    DateTime.fromSeconds(item.created_at).setLocale('fa').toRelative()
                  }}</span>
              </v-list-item-title>
              <div class="pr-7">
                <v-banner class="border-none text-wrap font-15" :text="item.comment" stacked/>
              </div>
            </v-list>
            <v-list class="pr-5" v-if="item.reply">
              <v-list-item style="color: black">
                <v-list-item-title>
                  <v-avatar>
                    <v-img alt="دکتر سمیرا رونقی"
                           :src="item?.admin?.avatar?.original ?? 'images/icons/admin-avatar.png'"/>
                  </v-avatar>
                  <span class="mr-1">دکتر سمیرا رونقی</span>
                  <v-divider vertical thickness="8"/>
                  <span class="mr-1 grey--text font-12">{{
                      DateTime.fromSeconds(item.updated_at).setLocale('fa').toRelative()
                    }}</span>
                </v-list-item-title>
                <div class="pr-7">
                  <v-banner class="border-none text-wrap font-15" :text="item.reply" stacked/>
                </div>
              </v-list-item>
            </v-list>
          </template>
        </v-infinite-scroll>
      </v-card-text>
      <v-divider class="pt-0 pb-1"/>

      <v-textarea rounded="0" auto-grow rows="1" variant="plain" label="در اینجا نظر خود را بنویسید... "
                  class="border-none px-4 m-0 pb-4" hide-details/>
        <v-btn
            flat
            color="blue-darken-1 pt-1 mb-0"
            variant="tonal"
            rounded="0"
            @click="showCommentsModal = false"
            text="ثبت"
        />
    </v-card>

  </v-dialog>
</template>

