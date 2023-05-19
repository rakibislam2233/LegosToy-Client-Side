import React, { useContext } from 'react';
import { UserContext } from '../../../Context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
const UpdateToyModal = ({singelUpdateToy,setmyToy,myToy}) => {
    const { user } = useContext(UserContext)
    const {_id,toyName,quantity,price,image,category,rating,description} = singelUpdateToy

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const toyName = form.toyName.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const image = form.image.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const seller = form.seller.value;
    const sellerEmail = form.sellerEmail.value;
    const data={
      toyName,seller,sellerEmail,quantity,price,image,category,rating,description
    }
    fetch(`http://localhost:5000/updateToy/${_id}`,{
      method:'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(res =>res.json())
    .then(data=>{
      console.log(data);
      if(data.modifiedCount>0){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your Toy Updated Succesfully',
          showConfirmButton: false,
          timer: 1500
        })
        const remaining = myToy.filter(toy=> toy._id !==_id);
        console.log(remaining);
        const updateToy = myToy.find(toy=>toy._id===_id);
        console.log(updateToy);
        const newToy = [updateToy,...remaining]
        setmyToy(newToy)
      }else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please Update Anythings...",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    })
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
                <form onSubmit={handleSubmit}>
                <div className="md:flex justify-between gap-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="font-semibold">Toy Name</span>
                    </label>
                    <input
                      className="py-1 focus:outline-none border  px-3 rounded-full "
                      name='toyName'
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
                      name='seller'
                      required
                      placeholder="Enter Seller Name"
                      defaultValue={user?.displayName}
                      value={user?.displayName}
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
                      name='sellerEmail'
                      required
                      placeholder="Enter Seller Email"
                      type="email"
                      defaultValue={user?.email}
                      
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="font-semibold">Category</span>
                    </label>
                    <select
                      className="text-input py-1   focus:outline-none border  px-3 rounded-full "
                      name='category'
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
                      name='price'
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
                      name='rating'
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
                      name='image'
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
                      name='quantity'
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
                     name='description'
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
                    value="Update Toy"
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