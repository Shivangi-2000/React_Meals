import React, { useEffect, useState } from "react";
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
  const [meals, setMeals] = useState([]); 
  const [httpError, setHttpError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    const fetchResp = async()=>{
     const response = await fetch('https://meal-http-95e35-default-rtdb.firebaseio.com/meal.json');
     if (!response.ok) {
      throw new Error('Something went wrong!');
    }
     const responseData = await response.json();

     const loadedMeals = [];

     for(const key in responseData){
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price

       })
     }
     setMeals(loadedMeals);
     setIsLoading(false);
  }
  fetchResp().catch((error) => {
    setIsLoading(false);
    setHttpError(error.message);
  });
},[])
if (isLoading) {
  return (
    <section className={classes.MealsLoading}>
      <p>Loading...</p>
    </section>
  );
}

if (httpError) {
  return (
    <section className={classes.MealsError}>
      <p>{httpError}</p>
    </section>
  );
}

  const mealsList = meals.map((meals) => (
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
