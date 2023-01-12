import Background from "./secret_garden_bistro.jpg";
import home from "./home";
import "./styles.css";

const content = document.getElementById("content");
const name = document.createElement("h1");
name.innerText = "The Secret Garden Bistro";
name.classList.add("name");

const heading = document.createElement("h2");
heading.innerText =
  "Discover the Hidden Gem: The Secret Garden Bistro - A Delicious Fusion of Cuisine and Nature";
heading.classList.add("heading");

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

content.append(name, heading, navbar, view);

let current = homeTab;

function changeTab(e) {
  current.classList.remove("current");
  current = e.target;
  current.classList.add("current");
  view.innerText = "";
}

homeTab.addEventListener("click", (e) => {
  changeTab(e);
  home(view);
});

contactTab.addEventListener("click", (e) => {
  changeTab(e);
});

menuTab.addEventListener("click", (e) => {
  changeTab(e);
});
