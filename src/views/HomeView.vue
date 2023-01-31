<script setup>
import AppHeader from "../components/AppHeader/AppHeader.vue";
import AppList from "../components/AppList/AppList.vue";
import AppDrawer from "../components/AppDrawer/AppDrawer.vue";
import FormClient from "../components/FormClient/FormClient.vue";
import { ref } from "vue";

const isClient = ref(false);
const isProduct = ref(false);
const generateId = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};
</script>

<template>
  <div class="space-y-6">
    <AppHeader @openClient="isClient = true" @openProduct="isProduct = true" />
    <AppList />
  </div>

  <AppDrawer v-model="isClient" title="Novo cliente">
    <FormClient/>
  </AppDrawer>
  <AppDrawer v-model="isProduct" title="Novo Produto"></AppDrawer>
</template>
