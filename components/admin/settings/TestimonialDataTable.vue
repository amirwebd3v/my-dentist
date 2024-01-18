<script setup lang="ts">

import Dialog from "~/components/shared/modal/Dialog.vue";
import {Testimonials} from "~/data/CustomComponents";

const {$persianNumber} = useNuxtApp()


const dialogAdd = ref(false)
const dialogDelete = ref(false)
const dialogEdit = ref(false)

const testimonialItems = ref(Testimonials)
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
  const index = testimonialItems.value.findIndex(i => i.id === deleteId.value)
  testimonialItems.value.splice(index, 1)
  closeDelete()
}

function closeDelete() {
  dialogDelete.value = false
  deleteId.value = ''
}

function save() {

  // Find index of edited item
  const index = testimonialItems.value.findIndex(item => item.id === editedItem.value.id)

  // If item exists, update it
  if (index !== -1) {
    testimonialItems.value[index] = editedItem.value
  }

  // Else, push new item
  else {
    testimonialItems.value.push(editedItem.value)
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
        <th class="px-md-0 font-weight-bold">نوع سرویس</th>
        <th class="px-md-0 font-weight-bold">تاریخ</th>
        <th class="px-md-0 font-weight-bold">نام</th>
        <th class="px-md-0 font-weight-bold">آواتار</th>
        <th class="text-left font-weight-bold">عملیات</th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="item in testimonialItems"
          :key="item.id"
      >
        <td class="pl-0 font-weight-bold">{{ $persianNumber(item.id) }}</td>
        <td style="max-width: 200px;" class="text-truncate pr-0 pl-5">{{ item.testimonial }}</td>
        <td style="max-width: 200px;" class="text-truncate pr-0">{{ item.serviceName }}</td>
        <td style="max-width: 200px;" class="text-truncate pr-0">{{ item.date }}</td>
        <td style="max-width: 200px;" class="text-truncate pr-0">{{ item.name }}</td>
        <td style="max-width: 200px;" class="text-truncate pr-0"><v-avatar :image="item.img"></v-avatar></td>

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
                  <v-textarea variant="outlined" label="متن"></v-textarea>
                </v-col>
                <v-col cols="12" sm="12">
                  <v-text-field variant="outlined" label="نوع سرویس"></v-text-field>
                </v-col>
                <v-col cols="12" sm="12">
                  <v-text-field variant="outlined" label="تاریخ"></v-text-field>
                </v-col>
                <v-col cols="12" sm="12">
                  <v-text-field variant="outlined" label="نام"></v-text-field>
                </v-col>
                <v-col cols="12" sm="12">
                  <v-file-input prepend-icon="mdi-account" variant="outlined" label="آواتار"></v-file-input>
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
          <v-textarea variant="outlined" label="متن"></v-textarea>
        </v-col>
        <v-col cols="12" sm="12">
          <v-text-field variant="outlined" label="نوع سرویس"></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
          <v-text-field variant="outlined" label="تاریخ"></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
          <v-text-field variant="outlined" label="نام"></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
          <v-file-input prepend-icon="mdi-account" variant="outlined" label="آواتار"></v-file-input>
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

