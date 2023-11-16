<script setup lang="ts">
import GalleryDataTable from "~/components/admin/settings/gallery/GalleryDataTable.vue";

definePageMeta({
  layout: 'admin-layout',
});

import {gallery} from '~/data/CustomComponents'
import CategoryDataTable from "~/components/admin/settings/gallery/CategoryDataTable.vue";

const {$persianNumber} = useNuxtApp()

// Function to open the file explorer
const fileInputRef = ref<HTMLInputElement | null>(null);
const openFileExplorer = () => {
  fileInputRef.value?.click();
};


const categories = ref(gallery)

const category = ref(gallery.map((gallery) => gallery.id));
const selectedCategories = ref([]);

function toggle() {
  if (selectAllCategories.value) {
    selectedCategories.value = [];
  } else {
    selectedCategories.value = category.value.slice();
  }
}

const selectAllCategories = computed(() => selectedCategories.value.length === category.value.length);
const selectSomeCategories = computed(() => selectedCategories.value.length > 0);

function getSelectedListTitle() {
  if (selectAllCategories.value) return 'تمام دسته بندی ها انتخاب شدند!';

  if (selectSomeCategories.value) return 'تعداد دسته بندی انتخاب شده:';

  return 'هیچ دسته بندی انتخاب نشده است.';
}

function getSelectedListSubtitle() {
  if (selectAllCategories.value) return undefined;

  if (selectSomeCategories.value) return selectedCategories.value.length;

  return 'دسته بندی مورد نظر خود را انتخاب کنید.';
}

// Related text-field values to selectedCategories
const imageSourceValue = ref('');
const titleValue = ref('');
const subTitleValue = ref('');
const titleColorValue = ref('');
const titleBackColorValue = ref('');


function mapSelectedCategoriesData() {
  const selectedCategoriesIds = selectedCategories.value;
  selectedCategoriesIds.forEach((galleryId) => {
    const galleryIndex = gallery.findIndex((gallery) => gallery.id === galleryId);
    if (galleryIndex !== -1) {
      // gallery[galleryIndex].imageSource = imageSourceValue.value;
      gallery[galleryIndex].title = titleValue.value;
      gallery[galleryIndex].subTitle = subTitleValue.value;
      gallery[galleryIndex].titleColor = titleColorValue.value;
      gallery[galleryIndex].titleBackColor = titleBackColorValue.value;
    }
  });
}


const titleInputColor = ref(titleColorValue);
const titleBackInputColor = ref(titleBackColorValue);
const updateTitleBackInputColor = (color) => {
  titleBackColorValue.value = color;
  titleBackInputColor.value = color;
};
const updateTitleColor = (color) => {
  titleColorValue.value = color;
  titleInputColor.value = color;
};

function submitCategories() {
  // Update gallery data for selected gallery
  mapSelectedCategoriesData();

  // Do something with the updated gallery data
  console.log('Updated data in gallery Settings:', gallery);
}


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
                    :items="['روشن', 'خاموش', 'border-lg', 'border-xl', 'border-xxl']"
                ></v-select>
              </v-col>
            </v-row>
          </v-expansion-panel-text>
        </v-expansion-panel>


      </v-expansion-panels>
    </v-card-text>


  </v-card>


  <v-divider/>

  <v-card rounded="0">
    <v-card-text>
      <h4 class="pb-10">
        <v-icon class="mdi mdi-information-outline"></v-icon>
        در این قسمت می توانید دسته بندی ها را اضافه، حذف یا ویرایش کنید.
      </h4>
      <CategoryDataTable/>
    </v-card-text>
  </v-card>
  <v-divider/>
  <v-card rounded="b-lg">
    <v-card-text>
      <h4 class="pb-10">
        <v-icon class="mdi mdi-information-outline"></v-icon>
        در این قسمت می توانید تصاویر یا ویدیو های خود را به همراه اطلاعات دیگر در دسته بندی مربوط به آن ها بارگذاری
        کنید.
      </h4>
      <GalleryDataTable/>
    </v-card-text>
    <v-card-actions class="float-left">
      <v-btn class="text-none"
             color="primary"
             variant="flat"
             prepend-icon="mdi mdi-check-circle-outline"
             rounded
             text="ثبت"
             @click="submitCategories"
      >
      </v-btn>
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