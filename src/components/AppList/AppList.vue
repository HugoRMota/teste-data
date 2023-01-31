<template>
  <div class="list">
    <ul role="list">
      <li>
        <h2></h2>
        <h3></h3>
        <AppButton @click="emit('edit')">Editar</AppButton>
      </li>
    </ul>
  </div>
</template>
<script setup>
import AppButton from "../AppButton/AppButton.vue";

const emit = defineEmits(["edit"]);
</script>
<style scoped lang="scss">
.list {
  @apply overflow-hidden rounded-md bg-white shadow;
  ul {
    @apply divide-y divide-gray-200;
    li {
      @apply px-6 py-4 flex items-center justify-between;
    }
  }
}
</style>
