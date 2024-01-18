<script setup lang="ts">
definePageMeta({
  layout: 'admin-layout',
});
</script>

<template>
  <v-card rounded="0">
    <v-card-text>
      <h4 class="pb-10">
        <v-icon class="mdi mdi-information-outline"></v-icon>
        در این قسمت لینک مقالات خود را وارد کنید.
      </h4>
      <v-col cols="12">
        <v-text-field
            density="comfortable"
            variant="outlined"
            label="لینک مقالات"
        ></v-text-field>
      </v-col>
    </v-card-text>


  </v-card>
</template>

<style scoped>

</style>