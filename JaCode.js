const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY >= 400) {
    header.classList.add("white");

  } else {
    header.classList.remove("white");

  }
});



const toggleBtn = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header nav ul");
toggleBtn.addEventListener("click", () => {
    headerNav.classList.toggle("open");
    toggleBtn.classList.toggle("open");
})

