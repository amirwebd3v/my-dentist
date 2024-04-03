<script setup lang="ts">
import type {VDataTableHeaders} from "vuetify/components/VDataTable";

definePageMeta({
  layout: 'admin-layout',
});

const headers = [
  {align: 'start', key: 'name', sortable: true, title: 'نام'},
  {align: 'start', key: 'last_name',sortable: false, title: 'نام خانوادگی'},
  {align: 'start', key: 'mobile', sortable: false, title: 'شماره تلفن'},
  {align: 'start', key: 'email', sortable: false, title: 'ایمیل'},
  {align: 'start', key: 'age', sortable: false, title: 'سن'},
  {align: 'start', key: 'service', sortable: true, title: 'سرویس'},
  {align: 'start', key: 'descriptions', sortable: false, title: 'توضیحات'},
  {align: 'start', key: 'created_at', sortable: true, title: 'تاریخ ثبت'},
  {align: 'start', key: 'visit_date', sortable: true, title: 'تاریخ ویزیت'},
  {align: 'start', key: 'status', sortable: true, title: 'وضعیت'},
  {align: 'end', key: 'actions', sortable: false, title: 'عملیات'},
] as VDataTableHeaders

const search = ref()
</script>

<template>
 <v-card rounded="b-lg" class="pa-4">
    <v-text-field
        v-model="search"
        label="جست و جوی نوبت"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
        density="compact"
    />
      <v-data-table-server :headers="headers"
                           items-per-page-text="تعداد نوبت در هر صفحه :"
                           no-data-text="هیچ نوبتی ثبت نشده است."
                           show-current-page
      >
        <template v-slot:item="actions">

        </template>
      </v-data-table-server>
  </v-card>
</template>

