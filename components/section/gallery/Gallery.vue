<script setup lang="ts">


import CommentsModal from "~/components/section/gallery/CommentsModal.vue";
import { gallery, gallerySettings} from "~/data/CustomComponents";
import type {PropType} from "@vue/runtime-core";
import type {GallerySettings} from "~/utils/types";


const settings = gallerySettings[0];


const tab = ref(1);
const page = ref(1);
const itemsPerPage = ref(3);
const unLike = ref('mdi-heart-outline');
const show = ref(false);



const props = defineProps({
  gallerySettings: {
    type: Object as PropType<GallerySettings>,
    required: true,
    default: {
      posts: gallerySettings,
    },
  }
})



const filteredGallery = computed(() => {
  return gallery.filter((item) => item.id === tab.value);
});

// State
const galleries = ref(gallery)
const activeTab = ref(galleries.value[0])


const activeGallery = computed(() =>
    galleries.value.find(g => g.id === activeTab.value.id)
)

const perPage = ref(3)
const currentPage = ref(1)

const totalPages = computed(() => {

  const posts = activeGallery.value?.posts ?? []

  return Math.ceil(posts.length / perPage.value)
})

const paginatedPosts = computed(() => {

  const start = (currentPage.value - 1) * perPage.value
  return activeGallery.value!.posts.slice(start, start + perPage.value)
})

function handlePageChange(page) {
  currentPage.value = page
}
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
        <v-card-text class="pt-0 pb-0">
          <v-chip-group mandatory class="rounded-b mb-4"
                        :style="`color: ${props.gallerySettings.tabActiveBtnColor}; background-color: ${props.gallerySettings.tabBackColor};`">

            <v-select
                class="mx-12 mt-2 pb-0 "
                multiple=""
                :item-color="props.gallerySettings.selectedSortItemColor"
                variant="plain"
                density="compact"
                chips=""
                hide-details
                label="مرتب سازی بر اساس"
                :items="['تصویر','ویدیو', 'به روزترین','محبوب ترین', 'پربازدید ترین', 'تعداد کامنت']"
                :item-value="['تصویر','ویدیو', 'به روزترین','محبوب ترین', 'پربازدید ترین', 'تعداد کامنت']"
            >
            </v-select>

          </v-chip-group>


        </v-card-text>
        <v-window v-model="tab" >
          <v-window-item  v-for="galleryItem in filteredGallery" :key="galleryItem.id" :value="galleryItem.id">
            <v-container>
              <v-row>
                <v-col  v-for="post in galleryItem.posts" :key="post.id" cols="12" md="4">
                  <v-card class="mx-auto border-left border-top" max-width="325" :color="props.gallerySettings.cardBorderColor"
                          :elevation="props.gallerySettings.cardElevation"
                          :variant="props.gallerySettings.cardVariant"
                  >
                    <v-carousel :continuous="false" :show-arrows="false" hide-delimiter-background
                                delimiter-icon="mdi mdi-circle-medium" height="300" class="bg-transparent"
                                :color="props.gallerySettings.delimitersColor">
                      <v-carousel-item v-for="post in paginatedPosts"
                                       :key="post.id"
                                       cover=""
                                       :src="post.images[0]">
                      </v-carousel-item>
                    </v-carousel>



                        <v-card-title :style="`color: ${props.gallerySettings.cardTitleColor}`">
                          {{ post.title }}
                          <v-btn
                              size="small"
                              variant="text"
                              :color="props.gallerySettings.iconColor"
                              class="align-self-center"
                              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                              @click="show = !show"
                          ></v-btn>
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
                          <CommentsModal/>
                          <div class="justify-self-start">
                            <v-icon class="me-1" size="small" icon="mdi-eye" :style="`color: ${props.gallerySettings.iconColor}`"/>
                            <span class="me-2">{{ post.views }}</span>
                            <span class="me-1">·</span>
                            <v-icon class="me-1" size="small" :color="props.gallerySettings.iconColor"
                                    :icon="unLike"
                                    @click="unLike = (unLike === 'mdi-heart' ? 'mdi-heart-outline' : 'mdi-heart')"
                            />
                            <span>{{ post.likes }}</span>
                          </div>
                        </v-card-actions>
                      </div>
                    </v-expand-transition>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-window-item>
        </v-window>
        <v-pagination
            v-model="currentPage"
            size="small"
            variant="text"
            rounded="circle"
            class="align-start"
            :length="totalPages"
            @input="handlePageChange"
        ></v-pagination>

        <!-- -----------------------------------------------
            End Gallery
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>

