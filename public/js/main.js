const menuButton = document.querySelector(".menuIcons");

function closeMenu() {
  menuButton.getElementsByClassName("close")[0].style.display = "none";
  menuButton.getElementsByClassName("burger")[0].style.display = "block";
  menuButton.classList.remove("menuIconsLight");
  for (let navItem of document.getElementsByClassName("navItem")) {
    navItem.style.display = "none";
  }
}

menuButton.addEventListener("click", function (e) {
  if (e.target.id == "closemenu") {
    closeMenu();
  } else {
    menuButton.getElementsByClassName("close")[0].style.display = "block";
    menuButton.getElementsByClassName("burger")[0].style.display = "none";
    menuButton.classList.add("menuIconsLight");
    for (let navItem of document.getElementsByClassName("navItem")) {
      navItem.style.display = "block";
    }
  }
});

let titles = document.querySelectorAll(".title, #moredetailslink");

for (const title of titles) {
  title.addEventListener("click", function (e) {
    const contentDiv = title.nextSibling.nextSibling;
    const contentDivClasses = contentDiv.classList;
    const carrot = title.getElementsByTagName("span")[0];
    if (contentDivClasses.contains("open")) {
      contentDivClasses.toggle("open");
      carrot.innerText = "expand_more";
    } else {
      contentDivClasses.toggle("open");
      carrot.innerText = "expand_less";
    }
  });
}
