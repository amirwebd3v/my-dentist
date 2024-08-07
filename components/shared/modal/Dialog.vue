<script setup lang="ts">
import {useFormValidation} from '~/composables/useFormValidation'

defineProps({
  formTitle: {
    type: String,
  },
  isSucceeded : {
    type:Boolean,
    required: true,
    default: false
  },
  loading: {
    type: Boolean,
    required: true,
    default: false
  }
})

const {onSubmit} = useFormValidation([])

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
        <v-card v-show="!isSucceeded">
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

    <v-card v-show="isSucceeded" height="570">
       <v-icon icon="mdi mdi-close-circle mx-auto mt-3" v-if="!loading"/>
        <v-progress-circular
            v-if="loading"
            :size="50"
            color="primary"
            indeterminate
            class="mx-auto my-auto"
        />


      <v-container v-if="!loading" class="pt-0">
        <v-row justify="center" align="start" class="mx-1 pt-6">
        <v-img :src="`images/reserve/successful-reserve.jpeg`"
               cover rounded
        />
        </v-row>
        <v-row justify="center" align="center" class="my-8 mx-1">
          <v-alert
              type="success"
              variant="tonal"
              text="نوبت شما با موفقیت رزرو شد."
              density="compact"
              elevation="0"
              rounded
          />
        </v-row>
        <v-row justify="center" align="end" class="mx-6">
          <p class="text-center text-primary font-weight-bold text-justify">جهت هماهنگی روز و ساعت مراجعه به مطب، حداکثر تا ۲۴ ساعت آینده با شما تماس خواهیم گرفت.</p>
          <v-divider class="mt-4 mx-5"/>
          <span class="text-center text-primary mt-7 font-weight-medium">با تشکر از انتخاب شما که لایق بهترین ها هستید.</span>
          <span class="text-center text-primary mt-4 font-weight-medium font-14">«مطب دندانپزشکی دکتر سمیرا رونقی»</span>
        </v-row>
      </v-container>

    </v-card>


  </v-dialog>
</template>
