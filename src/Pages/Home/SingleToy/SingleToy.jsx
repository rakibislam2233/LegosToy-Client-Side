import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const toy = useLoaderData();
  const {
    toyName,
    seller,
    quantity,
    price,
    image,
    category,
    sellerEmail,
    rating,
    description,
  } = toy;
  return (
    <div>
      <div className="w-full max-w-4xl mx-auto py-20 p-5">
        <div
          data-aos="zoom-in"
          className="card w-ful h-full bg-base-100 shadow-xl my-4"
        >
          <figure>
            <img className="w-full h-96" src={image} alt="Shoes" />
          </figure>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="card-body"
          >
            <h2 className="text-2xl font-semibold uppercase">{toyName}</h2>
            <p>Seller name: {seller}</p>
            <p>Seller email: {sellerEmail}</p>
            <p>Sub category: {category}</p>
            <p>Price: ${price}</p>
            <p>Rating: {rating}</p>
            <p>Available Quantity: {quantity}</p>
            <p className="">Description: {description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
