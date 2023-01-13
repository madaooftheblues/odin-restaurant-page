const home = () => {
  const welcome = document.createElement("h2");
  welcome.innerText = "Welcome to The Secret Garden Bistro";
  welcome.classList.add("welcome");

  const description = document.createElement("p");
  description.innerText =
    "The Secret Garden Bistro is a wonderful restaurant that offers a unique and delightful dining experience. Nestled among lush greenery and surrounded by a serene garden, the bistro offers a peaceful and tranquil atmosphere. The restaurant's menu is a delicious fusion of cuisines from around the world, featuring fresh, locally-sourced ingredients and an extensive selection of wines and cocktails. The chefs at The Secret Garden Bistro are experts in their craft, and are dedicated to creating flavorful and visually stunning dishes that will delight your senses.";
  description.classList.add("description");

  const home = document.createElement("div");
  home.classList.add("home");
  home.append(welcome, description);

  return home;
};

export default home;
