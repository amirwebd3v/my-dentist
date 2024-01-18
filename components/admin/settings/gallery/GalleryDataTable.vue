<script setup lang="ts">


import Dialog from "~/components/shared/modal/Dialog.vue";
import {about} from "~/data/CustomComponents";

const buttonClicked = ref(false);

const toggleButtonClick = () => {
  buttonClicked.value = !buttonClicked.value;
};


const {$persianNumber} = useNuxtApp()

const page = ref(1);
const itemsPerPage = 10;

// Replace this with your actual items data
const items = ref([
  /* Your items data */
]);

const paginatedItems = computed(() => {
  const startIndex = (page.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return items.value.slice(startIndex, endIndex);
});

function onPageChange(newPage: number): void {
  page.value = newPage;
}

function addItem(item) {
  editedItem.value = {...item}
  dialogAdd.value = true
}

function editItem(item) {
  editedItem.value = {...item}
  dialogEdit.value = true
}

function deleteItem(item) {
  deleteId.value = item.id
  dialogDelete.value = true
}


const showPostAddDialog = ref(false)
const showPostEditDialog = ref(false)
const showPostDeleteDialog = ref(false)
const showCategoryDeleteDialog = ref(false)
const showCategoryEditDialog = ref(false)


const deleteId = ref()

const editedItem = ref({
  id: 0,
  title: '',
  icon: '',
  text: '',
  iconColor: '',
  iconBackColor: '',
  textColor: ''
})

const chips = ref(['Programming', 'Playing video games', 'Watching movies', 'Sleeping'])
const tags = ref(['Streaming', 'Eating'])


const remove = (item) => {
  chips.value.splice(chips.value.indexOf(item), 1)
}
</script>


<template>
  <v-card variant="outlined" class="mb-5">
    <v-table>
      <tbody>
      <tr>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title class="font-weight-bold" hide-actions ripple
                                     style="pointer-events: none !important;">

              <v-row class="justify-space-between align-center">
                <div>
                  <v-btn :ripple="false" @click="toggleButtonClick" style="pointer-events: auto;"
                         :icon="buttonClicked ? 'mdi mdi-menu-down' : 'mdi mdi-menu-up'"
                         size="small" variant="text"/>
                  <span>کامپوزیت</span>
                </div>
                <div v-if="buttonClicked" style="pointer-events: auto;">
                  <Dialog form-title="پست جدید" v-model="showPostAddDialog">
                    <template v-slot:button="props">
                      <v-btn flat="" variant="text" color="blue" icon="mdi mdi-plus" v-bind="props"/>
                    </template>
                    <template #body>
                      <v-col cols="12">
                        <v-text-field variant="outlined" v-model="editedItem.text" label="عنوان"></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field variant="outlined" v-model="editedItem.text" label="عنوان فرعی"></v-text-field>
                      </v-col>
                      <v-col cols="12">
                          <v-combobox
                              v-model="chips"
                              :items="tags"
                              chips=""
                              clearable=""
                              label="برچسب ها"
                              multiple=""
                              variant="outlined"
                              hint="بعد از نوشتن هر برچسب دکمه Enter را بزنید."
                          >
                            <template v-slot:selection="{ attrs, tags, select, selected }">
                              <v-chip
                                  v-bind="attrs"
                                  :model-value="selected"
                                  closable=""
                                  @click="select"
                                  @click:close="remove(tags)"
                              >
                                <strong>{{ tags }}</strong>&nbsp;
                                <span>(interest)</span>
                              </v-chip>
                            </template>
                          </v-combobox>
                      </v-col>
                      <v-col cols="12" class="pb-10">
                        <div class="text-medium-emphasis pb-2">محل آپلود تصاویر و ویدیو ها</div>
                        <v-file-input
                            placeholder="Upload your documents"
                            variant="outlined"
                            prepend-icon=""
                            hide-details=""
                            multiple=""
                        >
                          <template v-slot:selection="{ fileNames }" >
                            <template v-for="fileName in fileNames" :key="fileName"  >
                              <v-card width="100" height="100" class="ma-1 justify-center align-center">
                                <v-col align-self="auto">
                                  <v-img
                                      width="auto"
                                      height="50"
                                      src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
                                  >
                                  </v-img>

                                  <div class="font-12">
                                    <p class="text-truncate">{{ fileName }}</p>
                                  </div>

                                </v-col>


                              </v-card>

                            </template>
                          </template>
                        </v-file-input>
                      </v-col>
                    </template>
                    <template #actionButtons>
                      <v-btn
                          @click="showPostAddDialog = false"
                          color="green"
                          variant="elevated"
                      >
                        ذخیره
                      </v-btn>
                      <v-btn
                          color="red"
                          variant="outlined"
                          @click="showPostAddDialog = false"
                      >
                        لغو
                      </v-btn>
                    </template>
                  </Dialog>
                  <Dialog form-title="ویرایش دسته بندی" v-model="showCategoryEditDialog">
                    <template v-slot:button="props">
                      <v-btn flat="" density="compact" variant="text" color="green" icon="mdi mdi-pencil"
                             v-bind="props"/>
                    </template>
                    <template #body>
                      <v-col cols="12" sm="12">
                        <v-text-field variant="outlined" v-model="editedItem.text" label="متن"></v-text-field>
                      </v-col>
                    </template>
                    <template #actionButtons>
                      <v-btn
                          @click="showCategoryEditDialog = false"
                          color="green"
                          variant="elevated"
                      >
                        ذخیره
                      </v-btn>
                      <v-btn
                          color="red"
                          variant="outlined"
                          @click="showCategoryEditDialog = false"
                      >
                        لغو
                      </v-btn>
                    </template>
                  </Dialog>
                  <Dialog form-title="حذف دسته بندی" v-model="showCategoryDeleteDialog">
                    <template v-slot:button="props">
                      <v-btn flat="" density="compact" variant="text" color="red" icon="mdi mdi-delete" v-bind="props"/>
                    </template>
                    <template #body>
                      <v-col cols="12" sm="12">
                        <p class="pb-5"> آیا از حدف دسته بندی <strong>کامپوزیت</strong> مطمئن هستید؟ </p>
                      </v-col>
                    </template>
                    <template #actionButtons>
                      <v-btn
                          @click="showCategoryDeleteDialog = false"
                          color="red"
                          variant="elevated"
                      >
                        لغو
                      </v-btn>
                      <v-btn
                          color="green"
                          variant="outlined"
                          @click="showCategoryDeleteDialog = false"
                      >
                        بله
                      </v-btn>
                    </template>
                  </Dialog>
                </div>
              </v-row>
            </v-expansion-panel-title>

            <v-expansion-panel-text>
              <v-table>
                <thead>
                <tr>
                  <th class="font-weight-bold pl-0">ردیف</th>
                  <th class="font-weight-bold  text-center pr-0">عنوان</th>
                  <th class="font-weight-bold  text-center">عنوان فرعی</th>
                  <th class="font-weight-bold text-center">برچسب ها</th>
                  <th class="font-weight-bold text-center">رسانه</th>
                  <th class="text-left font-weight-bold">عملیات</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td class="pl-0">۱</td>
                  <td style="max-width: 75px" class="text-center text-truncate pr-0">Mountain Sunset</td>
                  <td style="max-width: 100px" class="text-center text-truncate">A beautiful sunset over the mountain
                    range
                  </td>
                  <td style="max-width: 100px;" class="text-center">
                    <v-menu>
                      <template v-slot:activator="{ props }">
                        <v-btn size="small" prepend-icon="mdi-dots-vertical"
                               variant="text"
                               text="مشاهده" v-bind="props"/>
                      </template>

                      <v-list>
                        <v-list-item>
                          <v-list-item-title class="font-12 font-weight-regular">sunset</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </td>
                  <td style="max-width: 100px;" class="text-truncate  text-center">
                    <v-menu>
                      <template v-slot:activator="{ props }">
                        <v-btn size="small" prepend-icon="mdi-dots-vertical"
                               variant="text"
                               text="مشاهده" v-bind="props"/>
                      </template>

                      <v-list>
                        <v-list-item>
                          <!--                                       TODO: using v-if to choose image or video for list-items &ndash;&gt;-->
                          <v-list-item-title class="frame-size mb-1">
                            <v-img src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"/>
                          </v-list-item-title>
                          <v-list-item-title class="frame-size">
                            <div class="videoWrapper">
                              <video playsinline autoplay muted loop>
                                <source
                                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
                                    type="video/mp4">
                              </video>
                            </div>
                          </v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </td>
                  <td>
                    <v-row justify="end" class="pl-3">
                      <Dialog form-title="ویرایش پست" v-model="showPostEditDialog">
                        <template v-slot:button="props">
                          <v-btn flat="" variant="text" density="compact" size="small" color="green" icon="mdi mdi-pencil" v-bind="props"/>
                        </template>
                        <template #body>
                          <v-col cols="12">
                            <v-text-field variant="outlined" v-model="editedItem.text" label="عنوان"></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field variant="outlined" v-model="editedItem.text" label="عنوان فرعی"></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-combobox
                                v-model="chips"
                                :items="tags"
                                chips=""
                                clearable=""
                                label="برچسب ها"
                                multiple=""
                                variant="outlined"
                                hint="بعد از نوشتن هر برچسب دکمه Enter را بزنید."
                            >
                              <template v-slot:selection="{ attrs, tags, select, selected }">
                                <v-chip
                                    v-bind="attrs"
                                    :model-value="selected"
                                    closable=""
                                    @click="select"
                                    @click:close="remove(tags)"
                                >
                                  <strong>{{ tags }}</strong>&nbsp;
                                  <span>(interest)</span>
                                </v-chip>
                              </template>
                            </v-combobox>
                          </v-col>
                          <v-col cols="12" class="pb-10">
                            <div class="text-medium-emphasis pb-2">محل آپلود تصاویر و ویدیو ها</div>
                            <v-file-input
                                placeholder="Upload your documents"
                                variant="outlined"
                                prepend-icon=""
                                hide-details=""
                                multiple=""
                            >
                              <template v-slot:selection="{ fileNames }" >
                                <template v-for="fileName in fileNames" :key="fileName"  >
                                  <v-card width="100" height="100" class="ma-1 justify-center align-center">
                                    <v-col align-self="auto">
                                      <v-img
                                          width="auto"
                                          height="50"
                                          src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
                                      >
                                      </v-img>

                                      <div class="font-12">
                                        <p class="text-truncate">{{ fileName }}</p>
                                      </div>

                                    </v-col>


                                  </v-card>

                                </template>
                              </template>
                            </v-file-input>
                          </v-col>
                        </template>
                        <template #actionButtons>
                          <v-btn
                              @click="showPostEditDialog = false"
                              color="green"
                              variant="elevated"
                          >
                            ذخیره
                          </v-btn>
                          <v-btn
                              color="red"
                              variant="outlined"
                              @click="showPostEditDialog = false"
                          >
                            لغو
                          </v-btn>
                        </template>
                      </Dialog>
                      <Dialog form-title="حذف دسته بندی" v-model="showPostDeleteDialog">
                        <template v-slot:button="props">
                          <v-btn flat="" density="compact" size="small" variant="text" color="red" icon="mdi mdi-delete" v-bind="props"/>
                        </template>
                        <template #body>
                          <v-col cols="12" sm="12">
                            <p class="pb-5"> آیا از حدف پست <strong>شماره فلان</strong> مطمئن هستید؟ </p>
                          </v-col>
                        </template>
                        <template #actionButtons>
                          <v-btn
                              @click="showPostDeleteDialog = false"
                              color="red"
                              variant="elevated"
                          >
                            لغو
                          </v-btn>
                          <v-btn
                              color="green"
                              variant="outlined"
                              @click="showPostDeleteDialog = false"
                          >
                            بله
                          </v-btn>
                        </template>
                      </Dialog>
                    </v-row>
                  </td>
                </tr>


                </tbody>


              </v-table>
              <v-divider thickness="5"/>
              <v-pagination
                  v-model="page"
                  :length="Math.ceil(items.length / itemsPerPage)"
                  @input="onPageChange"
              ></v-pagination>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<style lang="scss" scoped>
div:deep(.v-expansion-panel-text__wrapper) {
  padding: 0 !important;
}


</style>