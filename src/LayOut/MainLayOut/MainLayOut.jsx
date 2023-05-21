import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";
import { useContext, useState } from "react";
import { UserContext } from "../../Context/AuthProvider/AuthProvider";
import Lottie from "lottie-react";
import Spinner from "../../assets/Lotti/loading.json";

const MainLayOut = () => {
    const {loading} = useContext(UserContext)
    return (
        loading ? <div className="w-full h-screen flex justify-center items-center"><Lottie animationData={Spinner} loop={true} /></div> :
        <div className="overflow-hidden">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;