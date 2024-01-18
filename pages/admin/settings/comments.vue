<script setup lang="ts">
import TestimonialDataTable from "~/components/admin/settings/TestimonialDataTable.vue";


definePageMeta({
  layout: 'admin-layout',
});
</script>

<template>
  <v-card rounded="0">
    <v-card-text>
      <h4 class="pb-10">
        <v-icon class="mdi mdi-information-outline"></v-icon>
        در این قسمت می توانید بخش نظرات مراجعه کنندگان را شخصی سازی نمایید.
      </h4>
      <v-expansion-panels variant="popout" class="my-4">
        <v-expansion-panel>
          <v-expansion-panel-title>
            <v-chip variant="tonal" class="bg-primary">
              Cards (کارت ها)
            </v-chip>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-row justify="center">
              <v-col cols="12" sm="3">
                <v-text-field
                    clearable=""
                    density="comfortable"
                    variant="outlined"
                    append-inner-icon="mdi-menu-down"
                    label="رنگ پس زمینه"
                >
                  <v-menu activator="parent" transition="scale-transition" location="end"
                          :close-on-content-click="false">
                    <div class="d-flex flex-column">
                      <v-color-picker theme="dark"
                                      hide-inputs
                                      position="relative"
                                      show-swatches

                                      @update:modelValue=""
                                      mode="hexa"/>
                    </div>
                  </v-menu>
                </v-text-field>

              </v-col>
              <v-col cols="12" sm="3">
                <v-select
                    density="comfortable"
                    variant="outlined"
                    label="سایز شعاع گوشه"
                    :items="['small', 'large', 'x-large', 'default', 'x-small']"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="3">
                <v-select
                    density="comfortable"
                    variant="outlined"
                    label="طرح کادر"
                    :items="['text', 'flat', 'elevated', 'tonal', 'outlined','plain']"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="3">
                <v-select
                    density="comfortable"
                    variant="outlined"
                    label="میزان برجستگی"
                    :items="['1', '2', '3', '4', '5','6','7','8','9','10']"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="3">
                <v-select
                    density="comfortable"
                    variant="outlined"
                    label="سایز نوار کادر"
                    :items="['small', 'large', 'x-large', 'default', 'x-small']"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                    clearable=""
                    density="comfortable"
                    variant="outlined"
                    append-inner-icon="mdi-menu-down"
                    label="رنگ زمینه کادر"
                >
                  <v-menu activator="parent" transition="scale-transition" location="end"
                          :close-on-content-click="false">
                    <div class="d-flex flex-column">
                      <v-color-picker theme="dark"
                                      hide-inputs
                                      position="relative"
                                      show-swatches

                                      @update:modelValue=""
                                      mode="hexa"/>
                    </div>
                  </v-menu>
                </v-text-field>

              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                    clearable=""
                    density="comfortable"
                    variant="outlined"
                    append-inner-icon="mdi-menu-down"
                    label="رنگ نوار کادر"
                >
                  <v-menu activator="parent" transition="scale-transition" location="end"
                          :close-on-content-click="false">
                    <div class="d-flex flex-column">
                      <v-color-picker theme="dark"
                                      hide-inputs
                                      position="relative"
                                      show-swatches

                                      @update:modelValue=""
                                      mode="hexa"/>
                    </div>
                  </v-menu>
                </v-text-field>

              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                    density="comfortable"
                    variant="outlined"
                    clearable=""

                    label="رنگ متن"
                    append-inner-icon="mdi-menu-down"
                >
                  <v-menu activator="parent" transition="scale-transition" location="end"
                          :close-on-content-click="false">
                    <div class="d-flex flex-column">
                      <v-color-picker theme="dark"
                                      hide-inputs
                                      position="relative"
                                      show-swatches

                                      @update:modelValue=""
                                      mode="hexa"/>
                    </div>
                  </v-menu>
                </v-text-field>
              </v-col>
            </v-row>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>

    <v-card-actions class="float-left">
      <v-btn class="text-none"
             color="primary"
             variant="flat"
             prepend-icon="mdi mdi-check-circle-outline"
             rounded
             text="ثبت"
      >
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-divider/>
  <v-card rounded="b-lg">
    <v-card-text>
      <h4 class="pb-10">
        <v-icon class="mdi mdi-information-outline"></v-icon>
        در این قسمت می توانید نظرات مراجعه کنندگان را اضافه، حذف یا ویرایش نمایید.
      </h4>
      <TestimonialDataTable/>
    </v-card-text>
  </v-card>
</template>

