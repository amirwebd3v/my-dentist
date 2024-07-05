<script setup lang="ts">

import {testimonialSettings} from '@/data/CustomComponents';
import type {PropType} from "@vue/runtime-core";
import type {TestimonialSettings} from "~/utils/types";
import {storeToRefs} from "pinia";
import {useTestimonialStore} from "~/store/testimonial";


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

onBeforeMount(async ()=>{
  await useTestimonialStore().fetch()
})

</script>
<template>
  <div>
    <div class="mini-spacer">
      <v-container v-if="!!props.testimonialSettings">
        <!-- -----------------------------------------------
            Start Testimonial Text
        ----------------------------------------------- -->
        <v-row justify="center" class="mt-16">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                نظرات مراجعه کنندگان
              </h2>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Testimonial Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Testimonial
        ----------------------------------------------- -->

        <v-sheet
            class="mx-auto"
            elevation="0"
            max-width="auto"
            :color="props.testimonialSettings.backColor"
            :rounded="props.testimonialSettings.backRounded"
        >
          <v-slide-group
              class="py-4 "
          >
            <v-slide-group-item
                v-for="card in testimonials.values()"
                :key="card.full_name"
            >
              <v-row class="my-12" justify="center">
                <v-card class="mx-12" max-width="330"
                        :elevation="props.testimonialSettings.cardElevation"
                        :variant="props.testimonialSettings.cardVariant"
                        :style="`height: 250px;
                         border-color: ${props.testimonialSettings.cardBorderColor} !important;
                         background-color: ${props.testimonialSettings.cardColor};`"
                        :border="props.testimonialSettings.cardBorderSize"
                >
                  <v-card-text class="pa-sm-10 pa-5 mx-5" :style="`color: ${props.testimonialSettings.cardContextColor}`">
                    <div class="d-flex align-center mb-5">
                      <v-avatar size="60">
                        <img :src="card.image" :alt="card.image" height="60"/>
                      </v-avatar>
                      <div class="mr-3">
                        <h6 class="text-uppercase font-weight-bold font-14">{{ card.full_name }}</h6>
                        <p class="mt-1"> {{ card.service.concat('/', card.date) }}</p>
                      </div>
                    </div>
                    <p class="text-body-1 text-black text-justify">“{{ card.content }}”</p>
                  </v-card-text>
                </v-card>
              </v-row>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>

        <!-- -----------------------------------------------
            End Testimonial
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
