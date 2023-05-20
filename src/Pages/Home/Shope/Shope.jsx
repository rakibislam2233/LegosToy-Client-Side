import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Lottie from "lottie-react";
import Spinner from "../../../assets/Lotti/loading.json";
import "react-tabs/style/react-tabs.css";
import { UserContext } from "../../../Context/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
const Shope = () => {
  const { user } = useContext(UserContext);
  const [category, setCategory] = useState("lego-Car");
  const [loading,setLoading] = useState(true);
  const [datas, setDatas] = useState();
  const naviget = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const viewButton = (id) => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to log in first to view details",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      naviget(`/singleToy/${id}`);
    } else {
      naviget(`/singleToy/${id}`);
    }
  };
  const handelClick = (e) => {
    setCategory(e.target.value);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/getCategories/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setDatas(data)
        setLoading(false)
      });
  }, [category]);
  console.log(datas);
  return (
    <>
    <div className="w-full max-w-6xl mx-auto py-5">
      <h3 className="text-4xl text-center font-semibold py-5 ">Our Shope</h3>
      {
        loading ? <div className="w-full h-80 flex justify-center items-center"><Lottie animationData={Spinner} loop={true} /></div> :
        <Tabs className="">
          <TabList className="flex justify-center border-b">
            <Tab>
              <input
                className="cursor-pointer"
                onClick={handelClick}
                type="submit"
                value="Lego-Car"
              />
            </Tab>
            <Tab>
              <input
                className="cursor-pointer"
                onClick={handelClick}
                type="submit"
                value="Lego-Architecture"
              />
            </Tab>
            <Tab>
              <input
                className="cursor-pointer"
                onClick={handelClick}
                type="submit"
                value="Lego-City"
              />
            </Tab>
          </TabList>

          <TabPanel>
            {datas?.length == 0 ? (
              <div className="w-full h-80 flex justify-center items-center">
                <h2 className="text-5xl font-semibold">No Data Availble</h2>
              </div>
            ) : (
              <div  className="w-full grid md:grid-cols-2 p-5 gap-5">
                {datas?.map((data) => (
                  <>
                    <div data-aos="zoom-in" data-aos-duration="3000" className="w-full h-full bg-base-100  border md:flex justify-between rounded-2xl">
                      <div className="md:w-1/2 ">
                        <img
                          className="w-full rounded-2xl  h-72 cursor-pointer"
                          src={data.image}
                          alt="Shoes"
                        />
                      </div>

                      <div className="md:w-1/2 p-5 space-y-3">
                      <div className="flex gap-2">
                      <h2 className="card-title">{data.toyName}</h2>
                        <div className="badge badge-accent">Tranding</div>
                      </div>
                        <p>Seller: {data.seller}</p>
                        <p>Price: ${data.price}</p>
                        <div className="flex gap-1 items-center">
                          <p>Rating:</p>
                          <Rating
                            style={{ maxWidth: 100 }}
                            readOnly
                            value={data.rating}
                          />
                        </div>
                        <div>
                          <button
                            onClick={() => viewButton(data._id)}
                            className="py-2 px-6 rounded-full bg-[#024E92] text-white cursor-pointer"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            )}
          </TabPanel>
          <TabPanel>
            {datas?.length == 0 ? (
              <div className="w-full h-80 flex justify-center items-center">
                <h2 className="text-5xl font-semibold">No Data Availble</h2>
              </div>
            ) : (
              <div className="w-full grid md:grid-cols-2 p-5 gap-5">
                {datas?.map((data) => (
                  <>
                    <div data-aos="zoom-in" data-aos-duration="3000" className="w-full h-full bg-base-100  border md:flex justify-between rounded-2xl">
                      <div className="md:w-1/2 ">
                        <img
                          className="w-full rounded-2xl  h-72 cursor-pointer"
                          src={data.image}
                          alt="Shoes"
                        />
                      </div>

                      <div className="md:w-1/2 p-5 space-y-3">
                      <div className="flex gap-2">
                      <h2 className="card-title">{data.toyName}</h2>
                        <div className="badge badge-accent">New</div>
                      </div>
                        <p>Seller: {data.seller}</p>
                        <p>Price: ${data.price}</p>
                        <div className="flex gap-1 items-center">
                          <p>Rating:</p>
                          <Rating
                            style={{ maxWidth: 100 }}
                            readOnly
                            value={data.rating}
                          />
                        </div>
                        <div>
                          <button
                            onClick={() => viewButton(data._id)}
                            className="py-2 px-6 rounded-full bg-[#024E92] text-white cursor-pointer"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            )}
          </TabPanel>
          <TabPanel>
            {datas?.length == 0 ? (
              <div className="w-full h-80 flex justify-center items-center">
                <h2 className="text-5xl font-semibold">No Data Availble</h2>
              </div>
            ) : (
              <div className="w-full grid md:grid-cols-2 p-5 gap-5">
                {datas?.map((data) => (
                  <>
                    <div data-aos="zoom-in" data-aos-duration="3000" className="w-full h-full bg-base-100  border md:flex justify-between rounded-2xl">
                      <div className="md:w-1/2 ">
                        <img
                          className="w-full rounded-2xl  h-72 cursor-pointer"
                          src={data.image}
                          alt="Shoes"
                        />
                      </div>
                      <div className="md:w-1/2 p-5 space-y-3">
                        <h2 className="card-title">{data.toyName}</h2>
                        <p>Seller: {data.seller}</p>
                        <p>Price: ${data.price}</p>
                        <div className="flex gap-1 items-center">
                          <p>Rating:</p>
                          <Rating
                            style={{ maxWidth: 100 }}
                            readOnly
                            value={data.rating}
                          />
                        </div>
                        <div>
                          <button
                            onClick={() => viewButton(data._id)}
                            className="py-2 px-6 rounded-full bg-[#024E92] text-white cursor-pointer"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            )}
          </TabPanel>
        </Tabs>
      }
       
    </div>
    <div className="w-full  h-full">
        <img  data-aos-duration="3000"  className="w-full h-full rounded-xl" src="https://i.postimg.cc/G23h7Ph1/images.jpg" alt="" />
       </div>
    </>
  );
};

export default Shope;
