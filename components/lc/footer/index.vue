<script setup lang="ts">
import type {PropType} from "@vue/runtime-core";
import {footer} from "~/data/CustomComponents";
import type {FooterSettings} from "~/utils/types";


const isHovered = ref<boolean>(false)

const props = defineProps({
  footerSettings: {
    type: Object as PropType<FooterSettings>,
    required: true,
    default: {
      footerSettings: footer[0]
    },
  }
})

const {formattedPhoneNumber} = usePersianNumber()
</script>


<template>
  <!-- -----------------------------------------------
        Start Footer
  ----------------------------------------------- -->
  <v-footer v-if="!!props.footerSettings"
            class="footer px-4" :style="`background-color: ${props.footerSettings.footerBgColor}; color: ${props.footerSettings.footerTextColor}`">
    <v-container>
      <v-row class="py-6 py-sm-7">
        <!-- -----------------------------------------------
        First Column
      ----------------------------------------------- -->
        <v-col cols="12" md="3" sm="6" class="px-xs-0">
          <h4 class="font-weight-regular font-18 ">آدرس مطب</h4>
          <p class="mt-5">{{ props.footerSettings.footerFirstAddress }}</p>
        </v-col>
        <!-- -----------------------------------------------
        Second Column
      ----------------------------------------------- -->
        <v-col cols="12" md="3" sm="6" class="px-xs-0">
          <h4 class="font-weight-regular font-18 ">تلفن تماس</h4>
          <p class="mt-5 ">{{ formattedPhoneNumber(props.footerSettings.footerFirstPhone)}}</p>
          <p class="mt-3 ">{{ formattedPhoneNumber(props.footerSettings?.footerSecondPhone)}}</p>
        </v-col>
        <!-- -----------------------------------------------
        Third Column
      ----------------------------------------------- -->
        <v-col cols="12" md="3" sm="6" class="px-xs-0">
          <h4 class="font-weight-regular font-18 ">پست الکترونیک</h4>
          <p class="mt-5 ">
            <span class="text-white">مطب : </span>
            <a class="text-decoration-none" :style="`color: ${props.footerSettings.footerTextColor} !important;`"
               href="/" @mouseover="$event.target.style.color = props.footerSettings.footerHoverColor"
               @mouseout="$event.target.style.color = props.footerSettings.footerTextColor">
              {{ props.footerSettings.footerFirstEmail }}</a>
          </p>
          <p class="mt-3" v-if="!!props.footerSettings.footerSecondEmail">
            <span class="text-white">دکتر : </span>
            <a class="text-decoration-none" :style="`color: ${props.footerSettings.footerTextColor} !important;`"
               href="/" @mouseover="$event.target.style.color = props.footerSettings.footerHoverColor"
               @mouseout="$event.target.style.color = props.footerSettings.footerTextColor">
              {{ props.footerSettings.footerSecondEmail }}</a>
          </p>
        </v-col>
        <!-- -----------------------------------------------
        Fourth Column
      ----------------------------------------------- -->
        <v-col cols="12" md="3" sm="6" class="px-xs-0">
          <h4 class="font-weight-regular font-18">شبکه های اجتماعی</h4>
          <v-row class="social-icons mt-5 mx-1">
            <a :href="props.footerSettings.footerFacebook" v-if="!!props.footerSettings.footerFacebook"
               :style="`color: ${props.footerSettings.footerSocialMediaIconsColor};
                background: ${props.footerSettings.footerTextColor}`"
               @mouseover="$event.currentTarget.style.color = props.footerSettings.footerTextColor;
               $event.currentTarget.style.background = props.footerSettings.footerHoverColor;"
               @mouseout="$event.currentTarget.style.background= props.footerSettings.footerTextColor;
               $event.currentTarget.style.color= props.footerSettings.footerSocialMediaIconsColor;"
            >
              <i class="mdi mdi-facebook"/>
            </a>
            <a :href="props.footerSettings.footerLinkedin" v-if="!!props.footerSettings.footerLinkedin"
               :style="`color: ${props.footerSettings.footerSocialMediaIconsColor};
                background: ${props.footerSettings.footerTextColor}`"
               @mouseover="$event.currentTarget.style.color = props.footerSettings.footerTextColor;
               $event.currentTarget.style.background = props.footerSettings.footerHoverColor;"
               @mouseout="$event.currentTarget.style.background= props.footerSettings.footerTextColor;
               $event.currentTarget.style.color= props.footerSettings.footerSocialMediaIconsColor;"
            >
              <v-icon size="x-small" icon="mdi-linkedin"/>
            </a>
            <a :href="props.footerSettings.footerYoutube" v-if="!!props.footerSettings.footerYoutube"
               :style="`color: ${props.footerSettings.footerSocialMediaIconsColor};
                background: ${props.footerSettings.footerTextColor}`"
               @mouseover="$event.currentTarget.style.color = props.footerSettings.footerTextColor;
               $event.currentTarget.style.background = props.footerSettings.footerHoverColor;"
               @mouseout="$event.currentTarget.style.background= props.footerSettings.footerTextColor;
               $event.currentTarget.style.color= props.footerSettings.footerSocialMediaIconsColor;"
            >
              <v-icon size="x-small" icon="mdi-youtube"/>
            </a>
            <a :href="props.footerSettings.footerInstagram" v-if="!!props.footerSettings.footerInstagram"
               :style="`color: ${props.footerSettings.footerSocialMediaIconsColor};
                background: ${props.footerSettings.footerTextColor}`"
               @mouseover="$event.currentTarget.style.color = props.footerSettings.footerTextColor;
               $event.currentTarget.style.background = props.footerSettings.footerHoverColor;"
               @mouseout="$event.currentTarget.style.background= props.footerSettings.footerTextColor;
               $event.currentTarget.style.color= props.footerSettings.footerSocialMediaIconsColor;"
            >
              <v-icon size="x-small" icon="mdi-instagram"/>
            </a>
            <a :href="props.footerSettings.footerAparat" v-if="!!props.footerSettings.footerAparat"
               :style="`color: ${props.footerSettings.footerSocialMediaIconsColor};
                background: ${props.footerSettings.footerTextColor}`"
               @mouseover="$event.currentTarget.style.color = props.footerSettings.footerTextColor;
               $event.currentTarget.style.background = props.footerSettings.footerHoverColor;"
               @mouseout="$event.currentTarget.style.background= props.footerSettings.footerTextColor;
               $event.currentTarget.style.color= props.footerSettings.footerSocialMediaIconsColor;"
            >
              <div class="justify-center align-center mx-auto" style="width: 70%;">
              <v-img size="x-small" :src="'images/icons/aparat-icon.png'" class="pt-2"/>
              </div>
            </a>
          </v-row>
        </v-col>
      </v-row>
      <v-col class="text-center mt-4">
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
  background: linear-gradient(to right, #57434C, #9B2E55, #fefdfd, #9B2E55, #57434C);
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