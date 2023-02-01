<template>
  <div>
    <form @submit.prevent="save" class="px-6 py-6">
      <div class="grid grid-cols-2 gap-6">
        <vue-select
          v-model="formProduct.product"
          label="Produto"
          label-by="name"
          :options="product"
          @input="selected"
        >
        </vue-select>
        <vue-select
          v-model="formProduct.client"
          label-by="name"
          label="Cliente"
          :options="client"
          @input="selected"
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

import { Form } from "vee-validate";
import { ref, watch } from "vue";

const seletecItems = ref();

const emit = defineEmits(["update"]);
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

const selected = (id) => {
  seletecItems.value = id;
  console.log(
    "🚀 ~ file: FormClientProduct.vue:71 ~ seletec ~ seletecItems.value",
    seletecItems.value
  );
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
