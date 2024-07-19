import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import TestStep1 from "./pages/TestStep1.vue";
import Menu from "./pages/Menu.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/teststep1", name: "TestStep1", component: TestStep1 },
    { path: "/menu", name: "Menu", component: Menu },
  ],
});

createApp(App).use(router).mount("#app");
