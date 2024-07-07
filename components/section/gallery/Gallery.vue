<script setup lang="ts">


import CommentsModal from "~/components/section/gallery/CommentsModal.vue";
import {gallery, gallerySettings} from "~/data/CustomComponents";
import type {PropType} from "@vue/runtime-core";
import type {GallerySettings} from "~/utils/types";
import {usePostStore} from "~/store/post";
import {storeToRefs} from "pinia";
/**************************************************************************/
const {posts, meta} = storeToRefs(usePostStore())

const loading = ref(false)


/**************************************************************************/
const tab = ref(1);
const unLike = ref('mdi-heart-outline');
const show = ref(false);
//
// const filteredGallery = computed(() => {
//   return gallery.filter((item) => item.id === tab.value);
// });
//

const galleries = ref(gallery)
const activeTab = ref(galleries.value[0])

/**************************************************************************/

const props = defineProps({
  gallerySettings: {
    type: Object as PropType<GallerySettings>,
    required: true,
    default: {
      posts: gallerySettings[0],
    },
  }
})


const load = async (newPage: number) => {
  if (loading.value) {
    return
  }

  loading.value = true
  // let categoriesFilter = selectedCategories.value.filter(c => c !== '*').join(',')
  // const search: FilterSearchItem[] = [
  //   ...searchText.value === '' ? [] : [
  //     {field: 'title', operator: 'ilike', value: searchText.value},
  //     {field: 'description', operator: 'ilike', value: searchText.value},
  //     {field: 'price', operator: 'like', value: searchText.value}
  //   ],
  //   ...categoriesFilter.length > 0 ? [
  //     {field: 'categories.slug', operator: 'in', value: categoriesFilter}
  //   ] : []
  // ]
  // console.log(posts.value)
  const params = useApi().prepareQueryParams({page:newPage,itemsPerPage: 3})


  await usePostStore().paginate(params)

  loading.value = false
}

onMounted(() => {
  load(meta.value.current_page)
})


</script>

<template>
  <div class="bg-extra-light">
    <div class="gallery-component mini-spacer bottom-mini-spacer">
      <v-container v-if="!!props.gallerySettings">
        <!-- -----------------------------------------------
            Start Gallery
        ----------------------------------------------- -->
        <v-tabs
            v-model="activeTab"
            align-tabs="center"
            :bg-color="props.gallerySettings.tabBackColor"
            :class="`${props.gallerySettings.tabRounded} mt-8 elevation-5`"
        >
          <v-tab v-for="gallery in galleries"
                 :key="gallery.id"
                 :value="gallery"
                 :color="props.gallerySettings.tabActiveBtnColor"

          >{{ gallery.title }}
          </v-tab>
        </v-tabs>
        <v-card-text class="pt-0 pb-0 px-0">
          <v-chip-group mandatory class=" mb-4 elevation-5"
                        :style="`color: ${props.gallerySettings.tabActiveBtnColor}; background-color: ${props.gallerySettings.tabBackColor};`">

            <v-select
                :loading="loading"
                class="mx-12 mt-2"
                multiple
                :item-color="props.gallerySettings.selectedSortItemColor"
                variant="plain"
                density="comfortable"
                chips
                hide-details
                label="مرتب سازی بر اساس"
                :items="['تصویر','ویدیو', 'جدید ترین','محبوب ترین', 'پربازدید ترین', 'تعداد کامنت']"
                :item-value="['تصویر','ویدیو', 'جدید ترین','محبوب ترین', 'پربازدید ترین', 'تعداد کامنت']"
            >
            </v-select>

          </v-chip-group>


        </v-card-text>
        <v-window v-model="tab">
          <!--          v-for="galleryItem in filteredGallery" :key="galleryItem.id" :value="galleryItem.id"-->
          <v-window-item>
            <v-row>
              <v-col v-for="post in posts.values()" :key="post.id" cols="12" md="4">
                <v-card class="mx-auto border-left border-top" max-width="325"
                        :color="props.gallerySettings.cardBorderColor"
                        :elevation="props.gallerySettings.cardElevation"
                        :variant="props.gallerySettings.cardVariant"
                >
                  <v-carousel :continuous="false" :show-arrows="false" hide-delimiter-background
                              delimiter-icon="mdi mdi-circle-medium" height="300" style="background-color: black;"
                              :color="props.gallerySettings.delimitersColor">
                    <v-carousel-item v-for="item in post.images"
                                     :key="item"
                                     :src="item"
                                     cover
                    >
                    </v-carousel-item>

                    <v-window-item class="v-carousel-item" v-for="item in posts.values()" :key="item.id">


                      <iframe
                          class="border-none mt-16 w-100"
                          style="height: 62%!important;"
                          v-for="(videoUrl, index) in item.videos"
                          :key="index"
                          :src="`https://www.aparat.com/video/video/embed/videohash/${videoUrl.split('/').pop()}/vt/frame`"
                      />

                    </v-window-item>

                  </v-carousel>


                  <v-card-title :style="`color: ${props.gallerySettings.cardTitleColor}`">
                    <v-row justify="space-between" align="center" class="py-4 px-1">
                      <div class="text-truncate" style="max-width: 200px;">
                        {{ post.title }}
                      </div>
                      <v-btn
                          size="small"
                          variant="text"
                          :color="props.gallerySettings.iconColor"
                          class="align-self-center"
                          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                          @click="show = !show"
                      />
                    </v-row>
                  </v-card-title>


                  <v-expand-transition>
                    <div v-show="show">
                      <v-card-subtitle class="pb-2" :style="`color: ${props.gallerySettings.cardTitleColor};`">
                        {{ post.subtitle }}

                      </v-card-subtitle>

                      <v-divider class="mx-4"/>
                      <div class="px-4 pt-4">
                        <v-slide-group :show-arrows="false">
                          <v-slide-group-item v-for="tag in post.tags" :key="tag">
                            <v-chip class="ml-2" size="small" :color="props.gallerySettings.tagsColor"
                                    :variant="props.gallerySettings.tagsVariant">
                              {{ tag }}
                            </v-chip>
                          </v-slide-group-item>
                        </v-slide-group>
                      </div>

                      <v-card-actions class="justify-space-around mt-5">
                        <CommentsModal :post-id="post.id" :comments-count="post.comments_count" :settings="props.gallerySettings"/>
                        <div class="justify-self-start">
                          <v-icon class="me-1" size="small" icon="mdi-eye"
                                  :style="`color: ${props.gallerySettings.iconColor}`"/>
                          <span class="me-2">{{ post.views_count }}</span>
                          <span class="me-1">·</span>
                          <v-icon class="me-1" size="small" :color="props.gallerySettings.iconColor"
                                  :icon="unLike"
                                  @click="unLike = (unLike === 'mdi-heart' ? 'mdi-heart-outline' : 'mdi-heart')"
                          />
                          <span>{{ post.likes_count }}</span>
                        </div>
                      </v-card-actions>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
        <v-pagination
            v-model="meta.current_page"
            variant="text"
            rounded
            :length="meta.last_page"
            :total-visible="$vuetify.display.smAndUp ? 3 : 1"
            class="mt-8"
            next-icon="mdi-menu-right"
            prev-icon="mdi-menu-left"
            :show-first-last-page="true"
            last-icon="mdi-moon-first-quarter"
            first-icon="mdi-moon-last-quarter"
            @update:model-value="load(meta.current_page)"
        >
        </v-pagination>

        <!-- -----------------------------------------------
            End Gallery
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>

