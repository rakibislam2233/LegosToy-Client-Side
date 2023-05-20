import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Spinner from "../../../assets/Lotti/loading.json";
const AllToys = () => {
  const [toy, setToy] = useState();
  const [error, setError] = useState();
  const [search, SetSearch] = useState();
  const [loading, setLoading] = useState(true);
  const [showResults, setShowResults] = useState(20)
  useEffect(() => {
    fetch(`https://legos-toy-server-side.vercel.app/allToy/${showResults}`)
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
        setLoading(false);
      });
  }, [showResults]);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const handleSearch = (e) => {
    const value = e.target.value;
    SetSearch(value);
  };
  const searchToyName = () => {
    setError("");
    if (search === undefined) {
      return setError("Please Enter value");
    }
    fetch(`https://legos-toy-server-side.vercel.app/searchByToyName/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
        setLoading(false);
      });
  };
  const handleSeemore = () => {
    fetch(`https://legos-toy-server-side.vercel.app/allToy`)
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
        setLoading(false);
      });
  };
  const handelChange = (e)=>{
    const value = e.target.value;
    setShowResults(value);
  }

  return (
    <div className="w-full pt-20 p-5">
      <h3 className="text-4xl text-center font-semibold ">All Toys</h3>
      <div className=" py-3 ">
        <div className="flex justify-center gap-2">
          <input
            onChange={handleSearch}
            className="w-full max-w-md border py-2 border-gray-700 px-8 rounded-full "
            type="text"
            name=""
            placeholder="Search any Toy Name"
            required
          />
          <button
            onClick={searchToyName}
            className="border py-1 border-gray-700 px-8 rounded-full "
          >
            Search
          </button>
        </div>
        <h2 className="ml-96 text-rose-700">{error}</h2>
      </div>

      {toy?.length == 0 ? (
        <div className="w-full h-80 flex justify-center items-center">
          <h2 className="text-5xl font-semibold">No Data Availble</h2>
        </div>
      ) : loading ? (
        <div className="w-full h-[420px] flex justify-center items-center">
          <Lottie animationData={Spinner} loop={true} />
        </div>
      ) : (
        <>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="w-full overflow-x-auto"
          >
            <div>
            <select onChange={handelChange} className="px-5 py-1 border-2 border-gray-800 rounded" name="" id="">
              <option value="20">Show  by default results</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
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
                      <tr key={index}>
                        <th>{index + 1}</th>
                        <th>{data.toyName}</th>
                        <th>{data.seller}</th>
                        <th>{data.category}</th>
                        <th>{data.price}</th>
                        <th>{data.quantity}</th>
                        <th>
                          <Link to={`/singleToy/${data._id}`}>
                            <button className="py-1 px-6 rounded-full bg-[#024E92] text-white cursor-pointer">
                              View Details
                            </button>
                          </Link>
                        </th>
                      </tr>
                    </>
                  ))}
              </tbody>
            </table>
          </div>
          {
            toy.length <= `${showResults}`  && <div className="flex justify-center">
            <button
              onClick={handleSeemore}
              className="py-3 px-8 text-white font-semibold bg-[#024E92] rounded-full"
            >
              See More
            </button>
          </div>
          }
        </>
      )}
    </div>
  );
};

export default AllToys;
