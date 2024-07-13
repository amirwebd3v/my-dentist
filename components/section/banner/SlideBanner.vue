<script setup lang="ts">
import {slideBanners, slideBannerSettings} from "~/data/CustomComponents";
import type {PropType} from "@vue/runtime-core";
import type {CarouselSettings} from "~/utils/types";
import {storeToRefs} from "pinia";
import {useServiceStore} from "~/store/service";


const props = defineProps({
  carouselSettings: {
    type: Object as PropType<CarouselSettings>,
    required: true,
    default: {
      verticalDelimiters: slideBannerSettings[0].verticalDelimiters,
      hideDelimiters: slideBannerSettings[0].hideDelimiters,
      delimitersColor: slideBannerSettings[0].delimitersColor,
      cycle: slideBannerSettings[0].cycle,
      intervalTime: slideBannerSettings[0].intervalTime,
    },
  }
})


// console.log(props.carouselSettings)


</script>

<template>
  <div class="brand-banner-component">

    <v-carousel
        v-if="props.carouselSettings"
        :vertical-delimiters="props.carouselSettings.verticalDelimiters"
        :hide-delimiter-background="true"
        :hide-delimiters="props.carouselSettings.hideDelimiters"
        :show-arrows="false"
        :color="props.carouselSettings.delimitersColor"
        :cycle="props.carouselSettings.cycle"
        :interval="props.carouselSettings.intervalTime"
        delimiter-icon="mdi mdi-circle-medium"
        class="sliderBanner"
    >
      <v-carousel-item
          v-for="(item,i) in slideBanners"
          :key="i"
          :src="item.imageSource"
          cover
      >


        <v-container class="d-flex fill-height justify-start align-center">

          <v-row justify="start">
            <v-col cols="12" sm="7" lg="6">
              <div class="px-8 text-sm-right text-center ">
                <v-chip :size="item.tagChipSize" :text="item.tag" :color="item.tagColor" :variant="item.tagVariant"/>
                <h2
                    class="
                  brand-banner-title
                  font-weight-bold
                  text-uppercase" :style="`color: ${item.titleColor} ;`"
                >
                  {{ item.title }}
                </h2>
                <p :class="`font-${item.contextFontSize}`" :style="`color: ${item.contextColor} ;`">
                  {{ item.context }}
                </p>
                <div class="mt-8">
                  <v-btn
                      :to="item.btnLink"
                      class="rounded-xl px-6 py-0"
                      :color="item.btnColor"
                      variant="flat"
                      :size="item.btnSize"
                      :text="item.btnText"
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
  height: 900px !important;

  :deep(.v-carousel-item) {
    .v-img {
      .v-img__img--cover {
        object-position: 100% top !important;
      }
    }
  }


  @media screen and (max-width: 1199px) {
    height: 800px !important;
  }


  @media screen and (max-width: 991px) {
    height: 650px !important;
  }


  @media screen and (max-width: 767px) {
    height: 724px !important;
    :deep(.v-carousel-item) {
      .v-img {
        .v-img__img--cover {
          object-position: 80% top !important;
        }
      }
    }
  }

}
</style>