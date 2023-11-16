<script setup lang="ts">
import {ref, computed, watch} from 'vue'
import {gallery} from "~/data/CustomComponents";
const {$persianNumber} = useNuxtApp()

const dialog = ref(false)
const dialogDelete = ref(false)


const categoryItems = ref(gallery)
const deleteId = ref()

const editedItem = ref({
  id: 0,
  title: '',
})

const defaultItem = {
  id: 0,
  title: '',
}

const formTitle = computed(() => {
  return editedItem.value.id ? 'ویرایش' : 'متن جدید'
})

watch(dialog, val => {
  val || close()
})

watch(dialogDelete, val => {
  val || closeDelete()
})


function editItem(item) {
  editedItem.value = {...item}
  dialog.value = true
}

function deleteItem(item) {
  deleteId.value = item.id
  dialogDelete.value = true
}

function deleteItemConfirm() {
  const index = categoryItems.value.findIndex(i => i.id === deleteId.value)
  categoryItems.value.splice(index, 1)
  closeDelete()
}

function close() {
  dialog.value = false
  editedItem.value = {...defaultItem}
}

function closeDelete() {
  dialogDelete.value = false
  deleteId.value = ''
}

function save() {

  // Find index of edited item
  const index = categoryItems.value.findIndex(item => item.id === editedItem.value.id)

  // If item exists, update it
  if(index !== -1) {
    categoryItems.value[index] = editedItem.value
  }

  // Else, push new item
  else {
    categoryItems.value.push(editedItem.value)
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
        v-for="item in categoryItems"
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
  <v-card-actions class="float-left px-0">
    <v-dialog
        v-model="dialog"
        max-width="500px"
    >
      <template v-slot:activator="{ props }">
        <v-btn
            color="primary"
            variant="flat"
            size="small"
            class="text-none"
            v-bind="props"
            icon="mdi mdi-text-box-plus-outline">
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          {{ formTitle }}
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            <v-row justify="center">
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
                <v-text-field density="comfortable"  v-model="editedItem.icon"
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
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions class="justify-space-around">
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
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card-actions>
</template>

<style scoped lang="scss">

</style>