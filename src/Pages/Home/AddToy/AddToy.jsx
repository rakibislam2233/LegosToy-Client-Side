import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../Context/AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
const AddToy = () => {
    const {user} = useContext(UserContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
        fetch(`http://localhost:5000/allToy`,{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data => {
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your Toy Added Successfully',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      };
    return (
        <div className="hero min-h-screen bg-base-200 pt-20">
      <div className="hero-content flex-col lg:md:flex-row-reverse">
        <div className="w-full">
          <div className="card  w-full  shadow-2xl bg-base-100">
            <div className="card-body">
            <h3 className="text-center text-3xl">Add Your Toy</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                {errors.exampleRequired && <span>This field is required</span>}
                <div className="md:flex justify-between gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Toy Name</span>
                  </label>
                  <input
                    className="border py-1 border-gray-700 px-3 rounded-full "
                    {...register("toyName",{ required: true })}
                    placeholder="Enter Toy Name"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Seller name</span>
                  </label>
                  <input
                    className="border py-1 border-gray-700 px-3 rounded-full "
                    {...register("seller", { required: true })}
                    placeholder="Enter Seller Name"
                    defaultValue={user?.displayName}
                   type="text"
                  />
                </div>
                </div>
                <div className="md:flex justify-between gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Seller email</span>
                  </label>
                  <input
                    className="border py-1 border-gray-700 px-3 rounded-full "
                    {...register("SellerEmail", { required: true })}
                    placeholder="Enter Seller Email"
                    type="email"
                    defaultValue={user?.email}
                    readOnly
                  />
                </div>
                <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                <select className="text-input border py-1 border-gray-700 px-3 rounded-full " {...register("category",{ required: true })}>
                  <option  value="lego city">lego city</option>
                  <option value="lego star wars">lego star wars</option>
                  <option value="lego architecture">lego architecture</option>
                  <option value=" lego cars"> lego cars</option>
                </select>
                </div>
                </div>
                <div className="md:flex justify-between gap-4">
                <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                  className="border py-1 border-gray-700 px-3 rounded-full "
                  {...register("price",{ required: true })}
                  placeholder="Enter Toy Price"
                  type="number"
                />
                </div>
                <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                  className="border py-1 border-gray-700 px-3 rounded-full "
                  {...register("Rating",{ required: true })}
                  placeholder="Enter Rating"
                  type="text"
                />
                </div>
                </div>
                <div className="md:flex justify-between gap-4">
                <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Toy Phot Url</span>
                  </label>
                  <input
                  className="border py-1 border-gray-700 px-3 rounded-full "
                  {...register("image",{ required: true })}
                  placeholder="Enter Toy Phot Url"
                  type="url"
                  defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
                </div>
                <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input
                  className="text-input border py-1 border-gray-700 px-3 rounded-full "
                  {...register("quantity",{ required: true })}
                  placeholder="Enter Available Quantity"
                  type="number"
                />
                </div>
                </div>     
               <div className="form-control py-5">
               <input className="bg-[#742BFD] text-white font-semibold py-2 my-2 rounded-full cursor-pointer" value="Add Toy" type="submit" />
               </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AddToy;