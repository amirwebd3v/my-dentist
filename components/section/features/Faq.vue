<script setup lang="ts">

import {useDisplay} from "vuetify";
import type {PropType} from "@vue/runtime-core";
import type {FaqSettings} from "~/utils/types";


const {width, thresholds} = useDisplay()
thresholds.value.md = 1024


const props = defineProps({
  faqSettings: {
    type: Object as PropType<FaqSettings>,
    required: true,
  }
})

const expandedPanel = ref<number[]>([])

function togglePanel(index: number): void {
  const panelIndex = expandedPanel.value.indexOf(index)
  if (panelIndex === -1) {
    expandedPanel.value.push(index)
  } else {
    expandedPanel.value.splice(panelIndex, 1)
  }
}


</script>

<template>
  <v-container class="mini-spacer mt-16">

    <div class="faq-component">
      <!-- -----------------------------------------------
          Start Feature 3 Text
      ----------------------------------------------- -->
      <v-row justify="end" v-if="!!props.faqSettings">

        <v-col cols="2" v-if="width > 959 && width < 1025" align-self="center">
          <v-img :src="`${useAppConfig().api.baseUrl +'/storage/'+props.faqSettings.rightSideImage}`"
                 style="transform: rotate(-20deg);" cover/>
        </v-col>

        <v-col :cols="width > 959 ? 10 : 12" style="aspect-ratio: 16/9;">
          <v-img :src="`${useAppConfig().api.baseUrl +'/storage/'+props.faqSettings.mainImage}`"
               alt="سوالات متداول دندانپزشکی دکتر سمیرا رونقی"
               class="rounded-lg img-fluid"

          />
        </v-col>

        <v-col :cols="width > 1024? 7 : width > 768 ? 9 : 12" class="faq-card mr-md-0">
          <v-card class="card-shadow" rounded="lg">
            <div :style="`background-color: ${props.faqSettings.cardBgColor}`">
              <div class="pt-5 pb-1 text-center">
                <v-chip size="large" class="text-center"
                        :style="`background: ${props.faqSettings.cardBgColor};
                           color: ${props.faqSettings.titleColor}`">
                  {{ props.faqSettings.title }}
                </v-chip>
              </div>
              <h3 class="px-3 py-2 font-16 font-weight-medium text-center">
                <span :style="`color: ${props.faqSettings.titleColor}`">{{ props.faqSettings.subtitle }}</span>
              </h3>
            </div>
            <div
                :style="`--scrollbar-color:${props.faqSettings.cardBgColor}`"
            >
              <v-virtual-scroll
                  :items="props.faqSettings.items"
                  :style="`background-color: ${props.faqSettings.contextBgColor}`"
              >
                <template v-slot:default="{ item,index }">
                  <v-expansion-panels
                      flat
                      v-model="expandedPanel"
                  >
                    <v-expansion-panel
                        rounded="0"
                        :style="`background-color: ${props.faqSettings.contextBgColor}`"
                        :value="index+1"
                    >

                      <v-expansion-panel-title class="rounded-0 py-2 pr-3 d-inline" focusable
                                               @click="togglePanel(index+1)">
                        <template #actions="{expanded}">
                          <v-icon class="px-6 my-auto" size="small" :style="`color:${props.faqSettings.cardBgColor}`">
                            {{ expanded ? 'mdi-minus-circle' : 'mdi-plus-circle' }}
                          </v-icon>
                          <h3 class="text-justify px-1 font-weight-medium text-subtitle-1 "
                              :style="`line-height: 1.5rem !important;color:${props.faqSettings.contextColor}`">
                            {{ item.question }}
                          </h3>
                        </template>
                      </v-expansion-panel-title>

                      <v-expansion-panel-text class="font-14 font-weight-regular text-justify"
                                              :style="`line-height: 1.5rem !important; color:${props.faqSettings.contextColor}`">
                        {{ item.answer }}
                      </v-expansion-panel-text>
                    </v-expansion-panel>

                  </v-expansion-panels>
                </template>
              </v-virtual-scroll>
            </div>
          </v-card>
        </v-col>


        <v-col cols="3" align-self="end" v-if="width > 959 && width < 1152">
          <v-img rounded :src="`${useAppConfig().api.baseUrl +'/storage/'+props.faqSettings.leftSideImage}`" cover/>
        </v-col>
      </v-row>

      <!-- -----------------------------------------------
          End Feature 3 Text
      ----------------------------------------------- -->
    </div>
  </v-container>

</template>

<style scoped lang="scss">
:deep(.v-expansion-panel-text__wrapper) {
  padding-bottom: 4px !important;
}

:deep(.v-expansion-panel) {
  margin-top: 0 !important;
}

::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-color) !important;
}

</style>