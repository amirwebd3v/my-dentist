<script setup lang="ts">

import {sidebarSingleItems} from "~/data/AdminComponents";
import {sidebarGroupItems} from "~/data/AdminComponents";

const router = useRouter();
function redirectToFirstSubItem(subItems) {
  if (subItems && subItems.length > 0) {
    router.push(subItems[0].to);
  }
}


</script>

<template>
  <div>

    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <div class="scrollnavbar">
      <v-list>
        <v-list-item
            v-for="(item) in sidebarSingleItems"
            color="primary"
            variant="plain"
            rounded="ts-xl"
            :to="item.to"
            :title="item.title"
            :prepend-icon="item.icon"
        >
        </v-list-item>

        <v-list-group v-for="groupItem in sidebarGroupItems" :key="groupItem.head" >
          <template v-slot:activator="{ props }">
            <v-list-item
                v-bind="props"
                color="primary"
                variant="plain"
                rounded="ts-xl"
                :prepend-icon="groupItem.icon"
                :title="groupItem.head"
                @click="redirectToFirstSubItem(groupItem.sub)"
            ></v-list-item>
          </template>

          <v-list-item
              v-for="subItem in groupItem.sub"
              :key="subItem.to"
              :title="subItem.title"
              :to="subItem.to"
              color="primary"
              variant="plain"
              rounded="bs-xl"
          ></v-list-item>
        </v-list-group>

      </v-list>


    </div>
  </div>
</template>