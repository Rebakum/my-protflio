import Lottie from "lottie-react";
import React, { useState } from "react";
import animation from "../../../assets/lottie.json";

const Contact = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "b76ad003-7ff6-4c8b-8430-8f585a965ed1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your message submitted successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      className="container px-4 py-16 mx-auto border-t border-t-blue-950"
      id="contact"
    >
      <h2 className="text-3xl font-bold text-center text-white uppercase md:text-4xl title-border">
        Contact Me
      </h2>

      <div className="flex flex-col-reverse items-center gap-10 mt-12 md:flex-row">
        {/* Form Section */}
        <div className="w-full p-6 bg-gray-900 rounded-lg md:w-1/2 hover:border hover:border-blue-200">
          <p className="mb-6 text-xl text-center text-gray-400">Message Me</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 font-semibold text-gray-400"
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
                placeholder="Enter your Email"
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
            <button
              type="submit"
              className="relative w-full px-6 py-3 font-bold text-white rounded-md bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] hover:from-[#ff00c6] hover:via-[#ff5478] hover:to-[#ff8a05] transition-all"
            >
              Send
            </button>
          </form>
          <p className="mt-4 text-center text-green-400">{result}</p>
        </div>

        {/* Lottie Animation */}
        <div className="w-full md:w-1/2">
          <Lottie animationData={animation} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
