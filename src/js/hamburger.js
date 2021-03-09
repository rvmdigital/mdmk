import { gsap } from "gsap";

// Navigaion toggler

let hamburger = function () {

  const navToggle = gsap
    .timeline({ paused: true })
    .to(".hamburger", { autoAlpha: 1 })
    .to("body", { overflow: "hidden" })
    .fromTo(
      ".hamburger__overlay",
      { autoAlpha: 0, left: "-50px" },
      { left: 0, autoAlpha: 1, duration: 0.5 },
      "-=.9"
    )
    .fromTo(
      ".hamburger__content",
      { autoAlpha: 0, left: "-50px" },
      { autoAlpha: 1, left: 0, duration: 0.5 },
      "-=.5"
    );

  document.querySelectorAll(".navigation__left-ham").forEach((elem) =>
    elem.addEventListener("click", function () {
      navToggle.play();
    })
  );

  document
    .querySelector(".hamburger__header-close")
    .addEventListener("click", function () {
      navToggle.reverse();
    });

  document
    .querySelector(".hamburger__overlay")
    .addEventListener("click", function () {
      navToggle.reverse();
    });
};

hamburger();

export default {hamburger};
