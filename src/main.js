import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { defineRule, configure } from "vee-validate";
import rules from "@vee-validate/rules";

configure({
  validateOnInput: true,
});

Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule]);
});

import "./assets/styles/main.scss";

const app = createApp(App);

app.use(router);

app.mount("#app");
