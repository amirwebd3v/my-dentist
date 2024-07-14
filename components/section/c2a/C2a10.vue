<script lang="ts" setup>
import { DateTime } from 'luxon'
import Dialog from "~/components/shared/modal/Dialog.vue";

interface State {
  currentDateTime: any;
  showLoginModal: boolean;
  phoneInput: boolean;
  phoneInputText: string | null;
  showRegModal: boolean;
  loading: boolean;
  verificationInput: boolean;
  btnText: any;
  timer: number;
  intervalId: number | null;
  resendCodeBtn: boolean;
}

const state = reactive<State>({
  currentDateTime: null,
  showLoginModal: false,
  phoneInput: true,
  phoneInputText: null,
  showRegModal: false,
  loading: false,
  verificationInput: false,
  btnText: null,
  timer: 10,
  intervalId: null,
  resendCodeBtn: true
})

const loading = computed(() => {
  if (!state.loading) return false;

  setTimeout(() => {
    state.loading = false;
  }, 2000);

  return true;
});

onMounted(() => {
  setInterval(() => {
    state.currentDateTime = DateTime.now().toFormat('EEEE,d MMMM yyyy | ساعت HH:mm:ss', { locale: 'fa-IR', outputCalendar: 'persian' })
  })
})

const currentDateTimeAny = computed(() => state.currentDateTime as any);
const btnTextAny = computed(() => state.btnText as any);
function startTimer() {
  console.log('startTimer function called');
  if (state.intervalId === null) {
    state.intervalId = setInterval(() => {
      if (state.timer > 0) {
        state.timer--;
      } else if (state.timer === 0) {
        state.resendCodeBtn = false;
        clearInterval(state.intervalId);
        state.intervalId = null;
      }
    }, 1000);
  }
}

function verifyBtn() {
  startTimer()
  console.log('startTimer called'); // Add this line for debugging
  state.loading = true
  state.verificationInput = true
  state.phoneInput = false
  step(1)
}

function phoneEditBtn() {
  state.verificationInput = false
  state.phoneInput = true
  state.phoneInputText = ''
  step(0)
}

function resendCode() {
  if (!state.resendCodeBtn) {
    state.timer = 10;
    state.resendCodeBtn = true;
    startTimer();
  }
}

function closeBtn() {
  clearInterval(state.intervalId);
  state.intervalId = null;
  state.timer = 10;
  state.resendCodeBtn = true;
  state.showLoginModal = false
  state.verificationInput = false
  state.phoneInput = true
  step(0)
}

function step(val: number | null = null) {
  if (val === 0) {
    state.btnText = 'ارسال کد فعالسازی'
  }
  if (val === 1) {
    state.btnText = 'تایید و ادامه'
  }
}



const { $bus } = useNuxtApp()

$bus.$on("loginDialogOpen" , (value) => {
  state.showLoginModal = value[0]
  step(value[1])
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

<!--        <v-col cols="auto">-->
<!--          <span-->
<!--              class="font-12 ">* برای استفاده از امکانات سایت ابتدا باید وارد پنل کاربری خود شوید یا ثبت نام کنید.-->
<!--          </span>-->
<!--          <v-row class="d-flex flex-row pt-1">-->
<!--            <v-col cols="6">-->
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
<!--            </v-col>-->
<!--          </v-row>-->

<!--        </v-col>-->


      </div>
    </v-container>

  </div>

  <!-- -----------------------------------------------
      End Call-2-Action
  ----------------------------------------------- -->
</template>

