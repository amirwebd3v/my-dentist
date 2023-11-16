<script setup lang="ts">
import {slideBanners} from "~/data/CustomComponents";
import {slideBannerSettings} from "~/data/CustomComponents";


const {$persianNumber} = useNuxtApp()


definePageMeta({
  layout: 'admin-layout',
});


// Function to open the file explorer
const fileInputRef = ref<HTMLInputElement | null>(null);
const openFileExplorer = () => {
  fileInputRef.value?.click();
};


const slideItems = ref(slideBanners)

const slides = ref(slideBanners.map((slide) => slide.id));
const selectedSlides = ref([]);

function toggle() {
  if (selectAllSlide.value) {
    selectedSlides.value = [];
  } else {
    selectedSlides.value = slides.value.slice();
  }
}

const selectAllSlide = computed(() => selectedSlides.value.length === slides.value.length);
const selectSomeSlide = computed(() => selectedSlides.value.length > 0);

function getSelectedListTitle() {
  if (selectAllSlide.value) return 'تمام اسلاید ها انتخاب شدند!';

  if (selectSomeSlide.value) return 'تعداد اسلاید انتخاب شده:';

  return 'هیچ اسلایدی انتخاب نشده است.';
}

function getSelectedListSubtitle() {
  if (selectAllSlide.value) return undefined;

  if (selectSomeSlide.value) return selectedSlides.value.length;

  return 'اسلاید مورد نظر خود را انتخاب کنید.';
}

// Related text-field values to selectedSlides
const tagValue = ref('');
const titleValue = ref('');
const contextValue = ref('');
const tagChipSizeValue = ref('default');
const tagColorValue = ref('');
const tagVariantValue = ref('elevated');
const titleColorValue = ref('');
const contextFontSizeValue = ref('18');
const contextColorValue = ref('');
const btnTextValue = ref('');
const btnColorValue = ref('');
const btnSizeValue = ref('default');
const btnLinkValue = ref('');


function mapSelectedSlidesData() {
  const selectedSlideIds = selectedSlides.value;
  selectedSlideIds.forEach((slideId) => {
    const slideIndex = slideBanners.findIndex((item) => item.id === slideId);
    if (slideIndex !== -1) {
      slideBanners[slideIndex].tag = tagValue.value;
      slideBanners[slideIndex].title = titleValue.value;
      slideBanners[slideIndex].context = contextValue.value;
      slideBanners[slideIndex].tagChipSize = tagChipSizeValue.value;
      slideBanners[slideIndex].tagColor = tagColorValue.value;
      slideBanners[slideIndex].tagVariant = tagVariantValue.value;
      slideBanners[slideIndex].titleColor = titleColorValue.value;
      slideBanners[slideIndex].contextFontSize = contextFontSizeValue.value;
      slideBanners[slideIndex].contextColor = contextColorValue.value;
      slideBanners[slideIndex].btnText = btnTextValue.value;
      slideBanners[slideIndex].btnColor = btnColorValue.value;
      slideBanners[slideIndex].btnSize = btnSizeValue.value;
      slideBanners[slideIndex].btnLink = btnLinkValue.value;
    }
  });
}


const tagInputColor = ref(tagColorValue);
const titleInputColor = ref(titleColorValue);
const contextInputColor = ref(contextColorValue);
const btnInputColor = ref(btnColorValue);
const updateTagColor = (color) => {
  tagColorValue.value = color;
  tagInputColor.value = color;
};
const updateTitleColor = (color) => {
  titleColorValue.value = color;
  titleInputColor.value = color;
};
const updateContextColor = (color) => {
  contextColorValue.value = color;
  contextInputColor.value = color;
};
const updateBtnColor = (color) => {
  btnColorValue.value = color;
  btnInputColor.value = color;
};


const settings = slideBannerSettings[0];
const delimiters = ref(settings.hideDelimiters);
const cycle = ref(settings.cycle);
const interval = ref(settings.intervalTime / 1000);
const verticalDelimiters = ref(settings.verticalDelimiters);
const delimitersColorValue = ref(settings.delimitersColor);


const handleSettingsChange = () => {
  settings.verticalDelimiters = verticalDelimiters.value;
  settings.hideDelimiters = delimiters.value;
  settings.cycle = cycle.value;
  settings.delimitersColor = delimitersColorValue.value;
  settings.intervalTime = interval.value * 1000;

};


const delimitersInputColor = ref(delimitersColorValue);
const updateDelimitersColor = (color) => {
  delimitersColorValue.value = color;
  delimitersInputColor.value = color;
};

function submitSlides() {
  // Update slide data for selected slides
  mapSelectedSlidesData();

  // Do something with the updated slide data
  console.log('Updated slides values in slideBanner:', slideBanners);
}

function submitSettings() {
  handleSettingsChange();
  // Do something with the updated slide data
  console.log('Updated hideDelimiters value in slideBannerSettings:', slideBannerSettings);
}
</script>


<template>


  <v-card rounded="0">
    <v-card-text>
      <h4 class="pb-10">
        <v-icon class="mdi mdi-information-outline"></v-icon>
        در این قسمت می توانید تنظیمات کلی اسلاید ها را مشخص نمایید.
      </h4>
      <v-row justify="center">
        <v-col cols="12" sm="4">
          <v-radio-group class="pa-0" v-model="delimiters">
            <template v-slot:label>
              <div><strong>دکمه پیمایش</strong></div>
            </template>
            <v-radio color="primary" class="text-black" label="نمایان" :value="false"/>
            <v-radio color="primary" label="پنهان" :value="true"/>
          </v-radio-group>
          <v-text-field
              :disabled="delimiters"
              density="comfortable"
              class="pl-10"
              variant="outlined"
              label="رنگ دکمه"
              clearable
              append-inner-icon="mdi-menu-down"
              v-model="delimitersColorValue"
          >
            <v-menu activator="parent" transition="scale-transition" location="end"
                    :close-on-content-click="false">
              <div class="d-flex flex-column">
                <v-color-picker theme="dark"
                                hide-inputs
                                position="absolute"
                                show-swatches
                                v-model="delimitersInputColor"
                                @update:modelValue="updateDelimitersColor"
                                mode="hexa"/>
              </div>
            </v-menu>
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-radio-group v-model="verticalDelimiters" :disabled="delimiters">
            <template v-slot:label>
              <div><strong> جهت نمایش </strong> دکمه پیمایش</div>
            </template>
            <v-radio color="primary" label="افقی" :value="false"/>
            <v-radio color="primary" label="عمودی - چپ" :value="'left'"/>
            <v-radio color="primary" label="عمودی - راست" :value="'right'"/>
          </v-radio-group>
        </v-col>
        <v-col cols="12" sm="4">
          <v-radio-group v-model="cycle">
            <template v-slot:label>
              <div><strong>چرخش</strong> اسلاید ها</div>
            </template>
            <v-radio color="primary" label="روشن" :value="true"/>
            <v-radio color="primary" label="خاموش" :value="false"/>
          </v-radio-group>
          <v-text-field
              :disabled="!cycle"
              density="comfortable"
              variant="outlined"
              label="زمان چرخش"
              clearable
              class="pl-10"
              suffix="ثانیه"
              hint="* به صورت پیش فرض ۶ ثانیه می باشد."
              v-model="interval"
          >

          </v-text-field>
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
             @click="submitSettings"
      >
      </v-btn>
    </v-card-actions>

  </v-card>


  <v-divider/>


  <v-card rounded="0">
    <v-card-text>
      <h4 class="pb-10">
        <v-icon class="mdi mdi-information-outline"></v-icon>
        در این قسمت می توانید اسلاید دلخواه خود را جایگزین، حذف یا اضافه نمایید.
      </h4>
      <v-row justify="start">
        <v-col
            v-for="items in slideItems"
            :key="items"
            class="d-flex"
            cols="12"
            md="3"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
                class="mx-auto"
                color="grey-lighten-4"
                v-bind="props"
            >
              <v-img
                  :src="items.imageSource"
                  lazy-src="https://bad.src/not/valid"
                  cover
                  class="bg-grey-lighten-2"
                  max-height="125"
              >
                <template v-slot:placeholder>
                  <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                  >
                    <v-progress-circular
                        indeterminate
                        color="grey-lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
                <v-expand-transition>
                  <div
                      v-if="isHovering"
                      class="d-flex justify-space-evenly transition-fast-in-fast-out bg-primary v-card--reveal text-h5"
                      style="height: 100%;"
                  >
                    <v-btn
                        icon="mdi mdi-image-remove-outline"
                        density="comfortable"
                        variant="outlined"
                        color="red"
                    >
                    </v-btn>
                    <v-btn
                        @click="openFileExplorer"
                        icon="mdi mdi-image-edit-outline"
                        density="comfortable"
                        variant="outlined"
                        color="yellow"
                    >
                    </v-btn>
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="py-1 text-center rounded-b bg-primary text-white"
              >
                {{ 'اسلاید ' + $persianNumber(items.id) }}
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="float-left">
      <v-btn class="text-none"
             size="small"
             color="primary"
             variant="flat"
             icon="mdi mdi-image-plus-outline"
             @click="openFileExplorer"
      >
      </v-btn>
    </v-card-actions>


  </v-card>


  <v-divider/>


  <v-card rounded="b-lg">
    <v-card-text>
      <h4 class="pb-10">
        <v-icon class="mdi mdi-information-outline"></v-icon>
        در این قسمت می توانید اسلاید ها را شخصی سازی نمایید.
      </h4>


      <v-row justify="center">
        <v-col cols="12" md="4">
          <v-select v-model="selectedSlides" :items="slides" label="اسلاید" multiple variant="underlined">
            <template v-slot:prepend-item>
              <v-list-item title="انتخاب همه" @click="toggle">
                <template v-slot:prepend>
                  <v-checkbox-btn
                      :color="selectSomeSlide ? 'primary' : undefined"
                      :indeterminate="selectSomeSlide && !selectAllSlide"
                      :model-value="selectSomeSlide"
                  ></v-checkbox-btn>
                </template>
              </v-list-item>

              <v-divider class="mt-2"></v-divider>
            </template>
            <template v-slot:append-item>

              <v-divider class="mb-2"></v-divider>

              <v-list-item :subtitle="getSelectedListSubtitle()" :title="getSelectedListTitle()" disabled>
                <template v-slot:prepend>
                  <v-avatar icon="mdi mdi-window-restore" color="primary"/>
                </template>
              </v-list-item>
            </template>
          </v-select>
        </v-col>
      </v-row>
      <v-expansion-panels variant="popout" class="my-4">

        <v-expansion-panel>
         <v-expansion-panel-title>
            <v-chip variant="tonal" class="bg-primary">
              Tag (برچسب)
            </v-chip>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-row justify="center">
              <v-col cols="12" sm="3">
                <v-text-field density="comfortable" v-model="tagValue" variant="outlined"
                              label="برچسب"></v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                    clearable
                    density="comfortable"
                    variant="outlined"
                    type="input"
                    label="رنگ"
                    append-inner-icon="mdi-menu-down"
                    v-model="tagColorValue"
                >
                  <v-menu activator="parent" transition="scale-transition" location="end"
                          :close-on-content-click="false">
                    <div class="d-flex flex-column">
                      <v-color-picker theme="dark"
                                      hide-inputs
                                      position="absolute"
                                      show-swatches
                                      v-model="tagInputColor"
                                      @update:modelValue="updateTagColor"
                                      mode="hexa"/>
                    </div>
                  </v-menu>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-select
                    density="comfortable"
                    variant="outlined"
                    label="طرح"
                    v-model="tagVariantValue"
                    :items="['text', 'flat', 'elevated', 'tonal', 'outlined','plain']"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="3">
                <v-select
                    density="comfortable"
                    variant="outlined"
                    label="سایز"
                    v-model="tagChipSizeValue"
                    :items="['small', 'large', 'x-large', 'default', 'x-small']"
                ></v-select>
              </v-col>
            </v-row>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
         <v-expansion-panel-title>
            <v-chip variant="tonal" class="bg-primary">
              Title (موضوع - تیتر)
            </v-chip>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-row justify="center">
              <v-col cols="12" sm="6">
                <v-text-field density="comfortable" v-model="titleValue" variant="outlined"
                              label="موضوع"></v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                    density="comfortable"
                    variant="outlined"
                    label="رنگ"
                    clearable
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
              Context (محتوای متنی)
            </v-chip>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-row justify="center">
              <v-col cols="12" sm="6">
                <v-textarea v-model="contextValue" variant="outlined" label="متن"></v-textarea>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                    density="comfortable"
                    variant="outlined"
                    label="رنگ متن"
                    clearable
                    v-model="contextColorValue"
                    append-inner-icon="mdi-menu-down"
                >
                  <v-menu activator="parent" transition="scale-transition" location="end"
                          :close-on-content-click="false">
                    <div class="d-flex flex-column">
                      <v-color-picker theme="dark"
                                      hide-inputs
                                      position="relative"
                                      show-swatches
                                      v-model="contextInputColor"
                                      @update:modelValue="updateContextColor"
                                      mode="hexa"/>
                    </div>
                  </v-menu>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-select
                    density="comfortable"
                    variant="outlined"
                    v-model="contextFontSizeValue"
                    label="سایز فونت"
                    :items="['12', '13', '14', '16', '18', '20']"
                ></v-select>
              </v-col>
            </v-row>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title>
            <v-chip variant="tonal" class="bg-primary">
              Button (دکمه)
            </v-chip>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-row justify="center">
              <v-col cols="12" sm="3">
                <v-text-field density="comfortable" v-model="btnTextValue" variant="outlined"
                              label="عنوان"></v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                    clearable
                    density="comfortable"
                    variant="outlined"
                    label="رنگ"
                    append-inner-icon="mdi-menu-down"
                    v-model="btnColorValue"
                >
                  <v-menu activator="parent" transition="scale-transition" location="end"
                          :close-on-content-click="false">
                    <div class="d-flex flex-column">
                      <v-color-picker theme="dark"
                                      hide-inputs
                                      position="relative"
                                      show-swatches
                                      v-model="btnInputColor"
                                      @update:modelValue="updateBtnColor"
                                      mode="hexa"/>
                    </div>
                  </v-menu>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                    clearable
                    density="comfortable"
                    variant="outlined"
                    label="لینک"
                    v-model="btnLinkValue"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-select
                    density="comfortable"
                    variant="outlined"
                    label="سایز"
                    v-model="btnSizeValue"
                    :items="['small', 'large', 'x-large', 'default', 'x-small']"
                ></v-select>
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
             @click="submitSlides"
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