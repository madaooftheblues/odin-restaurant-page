export default function header() {
  const name = document.createElement("h1");
  name.innerText = "The Secret Garden Bistro";
  name.classList.add("name");

  const heading = document.createElement("h2");
  heading.innerText =
    "Discover the Hidden Gem: The Secret Garden Bistro - A Delicious Fusion of Cuisine and Nature";
  heading.classList.add("heading");

  const header = document.createElement("div");
  header.classList.add("header");

  header.append(name, heading);
  return header;
}
