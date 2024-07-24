<script setup lang="ts">
import {useDisplay} from "vuetify";

const panel = ref(null)
const {width, thresholds} = useDisplay()
thresholds.value.md = 1024
</script>

<template>
  <v-container class="mini-spacer mt-16">

    <div class="feature3-component">
        <!-- -----------------------------------------------
            Start Feature 3 Text
        ----------------------------------------------- -->
        <v-row justify="end">
          <v-col cols="2" v-if="width > 959 && width < 1025" align-self="center">
            <v-img :src="'./images/faq/OIP.jpeg'" style="transform: rotate(-20deg);" cover/>
          </v-col>
          <v-col :cols="width > 959 ? 10 : 12">
            <img :src="'./images/features/3/img1.jpg'"
              alt="feature"
              class="rounded img-fluid"
            />
          </v-col>

          <v-col :cols="width > 1024? 6 : width > 768 ? 9 : 12" class="feature3-card mr-md-0">
            <v-card class="card-shadow" rounded="lg">
              <div class="bg-primary">
                <div class="pt-5 pb-1 text-center">
                  <v-chip size="large" class="bg-primary text-center">
                    سوالات متداول
                  </v-chip>
                </div>
                  <h3 class="px-3 py-2 font-16 font-weight-medium text-center">
                    <span>پاسخگوی سوالات شما مراجعه کنندگان عزیز در زمینه دهان و دندان هستیم.</span>
                  </h3>
              </div>
              <div>
                <v-expansion-panels
                    v-model="panel"
                    flat
                >
                  <v-expansion-panel
                      v-for="i in 5"
                      rounded="0"
                  >

                    <v-expansion-panel-title class="rounded-0 py-2 pr-3" focusable>
                      <template #actions="{expanded}">
                        <v-icon class="px-6 my-auto" size="small">
                          {{ expanded ? 'mdi-minus-circle' : 'mdi-plus-circle' }}
                        </v-icon>
                        <h3 class="text-justify px-1 font-weight-medium text-subtitle-1" style="line-height: 1.5rem !important;">
                          چگونه قبل از معاینه میتوانم وقت خود را ثبت کنم؟چگونه قبل از معاینه میتوانم وقت خود را ثبت کنم؟چگونه قبل از معاینه میتوانم وقت خود را ثبت کنم؟
                        </h3>
                      </template>
                    </v-expansion-panel-title>

                    <v-expansion-panel-text class="font-14 font-weight-regular text-justify" style="line-height: 1.5rem !important;">
                      {{ i + 'در این بخش میتوانید پاسخ سوالاتی که به صورت عمومی در زمینه دهان و دندان مطرح هست را پیدا کنید.در این بخش میتوانید پاسخ سوالاتی که به صورت عمومی در زمینه دهان و دندان مطرح هست را پیدا کنید.در این بخش میتوانید پاسخ سوالاتی که به صورت عمومی در زمینه دهان و دندان مطرح هست را پیدا کنید.'  }}
                    </v-expansion-panel-text>
                  </v-expansion-panel>

                </v-expansion-panels>
              </div>
            </v-card>
          </v-col>
          <v-col cols="3"  align-self="end"  v-if="width > 959 && width < 1025">
            <v-img :src="'./images/faq/cute-model-looking-copy-space.png'" cover/>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Feature 3 Text
        ----------------------------------------------- -->
    </div>
  </v-container>

</template>

<style scoped lang="scss">
:deep(.v-expansion-panel-text__wrapper){
  padding-bottom: 4px!important;
}

:deep(.v-expansion-panel){
  margin-top: 0!important;
}
</style>