import { createApp } from "vue"
import { createRouter, createWebHashHistory } from "vue-router"
import App from "./App.vue"
import Scatter from "./components/Scatter.vue"
import Instructions from "./components/Instructions.vue"

const routes = [
  { path: "/", component: App },
  //{ name: "scatter", component: Scatter },
  //{ name: "instructions:index", component: Instructions },
  { name: "scatter", path: "/scatter", component: Scatter },
  { name: "instructions", path: "/instructions:index", component: Instructions },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount("#app")
