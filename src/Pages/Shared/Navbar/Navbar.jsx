
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaUserTie } from "react-icons/fa";
// import { UserContext } from "../../../Context/AuthProvider/AuthProvider";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useState } from "react";

const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
        <nav className="w-full bg-[#FFFFFF]  z-50  shadow-lg py-5 h-20 px-5">
        <div className="max-w-6xl mx-auto  flex justify-between items-center font-bodyFont">
          <div>
            <Link to={"/"}>
              {" "}
              <h3 className="text-2xl cursor-pointer font-bold text-[#02214D]">
                Legos<span className="text-[#742BFD]">Toy</span>
              </h3>
            </Link>
          </div>
          <ul
            className={`w-[75%] h-[100vh] md:w-auto md:h-auto bg-[#212428] md:bg-transparent text-center text-[#02214D] font-semibold  duration-500 md:duration-0  flex flex-col md:flex-row gap-5 absolute md:static  items-center ${
              show ? "top-[80px] space-y-1 left-0 " : "top-[80px]  left-[-700px]"
            }`}
          >
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "text-[#742BFD]" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to={"/allToy"}
              className={({ isActive }) => (isActive ? "text-[#742BFD]" : "")}
            >
             All Toys
            </NavLink>
            <NavLink
              to={"/myToy"}
              className={({ isActive }) => (isActive ? "text-[#742BFD]" : "")}
            >
              My Toys
            </NavLink>
            <NavLink
              to={"/addToy"}
              className={({ isActive }) => (isActive ? "text-[#742BFD]" : "")}
            >
              Add Toy
            </NavLink>
            <NavLink
              to={"/blogs"}
              className={({ isActive }) => (isActive ? "text-[#742BFD]" : "")}
            >
              Blogs
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-[#742BFD]" : "")}
            >
              Contact
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "text-[#742BFD]" : "")}
            >
              Sign up
            </NavLink>
            {/* { user ? (
              <>
                {user.photoURL ? (
                  <img
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={`${user.displayName}`}
                    data-tooltip-place="top"
                    className="w-12 h-12 rounded-full ring-2 cursor-pointer ring-[#742BFD] "
                    src={user.photoURL}
                    alt=""
                  />
                ) : (
                  <FaUserTie
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={`${user.displayName}`}
                    data-tooltip-place="top"
                    className="w-10 h-10  rounded-full ring-2 cursor-pointer ring-white"
                  ></FaUserTie>
                )}
                <button
                //   onClick={handelLogout}
                  className="py-2 px-5 bg-[#742BFD] rounded-full"
                >
                  Log out
                </button>
              </>
            ) : (
              <Link to={"/login"}>
                <button className="py-2 px-5 bg-[#742BFD] rounded-full">
                  Login
                </button>
              </Link>
            )} */}
            <Tooltip id="my-tooltip" />
          </ul>
          <>
            <button
              className="md:hidden duration-500"
              onClick={() => setShow(!show)}
            >
              {show ? (
                <HiX className="w-8 h-8"></HiX>
              ) : (
                <HiMenuAlt3 className="w-8 h-8"></HiMenuAlt3>
              )}
            </button>
          </>
        </div>
      </nav>
    );
};

export default Navbar;