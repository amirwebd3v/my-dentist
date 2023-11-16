<script setup>
import {gallerySettings} from "~/data/CustomComponents";

const settings = gallerySettings[0];
</script>


<template>
  <div class="brand-banner-component">
<!--    <v-row justify="center">-->
<!--      <v-col cols="12" sm="12" class="position-relative z-1">-->
        <video
            :style="`border-color: ${settings.videoCardBorderColor}!important;`"
            :class="`rounded img-fluid border-left border-top-0 ${settings.videoBorder} ${settings.videoCardElevation}`"
            playsinline autoplay muted loop poster="/images/features/3/feature-img.jpg">
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/webm">
        </video>
<!--      </v-col>-->
      <!--          <v-col cols="12" sm="7" lg="5" class="feature3-card">-->
      <!--            <v-card class=" border-solid border-b-md border-e-sm"-->
      <!--                    :style="`border-color: ${settings.videoCardBorderColor}!important;`"-->
      <!--                    :color="settings.videoCardBackColor"-->
      <!--                    :elevation="settings.videoCardElevation">-->
      <!--              <div>-->
      <!--                <div class="pa-10 text-center mr-md-16 pr-md-16 py-8">-->
      <!--                  <v-chip class="bg-primary mr-md-10" >-->
      <!--                    دندانپزشک و جراح-->
      <!--                  </v-chip>-->
      <!--                  <h3 class="feature3-title font-weight-medium pr-md-12">-->
      <!--                    دکتر دندان پزشکیان-->
      <!--                  </h3>-->
      <!--                  <p class="text-muted pr-md-16">-->
      <!--                    متخصص زیبایی و درمان انواع عارضه در دهان-->
      <!--                  </p>-->
      <!--                  <v-btn-->
      <!--                      color="primary"-->
      <!--                      class="btn-custom-lg linking mt-4 btn-arrow mr-md-10"-->
      <!--                      size="large"-->
      <!--                      to="/"-->
      <!--                      rounded="pill"-->
      <!--                      variant="flat"-->
      <!--                      elevation="0"-->
      <!--                  >-->
      <!--                    <span>بیشتر</span>-->
      <!--                    <i class="mdi mdi-arrow-right"></i>-->
      <!--                  </v-btn>-->
      <!--                </div>-->
      <!--              </div>-->
      <!--            </v-card>-->
      <!--          </v-col>-->

<!--    </v-row>-->

  </div>
        <!-- -----------------------------------------------
            Start Feature 3 Text
        ----------------------------------------------- -->

        <!-- -----------------------------------------------
            End Feature 3 Text
        ----------------------------------------------- -->

</template>


<style scoped lang="scss">
.z-1 {
  z-index: 1;
}

.border-left{
  border-left: 0;
}
</style>