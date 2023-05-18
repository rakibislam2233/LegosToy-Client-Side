import { Link } from "react-router-dom";


const SliderComponent = ({images}) => {
    return (
        <div
            style={{
              backgroundImage: `url(${images})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode:"multiply"
            
            }}
            className={`bg-gray-900 bg-opacity-30 w-full h-screen`}
          >
             <div className="w-full max-w-6xl mx-auto h-full flex items-center p-5">
          <div className="space-y-4">
          <h2 className="text-xl  text-[#02224D] font-semibold">Legos Collection</h2>
            <h2 className="text-5xl  font-bold text-white">Kids Lego Toys Store Shopify</h2>
           <Link className="block " to="/menu"><button className="py-3 px-5 w-44 bg-[#752BFD] rounded-full shadow-lg font-semibold  text-white hover:text-[#02224D] hover:bg-[#ffffff] duration-500">Shop Now</button></Link>
          </div>
           </div>
          </div>
    );
};

export default SliderComponent;