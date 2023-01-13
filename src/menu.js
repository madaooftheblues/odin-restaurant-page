function createDish(dishTitle, dishRecipe) {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.classList.add("title");
  title.innerText = dishTitle;

  const recipe = document.createElement("p");
  recipe.classList.add("recipe");
  recipe.innerText = dishRecipe;

  card.append(title, recipe);

  return card;
}

function createCat(title) {
  const category = document.createElement("div");
  category.classList.add("category");

  const catTitle = document.createElement("h2");
  catTitle.classList.add("cat-title");
  catTitle.innerText = title;

  const dishes = document.createElement("div");
  dishes.classList.add("dishes");

  category.append(catTitle, dishes);

  return category;
}

export default function menu() {
  const catsAndDishes = {
    appetizers: [
      { title: "Escargot", recipe: "Snails sautéed in garlic butter" },
      { title: "Crostini", recipe: "Toasted bread with tomato and basil" },
      { title: "Calamari", recipe: "Fried squid with a lemon aioli" },
    ],
    salads: [
      {
        title: "Caesar Salad",
        recipe: "Classic Caesar salad with croutons and parmesan",
      },
      {
        title: "Greek Salad",
        recipe: "Mixed greens with cucumbers, tomatoes, and feta cheese",
      },
    ],
    entrees: [
      {
        title: "Coq au Vin",
        recipe: "Chicken cooked in red wine and mushroom",
      },
      {
        title: "Bouillabaisse",
        recipe: "Mediterranean fish stew with saffron and rouille",
      },
      {
        title: "Ratatouille",
        recipe: "Stewed vegetables with eggplant, bell pepper, and zucchini",
      },
    ],
    desserts: [
      {
        title: "Crème Brûlée",
        recipe: "Classic French custard with caramelized sugar",
      },
      {
        title: "Chocolate Mousse",
        recipe: "Rich chocolate mousse with whipped cream",
      },
      { title: "Sorbet", recipe: "Assorted flavors of sorbet" },
    ],
    beverages: [
      { title: "Wine List", recipe: "A selection of red and white wines" },
      {
        title: "Cocktails",
        recipe: "A selection of classic and signature cocktails",
      },
      { title: "Coffee and Tea", recipe: "A selection of coffee and tea" },
    ],
  };

  const elements = [];

  for (let cat in catsAndDishes) {
    const newCat = createCat(cat);
    newCat
      .querySelector(".dishes")
      .append(
        ...catsAndDishes[cat].map((dish) => createDish(dish.title, dish.recipe))
      );
    elements.push(newCat);
  }

  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.append(...elements);
  return menu;
}
