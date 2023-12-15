import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Spinner from "../../../assets/Lotti/loading.json";
import { Helmet } from "react-helmet";
const AllToys = () => {
  const [toy, setToy] = useState();
  const [error, setError] = useState();
  const [search, SetSearch] = useState();
  const [loading, setLoading] = useState(true);
  const [showResults, setShowResults] = useState(false);
  useEffect(() => {
    fetch(`https://legos-toy-server-side.vercel.app/allToy/20`)
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSearch = (e) => {
    const value = e.target.value;
    SetSearch(value);
  };
  //seracchtoyName function here
  const searchToyName = () => {
    setError("");
    if (search === undefined) {
      return setError("Please Enter Any Toy Name");
    }
    fetch(`https://legos-toy-server-side.vercel.app/searchByToyName/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
        setLoading(false);
      });
  };
  //handleseeMore function here
  const handleSeemore = () => {
    fetch(`https://legos-toy-server-side.vercel.app/allToy`)
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
        setLoading(false);
        setShowResults(true);
      });
  };
  return (
    // allToy section start
    <div className="w-full pt-20 p-5">
      <Helmet>
        <title>All Toy | LegoLandmark</title>
      </Helmet>
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
        <h2 className="lg:ml-96 text-rose-700">{error}</h2>
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
            <div></div>
            <table className="table table-zebra w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Si</th>
                  <th>Photo</th>
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
                        <th>
                          <img
                            className="w-16 h-16 rounded-full"
                            src={data.image}
                            alt=""
                          />
                        </th>
                        <th>{data.toyName}</th>
                        <th>{data.seller}</th>
                        <th>{data.category}</th>
                        <th>${data.price}</th>
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
          {!showResults && (
            <div className="flex justify-center py-3">
              <button
                onClick={handleSeemore}
                className="py-3 px-8 text-white font-semibold bg-[#024E92] rounded-full"
              >
                See More
              </button>
            </div>
          )}
        </>
      )}
    </div>
    //alltoy section end
  );
};

export default AllToys;
