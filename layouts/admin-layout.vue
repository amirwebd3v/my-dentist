<script setup lang="ts">
/*************/

/****************/
import {useDisplay} from "vuetify";

/***************/
import Sidebar from "~/components/admin/Sidebar.vue";
import Header from "~/components/admin/Header.vue";
import Breadcrumb from "~/components/admin/Breadcrumb.vue";
import { useSettingStore } from "~/store/settingStore";


/*****************/
const drawer = ref(true);
const innerW = window.innerWidth;
const {mdAndUp, mdAndDown} = useDisplay();


useSeoMeta({
  title: 'مطب دکتر دندان پزشکیان - صفحه مدیریت'
})

onMounted(() => {
  if (innerW < 950) {
    drawer.value = !drawer.value;
  }
})

await useSettingStore().init()


</script>


<template>

  <div>
    <v-app>
      <!-- ---------------------------------------------- -->
      <!---Header -->
      <!-- ---------------------------------------------- -->
      <v-app-bar elevation="10" color="primary" class="d-flex">

        <h3 class="ml-15 pr-2">دکتر دندان پزشکیان</h3>
        <v-app-bar-nav-icon class="mr-md-12" @click="drawer = !drawer"/>
        <!-- ---------------------------------------------- -->
        <!-- User Profile -->
        <!-- ---------------------------------------------- -->
        <div class="mr-auto">
          <Header/>
        </div>

      </v-app-bar>
      <v-main>
        <!-- ---------------------------------------------- -->
        <!---Sidebar -->
        <!-- ---------------------------------------------- -->
        <v-navigation-drawer
            :permanent="mdAndUp"
            elevation="10"
            app
            :temporary="mdAndDown"
            v-model="drawer"
            expand-on-hover
            theme="light"
        >
          <Sidebar/>
        </v-navigation-drawer>
        <v-container fluid class="page-wrapper">
          <v-card class="mb-2 rounded-b-0">
            <Breadcrumb/>
          </v-card>
          <v-sheet rounded="b-lg">
            <slot/>
          </v-sheet>
        </v-container>
      </v-main>
    </v-app>
  </div>

</template>

<style lang="scss">
@import '@/assets/scss/admin/style.scss';
</style>