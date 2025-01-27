import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import Test from "./pages/Test.vue";
import Result from "./pages/Result.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/iq-test", name: "Home", component: Home },
    { path: "/test", name: "Test", component: Test },
    { path: "/result", name: "Result", component: Result },
  ],
});
export default router;
createApp(App).use(router).mount("#app");
