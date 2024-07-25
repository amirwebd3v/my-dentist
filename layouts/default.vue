<script setup lang="ts">


import {storeToRefs} from "pinia";
import {useSettingStore} from "~/store/setting";
import {useServiceStore} from "~/store/service";


const title = ref(" دکتر سمیرا رونقی - دندانپزشک و جراح");
useHead({
  meta: [{content: title}],
  titleTemplate: (titleChunk) => {
    return titleChunk
        ? `${titleChunk} - دندانپزشک و جراح `
        : "وبسایت دکتر سمیرا رونقی";
  },
});

const headerSettings = ref()
const footerSettings = ref()
const carouselSettings = ref()
const aboutSettings = ref()
const gallerySettings = ref()
const videoSettings = ref()
const testimonialSettings = ref()
const contactusSettings = ref()


const {getSettingsByGroup} = storeToRefs(useSettingStore())
await useSettingStore().fetch()

await getSettingsByGroup.value('general').then(res => {
  type OriginalObject = {
    [key: string]: string | null | object[];
  };

  type FooterObject = {
    [key: string]: string | null;
  };

  type HeaderObject = {
    [key: string]: string | null | object[];
  };

  function separateKeys(obj: OriginalObject): [FooterObject, HeaderObject] {
    return Object.keys(obj).reduce(
        (acc, key) => {
          if (key.indexOf('footer') === 0) {
            acc[0][key] = obj[key] as string | null;
          } else {
            acc[1][key] = obj[key];
          }
          return acc;
        },
        [{} as FooterObject, {} as HeaderObject]
    );
  }


  [footerSettings.value, headerSettings.value] = separateKeys(res);

});




await getSettingsByGroup.value('slider-banner').then(res => carouselSettings.value = res)
await getSettingsByGroup.value('about').then(res => aboutSettings.value = res)
await getSettingsByGroup.value('gallery').then(res => gallerySettings.value = res)
await getSettingsByGroup.value('video').then(res => videoSettings.value = res)
await getSettingsByGroup.value('testimonial').then(res => testimonialSettings.value = res)
await getSettingsByGroup.value('contact-us').then(res => contactusSettings.value = res)


provide('carouselSettings',carouselSettings.value)
provide('aboutSettings',aboutSettings.value)
provide('gallerySettings',gallerySettings.value)
provide('videoSettings',videoSettings.value)
provide('testimonialSettings',testimonialSettings.value)
provide('contactusSettings',contactusSettings.value)


/***************************************************************/
const {services} = storeToRefs(useServiceStore())

onBeforeMount(async ()=>{
  await useServiceStore().fetch()
})

provide('services',services)
</script>

<template>
  <v-app>
    <v-locale-provider rtl>
      <v-main>
        <LcHeader :header-settings="headerSettings" :services="services"/>
        <div class="pa-0 d-flex flex-column" style="min-height: 100vh">
          <v-row class="flex-grow-1 ma-0 pa-0">
            <v-col cols="12" class="pa-0">

              <slot/>

            </v-col>
          </v-row>
        </div>
        <LcFooter :footer-settings="footerSettings"/>
      </v-main>
    </v-locale-provider>
  </v-app>
</template>

<style lang="scss">
@import '@/assets/scss/style.scss';
</style>
