import React from "react";
import { Link } from "react-router-dom";

const AllToyDetails = ({singletoy}) => {
    const {_id,toyName,seller,quantity,price,image,category,SellerEmail,Rating} = singletoy
  return (
    <div className="card w-ful h-[450px] bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-semibold">{toyName}</h2>
        <p className="font-semibold">Price: ${price}</p>
        <p className="font-semibold">Available Quantity:{quantity}</p>
        <p className="font-semibold">Seller:{seller}</p>
        <div className="card-actions">
          <Link className="w-full" to={`/singleToy/${_id}`}><button className="w-full btn bg-[#024E92] border-none ">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default AllToyDetails;
