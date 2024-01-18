<script setup lang="ts">

import {Testimonials} from '@/data/CustomComponents';
</script>
<template>
  <div>
    <div class="mini-spacer">
      <v-container>
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
            class="mx-auto bg-transparent"
            elevation="0"
            max-width="auto"
        >

          <v-slide-group
              class="py-4 "
          >
            <v-slide-group-item
                v-for="card in Testimonials"
                :key="card.name"
            >
              <v-row class="my-13" justify="center">
                <v-card  class="mx-8" max-width="330" variant="outlined" style="height: 250px;">

                  <v-card-text class="pa-sm-10 pa-5 mx-5">
                    <div class="d-flex align-center mb-5">
                      <v-avatar size="60">
                        <img :src="`/images/testimonial/${card.img}`" :alt="card.img" height="60"/>
                      </v-avatar>
                      <div class="mr-3">
                        <h6 class="text-uppercase font-weight-bold font-14">{{ card.name }}</h6>
                        <p class="mt-1"> {{ card.serviceName.concat('/',card.date)  }}</p>
                      </div>
                    </div>
                    <p class="text-body-1 text-black text-justify">“{{ card.testimonial }}”</p>
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
