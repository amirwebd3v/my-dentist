<script setup lang="ts">

defineProps({
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

      <v-card-text class="py-0">
        <v-container>
          <v-row justify="center">
            <slot name="body"/>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions class="justify-space-around mt-0 pt-0">
        <slot name="actionButtons"/>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss">

</style>