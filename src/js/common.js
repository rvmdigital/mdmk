import hamburger from "./hamburger";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

let homeSliders = function () {
  gsap.registerPlugin(Draggable);
  Draggable.create(".home-live__list-cover ul", {
    bounds: ".home-live__list-cover",
    type: "x",
  });

  Draggable.create(".home-achieve__list-cover ul", {
    bounds: ".home-achieve__list-cover",
    type: "x",
  });

  Draggable.create(".home-candidates__list-cover ul", {
    bounds: ".home-candidates__list-cover",
    type: "x",
  });

  Draggable.create(".home-news__list-cover ul", {
    bounds: ".home-news__list-cover",
    type: "x",
  });

  Draggable.create(".home-social__list-cover ul", {
    bounds: ".home-social__list-cover",
    type: "x",
  });

  Draggable.create(".home-video__list-cover ul", {
    bounds: ".home-video__list-cover",
    type: "x",
  });

  Draggable.create(".home-press__list-cover ul", {
    bounds: ".home-press__list-cover",
    type: "x",
  });
};

homeSliders();

// Navigaion toggler

hamburger;

export { homeSliders };
