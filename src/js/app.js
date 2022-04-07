import "../scss/app.scss";
import { createApp } from "vue";
import "bootstrap";
const carousels = require("./carousels");

const app = createApp({
  setup() {
    const isToggleMenu = ref(false);
    return { isToggleMenu };
  },
  mounted() {
    carousels.carouselSingle();
    carousels.carouselSingleThumbnail();
    carousels.carouselCentering();
    carousels.carouselSideScrolling();
    carousels.carouselCover();
  },
});
app.mount("#app");
