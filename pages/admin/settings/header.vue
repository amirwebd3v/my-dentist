<script setup lang="ts">
import {headerMenu} from "~/data/CustomComponents";

definePageMeta({
  layout: 'admin-layout',
});


const headerItems = ref(headerMenu)

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
        در این قسمت می توانید عنوان دلخواه خود را جایگزین نمایید.
      </h4>
      <v-row justify="start">
        <v-col
            cols="12"
            md="2"
            v-for="items in headerItems"
        >
          <v-text-field
              variant="outlined"
              class=""
              :label="items.title">
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
        <v-icon class="mdi mdi-information-outline"></v-icon>
        در این قسمت می توانید لوگوی سایت را تغییر دهید.
      </h4>



        <v-row justify="start">
          <v-col
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
                    src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
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
                        class="transition-fast-in-fast-out bg-primary v-card--reveal text-h5"
                        style="height: 100%;"
                    >
                      <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="space-evenly"
                      >
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
              </v-card>
            </v-hover>
          </v-col>
        </v-row>


      <!--Hidden-File-Input-->
      <v-file-input
          ref="fileInputRef"
          variant="solo-filled"
          style="display: none"
      ></v-file-input>
      <!--End-Hidden-File-Input-->

    </v-card-text>
  </v-card>
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