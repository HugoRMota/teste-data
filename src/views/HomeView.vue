<script setup>
import AppHeader from "../components/AppHeader/AppHeader.vue";
import AppList from "../components/AppList/AppList.vue";
import AppDrawer from "../components/AppDrawer/AppDrawer.vue";
import FormClient from "../components/FormClient/FormClient.vue";
import FormProducts from "../components/FormProducts/FormProducts.vue";
import FormClientProduct from "../components/FormClientProduct/FormClientProduct.vue"

import { ref } from "vue";

const isClient = ref(false);
const isProduct = ref(false);
const isProductClient = ref(false);

const type = ref("Create");
const clients = ref([]);
const clientEdit = ref({});

const products = ref([]);
const productEdit = ref({});

const productsClient = ref([]);
const productClientEdit = ref({}); 

const setClient = (form) => {
  if (type.value == "Create") {
    clients.value.push(form);
  } else {
    const index = clients.value.findIndex((item) => item.id == form.id);

    if (index != -1) {
      clients.value[index] = form;
    }
  }
  isClient.value = false;
  type.value = null;
};

const setProduct = (form) => {
  if (type.value == "Create") {
    products.value.push(form);
  } else {
    const index = products.value.findIndex((item) => item.id == form.id);

    if (index != -1) {
      products.value[index] = form;
    }
  }
  isProduct.value = false;
  type.value = null;
};

const setClientProduct = (form) => {
  if (type.value == "Create") {
    productsClient.value.push(form);
  } else {
    const index = productsClient.value.findIndex((item) => item.id == form.id);

    if (index != -1) {
      productsClient.value[index] = form;
    }
  }
  isProductClient.value = false;
  type.value = null;
};

const openProduct = () => {
  isProduct.value = true;
  type.value = "Create";
  productEdit.value = {};
};

const updateProduct = (id) => {
  const index = products.value.findIndex((item) => item.id == id);

  if (index != -1) {
    type.value = "Edit";
    isProduct.value = true;
    productEdit.value = products.value[index];
  }
};

const openClient = () => {
  isClient.value = true;
  type.value = "Create";
  clientEdit.value = {};
};

const updateClient = (id) => {
  const index = clients.value.findIndex((item) => item.id == id);

  if (index != -1) {
    type.value = "Edit";
    isClient.value = true;
    clientEdit.value = clients.value[index];
  }
};


const openClientProduct = () => {
  isProductClient.value = true;
  type.value = "Create";
  productClientEdit.value = {};
};

const updateClientProduct = (id) => {
  const index = productsClient.value.findIndex((item) => item.id == id);

  if (index != -1) {
    type.value = "Edit";
    isProductClient.value = true;
    productClientEdit.value = productsClient.value[index];
  }
};
</script>

<template>
  <div class="space-y-6">
    <AppHeader
      @openClient="openClient()"
      @openProduct="openProduct()"
      @openClientProduct="openClientProduct()"
    />
    <AppList :list="clients" title="Lista de Clientes" @edit="updateClient" />
    <AppList :list="products" title="Lista de Produtos" @edit="updateProduct" />
    <AppList :list="productsClient" title="Lista de Vinculos" @edit="updateClientProduct" />

  </div>
  <AppDrawer
    v-model="isClient"
    :title="type == 'Create' ? 'Novo cliente' : 'Editar cliente'"
  >
    <FormClient
      :create="type == 'Create'"
      :user="clientEdit"
      @update="setClient"
    />
  </AppDrawer>
  <AppDrawer
    v-model="isProduct"
    :title="type == 'Create' ? 'Novo produto' : 'Editar produto'"
  >
    <FormProducts
      :create="type == 'Create'"
      :product="productEdit"
      @update="setProduct"
    />
  </AppDrawer>
  <AppDrawer
    v-model="isProductClient"
    :title="type == 'Create' ? 'Novo Vinculo' : 'Editar Vinculo'"
    size="sm"
  >
    <FormClientProduct
      :create="type == 'Create'"
      :product="products"
      :client="clients"
      :selectedClientProduct="productClientEdit"
      @update="setClientProduct"
    />
  </AppDrawer>
</template>
