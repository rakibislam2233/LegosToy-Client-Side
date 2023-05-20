import React from "react";
import Marquee from "react-fast-marquee";
import Lottie from "lottie-react";
import toy1 from "../../../assets/Lotti/rakib.json";
import toy2 from "../../../assets/Lotti/rakib2.json";
import toy3 from "../../../assets/Lotti/lego1.json";
import toy4 from "../../../assets/Lotti/lego2.json";
import toy5 from "../../../assets/Lotti/rakib3.json";
import toy6 from "../../../assets/Lotti/legoCar.json";
import toy7 from "../../../assets/Lotti/toy.json";
import toy8 from "../../../assets/Lotti/rakib4.json";
const About = () => {
  return (
    <>
      <div className="hero py-10">
        <div className="hero-content flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2">
            <img
              data-aos="zoom-in"
              data-aos-duration="3000"
              src="https://i.postimg.cc/GppKJVwP/about-Images.png"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="3000"
            className="w-full lg:w-1/2 space-y-3"
          >
            <h2 className="text-2xl font-semibold">About</h2>
            <h1 className="text-5xl font-bold">
              We provide & offer premium service
            </h1>
            <p className="py-6 font-semibold">
              Our area of practice is quite wide: toy production, custom-made
              toys for every age, toy brand promotion, playrooms design with
              equipment, and of course kids camps and events! Contact us today
              and get a free consultation on any product we offer. Join our
              community for updates.
            </p>
            <button className="w-52 py-2 font-semibold text-white px-5 rounded-full bg-[#024E92]">
              About Us
            </button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto  py-10">
        <Marquee>
          <div className="w-full flex gap-2 py-5">
            <Lottie className="h-52" animationData={toy1} loop={true} />
            <Lottie className="h-52" animationData={toy2} loop={true} />
            <Lottie className="h-52" animationData={toy3} loop={true} />
            <Lottie className="h-52" animationData={toy4} loop={true} />
            <Lottie className="h-52" animationData={toy5} loop={true} />
            <Lottie className="h-52" animationData={toy6} loop={true} />
            <Lottie className="h-52" animationData={toy7} loop={true} />
            <Lottie className="h-52" animationData={toy8} loop={true} />
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default About;
