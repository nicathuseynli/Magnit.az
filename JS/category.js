const menus = document.querySelectorAll(".menu");

menus.forEach((menu) => {
  const dropdown = menu.nextElementSibling;

  menu.addEventListener("click", (event) => {
    event.preventDefault();

    dropdown.classList.toggle("disable");
  });
});

const open = document.querySelector(".product-sidebar-filter__button");
const close = document.querySelector("#closeSidebar");
const menu = document.querySelector(".left-site-menu");

open.addEventListener("click", () => {
  menu.classList.add("visible");
});
close.addEventListener("click", () => {
  menu.classList.remove("visible");
});


