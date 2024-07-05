<script setup lang="ts">


import {storeToRefs} from "pinia";
import {useSettingStore} from "~/store/setting";


const title = ref(" دکتر دندان پزشکیان - دندانپزشک و جراح");
useHead({
  meta: [{content: title}],
  titleTemplate: (titleChunk) => {
    return titleChunk
        ? `${titleChunk} - دندانپزشک و جراح `
        : "وبسایت دکتر دندان پزشکیان";
  },
});

const headerSettings = ref()
const carouselSettings = ref()
const aboutSettings = ref()
const gallerySettings = ref()
const testimonialSettings = ref()


const {getSettingsByGroup} = storeToRefs(useSettingStore())
await useSettingStore().fetch()

await getSettingsByGroup.value('general').then(res => headerSettings.value = res)
await getSettingsByGroup.value('slider-banner').then(res => carouselSettings.value = res)
await getSettingsByGroup.value('about').then(res => aboutSettings.value = res)
await getSettingsByGroup.value('gallery').then(res => gallerySettings.value = res)
await getSettingsByGroup.value('testimonial').then(res => testimonialSettings.value = res)


provide('carouselSettings',carouselSettings.value)
provide('aboutSettings',aboutSettings.value)
provide('gallerySettings',gallerySettings.value)
provide('testimonialSettings',testimonialSettings.value)


</script>

<template>
  <v-app>
    <v-locale-provider rtl>
      <v-main>
        <LcHeader :header-settings="headerSettings"/>
        <div class="pa-0 d-flex flex-column" style="min-height: 100vh">
          <v-row class="flex-grow-1 ma-0 pa-0">
            <v-col cols="12" class="pa-0">

              <slot/>

            </v-col>
          </v-row>
        </div>
        <LcFooter/>
      </v-main>
    </v-locale-provider>
  </v-app>
</template>

<style lang="scss">
@import '@/assets/scss/style.scss';
</style>
