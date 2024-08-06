<script setup lang="ts">
import { useFormValidation } from '~/composables/useFormValidation'

defineProps({
  formTitle: {
    type: String,
    required: true,
  },
})

const { onSubmit } = useFormValidation([])

const handleSubmit = () => {
  onSubmit()
}

</script>

<template>
  <v-dialog
      max-width="500px"
  >
    <template v-slot:activator="{ props }">
      <slot name="button" v-bind="props"/>
    </template>
    <v-card>
      <v-card-title class="mt-2 mr-2">
          {{ formTitle }}
      </v-card-title>

      <v-card-subtitle class="mr-2 mb-1">
        صفحه کلید خود را بروی زبان فارسی تنظیم کرده و فرم زیر را پر کنید.
      </v-card-subtitle>


      <v-card-text class="pb-0 pt-3">
        <v-container>
            <form @submit.prevent="handleSubmit">
              <slot name="body" :on-submit="handleSubmit" />
            </form>
        </v-container>
      </v-card-text>


    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss">

</style>