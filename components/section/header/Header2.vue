<script setup lang="ts">
import {headerMenu} from "@/data/CustomComponents";
import Dialog from "~/components/shared/modal/Dialog.vue";

// import {useScrollStore} from '@/store/scrollStore';

const drawer = ref(<boolean>null)

const activeSection = ref(<null>null);
const sections = ['section1', 'section2', 'section3', 'section4', 'section5'];

const intersectionCallback = (entries) => {
  let activeSectionFound = false;

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      activeSection.value = entry.target.id;
      history.replaceState(null, '', `#${activeSection.value}`);
      activeSectionFound = true;
    }
  });

  if (!activeSectionFound) {
    activeSection.value = null;
    history.replaceState(null, '', window.location.pathname);
  }
};

const observer = new IntersectionObserver(intersectionCallback, {threshold: 0.3,});

const observeSections = (observe) => {
  sections
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section) => section)
      .forEach((section) => observe(section));
};
onBeforeUnmount(() => {
  observeSections((section) => observer.unobserve(section));
});

onMounted(() => {
  observeSections((section) => observer.observe(section));
});
//TODO: here the sections do not update after user backwards from other page or link.

// const activeSection = ref<string | null>(null)
// const {  sections } = useScrollStore()
//
// const intersectionCallback = (entries) => {
//   let activeSectionFound = false
//
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       activeSection.value = entry.target.id
//       history.replaceState(null, '', `#${activeSection.value}`)
//       activeSectionFound = true
//     }
//   })
//
//   if (!activeSectionFound) {
//     activeSection.value = null
//     history.replaceState(null, '', window.location.pathname)
//   }
// }
//
// const observer = new IntersectionObserver(intersectionCallback, { threshold: 0.5 })
//
// const observeSections = (observe) => {
//   sections
//       .map((sectionId) => document.getElementById(sectionId))
//       .filter((section) => section)
//       .forEach((section) => observe(section))
// }
//
// onMounted(() => {
//   observeSections((section) => observer.observe(section))
// })
//
// onBeforeUnmount(() => {
//   observeSections((section) => observer.unobserve(section))
// })



const showReserveDialogOpen = ref(false)

const { $bus } = useNuxtApp()


const openLoginDialog = () => {
  $bus.$emit('loginDialogOpen', true)
}

</script>
<template>
  <!-- -----------------------------------------------
        Start Header
  ----------------------------------------------- -->
  <v-app-bar class="app-header header2 bg-white">
    <v-container class="fill-height">
      <v-toolbar>
        <v-app-bar-nav-icon
            width="30"
            class="d-md-none d-sm-flex drawer-icon ml-auto mr-0"
            @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <!--         visit-btn-->
        <Dialog :form-title="'رزرو نوبت'" v-model="showReserveDialogOpen">
          <template v-slot:button="props">
            <v-btn
                class="px-6 py-3 bg-primary ml-2 d-md-flex d-none"
                flat=""
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
                  multiple=""
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
                                @click="showReserveDialogOpen = false"
                            />

                            <v-btn
                                class="px-6 py-0"
                                color="red-dark"
                                variant="text"
                                text="بستن"
                                @click="showReserveDialogOpen = false"
                            />

          </template>
        </Dialog>


        <!--         Desktop view Navigation-->
        <v-navigation-drawer
            class="d-md-none"
            v-model="drawer"
            location="right"
            temporary=""
        >
          <v-list
              :items="headerMenu"
          ></v-list>
        </v-navigation-drawer>
        <div
            class="navigation ml-auto"
        >
          <ul class="navbar-nav d-flex">
            <li
                class="nav-item"
                v-for="nav in headerMenu"
                :key="nav.title"
                :class="{ active: nav.href.endsWith(<string>activeSection) }"
            >
              <NuxtLink :to="{path: '/', hash: `#${nav.href}`}" class="nav-link">{{ nav.title }}</NuxtLink>
            </li>
          </ul>
        </div>
        <!--         Logo-->
        <div class="logo px-10">
          <LcLogoBlackLogo/>
        </div>

      </v-toolbar>
    </v-container>
  </v-app-bar>
  <!-- -----------------------------------------------
        End Header
  ----------------------------------------------- -->
  <!----sidebar menu drawer start----->
  <div class="nav2">
    <v-navigation-drawer class="bg-green-accent-1 d-md-none" v-model="drawer" temporary="" location="right">
      <div
          class="navigation"
      >
        <ul class="navbar-nav py-4">
          <li class="nav-item  mb-4"
              v-for="nav in headerMenu"
              :key="nav.title"
              :class="{ active: nav.href.endsWith(<string>activeSection) }"
          >
            <NuxtLink :to="{ path: '/', hash: `#${nav.href}`}" class="nav-link">{{ nav.title }}</NuxtLink>
          </li>
          <v-divider></v-divider>
          <li class="nav-item">
            <v-list-item
                prepend-icon="mdi mdi-calendar-check-outline"
                variant="plain"
                color="primary"
                title="رزرو نوبت"
                link=""
                @click="showReserveDialogOpen = true"

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
          <v-btn block="" variant="plain" color="red-light" prepend-icon="mdi mdi-logout">
            خروج
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

