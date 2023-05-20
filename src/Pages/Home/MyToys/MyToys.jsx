import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Context/AuthProvider/AuthProvider";
import UpdateToyModal from "./UpdateToyModal";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import Spinner from "../../../assets/Lotti/loading.json";
const MyToys = () => {
  const [myToy, setmyToy] = useState();
  const { user } = useContext(UserContext);
  const [singelUpdateToy, setsingelUpdateToy] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/myToy/${user?.email}`)
      .then((res) => res.json())
      .then((data) =>{
         setmyToy(data)
         setLoading(false)
        });
  }, [myToy]);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const handleSingleData = (id) => {
    fetch(`http://localhost:5000/singleToy/${id}`)
      .then((res) => res.json())
      .then((data) =>{ 
        setsingelUpdateToy(data)
        setLoading(false)
      });
  };
  const handleRemoveToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be delted this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteSingelToy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Toy Deleted Successfully!",
                "success"
              );
              const remaining = myToy.filter((dt) => dt._id !== id);
              setmyToy(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
        <div  className="w-full pt-20 p-5">
        <h3 className="text-4xl text-center font-semibold ">My Toys</h3>
        {myToy?.length == 0 ? (
        <div className="w-full h-80 flex justify-center items-center">
          <h2 className="text-5xl font-semibold">No Data Availble</h2>
        </div>
      ) :  loading ? <div className="w-full h-[490px] flex justify-center items-center"><Lottie animationData={Spinner} loop={true} /></div> : 
        <div
          className="w-full overflow-x-auto p-5"
        >
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Si</th>
                <th>Name</th>
                <th>SellerEmail</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available quantity</th>
                <th>Rating</th>
                <th>Edit</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myToy &&
                myToy.map((data, index) => (
                  <>
                    {" "}
                    <tr>
                      <th>{index + 1}</th>
                      <th>{data.toyName}</th>
                      <th>{data.sellerEmail}</th>
                      <th>{data.category}</th>
                      <th>{data.price}</th>
                      <th>{data.quantity}</th>
                      <th>{data.rating}</th>
                      <th>
                        <label
                          onClick={() => handleSingleData(data._id)}
                          htmlFor="my-modal-6"
                          className="py-1 px-5 rounded-full bg-[#024E92] text-white cursor-pointer"
                        >
                          Update
                        </label>
                      </th>
                      <th>
                        <button
                          onClick={() => handleRemoveToy(data._id)}
                          className="py-1 px-5 text-white rounded-full bg-rose-600"
                        >
                          Delete
                        </button>
                      </th>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        </div>
      }

      {<UpdateToyModal  setmyToy={setmyToy} myToy={myToy} singelUpdateToy={singelUpdateToy}></UpdateToyModal>}
        </div>
    
    </div>
  );
};

export default MyToys;
