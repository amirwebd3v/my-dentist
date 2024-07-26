<script setup lang="ts">
import { faq, faqSettings} from "~/data/CustomComponents";
import {useDisplay} from "vuetify";
import type {PropType} from "@vue/runtime-core";
import type {FaqSettings} from "~/utils/types";
import {storeToRefs} from "pinia";
import {useFaqStore} from "~/store/faq";


const panel = ref(null)
const {width, thresholds} = useDisplay()
thresholds.value.md = 1024


const props = defineProps({
  faqSettings: {
    type: Object as PropType<FaqSettings>,
    required: true,
    default: {
      items: faqSettings[0],
    },
  }
})

const {faqItems} = storeToRefs(useFaqStore())
onBeforeMount(async () => {
  await useFaqStore().fetch()
})
</script>

<template>
  <v-container class="mini-spacer mt-16">

    <div class="feature3-component">
        <!-- -----------------------------------------------
            Start Feature 3 Text
        ----------------------------------------------- -->
        <v-row justify="end" v-if="!!props.faqSettings">
          <v-col cols="2" v-if="width > 959 && width < 1025" align-self="center">
            <v-img :src="<string>props.faqSettings.rightSideImage" style="transform: rotate(-20deg);" cover/>
          </v-col>
          <v-col :cols="width > 959 ? 10 : 12">
            <img :src="props.faqSettings.mainImage"
              alt="feature"
              class="rounded img-fluid"
            />
          </v-col>

          <v-col :cols="width > 1024? 6 : width > 768 ? 9 : 12" class="feature3-card mr-md-0">
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
              <div>
                <v-expansion-panels
                    v-model="panel"
                    flat
                >
                  <v-expansion-panel
                      v-for="faq in faqItems.values()"
                      :key="faq.id"
                      rounded="0"
                      :style="`background-color: ${props.faqSettings.contextBgColor}`"
                  >

                    <v-expansion-panel-title class="rounded-0 py-2 pr-3 d-inline" focusable>
                      <template #actions="{expanded}">
                        <v-icon class="px-6 my-auto" size="small">
                          {{ expanded ? 'mdi-minus-circle' : 'mdi-plus-circle' }}
                        </v-icon>
                        <h3 class="text-justify px-1 font-weight-medium text-subtitle-1 " style="line-height: 1.5rem !important;">
                         {{faq.question}}
                        </h3>
                      </template>
                    </v-expansion-panel-title>

                    <v-expansion-panel-text class="font-14 font-weight-regular text-justify" style="line-height: 1.5rem !important;">
                      {{ faq.answer }}
                    </v-expansion-panel-text>
                  </v-expansion-panel>

                </v-expansion-panels>
              </div>
            </v-card>
          </v-col>
          <v-col cols="3"  align-self="end"  v-if="width > 959 && width < 1025">
            <v-img :src="<string>props.faqSettings.leftSideImage" cover/>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Feature 3 Text
        ----------------------------------------------- -->
    </div>
  </v-container>

</template>

<style scoped lang="scss">
:deep(.v-expansion-panel-text__wrapper){
  padding-bottom: 4px!important;
}

:deep(.v-expansion-panel){
  margin-top: 0!important;
}
</style>