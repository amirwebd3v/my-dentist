<script setup lang="ts">
import Dialog from "~/components/shared/modal/Dialog.vue";

import GalleryDataTable from "~/components/admin/settings/GalleryDataTable.vue";

definePageMeta({
  layout: 'admin-layout',
});


const showAddCategoryDialog = ref<Boolean>(false)


const {$persianNumber} = useNuxtApp()

// Function to open the file explorer
const fileInputRef = ref<HTMLInputElement | null>(null);
const openFileExplorer = () => {
  fileInputRef.value?.click();
};


</script>


<template>
  <v-card rounded="0">
    <v-card-text>
      <h4 class="pb-10">
        <v-icon class="mdi mdi-information-outline"></v-icon>
        در این قسمت میتوانید بخش گالری را در صفحه اصلی شخصی سازی کنید.
      </h4>
      <v-expansion-panels variant="popout" class="my-4">

        <v-expansion-panel>
          <v-expansion-panel-title>
            <v-chip variant="tonal" class="bg-primary">
              Tab (پنجره اصلی)
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
                    label="رنگ زمینه"
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
                    label="طرح حاشیه"
                    :items="['text', 'flat', 'elevated', 'tonal', 'outlined','plain']"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                    clearable=""
                    density="comfortable"
                    variant="outlined"
                    append-inner-icon="mdi-menu-down"
                    label="رنگ Tab فعال"
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
                    label="رنگ گزینه انتخابی در مرتب سازی"
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

        <v-expansion-panel>
          <v-expansion-panel-title>
            <v-chip variant="tonal" class="bg-primary">
              Cards (کارت ها)
            </v-chip>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-row justify="center">
              <v-col cols="12" sm="3">
                <v-select
                    density="comfortable"
                    variant="outlined"
                    label="طرح حاشیه"
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
                <v-text-field
                    clearable=""
                    density="comfortable"
                    variant="outlined"
                    append-inner-icon="mdi-menu-down"
                    label="رنگ حاشیه"
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
                    label="رنگ دکمه پیمایشی"
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

                    label="رنگ موضوع - تیتر"
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

        <v-expansion-panel>
          <v-expansion-panel-title>
            <v-chip variant="tonal" class="bg-primary">
              Tags & Icons (برچسب و نماد ها)
            </v-chip>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-row justify="center">
              <v-col cols="12" sm="3">
                <v-text-field
                    density="comfortable"
                    variant="outlined"
                    clearable=""

                    label="رنگ برچسب"
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
              <v-col cols="12" sm="3">
                <v-select
                    density="comfortable"
                    variant="outlined"
                    label="طرح برچسب"
                    :items="['text', 'flat', 'elevated', 'tonal', 'outlined','plain']"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                    density="comfortable"
                    variant="outlined"
                    clearable=""

                    label="رنگ نماد ها"
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
              <v-col cols="12" sm="3">
                <v-text-field
                    density="comfortable"
                    variant="outlined"
                    clearable=""

                    label="رنگ متن نماد"
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

        <v-expansion-panel>
          <v-expansion-panel-title>
            <v-chip variant="tonal" class="bg-primary">
              Video
            </v-chip>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-row justify="center">
              <v-col cols="12" sm="3">
                <v-select
                    density="comfortable"
                    variant="outlined"
                    label="سایز کادر ویدیو"
                    :items="['border-sm', 'border-md', 'border-lg', 'border-xl', 'border-xxl']"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                    density="comfortable"
                    variant="outlined"
                    clearable=""

                    label="رنگ زمینه ویدیو"
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
              <v-col cols="12" sm="3">
                <v-text-field
                    density="comfortable"
                    variant="outlined"
                    clearable=""

                    label="رنگ کادر"
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
              <v-col cols="12" sm="3">
                <v-select
                    density="comfortable"
                    variant="outlined"
                    label="نمایش ویدیو"
                    :items="['روشن', 'خاموش']"
                ></v-select>
              </v-col>
              <v-col cols="6" sm="6">
                <v-text-field
                    density="comfortable"
                    variant="outlined"
                    label="لینک ویدیو"
                ></v-text-field>
              </v-col>
              <v-col cols="6" sm="6">
                <v-file-input clearable=""
                              prepend-icon=""
                              density="comfortable"
                              variant="outlined"
                              label="آپلود ویدیو"/>
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
        در این قسمت می توانید دسته بندی ها و اطلاعات درون آنها را اضافه، حذف و ویرایش کنید.
      </h4>
      <GalleryDataTable/>
    </v-card-text>

    <v-card-actions class="float-left">
      <Dialog v-model="showAddCategoryDialog" :form-title="'دسته بندی جدید'">
        <template v-slot:button="props">
          <v-btn variant="flat"
                 color="primary"
                 text="دسته بندی جدید"
                 prepend-icon="mdi mdi-plus-circle-outline"
                 v-bind="props"
                 rounded
          />
        </template>

        <template #body>
          <v-col cols="12" sm="12">
            <v-text-field variant="outlined" label="نام دسته بندی"></v-text-field>
          </v-col>
        </template>

        <template #actionButtons>
          <v-btn
              color="green"
              variant="elevated"
              @click="showAddCategoryDialog = false"
          >
            ذخیره
          </v-btn>
          <v-btn
              color="red"
              variant="outlined"
              @click="showAddCategoryDialog = false"
          >
            لغو
          </v-btn>
        </template>
      </Dialog>
    </v-card-actions>
  </v-card>
  <!--Hidden-File-Input-->
  <v-file-input
      ref="fileInputRef"
      variant="solo-filled"
      style="display: none"
  ></v-file-input>
  <!--End-Hidden-File-Input-->
</template>

<style lang="scss" scoped>
.v-img {
  cursor: pointer;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}

</style>