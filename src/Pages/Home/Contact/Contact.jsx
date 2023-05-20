import Lottie from "lottie-react";
import ContactNow from "../../../assets/Lotti/contact-2.json";
const Contact = () => {
  return (
    <section className="py-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Contact us</h2>
        </div>
        <div className="max-w-6xl mx-auto mt-5 overflow-hidden bg-white ">
          <div className="grid items-stretch md:grid-cols-2">
            <div>
              <div className="p-6 sm:p-10 border rounded-2xl">
                <h3 className="text-2xl font-semibold text-black">
                  Send us a message
                </h3>

                <htmlForm className="mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div>
                      <label htmlFor="" className="text-base font-medium text-gray-900">
                        Your name
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder=""
                          className="block w-full py-2 px-5 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-[#024E92] focus:bg-white caret-[#024E92]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="" className="text-base font-medium text-gray-900">
                        Your email
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="email"
                          name=""
                          id=""
                          placeholder=""
                          className="block w-full py-2 px-5 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-[#024E92] focus:bg-white caret-[#024E92]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="" className="text-base font-medium text-gray-900">
                        Phone number
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="tel"
                          name=""
                          id=""
                          placeholder=""
                          className="block w-full py-2 px-5 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-[#024E92] focus:bg-white caret-[#024E92]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="" className="text-base font-medium text-gray-900">
                        Company name
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder=""
                          className="block w-full py-2 px-5 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-[#024E92] focus:bg-white caret-[#024E92]"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="" className="text-base font-medium text-gray-900">
                        Message
                      </label>
                      <div className="mt-2.5 relative">
                        <textarea
                          name=""
                          id=""
                          placeholder=""
                          className="block w-full py-2 px-5 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-xl resize-y bg-gray-50 focus:outline-none focus:border-[#024E92] focus:bg-white caret-[#024E92]"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        className="inline-flex items-center justify-center w-full py-2 px-5 mt-2 text-base font-semibold text-white transition-all duration-200 bg-[#024E92] border border-transparent rounded-full focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </htmlForm>
              </div>
            </div>
            {/* add a new section */}
             <Lottie  className="w-full h-full"  animationData={ContactNow} loop={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
