import React from "react";

const WhatIDo = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
        <img
          src="https://i.postimg.cc/7YGT9LNV/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIy-LTA2-L2st-OTEtd-G9vbi04-NDAy-LWx5aj-Ey-Mz-Yt-MS5qc-Gc.jpg"
          className="w-full rounded-lg shadow-2xl"
        />
        </div>
        <div className="w-full lg:w-1/2 space-y-3">
         <p className="font-semibold">WHAT WE DO</p>
          <h1 className="text-5xl font-bold">We help organize events for kids</h1>
          <p className="font-semibold">Fun, educational activities for every occasion with premium toys and snacks. Learn more about our services!</p>
          <button className="w-52 py-2 font-semibold text-white px-5 rounded-full bg-[#024E92]">Discover Now</button>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
