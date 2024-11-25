import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza name="Pepperoni" description="Mozzarella Cheese, Pepperoni"
      img="/public/pizzas/pepperoni.webp"
      />
      <Pizza name="Hawaiian" description="Sliced Ham, Pineapple, Mozzarella Cheese"
      img="/public/pizzas/hawaiian.webp"
      />
      <Pizza name="Americano" description="Sliced Ham, Pineapple, Mozzarella Cheese"
      img="/public/pizzas/big_meat.webp"      />
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
