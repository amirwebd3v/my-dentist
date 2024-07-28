<script setup lang="ts">
import {header, services} from "~/data/CustomComponents";
import Dialog from "~/components/shared/modal/Dialog.vue";
import type {PropType} from "@vue/runtime-core";
import type {HeaderSettings, Services} from "~/utils/types";
/********************************************************/

const props = defineProps({
  headerSettings: {
    type: Object as PropType<HeaderSettings>,
    required: true,
    default: {
      headerLogo: '/images/logos/Sami-logo-black.png',
      headerItems: header
    },
  },
  services: {
    type: Map as PropType<Map<number, Services>>,
    required: true,
    default: services[0],
  }
})
/********************************************************/
const showReserveDialog = ref(false)
const drawer = ref<boolean>(false);
// const {$bus} = useNuxtApp()
// const openLoginDialog = () => {
//   $bus.$emit('loginDialogOpen', [true, 0])
// }
/********************************************************/
const {activeSection} = useActiveSection(props.headerSettings?.headerItems || header)


</script>
<template>
  <!-- -----------------------------------------------
        Start Header
  ----------------------------------------------- -->
  <v-app-bar class="app-header header">
    <v-container class="fill-height">
      <v-toolbar v-if="props.headerSettings">
        <v-app-bar-nav-icon
            width="30"
            class="drawer-icon mr-0"
            @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <!--         visit-btn-->
        <Dialog :form-title="'رزرو نوبت'" v-model="showReserveDialog">
          <template v-slot:button="props">
            <v-btn
                class="px-6 py-0 bg-primary ml-2 reserve-btn"
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
                  :items="props.services?.values() as []"
                  item-title="title"
                  item-value="id"
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
            v-model="drawer"
            location="right"
            temporary
        />
        <v-row align="center" class="my-0">
          <div
              class="navigation"
          >
            <ul class="navbar-nav d-flex">
              <li
                  class="nav-item"
                  v-for="nav in props.headerSettings?.headerItems"
                  :key="[]"
                  :class="{ active: activeSection === nav.key }"
              >
                <NuxtLink :to="{path: '/', hash: `#${nav.key}`}" class="nav-link">
                  {{ nav.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <!--         Logo-->
          <div class="logo mr-auto pr-5">
            <NuxtLink to="/" class="logo d-flex">
              <img :src="`${useAppConfig().api.baseUrl+ '/storage/' +props.headerSettings?.headerLogo}`" alt="logo"/>
            </NuxtLink>
          </div>
        </v-row>
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
              v-for="nav in props.headerSettings?.headerItems"
              :key="[]"
              :class="{ active: activeSection === nav.key }"
          >
            <NuxtLink :to="{path: '/', hash: `#${nav.key}`}" class="nav-link">
              {{ nav.label }}
            </NuxtLink>
          </li>
          <v-divider class="mb-3"/>
          <li class="nav-item">
            <v-list-item
                variant="text"
                style="color: #03192C;"
                :ripple="false"
                title="رزرو نوبت"
                @click="showReserveDialog = true"

            >
              <template #prepend>
                <v-icon color="primary" class="opacity-100">mdi-calendar-check</v-icon>
              </template>
            </v-list-item>
            <!--            <NuxtLink  class="nav-link pr-5 my-3">-->
            <!--              رزرو نوبت-->
            <!--            </NuxtLink>-->
          </li>
        </ul>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<style scoped lang="scss">
.drawer-icon {
  display: none;
}

.reserve-btn {
  display: inline;
}

@media (max-width: 855px) {
  .drawer-icon {
    display: inline;
  }

  .reserve-btn {
    display: none;
  }

  .app-header {
    .navigation {
      display: none;
    }
  }
}
</style>