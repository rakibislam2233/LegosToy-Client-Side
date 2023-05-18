import React, { useContext } from 'react';
import { UserContext } from '../../../Context/AuthProvider/AuthProvider';
import { useForm } from "react-hook-form";
const UpdateToyModal = ({singelUpdateToy}) => {
    const { user } = useContext(UserContext)
    const {toyName,seller,quantity,price,image,category,sellerEmail,rating,description} = singelUpdateToy
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
    return (
        <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="w-full">
            <div className="card  w-full  shadow-2xl bg-base-100">
              <div className="card-body">
                <h3 className="text-center text-3xl font-semibold">Update Your Toy</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                {errors.exampleRequired && <span>This field is required</span>}
                <div className="md:flex justify-between gap-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="font-semibold">Toy Name</span>
                    </label>
                    <input
                      className="py-1  focus:outline-none border  px-3 rounded-full "
                      {...register("toyName")}
                      required
                      placeholder="Enter Toy Name"
                      defaultValue={toyName}
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="font-semibold">Seller name</span>
                    </label>
                    <input
                      className="py-1  focus:outline-none border  px-3 rounded-full "
                      {...register("seller")}
                      required
                      placeholder="Enter Seller Name"
                      defaultValue={user?.displayName}
                      type="text"
                    />
                  </div>
                </div>
                <div className="md:flex justify-between gap-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="font-semibold">Seller email</span>
                    </label>
                    <input
                      className="py-1  focus:outline-none border  px-3 rounded-full "
                      {...register("sellerEmail")}
                      required
                      placeholder="Enter Seller Email"
                      type="email"
                      defaultValue={user?.email}
                      readOnly
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="font-semibold">Category</span>
                    </label>
                    <select
                      className="text-input py-1   focus:outline-none border  px-3 rounded-full "
                      {...register("category")}
                      defaultValue={category}
                    >
                      <option value="lego-city">lego City</option>
                      <option value="lego-car">lego Car</option>
                      <option value="lego-architecture">
                        lego Architecture
                      </option>

                    </select>
                  </div>
                </div>
                <div className="md:flex justify-between gap-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="font-semibold">Price</span>
                    </label>
                    <input
                      className="py-1  focus:outline-none border  px-3 rounded-full "
                      {...register("price")}
                      required
                      placeholder="Enter Toy Price"
                      type="number"
                      min='100'
                      defaultValue={price}
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="font-semibold">Rating</span>
                    </label>
                    <input
                      className="py-1  focus:outline-none border  px-3 rounded-full "
                      {...register("rating")}
                      required
                      placeholder="Enter Rating"
                      type="text"
                      min='1'
                      max='5'
                      defaultValue={rating}
                    />
                  </div>
                </div>
                <div className="md:flex justify-between gap-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="font-semibold">Toy Phot Url</span>
                    </label>
                    <input
                      className="py-1  focus:outline-none border  px-3 rounded-full "
                      {...register("image")}
                      required
                      placeholder="Enter Toy Phot Url"
                      type="url"
                      defaultValue={image}
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="font-semibold">Quantity</span>
                    </label>
                    <input
                      className="text-input py-1  focus:outline-none border  px-3 rounded-full "
                      {...register("quantity")}
                      required
                      placeholder="Enter Available Quantity"
                      type="number"
                      defaultValue={quantity}
                    />
                  </div>
                </div>
                <div className="md:flex justify-between gap-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="font-semibold">Description</span>
                    </label>
                    <textarea
                      className="pb-8 py-2  focus:outline-none border  px-3 rounded "
                      {...register("description")}
                      required
                      placeholder="Enter Toy Description"
                      type="text"
                      defaultValue={description}
                    />
                  </div>
                </div>
                <div className="form-control py-2">
                  <input
                    className="bg-[#024E92] text-white font-semibold py-2 my-2 rounded-full cursor-pointer"
                    value="Add Toy"
                    type="submit"
                  />
                </div>
                <div className="form-control">
              <label htmlFor="my-modal-6" className="btn rounded-full bg-rose-600 border-none">
              Close
            </label>
               </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default UpdateToyModal;