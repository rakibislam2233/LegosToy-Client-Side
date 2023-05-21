import {
  BsFacebook,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
const Footer = () => {
  return (
    <div className="bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8 space-y-3">
            <img
              className="w-12 h-12 rounded-full cursor-pointer"
              src="https://i.postimg.cc/QChSVHTs/56647.jpg"
              alt=""
            />
            <h3 className="font-semibold text-2xl">LegoLandmark</h3>
            <p className="text-base leading-relaxed text-gray-600 py2">
              We perhtmlForm baby and toddler photoshoots on special occasions,
              events and/or with our toys upon parents’ requests.
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              <li>
                <a
                 href="https://www.facebook.com/all.rakib.39" target="_blank"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-[#024E92] focus:bg-[#024E92]"
                >
                  <BsFacebook></BsFacebook>
                </a>
              </li>

              <li>
                <a
                href="https://www.instagram.com/r_a_k_i_b_a_l_i/"
                target="_blank"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-[#024E92] focus:bg-[#024E92]"
                >
                  <BsInstagram></BsInstagram>
                </a>
              </li>

              <li>
                <a
                 href="https://www.linkedin.com/in/md-rakib-ali/" target="_blank"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-[#024E92] focus:bg-[#024E92]"
                >
                  <BsLinkedin></BsLinkedin>
                </a>
              </li>

              <li>
                <a
                 href="https://github.com/rakibislam2233" target="_blank"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-[#024E92] focus:bg-[#024E92]"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      clipRulee ="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Company
            </p>

            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-[#024E92] focus:text-[#024E92]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-[#024E92] focus:text-[#024E92]"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-[#024E92] focus:text-[#024E92]"
                >
                  All Toy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-[#024E92] focus:text-[#024E92]"
                >
                  My Toy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Help
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-[#024E92] focus:text-[#024E92]"
                >
                  Customer Support
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-[#024E92] focus:text-[#024E92]"
                >
                  Delivery Details
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-[#024E92] focus:text-[#024E92]"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-[#024E92] focus:text-[#024E92]"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8 space-y-4">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Subscribe to newsletter
            </p>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="block w-full py-2 px-5 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-[#024E92] caret-[#024E92]"
              />
            </div>
            <button className="inline-flex items-center justify-center px-8 py-2 mt-3 font-semibold text-white transition-all duration-200 bg-[#024E92] rounded-full hover:bg-blue-700 focus:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />
        <p className="text-sm text-center text-gray-600 py-5">
          © Copyright 2023, All Rights Reserved by LegoLandmark
        </p>
      </div>
    </div>
  );
};

export default Footer;
