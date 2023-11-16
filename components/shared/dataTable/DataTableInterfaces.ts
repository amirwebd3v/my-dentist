import { Ref } from "vue";

export interface DataTableHeader {
  key: string;
  title: string;
  sortable?: boolean;
  filterable?: boolean;
  component?: string;
  componentProps?: Record<string, unknown>;
  isVisible?: boolean;
  disabledSlot?: boolean;
  displayFunction?: (value: any) => string;
  vBindItems?: boolean;
}

export interface DataTableItem {
  [key: string]: unknown | DataTableItem[];
}

export type DataTableItems = DataTableItem[];
export type DataTableHeaders = DataTableHeader[];
export type FilterValueType = Map<string, Ref<string>>;
