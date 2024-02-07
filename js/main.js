let toggleMenu = document.querySelector("#toggle-menu");
let menuItems = document.querySelector("#menu-items");

toggleMenu.addEventListener("click", () => {
  menuItems.classList.toggle("show-menu");
});
