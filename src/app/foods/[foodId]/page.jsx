import Image from "next/image";
import React from "react";

const FoodDetailPage = async ({ params }) => {
  const { foodId } = await params;
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`,
  );
  const data = await res.json();
  const FoodData = data.data;

  const {
    category,
    dish_name,
    price,
    image_link,
    origin_and_popularity,
    rating,
  } = FoodData;
  console.log(data.data);
  return (
    <div>
      <h1 className="text-info font-bold">
        Khabeb naki? : <span className="text-success">{dish_name}</span>{" "}
      </h1>
      <h1 className="text-info font-bold">
        Dam koto? : <span className="text-success">{price} Taka</span>{" "}
      </h1>
      <h1 className="text-info font-bold">
        Rating kemon? :
        <span className="text-success"> {rating} Out of 5</span>{" "}
      </h1>
      <h1 className="text-info font-bold">
        Chobi dekhan :
        <span className="text-success">
          <Image
            src={image_link}
            alt={dish_name}
            width={400}
            height={400}
          ></Image>
        </span>{" "}
      </h1>
      <h1 className="text-info font-bold">
        Eidi Abar khay kara? :
        <span className="text-success">{origin_and_popularity}</span>{" "}
      </h1>
    </div>
  );
};

export default FoodDetailPage;
