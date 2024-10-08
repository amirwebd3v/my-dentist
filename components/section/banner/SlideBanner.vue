<script setup lang="ts">
import type {PropType} from "@vue/runtime-core";
import type {CarouselSettings} from "~/utils/types";
import {storeToRefs} from "pinia";
import {useSlideBannerStore} from "~/store/slideBanner";


const props = defineProps({
  carouselSettings: {
    type: Object as PropType<CarouselSettings>,
    required: true,
  }
})

const {slideBanners} = storeToRefs(useSlideBannerStore())

onBeforeMount(async ()=>{
  await useSlideBannerStore().fetch()
})


</script>

<template>
  <div class="brand-banner-component">

    <v-carousel
        v-if="props.carouselSettings"
        :vertical-delimiters="props.carouselSettings.verticalDelimiters"
        :hide-delimiter-background="true"
        :hide-delimiters="!props.carouselSettings.hideDelimiters"
        :show-arrows="false"
        :color="props.carouselSettings.delimitersColor"
        :cycle="props.carouselSettings.cycle"
        :interval="props.carouselSettings.intervalTime"
        delimiter-icon="mdi mdi-circle-medium"
        class="sliderBanner"
        :model-value="1"
    >
      <v-carousel-item
          v-for="item in Array.from(slideBanners.values()).sort((a, b) => a.order - b.order)"
          :value="item.order"
          :src="`${useAppConfig().api.baseUrl +'/storage/'+item.image}`"
          cover
      >


        <v-container class="d-flex fill-height justify-start align-center">

          <v-row justify="start">
            <v-col cols="12" sm="7" lg="6">
              <div class="px-8 text-sm-right text-center">
                <v-chip :size="item.setting.tagChipSize"
                        :text="item.tags[0]"
                        :color="item.setting.tagColor"
                        :variant="item.setting.tagVariant"/>
                <h2
                    class="
                  brand-banner-title
                  font-weight-bold" :style="`color: ${item.setting.titleColor}; text-shadow: 0 0 3px ${item.setting.titleColor};`"
                >
                  {{ item.title }}
                </h2>
                <p  :style="`font-size: ${item.setting.contextFontSize}px;
                  text-shadow: 0 0 2px ${item.setting.contextColor};color: ${item.setting.contextColor};`">
                  {{ item.context }}
                </p>
                <div class="mt-8">
                  <v-btn
                      :to="item.setting.btnLink"
                      class="rounded-xl w-auto px-6 py-0 text-white"
                      :color="item.setting.btnColor"
                      variant="flat"
                      :size="item.setting.btnSize"
                      :text="item.setting.btnText"
                  >
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>

        </v-container>


      </v-carousel-item>
    </v-carousel>

  </div>


</template>


<style scoped lang="scss">
.sliderBanner {
  width: 100%;
  height: 600px !important;



  :deep(.v-carousel-item) {
    .v-img {
      .v-img__img--cover {
        object-position: 100% top !important;
      }
    }
    .v-btn__overlay{
      opacity: 0 !important;
    }
  }


  @media screen and (max-width: 1199px) {
    height: 800px !important;
  }


  @media screen and (max-width: 991px) {
    height: 650px !important;
  }


  @media screen and (max-width: 767px) {
    height: 756px !important;
    :deep(.v-carousel-item) {
      .v-img {
        .v-img__img--cover {
          object-position: 95% center !important;
        }
      }
    }
  }

}
</style>