import Lottie from "lottie-react";
import ContactNow from "../../../assets/Lotti/contact-2.json";
const Contact = () => {
  return (
    <section class="py-10">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-4xl font-bold">Contact us</h2>
        </div>
        <div class="max-w-6xl mx-auto mt-5 overflow-hidden bg-white  shadow-md">
          <div class="grid items-stretch grid-cols-1 lg:grid-cols-5">
            <div class="lg:col-span-3">
              <div class="p-6 sm:p-10">
                <h3 class="text-2xl font-semibold text-black">
                  Send us a message
                </h3>

                <form class="mt-8">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div>
                      <label for="" class="text-base font-medium text-gray-900">
                        Your name
                      </label>
                      <div class="mt-2.5 relative">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder=""
                          class="block w-full py-2 px-5 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label for="" class="text-base font-medium text-gray-900">
                        Your email
                      </label>
                      <div class="mt-2.5 relative">
                        <input
                          type="email"
                          name=""
                          id=""
                          placeholder=""
                          class="block w-full py-2 px-5 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label for="" class="text-base font-medium text-gray-900">
                        Phone number
                      </label>
                      <div class="mt-2.5 relative">
                        <input
                          type="tel"
                          name=""
                          id=""
                          placeholder=""
                          class="block w-full py-2 px-5 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label for="" class="text-base font-medium text-gray-900">
                        Company name
                      </label>
                      <div class="mt-2.5 relative">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder=""
                          class="block w-full py-2 px-5 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="" class="text-base font-medium text-gray-900">
                        Message
                      </label>
                      <div class="mt-2.5 relative">
                        <textarea
                          name=""
                          id=""
                          placeholder=""
                          class="block w-full py-2 px-5 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-xl resize-y bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <button
                        class="inline-flex items-center justify-center w-full py-2 px-5 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* add a new section */}
      <Lottie   animationData={ContactNow} loop={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
