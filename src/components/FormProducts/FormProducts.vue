<template>
  <div>
    <form @submit.prevent="save" class="px-6 py-6">
      <div class="grid grid-cols-2 gap-6">
        <AppInput
          v-model="formProduct.name"
          name="Name"
          rules="required"
          label="Nome"
          type="text"
        ></AppInput>
        <AppCheckbox name="ativo" title="Ativo" v-model="formProduct.active" />
      </div>
      <div class="flex justify-end space-x-6 py-3">
        <AppButton type="button">Fechar</AppButton>
        <AppButton type="submit">Salvar</AppButton>
      </div>
    </form>
  </div>
</template>
<script setup>
import AppInput from "../AppInput/AppInput.vue";
import AppButton from "../AppButton/AppButton.vue";
import AppCheckbox from "../AppCheckbox/AppCheckbox.vue";

import { Form } from "vee-validate";
import { ref, watch } from "vue";

const emit = defineEmits(["update"]);
const props = defineProps({
  product: {
    type: Object,
    default: {},
  },
  create: {
    type: Boolean,
    default: true,
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
    formProduct.value = props.product;
  },
  { immediate: true }
);
</script>
<style scoped lang="scss"></style>
