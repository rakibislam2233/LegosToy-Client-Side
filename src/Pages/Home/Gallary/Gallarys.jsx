import React from "react";
const Gallerys = () => {
  return (
    <>
      <div className="w-full py-5">
        <h3 className="text-4xl text-center font-semibold py-5 ">
          Our Gallery
        </h3>
        <div className="w-full h-full grid lg:grid-cols-4">
          <div
            data-aos="zoom-in-right"
            className="lg:col-span-2  cursor-pointer  relative border"
          >
            <img
              className="w-full h-96"
              src="https://i.postimg.cc/zDC9bjP7/2-3404bec6-d846-40af-9044-eabbf78b3cd6.jpg"
              alt=""
            />
            <div className="bg-[#024E92] w-full h-full opacity-0 hover:opacity-50 duration-500 absolute top-0 "></div>
          </div>
          <div data-aos="zoom-out" data-aos-duration="3000" className=" cursor-pointer  relative border">
            <img
              className="w-full h-96"
              src="https://i.postimg.cc/G3x5hpHS/gallery-3.png"
              alt=""
            />
            <div className="bg-[#024E92] w-full h-full opacity-0 hover:opacity-50 duration-500 absolute top-0 "></div>
          </div>
          <div
            data-aos="zoom-in-left"
            data-aos-duration="3000"
            className=" cursor-pointer  relative border"
          >
            <img
              className="w-full h-96"
              src="https://i.postimg.cc/fL4rktc1/gallery-5.png"
              alt=""
            />
            <div className="bg-[#024E92] w-full h-full opacity-0 hover:opacity-50 duration-500 absolute top-0 "></div>
          </div>
        </div>
        <div className="w-full h-full grid lg:grid-cols-4">
          <div data-aos="zoom-in" data-aos-duration="3000" className=" cursor-pointer relative border">
            <img
              className="w-full h-96"
              src="https://i.postimg.cc/D06jCx9K/gallery-6.png"
              alt=""
            />
            <div className="bg-[#024E92] w-full h-full opacity-0 hover:opacity-50 duration-500 absolute top-0 "></div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="3000"
            className=" lg:col-span-2  cursor-pointer  relative border"
          >
            <img
              className="w-full h-96"
              src="https://i.postimg.cc/9QvSCBgB/car1.jpg"
              alt=""
            />
            <div className="bg-[#024E92] w-full h-full opacity-0 hover:opacity-50 duration-500 absolute top-0 "></div>
          </div>
          <div
            data-aos="zoom-in-down"
            data-aos-duration="3000"
            className=" cursor-pointer  relative border"
          >
            <img
              className="w-full h-96"
              src="https://i.postimg.cc/bJQfK5zb/car4.jpg"
              alt=""
            />
            <div className="bg-[#024E92] w-full h-full opacity-0 hover:opacity-50 duration-500 absolute top-0 "></div>
          </div>
        </div>
        <div className="w-full h-full grid lg:grid-cols-4">
          <div className=" cursor-pointer  relative border">
            <img
              data-aos="fade-up"
              data-aos-duration="3000"
              className="w-full h-96"
              src="https://i.postimg.cc/DZBTgMtC/banner1.jpg"
              alt=""
            />
            <div className="bg-[#024E92] w-full h-full opacity-0 hover:opacity-50 duration-500 absolute top-0 "></div>
          </div>
          <div  data-aos="zoom-in"
              data-aos-duration="3000" className=" cursor-pointer  relative border">
            <img
              className="w-full h-96"
              src="https://i.postimg.cc/2j9PHvKS/banner5.jpgg"
              alt=""
            />
            <div className="bg-[#024E92] w-full h-full opacity-0 hover:opacity-50 duration-500 absolute top-0 "></div>
          </div>
          <div  data-aos="fade-up"
              data-aos-duration="3000" className="lg:col-span-2  cursor-pointer  relative border">
            <img
              className="w-full h-96"
              src="https://i.postimg.cc/26zPtxYV/banner4.jpg"
              alt=""
            />
            <div className="bg-[#024E92] w-full h-full opacity-0 hover:opacity-50 duration-500 absolute top-0 "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallerys;
