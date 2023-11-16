<script setup lang="ts">
import {sidebarSingleItems} from "~/data/AdminComponents";
import {sidebarGroupItems} from "~/data/AdminComponents";
/*****************/
const route = useRoute();
const currentRouteTitle = ref('')
const currentRouteGroup = ref('')
const currentIcon = ref("$vuetify")

// Convert sidebarSingleItems to a map for faster lookups
const singleItemsMap = new Map(sidebarSingleItems.map((item) => [item.to, item]));

const updateCurrentRouteTitle = (routePath = route.path) => {
  const groupItemMatch = sidebarGroupItems.find((groupItem) => {
    const itemMatch = groupItem.sub.find((item) => item.to === routePath);
    if (itemMatch) {
      currentRouteGroup.value = groupItem.head;
      currentRouteTitle.value = itemMatch.title;
      currentIcon.value = groupItem.icon;
      return true;
    }
    return false;
  });

  if (!groupItemMatch) {
    // If no match found in groupItems, reset currentRouteGroup
    currentRouteGroup.value = '';
    const singleItemMatch = singleItemsMap.get(routePath);
    if (singleItemMatch) {
      // If match found in singleItemsMap, set currentRouteTitle
      currentRouteTitle.value = singleItemMatch.title;
      currentIcon.value = singleItemMatch.icon;
    } else {
      currentRouteTitle.value = '';
    }
  }
};
/************************/

const breadcrumbItems = computed(() => {
  // Return breadcrumb items based on currentRouteGroup and currentRouteTitle
  const items = [];

  if (currentRouteGroup.value !== '') {
    items.push({
      title: currentRouteGroup.value,
      disabled: false,
    });
  }

  if (currentRouteTitle.value !== '') {
    items.push({
      title: currentRouteTitle.value,
      disabled: false,
      href: route.path
    });
  }


  return items;
});



watchEffect(() => {
  // Call the updateCurrentRouteTitle function whenever the route changes or the component is mounted
  updateCurrentRouteTitle();
});

</script>

<template>
  <v-breadcrumbs :items="breadcrumbItems">
    <template v-slot:prepend>
      <v-icon size="small" :icon="currentIcon"></v-icon>
    </template>
    <template v-slot:divider>
      <v-icon icon="mdi-chevron-left"></v-icon>
    </template>
  </v-breadcrumbs>
</template>
