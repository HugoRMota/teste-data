<template>
  <div class="px-6 py-6">
    <div class="grid grid-cols-2 gap-6">
      <AppInput label="Nome"></AppInput>
      <AppInput label="CPF"></AppInput>
      <AppInput label="Telefone"></AppInput>
      <AppInput label="Email"></AppInput>
      <AppCheckbox title="Ativo" />
    </div>
    <div class="flex justify-end space-x-6 py-3">
      <AppButton>Fechar</AppButton>
      <AppButton>Salvar</AppButton>
    </div>
  </div>
</template>
<script setup>
import AppInput from "../AppInput/AppInput.vue";
import AppButton from "../AppButton/AppButton.vue";
import AppCheckbox from "../AppCheckbox/AppCheckbox.vue";
</script>
<style scoped lang="scss"></style>
