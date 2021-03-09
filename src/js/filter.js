import { gsap } from "gsap";

// Filter Toggler

let filter = function () {
  gsap.set(".filter", { autoAlpha: 0 });

  const filterToggle = gsap
    .timeline({ paused: true })
    .to(".filter", { autoAlpha: 1 });

  document
    .querySelector(".filter__toggle")
    .addEventListener("click", function () {
      filterToggle.play();
    });

  document
    .querySelector(".filter__header-back")
    .addEventListener("click", function () {
      filterToggle.reverse();
    });

  // Filter category toggler

  const filterCategories = document.querySelectorAll(".filter__category li");

  Array.from(filterCategories).forEach(function (filterCategory) {
    filterCategory.addEventListener("click", function () {
      const index = Array.from(filterCategories).indexOf(filterCategory);
      filterCategories.forEach((i) => i.classList.remove("active"));
      filterCategory.classList.add("active");
      document
        .querySelectorAll(".filter__content")
        .forEach((i) => i.classList.remove("active"));
      document
        .getElementsByClassName("filter__content")
        [index].classList.add("active");
    });
  });
};

filter();

export default { filter };
