<script setup lang="ts">

import type {PropType} from "@vue/runtime-core";
import type {TestimonialSettings} from "~/utils/types";
import {storeToRefs} from "pinia";
import {useTestimonialStore} from "~/store/testimonial";
import {DateTime} from 'luxon'

const props = defineProps({
  testimonialSettings: {
    type: Object as PropType<TestimonialSettings>,
    required: true,
  }
})


const {testimonials} = storeToRefs(useTestimonialStore())

const cardCount = computed(() => testimonials.value.size);

onBeforeMount(async () => {
  await useTestimonialStore().fetch()
})

</script>
<template>
  <div class="mini-spacer">
    <v-container v-if="!!props.testimonialSettings">
      <!-- Testimonial Text -->
      <v-row justify="center" class="mt-16">
        <v-col cols="12" sm="10" md="9" lg="7">
          <div class="text-center">
            <h2 class="section-title font-weight-medium">
              نظرات مراجعه کنندگان
            </h2>
          </div>
        </v-col>
      </v-row>

      <!-- Testimonial Carousel -->
      <v-sheet class="scroll" :style="`--time:${60}s;--card-count:${cardCount}`">
        <v-row class="my-12"  >
          <v-col v-for="card in testimonials.values()"  :key="card.id">
            <v-card :style="`
                            width: 330px;
                            height: 250px;
                            border-color: ${props.testimonialSettings.cardBorderColor} !important;
                            background-color: ${props.testimonialSettings.cardColor};
                        `">
              <v-card-text class="pa-sm-10 pa-5 mx-5" :style="`color: ${props.testimonialSettings.cardContextColor}`">
                <div class="d-flex align-center mb-5">
                  <v-avatar size="60">
                    <img :src="`${useAppConfig().api.baseUrl +'/storage/'+card.image}`" :alt="card.image+'.'+card.id" height="60"/>
                  </v-avatar>
                  <div class="mr-3">
                    <h6 class="text-uppercase font-weight-bold font-14">{{ card.full_name }}</h6>
                    <p class="mt-1 w-auto">
                      {{ card.service }}
                      <br v-if="!!card.date">
                      {{ card.date !== null ? DateTime.fromISO(card.date).toLocaleString(DateTime.DATE_FULL, { locale: 'fa' }) : '' }}
                    </p>
                  </div>
                </div>
                <p class="text-body-1 text-black text-justify">"{{ card.content }}"</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </div>
</template>


<style scoped lang="scss">

.scroll {
    position: relative;
    overflow: hidden;
}

.scroll div.v-row{
  width: calc(var(--card-count) * 354px);
  min-width: 100%;
  animation: scroll var(--time) linear infinite;
}




@keyframes scroll {
  from {
    transform: translate(100%);
  }
  to {
    transform: translate(-32%);
  }
}


</style>
