<script setup lang="ts">

import type {PropType} from "@vue/runtime-core";
import type {ContactusSettings} from "~/utils/types";
import {useFormValidation} from '~/composables/useFormValidation'
import {usePersianMask} from "~/composables/usePersianMask";
import {useContactUsStore} from "~/store/contactUs";


const props = defineProps({
  contactusSettings: {
    type: Object as PropType<ContactusSettings>,
    required: true,
  }
})

const masks = usePersianMask()

const {
  full_name,
  mobile,
  email,
  content,
  errors,
  onSubmit,
  hasValues,
  hasErrors,
  loading,
  isSucceeded,
} = useFormValidation(['content'],useContactUsStore)



const sendBtn = async (): Promise<void> => {
  try {
    // Call the existing onSubmit function
    await onSubmit();

  } catch (error) {
    console.error('An error occurred during form submission:', error);
  }
};



</script>

<template>

  <div v-if="!!props.contactusSettings">
    <div class="bottom-mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Contact Form
        ----------------------------------------------- -->
        <v-row justify="center" class="mt-16 mb-16">
          <v-col cols="12" md="8" v-if="isSucceeded">
            <div>
              <v-alert
                  type="success"
                  variant="tonal"
                  title="ارسال موفق"
                  density="compact"
                  elevation="0"
                  rounded
              >
                <template #close>
                  <v-icon icon="mdi mdi-close" size="small" class="cursor-pointer pt-2" @click="isSucceeded = false"/>
                </template>
                <template #text>
                  <div class="mt-3">
                  <span >
                  پیام شما با موفقیت ارسال شد.
                  </span>
                    <p class="pt-2">
                    با تشکر، همواره پذیرای انتقادات و پیشنهادات سازنده شما هستیم.
                    </p>
                    <p class="text-center pt-5">
                      «کلینیک دندانپزشکی دکتر سمیرا رونقی»
                    </p>
                  </div>
                </template>
              </v-alert>
            </div>
          </v-col>
          <v-col cols="12" md="8" v-if="!isSucceeded">
            <div>
              <h4 class="font-weight-medium contact-title mt-0">
                تماس با ما
              </h4>
              <form @submit.prevent="onSubmit">
                <v-row class="mt-7">
                  <v-col cols="12" md="4" class="pt-0">
                    <v-text-field
                        v-maska="masks.persianLettersMask"
                        v-model="full_name"
                        :error-messages="<string>errors.full_name"
                        label="نام و نام خانوادگی(اختیاری)"
                        variant="outlined"
                        color="primary"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" class="pt-0">
                    <v-text-field
                        dir="ltr"
                        v-maska="masks.mobilePersianNumberMask"
                        v-model="mobile"
                        :error-messages="<string>errors.mobile"
                        label="شماره موبایل"
                        variant="outlined"
                        color="primary"
                        placeholder="+مثال: *********۹۸۹"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" class="pt-0">
                    <v-text-field
                        v-maska="masks.englishAlphanumericMask"
                        v-model="email"
                        :error-messages="<string>errors.email"
                        label="ایمیل(اختیاری)"
                        type="email"
                        variant="outlined"
                        color="primary"
                        placeholder="example@gmail.com"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <v-textarea
                        v-maska="masks.persianAlphanumericMask"
                        v-model="content"
                        :error-messages="<string>errors.content"
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
                    @click="sendBtn"
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

