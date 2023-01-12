import Background from "./secret_garden_bistro.jpg";
import "./styles.css";

const content = document.getElementById("content");
const name = document.createElement("h1");
name.innerText = "The Secret Garden Bistro";
name.classList.add("name");

const heading = document.createElement("h2");
heading.innerText =
  "Discover the Hidden Gem: The Secret Garden Bistro - A Delicious Fusion of Cuisine and Nature";
heading.classList.add("heading");

const image = new Image();
image.src = Background;
image.classList.add("image");
document.body.style.backgroundImage = `url(${image.src})`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
content.append(name, heading);
