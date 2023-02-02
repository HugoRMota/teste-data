<template>
  <div>
    <form @submit.prevent="save" class="px-6 py-6">
      <div class="w-full space-y-6 flex flex-col items-center">
        <vue-select
          v-model="formProduct.product"
          label="Produto"
          label-by="name"
          :options="product"
          class="w-full"
          placeholder="Selecione Produto"
        >
        </vue-select>
        <vue-select
          v-model="formProduct.client"
          label-by="name"
          label="Cliente"
          :options="client"
          placeholder="Selecione Cliente"
          class="w-full"
        >
        </vue-select>
      </div>
      <div class="flex justify-end space-x-6 py-3">
        <AppButton type="button">Fechar</AppButton>
        <AppButton type="submit">Salvar</AppButton>
      </div>
    </form>
  </div>
</template>
<script setup>
import AppButton from "../AppButton/AppButton.vue";

import VueSelect from "vue-next-select";
import "vue-next-select/dist/index.min.css";

import { Form } from "vee-validate";
import { ref, watch } from "vue";

const emit = defineEmits(["update", 'close']);
const props = defineProps({
  selectedClientProduct: {
    type: Object,
    default: {},
  },
  create: {
    type: Boolean,
    default: true,
  },
  product: {
    type: Array,
    default: [],
  },
  client: {
    type: Array,
    default: [],
  },
});

const formProduct = ref({});

const save = () => {
  if (props.create) {
    emit("update", { id: generateId(), ...formProduct.value });
  } else {
    emit("update", formProduct.value);
  }
};

const generateId = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

watch(
  props,
  () => {
    formProduct.value = props.selectedClientProduct;
  },
  { immediate: true }
);
</script>

<style>
.vue-select {
  @apply w-full;
}
</style>
