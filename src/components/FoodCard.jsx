import Image from "next/image";
import Link from "next/link";
import React from "react";

const FoodCard = ({ food }) => {
  const { category, dish_name, price, image_link, origin_and_popularity } =
    food;
  return (
    <div>
      <div>
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <Image
              src={image_link}
              alt={dish_name}
              width={300}
              height={300}
            ></Image>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">
              {dish_name}
              <div className="badge badge-secondary uppercase">{category}</div>
            </h2>
            <p className="font-bold text-xl">Price: ${price}</p>
            <p>{origin_and_popularity}</p>
            <div className="card-actions justify-end">
              <Link href={`/foods/${food.id}`}>
                <div className="btn btn-outline">Show details</div>
              </Link>
              <div className="btn btn-primary">Add to cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
