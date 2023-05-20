import React from "react";
import { Rating } from "@smastrom/react-rating";
const TestimonialDetails = ({ img, name }) => {
  return (
    <div className="w-80 py-10 px-5 rounded-2xl shadow-xl space-y-3">
      <div className="flex gap-2 items-center">
        <img className="w-10 h-10 rounded-full" src={img} alt="" />
        <h2 className="text-xl font-semibold">{name}</h2>
      </div>
      <h2>
        What a great store for the entire family! My kids love this place
        because of the toys!
      </h2>
      <Rating style={{ maxWidth: 100 }} readOnly value={4.5} />
    </div>
  );
};

export default TestimonialDetails;
