import {
  DataTableHeader,
  DataTableItems,
  FilterValueType,
} from "@/components/shared/dataTable/DataTableInterfaces";

export function resolveComponentProps(header: DataTableHeader, item: any) {
  if (!header.componentProps) return {};

  return Object.fromEntries(
    Object.entries(header.componentProps).map(([key, value]) => [
      key,
      typeof value === "function" ? value(item) : value,
    ])
  );
}

// Helper function to access nested properties using dot notation
export function getNestedProperty(
  obj: Record<string, unknown>,
  path: string
): unknown {
  return path
    .split(".")
    .reduce((result: any, key: string) => result?.[key], obj);
}
// Search function
export function filterItems(
  items: DataTableItems,
  headers: DataTableHeader[],
  filterValues: FilterValueType
): DataTableItems {
  return items.filter((item) =>
    headers.every((header) => {
      if (!header.filterable) return true;

      const searchLowerCase = (
        filterValues.get(header.key)?.value || ""
      ).toLowerCase();
      const value = header.displayFunction
        ? header.displayFunction(getNestedProperty(item, header.key))
        : getNestedProperty(item, header.key);

      return (
        typeof value !== "undefined" &&
        String(value).toLowerCase().includes(searchLowerCase)
      );
    })
  );
}
