import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { UserContext } from "../../../Context/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
const Shope = () => {
  const { user } = useContext(UserContext);
  const [category, setCategory] = useState("lego-Car");
  const [datas, setDatas] = useState();
  const naviget = useNavigate();
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
      .then((data) => setDatas(data));
  }, [category]);
  console.log(datas);
  return (
    <div className="w-full max-w-6xl mx-auto py-5">
      <h3 className="text-4xl text-center font-semibold ">Our Shope</h3>
      {
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
              <div className="w-full grid md:grid-cols-2 p-5 lg:grid-cols-3 gap-5 my-4">
                {datas?.map((data) => (
                  <>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      className="card w-full h-full bg-base-100 shadow-xl border"
                    >
                      <figure>
                        <img
                          className="w-full h-72 cursor-pointer"
                          src={data.image}
                          alt="Shoes"
                        />
                      </figure>
                      <div className="p-5">
                        <h2 className="card-title">{data.toyName}</h2>
                        <p>Seller: {data.seller}</p>
                        <p>Price: {data.price}</p>
                        <p>Rating: {data.rating}</p>
                        <div className="card-actions justify-end">
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
              <div className="w-full grid md:grid-cols-2 p-5 lg:grid-cols-3 gap-5 my-4">
                {datas?.map((data) => (
                  <>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      className="card w-full h-full bg-base-100 shadow-xl border"
                    >
                      <figure>
                        <img
                          className="w-full h-72 cursor-pointer"
                          src={data.image}
                          alt="Shoes"
                        />
                      </figure>
                      <div className="p-5">
                        <h2 className="card-title">{data.toyName}</h2>
                        <p>Seller: {data.seller}</p>
                        <p>Price: {data.price}</p>
                        <p>Rating: {data.rating}</p>
                        <div className="card-actions justify-end">
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
              <div className="w-full grid md:grid-cols-2 p-5 lg:grid-cols-3 gap-5 my-4">
                {datas?.map((data) => (
                  <>
                    <div
                     data-aos="fade-up"
                     data-aos-duration="1500"
                      className="card w-full h-full bg-base-100 shadow-xl border"
                    >
                      <figure>
                        <img
                          className="w-full h-72 cursor-pointer"
                          src={data.image}
                          alt="Shoes"
                        />
                      </figure>
                      <div className="p-5">
                        <h2  className="card-title">{data.toyName}</h2>
                        <p>Seller: {data.seller}</p>
                        <p>Price: {data.price}</p>
                        <p>Rating: {data.rating}</p>
                        <div className="card-actions justify-end">
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
  );
};

export default Shope;
