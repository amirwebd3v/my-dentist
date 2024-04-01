<script setup lang="ts">
import AboutDataTable from "~/components/admin/settings/AboutDataTable.vue";

definePageMeta({
  layout: 'admin-layout',
});
</script>

<template>
  <v-card rounded="0">
    <v-card-text>
      <h4 class="pb-10">
        <v-icon class="mdi mdi-information-outline"/>
        در این قسمت می توانید پاورقی صفحه اصلی را شخصی سازی کنید.
      </h4>
    </v-card-text>
  </v-card>
  <v-divider/>
  <v-card rounded="b-lg">
    <v-card-text>
      <h4 class="pb-10">
        <v-icon class="mdi mdi-information-outline"/>
        در این قسمت می توانید تصویر دلخواه خود را جایگزین نمایید.
      </h4>
      <v-row justify="start">
        <v-col
            class="d-flex"
            cols="12"
            md="3"
        >
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>