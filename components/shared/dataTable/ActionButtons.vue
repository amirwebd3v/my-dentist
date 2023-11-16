<!-- src/components/ActionButtons.vue -->
<script lang="ts">
import { defineComponent } from "vue";

interface ActionButton {
  label: string;
  icon: string;
  handler: (item: any) => void;
}

export default defineComponent({
  props: {
    buttons: {
      type: Array as () => ActionButton[],
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
  },
});
</script>

<template>
  <div class="action-buttons">
    <VBtn
      v-for="(button, index) in buttons"
      :key="index"
      size="small"
      color="default"
      variant="text"
      :icon="button.icon"
      @click="button.handler(item)"
    />
  </div>
</template>
