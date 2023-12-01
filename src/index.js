let navList = document.querySelectorAll(".nav-link");
let menuList = [];

for (let navItem of navList) {
  menuList.push(
    document.querySelector(
      "#" + navItem.attributes["data-nav-section"].nodeValue
    )
  );
}

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

// 스크롤시 메뉴바 동작
let observer = new IntersectionObserver(
  (items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        for (let navItem of navList) {
          navItem.classList.remove("active");
        }
        navList[item.target.attributes["tabindex"].nodeValue].classList.add(
          "active"
        );
      }
    });
  },
  {
    threshold: 0.5,
  }
);
menuList.forEach((menuItem) => observer.observe(menuItem));
