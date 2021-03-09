import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { owlCarousel } from "owl.carousel";

let mlaSlider = function () {
  gsap.registerPlugin(Draggable);

  Draggable.create(".mla-social__list-cover ul", {
    bounds: ".mla-social__list-cover",
    type: "x",
  });

  Draggable.create(".mla-news__list-cover ul", {
    bounds: ".mla-news__list-cover",
    type: "x",
  });
  Draggable.create(".mla-video__list-cover ul", {
    bounds: ".mla-video__list-cover",
    type: "x",
  });
  Draggable.create(".mla-candidates__list-cover ul", {
    bounds: ".mla-candidates__list-cover",
    type: "x",
  });

  $(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      nav: false,
      items: 1,
      lazyLoad: true,
      dots: false,
      margin: 10,
      autoWidth: true,
      center: true,
      responsive: {
        0: {
          items: 1,
        },
      },
    });
  });
};

mlaSlider();

export {mlaSlider};
