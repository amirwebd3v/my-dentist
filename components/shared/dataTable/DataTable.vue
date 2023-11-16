<!-- src/components/DataTable.vue -->
<script lang="ts" setup>
import type { Ref } from "vue";
import {
  reactive,
  ref,
  computed,
  watch,
  onBeforeMount,
  defineProps,
  withDefaults,
} from "vue";

import ColumnSelect from "./ColumnSelect.vue";
import type {
  DataTableHeaders,
  DataTableItems,
  FilterValueType,
} from "./DataTableInterfaces";
import { resolveComponentProps, getNestedProperty, filterItems } from "./Utils";
export interface DataTableProps {
  headers: DataTableHeaders;
  items: DataTableItems;
  itemKey?: string;
  loading?: boolean;
  uniqueName?: string;
  options: { [key: string]: string };
}
// Define your props explicitly with types
const props: DataTableProps = {
  headers: [] as DataTableHeaders, // Replace [] with your default headers
  uniqueName: '' as string, // Replace '' with your default uniqueName
  options: {} as { [key: string]: string }, // Replace {} with your default options
  loading: false as boolean, // Replace false with your default loading value
  items: [] as DataTableItems, // Replace [] with your default items
  itemKey: 'id' as string, // Replace 'id' with your default itemKey
};



const filterValues: FilterValueType = reactive(new Map<string, Ref<string>>());
const selectedHeaders = ref<DataTableHeaders>();

// Initialize filter values
props.headers.forEach((header) => {
  if (header.filterable) filterValues.set(header.key, ref<string>(""));
});

// Computed properties
const internalHeaders = computed(() => {
  return props.headers.map((header) => {
    return {
      ...header,
      value: header.key,
      sortable: header.sortable ?? false,
      filterable: header.filterable ?? false,
      isVisible: header.isVisible ?? true,
    };
  });
});

const headersToSelect = computed(() => {
  return internalHeaders.value.filter((header) => header.value !== "actions");
});

// Computed property for filtered items
const filteredItems = computed(() =>
  filterItems(props.items, props.headers, filterValues)
);

const exportHeader = computed(() => {
  return props.headers.map((header) => ({
    label: header.title,
    field: header.key,
  }));
});

const hasFilterable = computed(() => {
  return internalHeaders.value.some((header) => header.filterable);
});

const visibleHeaders = computed(() => {
  return internalHeaders.value.filter(
      (header) =>
          header.value === "actions" ||
          (selectedHeaders.value && selectedHeaders.value?.some(
              (selectedHeader) => selectedHeader.key === header.value
          ))
  );
});

watch(
  headersToSelect,
  (newHeadersToSelect) => {
    selectedHeaders.value = newHeadersToSelect.filter(
      (header) => header.isVisible
    ) as DataTableHeaders;
  },
  { deep: true }
);

onBeforeMount(() => {
  loadSelectedHeaders();
});

function resetFilterValues() {
  filterValues.forEach((value) => {
    value.value = "";
  });
}


function saveSelectedHeaders(val) {
  selectedHeaders.value = val;
  localStorage.setItem(
    `selectedHeaders_${props.uniqueName}`,
    JSON.stringify(val)
  );
}


function loadSelectedHeaders() {
  const storedHeaders = localStorage.getItem(
    `selectedHeaders_${props.uniqueName}`
  );
  if (storedHeaders) {
    const parsedStoredHeaders = JSON.parse(storedHeaders);
    selectedHeaders.value = headersToSelect.value.filter((header) =>
      parsedStoredHeaders.some(
        (storedHeader) => header.key === storedHeader.key
      )
    );
  } else
    selectedHeaders.value = headersToSelect.value.filter(
      (header) => header.isVisible
    );
}
</script>

<template>
  <VDataTable
    :headers="visibleHeaders"
    :items="filteredItems"
    :item-key="itemKey"
    :loading="loading"
    :multi-sort="true"
  >
    <template #thead>
      <tr>
        <template v-for="(header, index) in visibleHeaders" :key="index">
          <th
            v-if="header.title.toLocaleLowerCase() !== 'actions'"
            class="pa-2"
          >
            <VTextField
              v-if="header.filterable"
              :key="index"
              v-model="filterValues.get(header.key).value"
              :label="header.title"
            />
          </th>
          <th v-else class="pa-2 text-left">
            <VBtn
              v-if="hasFilterable"
              color="default"
              variant="text"
              :icon="options.resetFilterIcon"
              @click="resetFilterValues"
            />
            <ColumnSelect
              :headers-to-select="headersToSelect"
              :selected-headers="selectedHeaders"
              :cardTitle="options.columnSelectCardTitle"
              :autoCompleteLabel="options.columnSelectAutoCompleteLabel"
              :selectColumnActivatorIcon="
                options.columnSelectSelectColumnActivatorIcon
              "
              :unique-name="props.uniqueName"
              @update:selected-headers="saveSelectedHeaders"
            />
          </th>
        </template>
      </tr>
    </template>

    <template
      v-for="(header, index) in visibleHeaders"
      #[`item.${header.key}`]="itemProps"
      :key="index"
    >
      <Component
        :is="header.component || 'div'"
        v-bind="resolveComponentProps(header, itemProps.item.raw)"
        :item="
          header.vBindItems
            ? itemProps.item.raw
            : getNestedProperty(itemProps.item.columns, header.key)
        "
      >
        <template v-if="!header.disabledSlot">
          {{
            header.displayFunction
              ? header.displayFunction(
                  getNestedProperty(itemProps.item.columns, header.key)
                )
              : getNestedProperty(itemProps.item.columns, header.key)
          }}
        </template>
      </Component>
    </template>
  </VDataTable>
</template>
