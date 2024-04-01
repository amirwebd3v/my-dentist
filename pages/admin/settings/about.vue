<script >
import {defineComponent} from "vue";
import AboutDataTable from "~/components/admin/settings/AboutDataTable.vue";

definePageMeta({
  layout: 'admin-layout',
});

// Function to open the file explorer
const fileInputRef = ref<HTMLInputElement | null>(null);
const openFileExplorer = () => {
  fileInputRef.value?.click();
};

export default defineComponent({
  components: {AboutDataTable}
})
</script>


<template>
  <v-card rounded="0">
    <v-card-text>
      <h4 class="pb-10">
        <v-icon class="mdi mdi-information-outline"/>
        در این قسمت می توانید بخش درباره را شخصی سازی نمایید.
      </h4>
      <AboutDataTable/>
    </v-card-text>
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