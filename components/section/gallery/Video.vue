<script setup lang="ts">
import {videoSettings} from "~/data/CustomComponents";
import type {PropType} from "@vue/runtime-core";
import type {VideoSettings} from "~/utils/types";


const props = defineProps({
  videoSettings: {
    type: Object as PropType<VideoSettings>,
    required: true,
    default: videoSettings[0],
  }
})



</script>

<template>

  <v-container v-if="props.videoSettings?.hidden === ''">
<!--    <div v-if="!props.videoSettings.link" :class="`videoWrapper ${props.videoSettings.hidden}`">-->
<!--      <video  playsinline autoplay loop :style="`border-color: ${props.videoSettings.cardBorderColor} !important;-->
<!--      background-color: ${props.videoSettings.cardBackColor}; `"-->
<!--             :class="[props.videoSettings.border,'rounded']">-->
<!--        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"-->
<!--                type="video/mp4">-->
<!--      </video>-->

<!--    </div>-->

    <div class="iframeWrapper">
      <iframe
          :class="['rounded-lg']"
          :style="`border-color: ${props.videoSettings.cardBorderColor} !important;`"
          :src="`https://www.aparat.com/video/video/embed/videohash/${props.videoSettings?.link.split('/').pop()}/vt/frame`"
      />
    </div>
  </v-container>


</template>




<style scoped lang="scss">
.iframeWrapper {
  position: relative;
  width: 100%;
  padding-top: 57.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
}

.iframeWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>