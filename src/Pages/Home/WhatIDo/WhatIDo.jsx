import React from "react";

const WhatIDo = () => {
  return (
    <>
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
        <img
          data-aos='zoom-in'
          data-aos-duration="3000"
          src="https://i.postimg.cc/7YGT9LNV/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIy-LTA2-L2st-OTEtd-G9vbi04-NDAy-LWx5aj-Ey-Mz-Yt-MS5qc-Gc.jpg"
          className="w-full rounded-lg shadow-2xl"
        />
        </div>
        <div  data-aos='zoom-in' data-aos-duration="3000" className="w-full lg:w-1/2 space-y-3">
         <p className="font-semibold">WHAT WE DO</p>
          <h1 className="text-5xl font-bold">We help organize events for kids</h1>
          <p className="font-semibold">Fun, educational activities for every occasion with premium toys and snacks. Learn more about our services!</p>
          <button className="w-52 py-2 font-semibold text-white px-5 rounded-full bg-[#024E92]">Discover Now</button>
        </div>
      </div>
    </div>
    <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">We work with the best brands</h2>
        </div>
        <div className="grid items-center grid-cols-1 gap-10 mt-12 md:grid-cols-5 sm:gap-y-16">
            <div>
                <img className="object-contain w-auto mx-auto h-14" src="https://i.postimg.cc/8PKhnGNt/cl5-copyright.png" alt="" />
            </div>
            <div>
                <img className="object-contain w-auto mx-auto h-14" src="https://i.postimg.cc/cCD8j7yr/cl4-copyright.png" alt="" />
            </div>

            <div>
                <img className="object-contain w-full mx-auto h-14" src="https://i.postimg.cc/2SgnrxqW/cl3-copyright.png" alt="" />
            </div>

            <div>
                <img className="object-contain w-full h-10 mx-auto" src="https://i.postimg.cc/YSgY9mgs/cl2-copyright.png" alt="" />
            </div>

            <div>
                <img className="object-contain w-full mx-auto h-14" src="https://i.postimg.cc/nhXqyWLZ/cl1-copyright.png" alt="" />
            </div>
        </div>
    </div>
</section>

    </>
  );
};

export default WhatIDo;
