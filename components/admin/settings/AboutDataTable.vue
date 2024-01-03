<script setup lang="ts">

import Dialog from "~/components/shared/modal/Dialog.vue";
import {about} from "~/data/CustomComponents";

const {$persianNumber} = useNuxtApp()


const dialogAdd = ref(false)
const dialogDelete = ref(false)
const dialogEdit = ref(false)

const aboutItems = ref(about)
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

const defaultItem = {
  id: 0,
  title: '',
  icon: '',
  text: '',
  iconColor: '',
  iconBackColor: '',
  textColor: ''
}

const formTitle = computed(() => {
  return editedItem.value.id ? 'متن جدید' : 'ویرایش'
})



watch(dialogDelete, val => {
  val || closeDelete()
})

function addItem(item) {
  editedItem.value = item.id
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

function deleteItemConfirm() {
  const index = aboutItems.value.findIndex(i => i.id === deleteId.value)
  aboutItems.value.splice(index, 1)
  closeDelete()
}

function closeDelete() {
  dialogDelete.value = false
  deleteId.value = ''
}

function save() {

  // Find index of edited item
  const index = aboutItems.value.findIndex(item => item.id === editedItem.value.id)

  // If item exists, update it
  if (index !== -1) {
    aboutItems.value[index] = editedItem.value
  }

  // Else, push new item
  else {
    aboutItems.value.push(editedItem.value)
  }

  close()

}


const textInputColor = ref(editedItem.value.textColor);
const iconInputColor = ref(editedItem.value.iconColor);
const iconBackInputColor = ref(editedItem.value.iconBackColor);

function updateTextColor(color) {
  editedItem.value.textColor = color
}

function updateIconBackInputColor(color) {
  editedItem.value.iconBackColor = color
}

function updateIconInputColor(color) {
  editedItem.value.iconColor = color
}

</script>

<template>
  <v-card variant="flat" rounded="xl">
    <v-table hover="" style="background-color: #eeeeee">
      <thead class="text-truncate bg-grey-lighten-2">
      <tr>
        <th class="text-right align-start pl-0 font-weight-bold">ردیف</th>
        <th class="px-md-0 font-weight-bold"> متن</th>
        <th class="px-md-0 font-weight-bold">رنگ متن</th>
        <th class="px-md-0 font-weight-bold">نماد</th>
        <th class="px-md-0 font-weight-bold">رنگ نماد</th>
        <th class="px-md-0 font-weight-bold">رنگ زمینه نماد</th>
        <th class="text-left font-weight-bold">عملیات</th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="item in aboutItems"
          :key="item.id"
      >
        <td class="pl-0 font-weight-bold">{{ $persianNumber(item.id) }}</td>
        <td style="max-width: 200px" class="text-truncate pr-0">{{ item.text }}</td>
        <td>
          <div class="color-box" :style="`background-color: ${item.textColor}`"/>
        </td>
        <td class="pr-0">
          <v-icon>{{ item.icon }}</v-icon>
        </td>
        <td>
          <div class="color-box" :style="`background-color: ${item.iconColor}`"/>
        </td>
        <td class="pr-7">
          <div class="color-box" :style="`background-color: ${item.iconBackColor}`"/>
        </td>
        <td>
          <v-row justify="end" class="pl-3">
            <Dialog :form-title="formTitle" v-model="dialogEdit">
              <template v-slot:button="props">
                <v-icon
                    color="green"

                    class="mdi mdi-pencil"
                    v-bind="props"
                    @click="editItem"
                    >
                </v-icon>
              </template>

              <template #body>
                <v-col cols="12" sm="12">
                  <v-textarea variant="outlined" v-model="editedItem.text" label="متن"></v-textarea>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                      clearable=""
                      density="comfortable"
                      variant="outlined"
                      append-inner-icon="mdi-menu-down"
                      v-model="editedItem.textColor" label="رنگ متن"
                  >
                    <v-menu activator="parent" transition="scale-transition" location="end"
                            :close-on-content-click="false">
                      <div class="d-flex flex-column">
                        <v-color-picker theme="dark"
                                        hide-inputs
                                        position="relative"
                                        show-swatches
                                        v-model="textInputColor"
                                        @update:modelValue="updateTextColor"
                                        mode="hexa"/>
                      </div>
                    </v-menu>
                  </v-text-field>

                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field density="comfortable" v-model="editedItem.icon"
                                label="نماد" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                      density="comfortable"
                      variant="outlined"
                      clearable=""
                      v-model="editedItem.iconColor"
                      label="رنگ نماد"
                      append-inner-icon="mdi-menu-down"
                  >
                    <v-menu activator="parent" transition="scale-transition" location="end"
                            :close-on-content-click="false">
                      <div class="d-flex flex-column">
                        <v-color-picker theme="dark"
                                        hide-inputs
                                        position="relative"
                                        show-swatches
                                        v-model="iconInputColor"
                                        @update:modelValue="updateIconInputColor"
                                        mode="hexa"/>
                      </div>
                    </v-menu>
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                      density="comfortable"
                      variant="outlined"
                      clearable=""
                      v-model="editedItem.iconBackColor"
                      label="رنگ زمینه نماد"
                      append-inner-icon="mdi-menu-down"
                  >
                    <v-menu activator="parent" transition="scale-transition" location="end"
                            :close-on-content-click="false">
                      <div class="d-flex flex-column">
                        <v-color-picker theme="dark"
                                        hide-inputs
                                        position="relative"
                                        show-swatches
                                        v-model="iconBackInputColor"
                                        @update:modelValue="updateIconBackInputColor"
                                        mode="hexa"/>
                      </div>
                    </v-menu>
                  </v-text-field>
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

            <Dialog :form-title="'هشدار'" v-model="dialogDelete">
              <template v-slot:button="props">
                <v-icon
                    color="red"
                class="mdi mdi-delete"
                @click="deleteItem"
                v-bind="props"
                ></v-icon>
              </template>

              <template #body>
                آیا مطمئن به حذف متن شماره {{ deleteId }} هستید؟
              </template>

              <template #actionButtons>
                <v-btn color="green" variant="elevated" @click="closeDelete">لغو</v-btn>
                <v-btn color="red" variant="outlined" @click="deleteItemConfirm">حذف</v-btn>
              </template>
            </Dialog>
          </v-row>


        </td>
      </tr>
      </tbody>
    </v-table>
  </v-card>

  <v-card-actions class="float-left px-0">

    <Dialog :form-title="formTitle">
      <template v-slot:button="props">
        <v-btn
            color="primary"
            variant="flat"
            size="small"
            class="text-none"
            v-bind="props"
            @click="addItem"
            icon="mdi mdi-text-box-plus-outline">
        </v-btn>
      </template>

      <template #body>
        <v-col cols="12" sm="12">
          <v-textarea variant="outlined" v-model="editedItem.text" label="متن"></v-textarea>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
              clearable=""
              density="comfortable"
              variant="outlined"
              append-inner-icon="mdi-menu-down"
              v-model="editedItem.textColor" label="رنگ متن"
          >
            <v-menu activator="parent" transition="scale-transition" location="end"
                    :close-on-content-click="false">
              <div class="d-flex flex-column">
                <v-color-picker theme="dark"
                                hide-inputs
                                position="relative"
                                show-swatches
                                v-model="textInputColor"
                                @update:modelValue="updateTextColor"
                                mode="hexa"/>
              </div>
            </v-menu>
          </v-text-field>

        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field density="comfortable" v-model="editedItem.icon"
                        label="نماد" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
              density="comfortable"
              variant="outlined"
              clearable=""
              v-model="editedItem.iconColor"
              label="رنگ نماد"
              append-inner-icon="mdi-menu-down"
          >
            <v-menu activator="parent" transition="scale-transition" location="end"
                    :close-on-content-click="false">
              <div class="d-flex flex-column">
                <v-color-picker theme="dark"
                                hide-inputs
                                position="relative"
                                show-swatches
                                v-model="iconInputColor"
                                @update:modelValue="updateIconInputColor"
                                mode="hexa"/>
              </div>
            </v-menu>
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
              density="comfortable"
              variant="outlined"
              clearable=""
              v-model="editedItem.iconBackColor"
              label="رنگ زمینه نماد"
              append-inner-icon="mdi-menu-down"
          >
            <v-menu activator="parent" transition="scale-transition" location="end"
                    :close-on-content-click="false">
              <div class="d-flex flex-column">
                <v-color-picker theme="dark"
                                hide-inputs
                                position="relative"
                                show-swatches
                                v-model="iconBackInputColor"
                                @update:modelValue="updateIconBackInputColor"
                                mode="hexa"/>
              </div>
            </v-menu>
          </v-text-field>
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
  </v-card-actions>
</template>

<style scoped lang="scss">
.color-box {
  width: 15px;
  height: 15px;
  border-radius: 8px;
  text-align: center;
}
</style>