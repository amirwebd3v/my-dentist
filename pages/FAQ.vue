<script setup lang="ts">

import {storeToRefs} from "pinia";
import {useServiceStore} from "~/store/service";
import {useDisplay} from "vuetify";

const tab = ref(null)
const panel = ref(null)
const loading = ref(false)

const {services} = storeToRefs(useServiceStore())

onBeforeMount(async () => {
  await useServiceStore().fetch()
})

const {width} = useDisplay()

</script>

<template>


  <div class="banner-wrapper bg-primary">
    <v-container>
      <!-- -----------------------------------------------
            Start Banner
        ----------------------------------------------- -->
      <v-row justify="center">
        <v-col
            cols="12"
            class="d-flex align-end justify-start"
        >
          <div class="text-right">
            <h1 class="pb-3">سوالات متداول</h1>
            <span>در این بخش میتوانید پاسخ سوالاتی که به صورت عمومی در زمینه دهان و دندان مطرح هست را پیدا کنید.</span>
          </div>

        </v-col>

      </v-row>


      <!-- -----------------------------------------------
            End Banner
        ----------------------------------------------- -->
    </v-container>
  </div>
  <v-tabs
      v-if="width < 968"
      class="bg-primary"
      v-model="tab"
      :direction="'horizontal'"
  >
    <v-tab class="mb-4" v-for="service in services.values()" :text="service.title" :value="service.id"/>
  </v-tabs>
  <v-container class="pt-0 mt-0 pr-0" >
    <div class="tab-view" >

      <v-col :cols="width > 967 ? 3 : 12" class="pt-0" >
        <v-card flat rounded="0"

        >
          <v-tabs
              v-if="width > 967"
              :class="`bg-primary ${width > 967 ? 'rounded-bs-xl' : 'rounded-b'}`"
              v-model="tab"
              :direction="'vertical'"
          >
            <v-tab class="mb-4" v-for="service in services.values()" :text="service.title" :value="service.id"/>
          </v-tabs>
        </v-card>
      </v-col>

      <v-col :cols="width > 967 ? 9 : 12" class="pt-0 px-0" v-if="!loading">
        <v-tabs-window  v-model="tab" v-for="service in services.values()"  class="rounded-b">
          <v-tabs-window-item :value="service.id" >

            <v-expansion-panels
                v-model="panel"
                multiple
                flat
            >
              <v-expansion-panel
                  v-for="i in 10"
                  rounded="0"
              >
                <v-expansion-panel-title class="font-weight-bold rounded-0 text-primary">
                  سوال {{ i }}
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  {{ i + 'جواب' }}
                </v-expansion-panel-text>
              </v-expansion-panel>

            </v-expansion-panels>

          </v-tabs-window-item>

        </v-tabs-window>


      </v-col>
      <v-row v-if="loading" class="py-10" justify="center" align="center">
        <v-progress-circular
            color="primary"
            indeterminate
        ></v-progress-circular>
      </v-row>
    </div>

  </v-container>


</template>


<style lang="scss" scoped>

.tab-view {
  display: flex;

  @media (min-width: 968px) {
    flex-direction: row;
  }


}


@media (max-width: 967px) {
  .tab-view {
    flex-direction: column;
  }
  h1{
    font-size: 26px !important;
  }
  }

</style>