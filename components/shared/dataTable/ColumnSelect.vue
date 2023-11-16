<!-- src/components/ColumnFilter.vue -->
<template>
  <VMenu
    v-model="menu"
    bottom
    origin="center center"
    :close-on-content-click="false"
    transition="scale-transition"
    content-class="column-filter-menu"
    @update:modelValue="menuStateChanged"
  >
    <template #activator="{ props }">
      <VIcon v-bind="props" title="Oszlopok beállítás">
        {{ selectColumnActivatorIcon }}
      </VIcon>
    </template>

    <VCard style="width: 500px">
      <VCardTitle>
        {{ props.cardTitle }}
      </VCardTitle>

      <VCardText>
        <VAutocomplete
          v-model="selectedHeaders"
          class="column-filter"
          deletable-chips
          return-object
          :items="props.headersToSelect"
          dense
          chips
          small-chips
          :label="props.autoCompleteLabel"
          multiple
          solo
        />
      </VCardText>
    </VCard>
  </VMenu>
</template>

<script lang="ts" setup>
import { defineProps, ref, watch, defineEmits } from "vue";
import { DataTableHeaders } from "@/components/shared/dataTable/DataTableInterfaces";
import { computed } from "vue";
const props = defineProps<{
  headersToSelect: DataTableHeaders;
  selectedHeaders: DataTableHeaders;
  cardTitle: string;
  autoCompleteLabel: string;
  selectColumnActivatorIcon: string;
}>();
const selectColumnActivatorIcon = computed(
  () => props.selectColumnActivatorIcon
);
const menu = ref<boolean>(false);
const selectedHeaders = ref<DataTableHeaders>();
const emits = defineEmits(["update:selectedHeaders"]);

watch(
  () => props.selectedHeaders,
  () => {
    selectedHeaders.value = props.selectedHeaders;
  },
  { deep: true, immediate: true }
);
function menuStateChanged(value: boolean) {
  if (!value) {
    emits("update:selectedHeaders", selectedHeaders.value);
  }
}
</script>
