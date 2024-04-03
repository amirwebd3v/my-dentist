<script setup lang="ts">
import type {VDataTableHeaders} from "vuetify/components/VDataTable";

definePageMeta({
  layout: 'admin-layout',
});

const headers = [
  {align: 'start', key: 'last_name',sortable: false, title: 'نام و نام خانوادگی'},
  {align: 'start', key: 'mobile', sortable: false, title: 'شماره موبایل'},
  {align: 'start', key: 'email', sortable: false, title: 'ایمیل'},
  {align: 'start', key: 'message', sortable: false, title: 'پیام'},
  {align: 'center', key: 'actions', sortable: false, title: 'عملیات'},
] as VDataTableHeaders

</script>

<template>
 <v-card rounded="b-lg" class="pa-4">
      <v-data-table-server :headers="headers"
                           items-per-page-text="تعداد پیام در هر صفحه :"
                           no-data-text="هیچ پیامی ثبت نشده است."
                           show-current-page
      >
        <template v-slot:item="actions">

        </template>
      </v-data-table-server>
  </v-card>
</template>

