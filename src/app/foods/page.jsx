import FoodCard from "@/components/FoodCard";
import React from "react";

const FoodsPage = async () => {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
  const foods = await res.json();
  const foodData = foods.data;
  console.log(foodData);
  return (
    <>
      <div>
        <h2 className="text-2xl">Total item: {foodData.length} foods</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {foodData.map((food) => (
          <FoodCard key={food.id} food={food}></FoodCard>
        ))}
      </div>
    </>
  );
};

export default FoodsPage;
