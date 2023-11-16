<script setup lang="ts">


const sortBy = ref([{ key: 'name', order: 'asc' }])
const groupBy = ref([{ key: 'dairy', order: 'asc' }])

const headers = [
  {
    title: 'Dessert (100g serving)',
    align: 'start',
    key: 'name',
  },
  { title: 'Category', key: 'category', align: 'end' },
  { title: 'Dairy', key: 'dairy', align: 'end' },
]
const desserts = [
  {
    name: 'Frozen Yogurt',
    category: 'Ice cream',
    dairy: 'Yes',
  },
  {
    name: 'Ice cream sandwich',
    category: 'Ice cream',
    dairy: 'Yes',
  },
  {
    name: 'Eclair',
    category: 'Cookie',
    dairy: 'Yes',
  },
  {
    name: 'Cupcake',
    category: 'Pastry',
    dairy: 'Yes',
  },
  {
    name: 'Gingerbread',
    category: 'Cookie',
    dairy: 'No',
  },
  {
    name: 'Jelly bean',
    category: 'Candy',
    dairy: 'No',
  },
  {
    name: 'Lollipop',
    category: 'Candy',
    dairy: 'No',
  },
  {
    name: 'Honeycomb',
    category: 'Toffee',
    dairy: 'No',
  },
  {
    name: 'Donut',
    category: 'Pastry',
    dairy: 'Yes',
  },
  {
    name: 'KitKat',
    category: 'Candy',
    dairy: 'Yes',
  },
]
</script>

<template>
  <v-card variant="outlined">
    <v-data-table :group-by="<any>groupBy"
                  :headers="<any>headers"
                  :items="desserts"
                  :sort-by="<any>sortBy"
                  item-value="name">

    </v-data-table>
  </v-card>

</template>

<style scoped>

</style>