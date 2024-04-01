<script setup lang="ts">
import AboutDataTable from "~/components/admin/settings/AboutDataTable.vue";

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
        در این قسمت می توانید پاورقی صفحه اصلی را شخصی سازی کنید.
      </h4>
      <v-row justify="start">
        <v-col cols="3">
          <v-textarea
              density="compact"
              variant="outlined"
              label="متن کارت پیشنهادات"
          ></v-textarea>
        </v-col>
        <v-col cols="3">
          <v-text-field
              density="comfortable"
              variant="outlined"
              label="تیتر کارت پیشنهادات"
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
              label="رنگ زمینه کارت پیشنهادات"
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
        در این قسمت می توانید تصویر دلخواه خود را جایگزین نمایید.
      </h4>
      <v-row justify="start">
        <v-col
            class="d-flex"
            cols="12"
            md="3"
        >

        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>