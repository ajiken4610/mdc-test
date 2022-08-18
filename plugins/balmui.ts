import { defineNuxtPlugin } from "#app";
import BalmUI from "balm-ui"; // Official Google Material Components
import BalmUIPlus from "balm-ui/dist/balm-ui-plus"; // BalmJS Team Material Components

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(BalmUI, {
    $theme: {
      // (Optional) New in 9.28.0, See ThemeColor type in APIs.
      primary: "#000088",
    },
  });
  nuxtApp.vueApp.use(BalmUIPlus);
});
