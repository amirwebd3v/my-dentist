<script setup lang="ts">
import {services} from "~/data/CustomComponents";

definePageMeta({
  layout: 'admin-layout',
});

const {$persianNumber} = useNuxtApp()

// Function to open the file explorer
const fileInputRef = ref<HTMLInputElement | null>(null);
const openFileExplorer = () => {
  fileInputRef.value?.click();
};


const serviceItems = ref(services)

const service = ref(services.map((service) => service.id));
const selectedServices = ref([]);

function toggle() {
  if (selectAllService.value) {
    selectedServices.value = [];
  } else {
    selectedServices.value = service.value.slice();
  }
}

const selectAllService = computed(() => selectedServices.value.length === service.value.length);
const selectSomeService = computed(() => selectedServices.value.length > 0);

function getSelectedListTitle() {
  if (selectAllService.value) return 'تمام سرویس ها انتخاب شدند!';

  if (selectSomeService.value) return 'تعداد سرویس انتخاب شده:';

  return 'هیچ سرویسی انتخاب نشده است.';
}

function getSelectedListSubtitle() {
  if (selectAllService.value) return undefined;

  if (selectSomeService.value) return selectedServices.value.length;

  return 'سرویس مورد نظر خود را انتخاب کنید.';
}

// Related text-field values to selectedServices
const iconValue = ref('');
const titleValue = ref('');
const contextValue = ref('');
const titleColorValue = ref('');
const titleBackColorValue = ref('');


function mapSelectedServicesData() {
  const selectedServiceIds = selectedServices.value;
  selectedServiceIds.forEach((serviceId) => {
    const serviceIndex = services.findIndex((service) => service.id === serviceId);
    if (serviceIndex !== -1) {
      services[serviceIndex].icon = iconValue.value;
      services[serviceIndex].title = titleValue.value;
      services[serviceIndex].context = contextValue.value;
      services[serviceIndex].titleColor = titleColorValue.value;
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

function submitServices() {
  // Update service data for selected services
  mapSelectedServicesData();

  // Do something with the updated service data
  console.log('Updated data in serviceSettings:', services);
}

</script>

<template>
  <v-card rounded="0">
    <v-card-text>
      <h4 class="pb-10">
        <v-icon class="mdi mdi-information-outline"></v-icon>
        در این قسمت می توانید تصویر یا نماد دلخواه سرویس خود را جایگزین، حذف یا اضافه نمایید.
      </h4>
      <v-row justify="start">
        <v-col
            v-for="items in serviceItems"
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
                  :src="items.icon"
                  lazy-src="https://bad.src/not/valid"
                  cover=""
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
                      class="transition-fast-in-fast-out bg-primary v-card--reveal text-h5"
                      style="height: 100%;"
                  >
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="space-evenly"
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
                    </v-row>
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="py-1 text-center bg-primary text-white rounded-b text-truncate">
                {{ 'سرویس ' + $persianNumber(items.id) + ': ' + items.title }}
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
             icon="mdi mdi-briefcase-plus-outline"
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
        در این قسمت می توانید سرویس های خود را شخصی سازی نمایید.
      </h4>


      <v-row justify="center">
        <v-col cols="12" md="4">
          <v-select v-model="selectedServices" :items="service" label="سرویس" multiple="" variant="underlined">
            <template v-slot:prepend-item>
              <v-list-item title="انتخاب همه" @click="toggle">
                <template v-slot:prepend>
                  <v-checkbox-btn
                      :color="selectSomeService ? 'primary' : ''"
                      :indeterminate="selectSomeService && !selectAllService"
                      :model-value="selectSomeService"
                  ></v-checkbox-btn>
                </template>
              </v-list-item>

              <v-divider class="mt-2"></v-divider>
            </template>
            <template v-slot:append-item>

              <v-divider class="mb-2"></v-divider>

              <v-list-item :subtitle="<string>getSelectedListSubtitle()" :title="getSelectedListTitle()" disabled="">
                <template v-slot:prepend>
                  <v-avatar icon="mdi mdi-briefcase-outline" color="primary"/>
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
              Context (محتوای متنی)
            </v-chip>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-row justify="center">
              <v-col cols="12" sm="6">
                <v-textarea v-model="contextValue" variant="outlined" label="متن"></v-textarea>
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
              <v-col cols="12" sm="3">
                <v-text-field density="comfortable" v-model="titleValue" variant="outlined"
                              label="عنوان سرویس"></v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                    clearable=""
                    density="comfortable"
                    variant="outlined"
                    label="رنگ عنوان"
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
              <v-col cols="12" sm="3">
                <v-text-field
                    density="comfortable"
                    variant="outlined"
                    label="رنگ پس زمینه"
                    clearable=""
                    v-model="titleBackColorValue"
                    append-inner-icon="mdi-menu-down"
                >
                  <v-menu activator="parent" transition="scale-transition" location="end"
                          :close-on-content-click="false">
                    <div class="d-flex flex-column">
                      <v-color-picker theme="dark"
                                      hide-inputs
                                      position="relative"
                                      show-swatches
                                      v-model="titleBackInputColor"
                                      @update:modelValue="updateTitleBackInputColor"
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
             @click="submitServices"
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