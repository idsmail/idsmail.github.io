const h1 = React.createElement("h1", { id: "recipe-0", key: 2 }, "Baked Salmon", React.createElement("ul", null, "Element"));
const dessert = React.createElement("h2", { key: 3 }, "Coconut Cream Pie");

import Ingredient from "./Ingredient";

const items = [
    "2 lb salmon",
    "5 sprigs fresh rosemary",
    "2 tablespoons olive oil",
    "2 small lemons",
    "1 teaspoon kosher salt",
    "4 cloves of chopped garlic"
];

const ul = React.createElement(
    "ul",
    { className: "ingredients", key: 23 },
    items.map((ingredient, i) => React.createElement("li", { key: i + 10 }, ingredient))
);

function IngredientsList({ items }) {
    return React.createElement(
        "ul",
        { className: "ingredients" },
        items.map((ingredient, i) =>
            React.createElement("li", { key: i }, ingredient)
        )
    );
}

const element = <h1>Hello, {name}</h1>;
const secretIngredients = items;
ReactDOM.render(
    [dessert, h1, React.createElement(IngredientsList, null, { items: secretIngredients })],
    document.getElementById("root")
);
const ingredientsList = <IngredientsList list={["Koper"]} items={["a", "baba"]}></IngredientsList>
ReactDOM.render(
    ingredientsList,
    document.getElementById("root")
);