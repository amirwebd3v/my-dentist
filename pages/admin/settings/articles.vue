<script setup lang="ts">
definePageMeta({
  layout: 'admin-layout',
});
</script>

<template>
  <v-card rounded="b-lg">
    <v-card-text>
      <h4 class="pb-10">
        <v-icon class="mdi mdi-information-outline"/>
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
    <v-card-actions class="float-left">
      <v-btn class="text-none"
             color="primary"
             variant="flat"
             prepend-icon="mdi mdi-check-circle-outline"
             rounded
             text="ثبت"
      >
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

