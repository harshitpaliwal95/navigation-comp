let shortNav = document.querySelector(".short-nav");
let logo = document.querySelector(".short-nav-h2");
let shortContant = document.querySelector(".scroll-div");

shortContant.addEventListener("scroll", () => {
  if (shortContant.scrollTop > 2) {
    logo.classList.add("hidden");
    shortNav.classList.add("fold");
  } else {
    logo.classList.remove("hidden");
    shortNav.classList.remove("fold");
  }
});
