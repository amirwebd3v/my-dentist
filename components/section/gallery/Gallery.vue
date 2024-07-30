<script setup lang="ts">


import CommentsModal from "~/components/section/gallery/CommentsModal.vue";
import {gallerySettings} from "~/data/CustomComponents";
import type {PropType} from "@vue/runtime-core";
import type {GallerySettings} from "~/utils/types";
import {useServiceStore} from "~/store/service";
import {usePostStore} from "~/store/post";
import {storeToRefs} from "pinia";
import {useDisplay} from "vuetify";

const {xlAndUp, md, sm, thresholds, width, mobile} = useDisplay();
thresholds.value.sm = 932

/**************************************************************************/
const {posts, meta} = storeToRefs(usePostStore())
const {services} = storeToRefs(useServiceStore())
const {formattedNumber} = usePersianNumber()
const loading = ref(false)


/**************************************************************************/
const unLike = ref('mdi-heart-outline');
const activeService = ref(1)

const showStates = reactive({})

const show = (id) => {
  if (!(id in showStates)) {
    showStates[id] = true;
  }
  return showStates[id]
}

const toggleShow = (id) => {
  showStates[id] = !showStates[id]
}


/**************************************************************************/

const props = defineProps({
  gallerySettings: {
    type: Object as PropType<GallerySettings>,
    required: true,
    default: gallerySettings[0],
  }
})


const load = async (newPage: number = meta.value.current_page, itemsPerPage: number = xlAndUp.value ? 4 : 3) => {
  if (loading.value) {
    return
  }


  loading.value = true
  const params = useNuxtApp().$api.prepareQueryParams({
    page: newPage,
    itemsPerPage: itemsPerPage
  })

  params.sort = {created_at: 'desc'}
  params.search = `services.id:${activeService.value}`

  await usePostStore().paginate(params)

  loading.value = false
}

onBeforeMount(() => {
  load()
})

const initialBreakpoint = computed(() => width.value)


watch([md, initialBreakpoint], ([isMd, isInit]) => {

  if (isMd || isInit > 1907) {
    load(1, 4);

  } else {
    load(1, 3);
  }
}, {immediate: true});


</script>

<template>
  <div class="bg-extra-light">
    <div class="gallery-component mini-spacer bottom-mini-spacer">
      <v-container v-if="!!props.gallerySettings">
        <!-- -----------------------------------------------
            Start Gallery
        ----------------------------------------------- -->
        <v-tabs
            :center-active="true"
            mandatory
            v-model="activeService"
            align-tabs="center"
            :bg-color="props.gallerySettings.tabBackColor"
            :class="`${props.gallerySettings.tabRounded} mt-8 elevation-5`"
            @update:model-value="load(1)"
        >
          <v-tab v-for="service in services.values()"
                 :key="service.id"
                 :value="service.id"
                 :color="props.gallerySettings.tabActiveBtnColor"

          >{{ service.title }}
          </v-tab>

        </v-tabs>
        <v-card-text class="pt-0 pb-0 px-0">
          <v-chip-group mandatory class=" mb-4 elevation-5"
                        :style="`color: ${props.gallerySettings.tabActiveBtnColor};
                        background-color: ${props.gallerySettings.tabBackColor};`">
<!--            <v-select-->
<!--                class="mx-12 mt-2"-->
<!--                multiple-->
<!--                :item-color="props.gallerySettings.selectedSortItemColor"-->
<!--                variant="plain"-->
<!--                density="comfortable"-->
<!--                chips-->
<!--                hide-details-->
<!--                label="مرتب سازی بر اساس"-->
<!--                :loading="loading"-->
<!--                :items="[ 'جدید ترین','محبوب ترین', 'پربازدید ترین', 'تعداد کامنت']"-->
<!--                :item-value="[ 'جدید ترین','محبوب ترین', 'پربازدید ترین', 'تعداد کامنت']"-->
<!--            >-->
<!--            </v-select>-->

          </v-chip-group>


        </v-card-text>
        <v-window>

          <v-window-item>
            <v-row justify="space-around">
              <v-col v-for="post in posts.values()" :key="post.id" cols="12" :lg="xlAndUp || md ? 3 : 4" md="6" sm="12">

                <v-card v-if="!!props.gallerySettings" class="mx-auto border-left border-top" max-width="360" max-height="570"
                        :color="props.gallerySettings.cardBorderColor"
                        :elevation="props.gallerySettings.cardElevation"
                        :variant="props.gallerySettings.cardVariant"
                >

                  <v-carousel :continuous="false" :show-arrows="false" hide-delimiter-background
                              delimiter-icon="mdi mdi-circle-medium" style="background-color: black;"
                              :color="props.gallerySettings.delimitersColor">
                    <v-carousel-item v-for="item in post.images"
                                     :key="item"
                                     :class="`${$vuetify.display.width < 389 ? 'pb-8' : ''}`"
                                     :src="`${useAppConfig().api.baseUrl +'/storage/'+item}`"
                                     :loading="loading"
                                     lazy-src="/images/logos/Sami-logo-white.png"

                    >
                    </v-carousel-item>

                    <v-window-item class="v-carousel-item" v-for="item in post.videos" :key="item">
                      <iframe
                          class="border-none"
                          :src="`https://www.aparat.com/video/video/embed/videohash/${item.split('/').pop()}/vt/frame`"
                      />

                    </v-window-item>

                  </v-carousel>


                  <v-card-title class="font-weight-regular" :style="`color: ${props.gallerySettings?.cardTitleColor}`"
                                :key="post.id">
                    <v-row justify="space-between" align="center" class="py-4 px-1">
                      <div class="text-truncate" style="max-width: 200px;">
                        {{ post.title }}
                      </div>
                      <v-btn
                          size="small"
                          variant="text"
                          :color="<string>props.gallerySettings?.iconColor"
                          class="align-self-center"
                          :icon="show(post.id) ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                          @click="toggleShow(post.id)"
                      />
                    </v-row>
                  </v-card-title>


                  <v-expand-transition v-if="!!props.gallerySettings">
                    <div v-show="show(post.id)">
                      <v-card-subtitle class="pb-2 text-wrap"
                                       :style="`color: ${props.gallerySettings.cardTitleColor};height: 4.5em;line-height: 1.5em;`">
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
                        <CommentsModal :post-id="post.id" :comments-count="post.comments_count"
                                       :settings="props.gallerySettings"/>
                        <div class="justify-self-start">
                          <v-icon class="me-1" size="small" icon="mdi-eye"
                                  :style="`color: ${props.gallerySettings.iconColor}`"/>
                          <span class="me-2">{{ formattedNumber(post.views_count) }}</span>
                          <span class="me-1">·</span>
                          <v-icon class="me-1" size="small" :color="props.gallerySettings.iconColor"
                                  :icon="unLike"
                                  @click="unLike = (unLike === 'mdi-heart' ? 'mdi-heart-outline' : 'mdi-heart')"
                          />
                          <span>{{ formattedNumber(post.likes_count) }}</span>
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
            size="small"
            next-icon="mdi-menu-right"
            prev-icon="mdi-menu-left"
            :show-first-last-page="true"
            last-icon="mdi-moon-first-quarter"
            first-icon="mdi-moon-last-quarter"
            @update:model-value="load(meta.current_page,xlAndUp || md ? 4 : 3)"
        >
        </v-pagination>

        <!-- -----------------------------------------------
            End Gallery
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-carousel {
  height: 321.5px !important;
}


iframe {
  height: 82%;
  width: 100%;
  margin-top: 56px;
}

@media (min-width: 1280px) and (max-width: 1919px) {
  iframe {
    margin-top: 56px;
  }
}

@media (max-width: 460px) {
  iframe {
    margin-top: 60px;
  }
}

@media (max-width: 389px) and (min-width: 344px) {
  .v-carousel {
    max-height: 288px !important;
  }
  iframe {
    margin-top: 55px;
  }
}

</style>