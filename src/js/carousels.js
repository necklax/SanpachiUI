import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export function carouselSingle() {
  new Swiper(".carouselSingle", {
    loop: true,
    speed: 900,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
    },
  });
}

export function carouselSingleThumbnail() {
  const thumbsSwiper = new Swiper(".carouselThumbnail", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const swiper = new Swiper(".carouselSingleThumbnail", {
    loop: true,
    speed: 900,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: thumbsSwiper,
    },
  });
}

export function carouselCentering() {
  new Swiper(".carouselCentering", {
    loop: true,
    speed: 900,
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 15,
        slidesPerView: "auto",
      },
      // when window width is >= 640px
      640: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });
}

export function carouselSideScrolling() {
  new Swiper(".carouselSideScrolling", {
    spaceBetween: 30,
    slidesPerView: "auto",
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 15,
        slidesPerView: "auto",
      },
      // when window width is >= 640px
      640: {
        spaceBetween: 30,
        slidesPerView: "auto",
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });
}

export function carouselCover() {
  new Swiper(".carouselCover", {
    loop: true,
    speed: 900,
    autoplay: {
      delay: 3000,
      waitForTransition: false,
      disableOnInteraction: false,
    },
    effect: "fade",
    pagination: {
      el: ".fraction-pagination",
      type: "fraction",
    },
  });
}
