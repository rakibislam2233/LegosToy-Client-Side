import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../Context/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
const AddToy = () => {
  const { user } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/addedToy`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Toy Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200 pt-20 p-5">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        className="card  w-full max-w-6xl mx-auto shadow-2xl bg-base-100 my-5"
      >
        <div className="card-body">
          <h3 className="text-center text-3xl font-semibold">Add Your Toy</h3>
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
                  className="text-input py-1  focus:outline-none border  px-3 rounded-full "
                  {...register("category")}
                >
                  <option value="lego-city">lego City</option>
                  <option value="lego-car">lego Car</option>
                  <option value="lego-architecture">lego Architecture</option>
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
                  min="100"
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
                  min="1"
                  max="5"
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
                />
              </div>
            </div>
            <div className="form-control py-5">
              <input
                className="bg-[#024E92] text-white font-semibold py-2 my-2 rounded-full cursor-pointer"
                value="Add Toy"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
