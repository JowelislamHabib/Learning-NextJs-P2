import React from "react";

const FoodsPage = async () => {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
  const foods = await res.json();
  const foodData = foods.data;
  console.log(foodData);
  return (
    <div>
      <h2>Total item: {foodData.length} foods</h2>
    </div>
  );
};

export default FoodsPage;
