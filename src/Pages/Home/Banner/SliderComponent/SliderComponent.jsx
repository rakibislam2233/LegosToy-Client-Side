import { Link } from "react-router-dom";
import Lottie from "lottie-react";

const SliderComponent = ({ images, toy1 }) => {
  return (
    // this is slidercomponent
    <div
      style={{
        backgroundImage: `url(${images})`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
      }}
      className={`bg-gray-900 bg-opacity-30 w-full h-screen cursor-pointer`}
    >
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="w-full max-w-6xl mx-auto h-full flex justify-between items-center p-5"
      >
        <div className="space-y-4">
          <h2 className="text-xl  text-white font-semibold">
            Legos Collection
          </h2>
          <h2 className="text-5xl  font-bold text-teal-600">
            Kids Lego Toys Store Shopify
          </h2>
          <button
            data-aos="fade-up"
            data-aos-duration="3000"
            className="py-3 px-5 w-44 bg-[#752BFD] rounded-full shadow-lg font-semibold  text-white hover:text-[#02224D] hover:bg-[#ffffff] duration-500"
          >
            Shop Now
          </button>
        </div>
        <div>
          <Lottie className="h-72" animationData={toy1} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
