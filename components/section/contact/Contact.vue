<script setup lang="ts">

import type {PropType} from "@vue/runtime-core";
import type {ContactusSettings} from "~/utils/types";
import {contactusSettings} from "~/data/CustomComponents";
import {useFormValidation} from '~/composables/useFormValidation'


const props = defineProps({
  contactusSettings: {
    type: Object as PropType<ContactusSettings>,
    required: true,
    default: {
      items: contactusSettings,
    },
  }
})


const {
  full_name,
  mobile,
  email,
  message,
  errors,
  onSubmit,
  hasValues,
  hasErrors,
  clearErrors
} = useFormValidation(['full_name', 'email', 'message'])


</script>

<template>

  <div v-if="!!props.contactusSettings">
    <div class="mini-spacer bottom-mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Contact Form
        ----------------------------------------------- -->
        <v-row justify="center" class="mt-16 mb-16">
          <v-col cols="12" md="8">
            <div>
              <h4 class="font-weight-medium contact-title mt-0">
                تماس با ما
              </h4>
              <form @submit.prevent="onSubmit">
                <v-row class="mt-7">
                  <v-col cols="12" md="4" class="pt-0">
                    <v-text-field
                        v-model="full_name"
                        :error-messages="<string>errors.full_name"
                        label="نام و نام خانوادگی"
                        variant="outlined"
                        color="primary"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" class="pt-0">
                    <v-text-field
                        v-model="mobile"
                        :error-messages="<string>errors.mobile"
                        label="شماره موبایل"
                        variant="outlined"
                        color="primary"
                        placeholder="*********۰۹"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" class="pt-0">
                    <v-text-field
                        v-model="email"
                        :error-messages="<string>errors.email"
                        label="ایمیل"
                        type="email"
                        variant="outlined"
                        color="primary"
                        placeholder="example@gmail.com"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <v-textarea
                        v-model="message"
                        :error-messages="<string>errors.message"
                        name="message"
                        density="comfortable"
                        color="primary"
                        class="pb-2"
                        variant="outlined"
                        label="متن پیام"
                        rows="3"
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-btn
                    :disabled="!(hasValues && !hasErrors)"
                    type="submit"
                    class="px-8 py-2 sendBtn"
                    flat
                    text="ارسال"
                    :color="props.contactusSettings.sendBtnColor"
                >
                </v-btn>
              </form>
            </div>
          </v-col>
          <v-col cols="12" xl="3" xxl="2" md="4" class="mt-xl-6">
            <div class="contact-detail-card rounded"
                 :style="`background-color: ${props.contactusSettings.cardBgColor}`">
              <h2 class="detail-title font-weight-medium text-white">
                {{ props.contactusSettings.title }}
              </h2>
              <p class="mt-7 op-8 mb-0 text-white text-justify">{{ props.contactusSettings.subtitle }}</p>
            </div>
          </v-col>
        </v-row>
        <!-- -----------------------------------------------
            End Contact Form
        ----------------------------------------------- -->
      </v-container>
    </div>

    <div class="map">
      <iframe
          :src="`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3236.4952624612806!2d
        ${props.contactusSettings?.map.lng}!3d${props.contactusSettings?.map.lat}!
        2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDQ3JzE2LjAiTiA1McKwMjInNTkuMCJF!5e0!3m2!1sen!2s!4v172009
        5973573!5m2!1sen!2s`" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade" loading="lazy">
      </iframe>
    </div>

  </div>
</template>

