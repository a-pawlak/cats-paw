const header = document.querySelector(".header");
const menuBtn = document.querySelector(".btn-mobile-nav");
const menuToggler = function () {
  menuBtn.addEventListener("click", (e) => {
    header.classList.toggle("nav-open");
  });
};

menuToggler();
////////////////////////////////////
const cta = document.querySelector(".cta");

document.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.closest("a:link")) {
    const href = e.target.closest("a:link").getAttribute("href");

    if (href !== "#" && href.startsWith("#")) {
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
    if (
      e.target.classList.contains("nav-link") ||
      e.target.classList.contains("nav-link-last")
    )
      header.classList.toggle("nav-open");
  }
  if (e.target.innerText === "Find new friend!") {
    cta.scrollIntoView({ behavior: "smooth" });
  }
  if (e.target.closest(".logo")) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});
//////////////////////////////////
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
//////////////////////////////////
const hero = document.querySelector(".hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px 0px 80px 0px",
  }
);
obs.observe(hero);
