import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Aloo ka paratha",
    description: "Desi food",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Maggi",
    description: "Noodles",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Dosa",
    description: "South Indian food",
    price: 18.99,
  },
];
export default function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meals) => (
    <MealItem
      id={meals.id} // this is new!
      key={meals.id}
      name={meals.name}
      description={meals.description}
      price={meals.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
