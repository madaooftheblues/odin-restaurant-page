import Background from "./secret_garden_bistro.jpg";
import header from "./modules/header";
import "./styles.css";

const content = document.getElementById("content");
content.append(header());

const navbar = document.createElement("div");
navbar.classList.add("navbar");

const tabs = document.createElement("ul");
tabs.classList.add("tabs");
const homeTab = document.createElement("li");
homeTab.innerText = "Home";
const menuTab = document.createElement("li");
menuTab.innerText = "Menu";
const contactTab = document.createElement("li");
contactTab.innerText = "Contact";

const image = new Image();
image.src = Background;
image.classList.add("image");
document.body.style.backgroundImage = `url(${image.src})`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";

const view = document.createElement("div");
view.id = "view";

tabs.append(homeTab, menuTab, contactTab);
navbar.append(tabs);

content.append(navbar, view);

let current = homeTab;

function changeTab(e) {
  current.classList.remove("current");
  current = e.target;
  current.classList.add("current");
  view.innerText = "";
}

homeTab.addEventListener("click", (e) =>
  import("./modules/home").then((module) => {
    changeTab(e);
    const home = module.default;
    view.append(home());
  })
);

contactTab.addEventListener("click", (e) =>
  import("./modules/contact").then((module) => {
    changeTab(e);
    const contact = module.default;
    view.append(contact());
  })
);

menuTab.addEventListener("click", (e) =>
  import("./modules/menu").then((module) => {
    changeTab(e);
    const menu = module.default;
    view.append(menu());
  })
);

import("./modules/home").then((module) => {
  const home = module.default;
  view.append(home());
});

homeTab.classList.add("current");
