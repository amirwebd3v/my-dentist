<script setup lang="ts">
definePageMeta({
  layout: 'admin-layout',
});

const titleColorValue = ref('');
const titleInputColor = ref('');
const updateTitleColor = (color) => {
  titleColorValue.value = color;
  titleInputColor.value = color;
};

</script>

<template>
  <v-card rounded="0">
    <v-card-text>
      <h4 class="pb-10">
        <v-icon class="mdi mdi-information-outline"/>
        در این قسمت می توانید انتهای صفحه اصلی را شخصی سازی کنید.
      </h4>
      <v-expansion-panels variant="popout" class="my-4">

        <v-expansion-panel>
          <v-expansion-panel-title>
            <v-chip variant="tonal" class="bg-primary">
              تماس سریع
            </v-chip>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-row justify="start">
              <v-col cols="3">
                <v-textarea
                    density="compact"
                    variant="outlined"
                    label="متن کارت"
                ></v-textarea>
              </v-col>
              <v-col cols="3">
                <v-text-field
                    density="comfortable"
                    variant="outlined"
                    label="تیتر کارت"
                />
              </v-col>
              <v-col cols="3">
                <v-text-field
                    clearable
                    density="comfortable"
                    variant="outlined"
                    label="رنگ دکمه ارسال"
                    append-inner-icon="mdi-menu-down"
                    v-model="titleColorValue"
                >
                  <v-menu activator="parent" transition="scale-transition" location="end"
                          :close-on-content-click="false">
                    <div class="d-flex flex-column">
                      <v-color-picker theme="dark"
                                      hide-inputs
                                      position="relative"
                                      show-swatches
                                      v-model="titleInputColor"
                                      @update:modelValue="updateTitleColor"
                                      mode="hexa"/>
                    </div>
                  </v-menu>
                </v-text-field>
              </v-col>
              <v-col cols="3">
                <v-text-field
                    clearable
                    density="comfortable"
                    variant="outlined"
                    label="رنگ زمینه کارت"
                    append-inner-icon="mdi-menu-down"
                    v-model="titleColorValue"
                >
                  <v-menu activator="parent" transition="scale-transition" location="end"
                          :close-on-content-click="false">
                    <div class="d-flex flex-column">
                      <v-color-picker theme="dark"
                                      hide-inputs
                                      position="relative"
                                      show-swatches
                                      v-model="titleInputColor"
                                      @update:modelValue="updateTitleColor"
                                      mode="hexa"/>
                    </div>
                  </v-menu>
                </v-text-field>
              </v-col>

            </v-row>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            <v-chip variant="tonal" class="bg-primary">
              نقشه
            </v-chip>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-col cols="12">
              <v-text-field
                  density="comfortable"
                  variant="outlined"
                  label="لینک نقشه"
              />
            </v-col>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            <v-chip variant="tonal" class="bg-primary">
              Footer (پاورقی)
            </v-chip>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-row justify="start">
              <v-col cols="3">
                <v-text-field
                    clearable
                    density="comfortable"
                    variant="outlined"
                    label="رنگ زمینه فوتر"
                    append-inner-icon="mdi-menu-down"
                    v-model="titleColorValue"
                >
                  <v-menu activator="parent" transition="scale-transition" location="end"
                          :close-on-content-click="false">
                    <div class="d-flex flex-column">
                      <v-color-picker theme="dark"
                                      hide-inputs
                                      position="relative"
                                      show-swatches
                                      v-model="titleInputColor"
                                      @update:modelValue="updateTitleColor"
                                      mode="hexa"/>
                    </div>
                  </v-menu>
                </v-text-field>
              </v-col>
              <v-col cols="3">
                <v-text-field
                    clearable
                    density="comfortable"
                    variant="outlined"
                    label="رنگ زمینه کارت"
                    append-inner-icon="mdi-menu-down"
                    v-model="titleColorValue"
                >
                  <v-menu activator="parent" transition="scale-transition" location="end"
                          :close-on-content-click="false">
                    <div class="d-flex flex-column">
                      <v-color-picker theme="dark"
                                      hide-inputs
                                      position="relative"
                                      show-swatches
                                      v-model="titleInputColor"
                                      @update:modelValue="updateTitleColor"
                                      mode="hexa"/>
                    </div>
                  </v-menu>
                </v-text-field>
              </v-col>
              <v-col cols="3">
                <v-text-field
                    clearable
                    density="comfortable"
                    variant="outlined"
                    label="رنگ متن"
                    append-inner-icon="mdi-menu-down"
                    v-model="titleColorValue"
                >
                  <v-menu activator="parent" transition="scale-transition" location="end"
                          :close-on-content-click="false">
                    <div class="d-flex flex-column">
                      <v-color-picker theme="dark"
                                      hide-inputs
                                      position="relative"
                                      show-swatches
                                      v-model="titleInputColor"
                                      @update:modelValue="updateTitleColor"
                                      mode="hexa"/>
                    </div>
                  </v-menu>
                </v-text-field>
              </v-col>
              <v-col cols="3">
                <v-text-field
                    clearable
                    density="comfortable"
                    variant="outlined"
                    label="رنگ آیکون شبکه های اجتماعی"
                    append-inner-icon="mdi-menu-down"
                    v-model="titleColorValue"
                >
                  <v-menu activator="parent" transition="scale-transition" location="end"
                          :close-on-content-click="false">
                    <div class="d-flex flex-column">
                      <v-color-picker theme="dark"
                                      hide-inputs
                                      position="relative"
                                      show-swatches
                                      v-model="titleInputColor"
                                      @update:modelValue="updateTitleColor"
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
        <v-icon class="mdi mdi-information-outline"/>
        در این قسمت می توانید اطلاعات بخش پاورقی را ویرایش نمایید.
      </h4>
      <v-row justify="start">
        <v-col cols="8">
          <v-text-field
              density="comfortable"
              variant="outlined"
              label="آدرس یک"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
              density="comfortable"
              variant="outlined"
              label="تلفن تماس یک"
          />
        </v-col>
        <v-col cols="8">
          <v-text-field
              density="comfortable"
              variant="outlined"
              label="آدرس دو (اختیاری)"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
              density="comfortable"
              variant="outlined"
              label="تلفن تماس دو (اختیاری)"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
              density="comfortable"
              variant="outlined"
              label="پست الکترونیک یک"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
              density="comfortable"
              variant="outlined"
              label="پست الکترونیک دو"
          />
        </v-col>
      </v-row>

      <v-row justify="start">
        <v-col cols="6">
          <v-text-field
              density="comfortable"
              variant="outlined"
              label="لینک اینستاگرام"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
              density="comfortable"
              variant="outlined"
              label="لینک یوتیوب"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
              density="comfortable"
              variant="outlined"
              label="لینک لینکدین"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
              density="comfortable"
              variant="outlined"
              label="لینک فیس بوک"
          />
        </v-col>
      </v-row>


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
</template>
