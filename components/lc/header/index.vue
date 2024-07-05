<script setup lang="ts">
import {header} from "~/data/CustomComponents";
import Dialog from "~/components/shared/modal/Dialog.vue";
import type {PropType} from "@vue/runtime-core";
import type {HeaderSettings} from "~/utils/types";
/********************************************************/

const props = defineProps({
  headerSettings: {
    type: Object as PropType<HeaderSettings>,
    required: true,
    default: {
      header_image: '/images/logos/Sami-logo-black.png',
      header_items: header
    },
  }
})
/********************************************************/
const showReserveDialog = ref(false)
const drawer = ref<boolean>(false);
const {$bus} = useNuxtApp()
const openLoginDialog = () => {
  $bus.$emit('loginDialogOpen', [true, 0])
}
/********************************************************/
const {activeSection} =useActiveSection(props.headerSettings?.header_items || header)



</script>
<template>
  <!-- -----------------------------------------------
        Start Header
  ----------------------------------------------- -->
  <v-app-bar class="app-header header bg-white">
    <v-container class="fill-height">
      <v-toolbar v-if="props.headerSettings">
        <v-app-bar-nav-icon
            width="30"
            class="d-md-none d-sm-flex drawer-icon ml-auto mr-0"
            @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <!--         visit-btn-->
        <Dialog :form-title="'رزرو نوبت'" v-model="showReserveDialog">
          <template v-slot:button="props">
            <v-btn
                class="px-6 py-3 bg-primary ml-2 d-md-flex d-none"
                flat
                size="large"
                text="رزرو نوبت"
                v-bind="props"
            >
            </v-btn>
          </template>
          <template #body>
            <v-col
                cols="12"
                sm="6"
            >
              <v-text-field
                  variant="outlined"
                  label="نام"
                  required
              ></v-text-field>
            </v-col>
            <v-col
                cols="12"
                sm="6"
            >
              <v-text-field
                  variant="outlined"
                  label="نام خانوادگی"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                  variant="outlined"
                  label="شماره تلفن همراه"
                  required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                  variant="outlined"
                  label="ایمیل"
                  required
              ></v-text-field>
            </v-col>
            <v-col
                cols="12"
                sm="6"
            >
              <v-text-field
                  variant="outlined"
                  required
                  label="سن"
              ></v-text-field>

            </v-col>
            <v-col
                cols="12"
                sm="6"
            >
              <v-autocomplete
                  variant="outlined"
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="درخواست مورد نظر"
                  multiple
              ></v-autocomplete>
            </v-col>
            <v-col
                cols="12"

            >
              <v-textarea
                  variant="outlined"
                  required
                  label="توضیحات"
              ></v-textarea>

            </v-col>
          </template>

          <template #actionButtons>
            <v-btn
                class="px-6 py-0"
                color="green"
                variant="text"
                text="ذخیره"
                @click="showReserveDialog = false"
            />

            <v-btn
                class="px-6 py-0"
                color="red-dark"
                variant="text"
                text="بستن"
                @click="showReserveDialog = false"
            />

          </template>
        </Dialog>


        <!--         Desktop view Navigation-->
        <v-navigation-drawer
            class="d-md-none"
            v-model="drawer"
            location="right"
            temporary
        />
        <div
            class="navigation ml-auto"
        >
          <ul class="navbar-nav d-flex">
            <li
                class="nav-item"
                v-for="nav in props.headerSettings?.header_items"
                :key="[]"
                :class="{ active: activeSection === nav.key }"
            >
              <NuxtLink :to="{path: '/', hash: `#${nav.key}`}" class="nav-link">{{ nav.label }}</NuxtLink>
            </li>
          </ul>
        </div>
        <!--         Logo-->
        <div class="logo px-10">
          <NuxtLink to="/" class="d-flex logo">
            <img :src="props.headerSettings?.header_image" alt="logo"/>
          </NuxtLink>
        </div>

      </v-toolbar>
    </v-container>
  </v-app-bar>
  <!-- -----------------------------------------------
        End Header
  ----------------------------------------------- -->
  <!----sidebar menu drawer start----->
  <div class="nav2">
    <v-navigation-drawer class="bg-green-accent-1 d-md-none" v-model="drawer" temporary location="right">
      <div
          class="navigation"
      >
        <ul class="navbar-nav py-4">
          <li class="nav-item  mb-4"
              v-for="nav in props.headerSettings?.header_items"
              :key="[]"
              :class="{ active: activeSection === nav.key }"
          >
            <NuxtLink :to="{ path: '/', hash: `#${nav.key}`}" class="nav-link">{{ nav.label }}</NuxtLink>
          </li>
          <v-divider></v-divider>
          <li class="nav-item">
            <v-list-item
                prepend-icon="mdi mdi-calendar-check-outline"
                variant="plain"
                color="primary"
                title="رزرو نوبت"
                link
                @click="showReserveDialog = true"

            >

            </v-list-item>
          </li>
          <li class="nav-item">
            <v-list-item
                prepend-icon="mdi mdi-login"
                variant="plain"
                color="primary"
                title="ورود"
                @click="openLoginDialog"
            >

            </v-list-item>
          </li>

        </ul>
      </div>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block variant="plain" color="red-light" prepend-icon="mdi mdi-logout">
            خروج
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

