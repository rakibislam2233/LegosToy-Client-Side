import React from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
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
      <div className="w-full max-w-4xl mx-auto py-32 p-5">
        <div
          data-aos="zoom-in"
          className="card w-ful h-full bg-base-100 shadow-xl my-4"
        >
          <div className="w-full md:flex justify-between gap-5 p-2">
          <div className="md:w-1/2">
            <img className="w-full h-96 rounded-2xl" src={image} alt="Shoes" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="md:w-1/2"
          >
            <h2 className="text-2xl font-semibold uppercase">{toyName}</h2>
            <p>Seller name: {seller}</p>
            <p>Seller email: {sellerEmail}</p>
            <p>Sub category: {category}</p>
            <p>Price: ${price}</p>
            <p className="flex  items-center">
              Rating:{" "}
              <Rating style={{ maxWidth: 100 }} readOnly value={rating} />
            </p>
            <p>Available Quantity: {quantity}</p>
            <p className="pb-2">Description: {description}</p>
            <button className="py-3 px-8 bg-[#024E92] rounded-full text-white font-semibold">Add To Cart</button>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
