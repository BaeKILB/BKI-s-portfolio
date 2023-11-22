let navList = document.querySelectorAll(".nav-link");

function onNavClickHandler(e) {
  for (let navItem of navList) {
    navItem.classList.remove("active");
  }
  e.target.classList.add("active");

  document
    .querySelector("#" + e.target.attributes["data-nav-section"].nodeValue)
    .focus();
}

for (let navItem of navList) {
  navItem.addEventListener("click", onNavClickHandler);
}
