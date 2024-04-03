<script setup lang="ts">
import type {VDataTableHeaders} from "vuetify/components/VDataTable";

definePageMeta({
  layout: 'admin-layout',
});


const headers = [
  {align: 'start', key: 'avatar', sortable: true, title: 'آواتار'},
  {align: 'start', key: 'name', sortable: true, title: 'نام'},
  {align: 'start', key: 'last_name',sortable: false, title: 'نام خانوادگی'},
  {align: 'start', key: 'mobile', sortable: false, title: 'شماره تلفن'},
  {align: 'start', key: 'reservation_quantity', sortable: true, title: 'تعداد نوبت'},
  {align: 'center', key: 'actions', sortable: false, title: 'عملیات'},
] as VDataTableHeaders

const search = ref()
</script>

<template>
  <v-card rounded="b-lg" class="pa-4">
    <v-text-field
        v-model="search"
        label="جست و جوی کاربر"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
        density="compact"
    />
      <v-data-table-server :headers="headers"
                           items-per-page-text="تعداد کاربر در هر صفحه :"
                           no-data-text="هیچ کاربری ثبت نشده است."
                           show-current-page
      >
        <template v-slot:item="actions">

        </template>
      </v-data-table-server>
  </v-card>
</template>

