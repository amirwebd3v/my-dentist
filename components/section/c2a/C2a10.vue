<script lang="ts" setup>
import {DateTime} from 'luxon'
import Dialog from "~/components/shared/modal/Dialog.vue";
import {useDisplay} from "vuetify";
import type {PropType} from "@vue/runtime-core";
import type {Services} from "~/utils/types";
import {useFormValidation} from "~/composables/useFormValidation";

interface State {
  currentDateTime: any;
  // phoneInput: boolean;
  // phoneInputText: string | null;
  // showRegModal: boolean;
  // verificationInput: boolean;
  // btnText: any;
  // timer: number;
  // intervalId: number | null;
  // resendCodeBtn: boolean;
}


const state = reactive<State>({
  currentDateTime: null,
  // phoneInput: true,
  // phoneInputText: null,
  // showRegModal: false,
  // verificationInput: false,
  // btnText: null,
  // timer: 10,
  // intervalId: null,
  // resendCodeBtn: true
})

// const loading = computed(() => {
//   if (!state.loading) return false;
//
//   setTimeout(() => {
//     state.loading = false;
//   }, 6000);
//
//   return true;
// });

onMounted(() => {
  setInterval(() => {
    state.currentDateTime = DateTime.now().toFormat('EEEE,d MMMM yyyy | ساعت HH:mm:ss', {
      locale: 'fa-IR',
      outputCalendar: 'persian'
    })
  })
})

const currentDateTimeAny = computed(() => state.currentDateTime as any);
// const btnTextAny = computed(() => state.btnText as any);
// function startTimer() {
//   console.log('startTimer function called');
//   if (state.intervalId === null) {
//     state.intervalId = setInterval(() => {
//       if (state.timer > 0) {
//         state.timer--;
//       } else if (state.timer === 0) {
//         state.resendCodeBtn = false;
//         clearInterval(state.intervalId);
//         state.intervalId = null;
//       }
//     }, 1000);
//   }
// }

// function verifyBtn() {
//   startTimer()
//   console.log('startTimer called'); // Add this line for debugging
//   state.loading = true
//   state.verificationInput = true
//   state.phoneInput = false
//   step(1)
// }

// function phoneEditBtn() {
//   state.verificationInput = false
//   state.phoneInput = true
//   state.phoneInputText = ''
//   step(0)
// }

// function resendCode() {
//   if (!state.resendCodeBtn) {
//     state.timer = 10;
//     state.resendCodeBtn = true;
//     startTimer();
//   }
// }

// function closeBtn() {
//   clearInterval(state.intervalId);
//   state.intervalId = null;
//   state.timer = 10;
//   state.resendCodeBtn = true;
//   state.showLoginModal = false
//   state.verificationInput = false
//   state.phoneInput = true
//   step(0)
// }

// function step(val: number | null = null) {
//   if (val === 0) {
//     state.btnText = 'ارسال کد فعالسازی'
//   }
//   if (val === 1) {
//     state.btnText = 'تایید و ادامه'
//   }
// }


// const { $bus } = useNuxtApp()
//
// $bus.$on("loginDialogOpen" , (value) => {
//   state.showLoginModal = value[0]
//   step(value[1])
// })

const masks = usePersianMask()
const showReserveDialog = ref(false)

const props = defineProps({
  services: {
    type: Map as PropType<Map<number, Services>>,
    required: true,
  }
})

const {
  hasValues,
  hasErrors,
  loading,
  isSucceeded,
  clearErrors,
  errors,
  onSubmit,
  first_name,
  last_name,
  reserveMobile,
  reserveEmail,
  age,
  service,
  description
} = useFormValidation(['first_name', 'last_name', 'reserveMobile', 'age', 'service'])

watch(showReserveDialog, (newValue, oldValue) => {
  if (newValue === false && oldValue === true) {
    clearErrors()
  }
})

// let loadingTimer: number | null = null;
//
// watch(() => state.loading, (newValue: boolean) => {
//   if (newValue) {
//     // Clear any existing timer
//     if (loadingTimer !== null) {
//       clearTimeout(loadingTimer);
//     }
//
//     // Set a new timer
//     loadingTimer = window.setTimeout(() => {
//       state.loading = false;
//     }, 2000);
//   } else {
//     // Clear the timer if loading becomes false
//     if (loadingTimer !== null) {
//       clearTimeout(loadingTimer);
//       loadingTimer = null;
//     }
//   }
// });



const saveBtn = async (): Promise<void> => {
  try {
    // Call the existing onSubmit function
    await onSubmit();

  } catch (error) {
    console.error('An error occurred during form submission:', error);
  }
};

useListen('closeModal', (value: boolean) => {
  showReserveDialog.value = value
  isSucceeded.value = value
})
</script>


<template>
  <div class="bg-primary">
    <v-container>

      <!-- -----------------------------------------------
          Start Call-2-Action
      ----------------------------------------------- -->
      <div class="d-block d-sm-flex align-center ">
        <v-col>
          <h3 class="text-white font-weight-medium pb-1">
            <i class="mdi mdi-calendar"/>
            امروز
          </h3>
          <p class="c2a-title text-white font-weight-medium" dir="rtl">
            {{ currentDateTimeAny }}
          </p>
        </v-col>

        <v-col cols="auto" v-show="useDisplay().width.value < 856 && useDisplay().width.value > 0">
          <span
              class="font-12 ">* لطفاْ برای ثبت نوبت جدید بروی دکمه پایین بزنید.
          </span>
          <v-row class="d-flex flex-row pt-1">
            <v-col cols="6">
              <Dialog :form-title="'رزرو نوبت'" :is-succeeded="isSucceeded" :loading="loading"
                      v-model="showReserveDialog">
                <template v-slot:button="props">
                  <v-btn
                      class="px-6 bg-white reserve-btn"
                      variant="flat"
                      text="رزرو نوبت"
                      v-bind="props"
                  >
                  </v-btn>
                </template>
                <template #body="{onSubmit}">
                  <v-row justify="center">
                    <v-col
                        cols="12"
                        sm="6"
                    >
                      <v-text-field
                          maxlength="30"
                          v-maska="masks.persianLettersMask"
                          v-model="first_name"
                          :error-messages="<string>errors.first_name"
                          variant="outlined"
                          label="نام"
                          required
                      ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                    >
                      <v-text-field
                          maxlength="30"
                          v-maska="masks.persianLettersMask"
                          v-model="last_name"
                          :error-messages="<string>errors.last_name"
                          variant="outlined"
                          label="نام خانوادگی"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                          maxlength="13"
                          v-maska="masks.mobilePersianNumberMask"
                          v-model="reserveMobile"
                          :error-messages="<string>errors.reserveMobile"
                          variant="outlined"
                          label="شماره تلفن همراه"
                          placeholder="مثال: ****-***-**۰۹ "
                          required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                          maxlength="40"
                          v-maska="masks.englishAlphanumericMask"
                          v-model="reserveEmail"
                          :error-messages="<string>errors.reserveEmail"
                          variant="outlined"
                          label="ایمیل"
                          placeholder="example@gmail.com"
                          required
                      ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                    >
                      <v-text-field
                          maxlength="3"
                          v-maska="masks.persianNumbersMask"
                          v-model="age"
                          :error-messages="<string>errors.age"
                          variant="outlined"
                          required
                          label="سن"
                      ></v-text-field>

                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                    >
                      <v-autocomplete
                          v-model="service"
                          :error-messages="<string>errors.service"
                          variant="outlined"
                          :items="Array.from(props.services?.values() ?? [])"
                          item-title="title"
                          item-value="id"
                          label="درخواست مورد نظر"
                          multiple
                      ></v-autocomplete>
                    </v-col>
                    <v-col
                        cols="12"
                    >
                      <v-textarea
                          maxlength="500"
                          v-maska="masks.persianAlphanumericMask"
                          v-model="description"
                          :error-messages="<string>errors.description"
                          variant="outlined"
                          label="توضیحات"
                      />
                    </v-col>
                  </v-row>
                  <v-card-actions class="justify-space-around mt-0 pt-0">
                    <v-btn
                        :disabled="!(hasValues && !hasErrors)"
                        class="px-6 py-0"
                        color="green"
                        variant="text"
                        text="ذخیره"
                        type="submit"
                        @click="saveBtn"
                    />

                    <v-btn
                        class="px-6 py-0"
                        color="red-dark"
                        variant="text"
                        text="بستن"
                        @click="showReserveDialog = false;clearErrors()"
                    />
                  </v-card-actions>
                </template>

              </Dialog>
              <!--              <Dialog :form-title="'خوش آمدید'" v-model="state.showLoginModal"  >-->
              <!--                <template v-slot:button="props">-->
              <!--                  <v-btn-->
              <!--                      prepend-icon="mdi mdi-login"-->
              <!--                      variant="tonal"-->
              <!--                      size="large"-->
              <!--                      class="px-sm-7 py-sm-3"-->
              <!--                      block-->
              <!--                      text="ورود"-->
              <!--                      v-bind="props"-->
              <!--                      @click="step(0)"-->
              <!--                  />-->
              <!--                </template>-->

              <!--                <template #body>-->
              <!--                  <span class="pt-3 pb-1 text-justify font-16">-->
              <!--                    برای ورود شماره تلفن همراه خود را وارد کنید. سپس، به روی دکمه تایید کلیک نموده و منتظر کد فعالسازی-->
              <!--                    که برای شما پیامک میشود باشید.-->
              <!--                  </span>-->
              <!--                  <v-col cols="12">-->
              <!--                    <div class="text-subtitle-2 font-weight-medium pa-1">شماره تلفن همراه</div>-->

              <!--                    <v-text-field-->
              <!--                        :readonly="!state.phoneInput"-->
              <!--                        v-model="state.phoneInputText"-->
              <!--                        label="*********۰۹"-->
              <!--                        single-line-->
              <!--                        variant="outlined"-->
              <!--                    >-->
              <!--                      <template v-slot:append>-->
              <!--                        <v-btn-->
              <!--                            elevation="1"-->
              <!--                            variant="tonal"-->
              <!--                            :disabled="!state.verificationInput"-->
              <!--                            color="orange"-->
              <!--                            icon='mdi mdi-pencil'-->
              <!--                            @click="phoneEditBtn"-->
              <!--                        >-->
              <!--                        </v-btn>-->
              <!--                      </template>-->
              <!--                    </v-text-field>-->
              <!--                  </v-col>-->
              <!--                  <v-col cols="12" >-->
              <!--                    <v-text-field-->
              <!--                        v-if="state.verificationInput"-->
              <!--                        label="کد فعالسازی"-->
              <!--                        single-line-->
              <!--                        variant="outlined"-->
              <!--                    >-->
              <!--                      <template v-slot:append>-->
              <!--                        <v-btn-->
              <!--                            elevation="1"-->
              <!--                            variant="tonal"-->
              <!--                            color="inverse-dark"-->
              <!--                            :disabled="state.resendCodeBtn"-->
              <!--                            :icon="(state.timer !== 0) ? '' : 'mdi mdi-email-sync-outline'"-->
              <!--                            @click="resendCode"-->
              <!--                            :text="(state.timer > 0 && state.timer <= 10) ? state.timer : ''"-->
              <!--                        >-->
              <!--                        </v-btn>-->
              <!--                      </template>-->
              <!--                    </v-text-field>-->
              <!--                  </v-col>-->
              <!--                </template>-->

              <!--                <template #actionButtons>-->
              <!--                  <v-col cols="12">-->
              <!--                  <v-btn-->
              <!--                      :disabled="loading"-->
              <!--                      :loading="loading"-->
              <!--                      block-->
              <!--                      class="text-none mb-4"-->
              <!--                      color="success"-->
              <!--                      size="x-large"-->
              <!--                      variant="text"-->
              <!--                      @click="verifyBtn"-->
              <!--                  >-->
              <!--                    {{ btnTextAny }}-->
              <!--                  </v-btn>-->

              <!--                  <v-btn-->
              <!--                      block-->
              <!--                      class="text-none"-->
              <!--                      color="red-light"-->
              <!--                      size="x-large"-->
              <!--                      variant="text"-->
              <!--                      @click="closeBtn"-->
              <!--                  >-->
              <!--                    خروج-->
              <!--                  </v-btn>-->
              <!--                  </v-col>-->
              <!--                </template>-->
              <!--              </Dialog>-->
            </v-col>
          </v-row>

        </v-col>


      </div>
    </v-container>

  </div>

  <!-- -----------------------------------------------
      End Call-2-Action
  ----------------------------------------------- -->
</template>

