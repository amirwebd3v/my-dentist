<script setup lang="ts">
definePageMeta({
  layout: 'admin-layout',
});

import {useSettingStore} from '~/store/settingStore';

useSettingStore().init()
console.log(
  // await useSettingStore().list('header-menu'),
  // await useSettingStore().get({group: 'header-menu', name: 'articles'}),
  // await useSettingStore().set({group: 'header-menu', name: 'articles', val: 'ABCD'}),
  // await useSettingStore().remove({group: 'header-menu', name: 'articles'}),
)


</script>

<template>



</template>
