<script setup lang="ts">
const isHovered = ref<boolean>(false)

import {footer} from "~/data/CustomComponents";

</script>


<template>
  <!-- -----------------------------------------------
        Start Footer
  ----------------------------------------------- -->
  <v-footer class="footer px-4" :style="`background-color: ${footer[0].bgColor}; color: ${footer[0].textColor}`">
    <v-container>
      <v-row class="py-6 py-sm-7">
        <!-- -----------------------------------------------
        First Column
      ----------------------------------------------- -->
        <v-col cols="12" md="3" sm="6" class="px-xs-0">
          <h4 class="font-weight-regular font-18 ">آدرس مطب</h4>
          <p class="mt-5">ایران - تهران، رباط کریم</p>
        </v-col>
        <!-- -----------------------------------------------
        Second Column
      ----------------------------------------------- -->
        <v-col cols="12" md="3" sm="6" class="px-xs-0">
          <h4 class="font-weight-regular font-18 ">تلفن تماس</h4>
          <p class="mt-5 ">پذیرش : ۹۸۸۹ ۷۶۵ ۰۹۳۸</p>
          <p class="mt-3 ">مطب : ۱۲۳۴ ۳۲ ۶۲۶-۰۲۱</p>
        </v-col>
        <!-- -----------------------------------------------
        Third Column
      ----------------------------------------------- -->
        <v-col cols="12" md="3" sm="6" class="px-xs-0">
          <h4 class="font-weight-regular font-18 ">پست الکترونیک</h4>
          <p class="mt-5 ">
            <span class="text-white">مطب : </span>
            <a class="text-decoration-none" :style="`color: ${footer[0].textColor} !important;`"
               href="/" @mouseover="$event.target.style.color = footer[0].hoverColor"
               @mouseout="$event.target.style.color = footer[0].textColor">
              info@wrappixel.com</a>
          </p>
          <p class="mt-3">
            <span class="text-white">دکتر : </span>
            <a class="text-decoration-none" :style="`color: ${footer[0].textColor} !important;`"
               href="/"  @mouseover="$event.target.style.color = footer[0].hoverColor"
               @mouseout="$event.target.style.color = footer[0].textColor">
              info@wrappixel.com</a>
          </p>
        </v-col>
        <!-- -----------------------------------------------
        Fourth Column
      ----------------------------------------------- -->
        <v-col cols="12" md="3" sm="6" class="px-xs-0">
          <h4 class="font-weight-regular font-18">شبکه های اجتماعی</h4>
          <div class="social-icons mt-5">
            <a :href="footer[0].facebook" v-if="!!footer[0].facebook"
               :style="`color: ${footer[0].socialMediaIconsColor};
                background: ${footer[0].textColor}`"
               @mouseover="$event.currentTarget.style.color = footer[0].textColor;
               $event.currentTarget.style.background = footer[0].hoverColor;"
               @mouseout="$event.currentTarget.style.background= footer[0].textColor;
               $event.currentTarget.style.color= footer[0].socialMediaIconsColor;"
            >
              <i class="mdi mdi-facebook" />
            </a>
            <a :href="footer[0].linkedin" v-if="!!footer[0].linkedin"
               :style="`color: ${footer[0].socialMediaIconsColor};
                background: ${footer[0].textColor}`"
               @mouseover="$event.currentTarget.style.color = footer[0].textColor;
               $event.currentTarget.style.background = footer[0].hoverColor;"
               @mouseout="$event.currentTarget.style.background= footer[0].textColor;
               $event.currentTarget.style.color= footer[0].socialMediaIconsColor;"
            >
              <i class="mdi mdi-linkedin" />
            </a>
            <a :href="footer[0].youtube" v-if="!!footer[0].youtube"
               :style="`color: ${footer[0].socialMediaIconsColor};
                background: ${footer[0].textColor}`"
               @mouseover="$event.currentTarget.style.color = footer[0].textColor;
               $event.currentTarget.style.background = footer[0].hoverColor;"
               @mouseout="$event.currentTarget.style.background= footer[0].textColor;
               $event.currentTarget.style.color= footer[0].socialMediaIconsColor;"
            >
              <i class="mdi mdi-youtube" />
            </a>
            <a :href="footer[0].instagram" v-if="!!footer[0].instagram"
               :style="`color: ${footer[0].socialMediaIconsColor};
                background: ${footer[0].textColor}`"
               @mouseover="$event.currentTarget.style.color = footer[0].textColor;
               $event.currentTarget.style.background = footer[0].hoverColor;"
               @mouseout="$event.currentTarget.style.background= footer[0].textColor;
               $event.currentTarget.style.color= footer[0].socialMediaIconsColor;"
            >
              <i class="mdi mdi-instagram" />
            </a>
          </div>
        </v-col>
      </v-row>
      <v-col class="text-center mt-4" >
        <a :class="['text-decoration-none' +
         ' font-weight-bold mb-sm-0 mb-3' +
          ' rainbow-text-animated',
         {'HiDev-Opacity-50': !isHovered}]"
           href="/"
           @mouseover="isHovered = true"
           @mouseleave="isHovered = false"
        > &copy; 2024 - HiDevs</a>
      </v-col>
    </v-container>
  </v-footer>
  <!-- -----------------------------------------------
        End Footer
  ----------------------------------------------- -->
</template>


<style scoped lang="scss">
.HiDev-Opacity-50 {
  opacity: 0.5;
  transition: opacity 0.3s ease;
}


.rainbow-text-animated {
  background: linear-gradient(to right, #57434C, #9B2E55,#fefdfd,  #9B2E55,#57434C);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow_animation 6s linear infinite;
  background-size: 200% 100%;
}

@keyframes rainbow_animation {
  0%, 100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
}


</style>