// this is the links menu that drops down
const navDropdown = document.querySelector(".dropdown");
// this is the burger menu button
const burger = document.querySelector(".burger");

let navDropdownState = false;

// open and close burger menu dropdown functions
const closeDropdown = () => {
  navDropdownState = false;
  navDropdown.style.display = "none";
};
const openDropdown = () => {
  navDropdownState = true;
  navDropdown.style.display = "flex";
};

// burger click opens and closes dropdown
burger.addEventListener("click", (e) => {
  e.stopPropagation();
  !navDropdownState ? openDropdown() : closeDropdown();
});

// if window width becomes larger than small screen css breakpoint
// close nav dropdown and set dropdown state to false
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeDropdown();
  }
});

// if user clicks on the screen and dropdown is true, set it false
window.addEventListener("click", () => {
  if (!navDropdownState) return;
  closeDropdown();
});




