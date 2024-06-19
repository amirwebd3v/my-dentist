<script setup>
import {slideBanners} from "~/data/CustomComponents";
import {slideBannerSettings} from "~/data/CustomComponents";

const settings = slideBannerSettings[0];
</script>
<!--:cycle="settings.cycle"-->
<!--:interval="settings.intervalTime"-->
<template>
    <div class="brand-banner-component">

      <v-carousel
          :vertical-delimiters="settings.verticalDelimiters"
          :hide-delimiter-background="true"
          :hide-delimiters="settings.hideDelimiters"
          :show-arrows="false"
          :color="settings.delimitersColor"
          delimiter-icon="mdi mdi-circle-medium"
          height="1280"
      >
        <v-carousel-item
            v-for="(item,i) in slideBanners"
            :key="i"
            :src="item.imageSource"
            cover
        >


                <v-container class="d-flex fill-height justify-start align-center">

            <v-row justify="start" >
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


