<template>
  <div>
    <form @submit.prevent="save" class="px-6 py-6">
      <div class="grid grid-cols-2 gap-6">
        <AppInput
          v-model="formUser.name"
          name="Name"
          rules="required"
          label="Nome"
          type="text"
        ></AppInput>
        <AppInput
          v-model="formUser.cpf"
          name="Cpf"
          label="CPF"
          type="tel"
          mask="###.###.###-##"
        ></AppInput>
        <AppInput
          v-model="formUser.phone"
          name="Phone"
          label="Telefone"
          type="tel"
          mask="(##) #####-####"
        ></AppInput>
        <AppInput
          v-model="formUser.email"
          name="Email"
          label="Email"
          type="email"
        ></AppInput>
        <AppCheckbox name="ativo" title="Ativo" v-model="formUser.active" />
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
  user: {
    type: Object,
    default: {},
  },
  create: {
    type: Boolean,
    default: true,
  },
});

const formUser = ref({});

const save = () => {
  if (props.create) {
    emit("update", { id: generateId(), ...formUser.value });
  } else {
    emit("update", formUser.value);
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
    formUser.value = props.user;
  },
  { immediate: true }
);
</script>
<style scoped lang="scss"></style>
