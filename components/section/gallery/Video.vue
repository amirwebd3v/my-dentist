<script setup lang="ts">
import {gallerySettings} from "~/data/CustomComponents";


const settings = gallerySettings[0];

</script>

<template >

  <v-container >
    <div class="videoWrapper" >
      <video  playsinline autoplay muted loop :style="`border-color: ${settings.videoCardBorderColor} !important;
      background-color: ${settings.videoCardBackColor}; `"
              :class="settings.videoBorder">
        <source  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" type="video/mp4">
      </video>
    </div>
  </v-container>





</template>




