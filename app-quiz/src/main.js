import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  BiPersonBoundingBox,
  BiQuestionCircleFill,
  BiPersonPlusFill,
  BiPersonXFill,
  BiKeyFill,
  BiArrowLeftCircleFill,
} from "oh-vue-icons/icons/bi";
import { GiClick } from "oh-vue-icons/icons/gi";
import "./assets/style/main.scss";
import "./assets/style/fonts.scss";

addIcons(
  BiPersonBoundingBox,
  BiQuestionCircleFill,
  BiPersonPlusFill,
  BiPersonXFill,
  GiClick,
  BiKeyFill,
  BiArrowLeftCircleFill
);
const app = createApp(App);

app.use(store);
app.use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");
