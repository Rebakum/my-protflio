import Lottie from "lottie-react";
import React, { useState } from "react";
import animation from "../../../assets/lottie.json";

const Contact = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b76ad003-7ff6-4c8b-8430-8f585a965ed1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your message Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="py-20 border-t border-t-blue-950 " id="contact">
      <div className="px-5 mx-auto lg:px-10">
        <div className="overflow-hidden ">
          <h2 className="text-3xl font-bold text-center text-white uppercase lg:text-4xl title-border">
            Contact Me
          </h2>

          <div className="gap-5 p-5 mt-10 rounded-lg md:flex">
            <div className="rounded-lg md:w-1/2 hover:border-blue-200 hover:border">
              <Lottie animationData={animation} />
            </div>
            <div className="p-5 rounded-lg md:w-3/2 sm:p-12 hover:border-blue-200 hover:border">
              <p className="my-10 mb-4 text-xl text-center text-gray-400">
                Contact Me
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="hidden"
                  name="access_key"
                  value="b76ad003-7ff6-4c8b-8430-8f585a965ed1"
                />
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-semibold text-gray-400 "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 font-semibold text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email Address"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="msg"
                    className="block mb-2 font-semibold text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    name="msg"
                    placeholder="Write your message"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  {/* <button className="w-full button gradient-border">
                                        Send Message
                                    </button> */}
                  <a
                    href="#"
                    className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
                  >
                    <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                    <span className="relative flex items-center justify-center gap-3 px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                      <button className="relative px-32 text-white ">
                        Send{" "}
                      </button>
                    </span>
                  </a>
                </div>
              </form>
              <span>{result}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
