<script setup lang="ts">
import {useServiceStore} from "~/store/service";
import {storeToRefs} from "pinia";



const {services} = storeToRefs(useServiceStore())

onBeforeMount(async ()=>{
  await useServiceStore().fetch()
})




</script>
<template>
  <div>
    <v-container class="mini-spacer bottom-mini-spacer mt-16 mb-16">
      <!-- -----------------------------------------------
           Start Services Text
       ----------------------------------------------- -->
      <v-row justify="center" class="mt-16">
        <v-col cols="12" sm="10" md="9" lg="7">
          <div class="text-center">
            <h2 class="section-title font-weight-medium">
              خدمات
            </h2>
            <p class="text-muted">
              خدماتی که ما به شما ارایه می دهیم.
            </p>
          </div>
        </v-col>
      </v-row>

      <!-- -----------------------------------------------
          End Services Text
      ----------------------------------------------- -->
      <!-- -----------------------------------------------
          Start Feature 2
      ----------------------------------------------- -->
      <v-row justify="space-around">
        <v-col
            class="v-col-sm-2 v-col-md-2 mt-5 mx-5 px-0 mb-16"
            v-for="card in services.values()"
            :key="card.id"
        >
          <!--          <v-card elevation="4" class="rounded-shaped" :style=card.contextBackColor>-->
          <!--            <v-row dir="ltr">-->
          <!--              <v-col cols="12" sm="8" class="py-0" dir="rtl">-->
          <!--                <v-card-text>-->
          <!--                  <div class="d-flex align-center pt-5 pb-4">-->
          <!--                    <v-row align="center">-->
          <!--                      <v-col-->
          <!--                          cols="12"-->
          <!--                          sm="8"-->
          <!--                          class="px-md-0 d-flex align-center"-->
          <!--                      >-->
          <!--                        <h4 class="font-weight-medium font-16 text-justify ellipsis" :style="`color: ${card.contextColor} ;`">-->
          <!--                          {{ card.context }}-->
          <!--                        </h4>-->
          <!--                      </v-col>-->
          <!--                      <v-col cols="12" sm="4">-->
          <!--                        <img-->
          <!--                            :src=card.imageSource-->
          <!--                            class="img-fluid rounded"-->
          <!--                            alt="service"-->
          <!--                        />-->
          <!--                      </v-col>-->
          <!--                    </v-row>-->
          <!--                  </div>-->
          <!--                </v-card-text>-->
          <!--              </v-col>-->
          <!--              <v-col cols="12" sm="4">-->
          <!--                <v-btn-->
          <!--                    block-->
          <!--                    class="linking service-action-btn mt-sm-0 mt-n0 rounded-0 py-5"-->
          <!--                    elevation="4"-->
          <!--                    :style="`background-color: ${card.btnColor} ;`"-->
          <!--                    :to="card.btnLink"-->
          <!--                >-->
          <!--                  <a :style="`color: ${card.titleColor} ;`" > {{ card.title }}</a>-->
          <!--                </v-btn>-->
          <!--              </v-col>-->

          <!--            </v-row>-->
          <!--          </v-card>-->
          <v-tooltip :text="card.content" location="bottom" class="text-justify" width="250" open-on-click>
            <template v-slot:activator="{ props }">
              <v-sheet
                  :style=card.config.titleColor
                  elevation="1"
                  :height="150"
                  :width="150"
                  color="white"
                  rounded="xl"
                  class="px-5 mx-auto"
                  v-bind="props"
              >
                <div class="pt-3 text-center">
                  <v-img class="mr-4" width="70" height="70" src="images/icons/foamy.png"></v-img>
                  <p class="pt-3 font-weight-bold font-15">{{ card.title }}</p>
                </div>
              </v-sheet>
            </template>
          </v-tooltip>
        </v-col>
      </v-row>
      <!-- -----------------------------------------------
          End Feature 2
      ----------------------------------------------- -->
    </v-container>
  </div>


</template>


<style scoped lang="scss">
.v-sheet {
  cursor: pointer;
  text-transform: capitalize;
  transition: 0.2s ease-in;
  &:hover {
    transform: scale(1.12);
  }
}
</style>