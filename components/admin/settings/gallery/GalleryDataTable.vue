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

const dialogAdd = ref(false)
const dialogDelete = ref(false)
const dialogEdit = ref(false)


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
                <div class="font-weight-bold" style="pointer-events: auto">
                  <v-btn :ripple="false" @click="toggleButtonClick"
                         :icon="buttonClicked ? 'mdi mdi-menu-down' : 'mdi mdi-menu-up'"
                         size="small" variant="text"/>
                  کامپوزیت
                </div>
                <div v-if="buttonClicked">

                 <Dialog form-title="ویرایش پست" v-model="dialogEdit">
                   <template v-slot:button="props">
                     <v-icon size="small" class="me-2 mdi mdi-plus" color="blue" v-bind="props"
                             @click="editItem"/>
                   </template>

                   <template #body>
                     <v-col cols="12" sm="12">
                       <v-text-field variant="outlined" v-model="editedItem.text" label="متن"></v-text-field>
                     </v-col>
                   </template>
                   <template #actionButtons>
                     <v-btn
                         @click="save"
                         color="green"
                         variant="elevated"
                     >
                       ذخیره
                     </v-btn>
                     <v-btn
                         color="red"
                         variant="outlined"
                         @click="close"
                     >
                       لغو
                     </v-btn>
                   </template>
                 </Dialog>
                  <v-icon size="small" class="me-2 mdi mdi-pencil" color="green"
                          @click="editItem"/>
                  <v-icon size="small" class="mdi mdi-delete" color="red"
                          @click="deleteItem"/>
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
                  <td style="max-width: 100px" class="text-center">
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
                  <td style="max-width: 100px" class="text-truncate  text-center">
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
                                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
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
                      <v-icon size="small" class="me-2 mdi mdi-pencil" color="green" @click="editItem(item)"/>
                      <v-icon size="small" class="mdi mdi-delete" color="red" @click="deleteItem(item)"/>
                    </v-row>
                    <v-dialog v-model="dialogDelete" max-width="350px">
                      <v-card>
                        <v-card-title>هشدار</v-card-title>
                        <v-divider/>
                        <v-card-text>آیا مطمئن به حذف متن شماره {{ deleteId }} هستید؟</v-card-text>
                        <v-card-actions class="justify-space-around">
                          <v-btn color="green" variant="elevated" @click="closeDelete">لغو</v-btn>
                          <v-btn color="red" variant="outlined" @click="deleteItemConfirm">حذف</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
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