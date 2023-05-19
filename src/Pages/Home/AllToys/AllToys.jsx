import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toy, setToy] = useState();
  const [search,SetSearch] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/allToy`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, []);
  const handleSearch = (e) => {
    const value = e.target.value;
    SetSearch(value);
  }
  const searchToyName =()=>{
    if(search ===undefined){
        return
    }
    fetch(`http://localhost:5000/searchByToyName/${search}`)
    .then(res=>res.json())
    .then(data => {
        setToy(data)
        
    })
  }
  return (
    <div className="w-full pt-20 p-5">
      <h3 className="text-4xl text-center font-semibold ">All Toys</h3>
      <div className="flex justify-center py-10 gap-2 ">
        <input onChange={handleSearch} className="w-full max-w-md border py-2 border-gray-700 px-8 rounded-full " type="text" name="" placeholder="Search any Toy Name" />
        <button onClick={searchToyName} className="border py-1 border-gray-700 px-8 rounded-full ">Search</button>
    </div>
      {toy?.length == 0 ? (
        <div className="w-full h-80 flex justify-center items-center">
          <h2 className="text-5xl font-semibold">No Data Availble</h2>
        </div>
      ) : (
        <div className="w-full overflow-x-auto p-5">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Si</th>
                <th>Toy Name</th>
                <th>Seller-Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {toy &&
                toy.map((data, index) => (
                  <>
                    {" "}
                    <tr>
                      <th>{index + 1}</th>
                      <th>{data.toyName}</th>
                      <th>{data.seller}</th>
                      <th>{data.category}</th>
                      <th>{data.price}</th>
                      <th>{data.quantity}</th>
                      <th>
                       <Link to={`/singleToy/${data._id}`}><button className="py-1 px-6 rounded-full bg-[#024E92] text-white cursor-pointer">View Details</button></Link>
                      </th>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllToys;
