import "../scss/app.scss";
import Vue from "vue";
const carousels = require("./carousels");

const app = new Vue({
  el: "#app",
  data: {
    test: "テスト2",
  },
  mounted() {
    carousels.carouselSingle();
    carousels.carouselSingleThumbnail();
    carousels.carouselCentering();
    carousels.carouselSideScrolling();
    carousels.carouselCover();
  },
});
