<script setup lang="ts">

import {testimonialSettings} from '@/data/CustomComponents';
import type {PropType} from "@vue/runtime-core";
import type {TestimonialSettings} from "~/utils/types";
import {storeToRefs} from "pinia";
import {useTestimonialStore} from "~/store/testimonial";
import {DateTime} from 'luxon'

const props = defineProps({
  testimonialSettings: {
    type: Object as PropType<TestimonialSettings>,
    required: true,
    default: {
      items: testimonialSettings,
    },
  }
})


const {testimonials} = storeToRefs(useTestimonialStore())

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
      <v-sheet class="scroll-container" elevation="0"
               :color="props.testimonialSettings.backColor"
               :rounded="props.testimonialSettings.backRounded"
               :style="{ '--back-color': props.testimonialSettings.backColor }">
      <v-row class="my-12 " justify="center" style="width: max-content;">
        <v-col  data-first v-for="card in testimonials.values()" :key="card.id">
        <v-card
            class="mx-auto" :style="`
                            width: 330px;
                            height: 250px;
                            border-color: ${props.testimonialSettings.cardBorderColor} !important;
                            background-color: ${props.testimonialSettings.cardColor};
                        `">
          <v-card-text class="pa-sm-10 pa-5 mx-5" :style="`color: ${props.testimonialSettings.cardContextColor}`">
            <div class="d-flex align-center mb-5">
              <v-avatar size="60">
                <img :src="`${useAppConfig().api.baseUrl +'/storage/'+card.image}`" :alt="card.image" height="60"/>
              </v-avatar>
              <div class="mr-3">
                <h6 class="text-uppercase font-weight-bold font-14">{{ card.full_name }}</h6>
                <p class="mt-1 w-auto">
                  {{ card.service }}
                  <br v-if="card.date !== null">
                  {{ card.date !== null ? DateTime.fromISO(card.date).toLocaleString(DateTime.DATE_FULL, { locale: 'fa' }) : '' }}
                </p>
              </div>
            </div>
            <p class="text-body-1 text-black text-justify">"{{ card.content }}"</p>
          </v-card-text>
        </v-card>
        </v-col>
        <v-col  v-for="card in testimonials.values()" :key="card.id">
        <v-card
            class="mx-auto" :style="`
                            width: 330px;
                            height: 250px;
                            border-color: ${props.testimonialSettings.cardBorderColor} !important;
                            background-color: ${props.testimonialSettings.cardColor};
                        `">
          <v-card-text class="pa-sm-10 pa-5 mx-5" :style="`color: ${props.testimonialSettings.cardContextColor}`">
            <div class="d-flex align-center mb-5">
              <v-avatar size="60">
                <img :src="`${useAppConfig().api.baseUrl +'/storage/'+card.image}`" :alt="card.image" height="60"/>
              </v-avatar>
              <div class="mr-3">
                <h6 class="text-uppercase font-weight-bold font-14">{{ card.full_name }}</h6>
                <p class="mt-1">
                  {{ card.service }}
                  <br v-if="card.date !== null">
                  {{ card.date !== null ? DateTime.fromISO(card.date).toLocaleString(DateTime.DATE_FULL, { locale: 'fa' }) : '' }}
                </p>
              </div>
            </div>
            <p class="text-body-1 text-black text-justify">"{{ card.content }}"</p>
          </v-card-text>
        </v-card>
        </v-col>
        <v-col  data-last  v-for="card in testimonials.values()" :key="card.id">
        <v-card
            class="mx-auto" :style="`
                            width: 330px;
                            height: 250px;
                            border-color: ${props.testimonialSettings.cardBorderColor} !important;
                            background-color: ${props.testimonialSettings.cardColor};
                        `">
          <v-card-text class="pa-sm-10 pa-5 mx-5" :style="`color: ${props.testimonialSettings.cardContextColor}`">
            <div class="d-flex align-center mb-5">
              <v-avatar size="60">
                <img :src="`${useAppConfig().api.baseUrl +'/storage/'+card.image}`" :alt="card.image" height="60"/>
              </v-avatar>
              <div class="mr-3">
                <h6 class="text-uppercase font-weight-bold font-14">{{ card.full_name }}</h6>
                <p class="mt-1">
                  {{ card.service }}
                  <br v-if="card.date !== null">
                  {{ card.date !== null ? DateTime.fromISO(card.date).toLocaleString(DateTime.DATE_FULL, { locale: 'fa' }) : '' }}
                </p>
              </div>
            </div>
            <p class="text-body-1 text-black text-justify">"{{ card.content }}"</p>
          </v-card-text>
        </v-card>
        </v-col>
        <div class="fade"></div>
      </v-row>
            </v-sheet>


    </v-container>
  </div>
</template>


<style scoped lang="scss">

@keyframes first-loop {
  0% { transform: translateX(0); }
  100% { transform: translateX(-200%); }
}

@keyframes loop {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

.scroll-container {
  --time: 2000s;
  --half-time: 3s;
  position: relative;
  overflow: hidden;
  width: 100%;
}

.scroll-container .v-row {
  display: flex;
  animation: loop var(--time) linear infinite;
  transform: translateX(100%);
}

.scroll-container .v-row > .v-col[data-first] {
  animation: first-loop var(--time) linear forwards;
  transform: translateX(0);
}

.scroll-container .v-row > .v-col[data-last] {
  animation-delay: var(--half-time);
}

.scroll-container .v-card {
  width: 330px;
  height: 250px;
  margin: 0 auto;
}

.fade {
  pointer-events: none;
  position: absolute;
  inset: 0;
  background: linear-gradient(
          90deg,
          var(--back-color),
          transparent 30%,
          transparent 70%,
          var(--back-color)
  );
}
</style>
