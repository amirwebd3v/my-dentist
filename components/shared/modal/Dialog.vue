<script setup lang="ts">

const props  = defineProps({
  dialog: {
    type: Boolean,
    default: false,
  },
  formTitle: {
    type: String,
    required: true,
  },
})





</script>

<template>
  <v-dialog
      max-width="500px"
  >
   <template v-slot:activator="{ props }">
      <slot name="button" v-bind="props"/>
    </template>
    <v-card>
      <v-card-title>
        {{ formTitle }}
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-container>
          <v-row justify="center">
           <slot name="body"/>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions class="justify-space-around">
        <slot name="actionButtons"/>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss">

</style>