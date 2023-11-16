<script setup lang="ts">


import Header2 from "~/components/section/header/Header2.vue";

const title = ref(" دکتر دندان پزشکیان - دندانپزشک و جراح");
useHead({
  meta: [{content: title}],
  titleTemplate: (titleChunk) => {
    return titleChunk
        ? `${titleChunk} - دندانپزشک و جراح `
        : "وبسایت دکتر دندان پزشکیان";
  },
});


</script>

<template>
  <v-app>
    <Header2/>
    <v-main>

      <slot/>

    </v-main>
    <LcFooter/>
  </v-app>
</template>

<style lang="scss">
@import '@/assets/scss/style.scss';
</style>
