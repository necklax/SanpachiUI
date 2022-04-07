import "../scss/app.scss";
import Vue from "vue";
import "bootstrap";
const carousels = require("./carousels");

const app = new Vue({
  el: "#app",
  data: {
    isToggleMenu: false,
  },
  mounted() {
    carousels.carouselSingle();
    carousels.carouselSingleThumbnail();
    carousels.carouselCentering();
    carousels.carouselSideScrolling();
    carousels.carouselCover();
  },
});