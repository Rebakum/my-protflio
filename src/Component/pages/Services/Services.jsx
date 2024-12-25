import React from "react";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full p-10 py-16 mx-auto border-t px- border-t-blue-950 sm:px-16 md:px-20"
    >
      {/* Section Title */}
      <h2 className="my-10 text-4xl font-bold text-center uppercase title-border text">
        My Services
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-10 pb-20 sm:grid-cols-2 md:grid-cols-3">
        {/* Web Development Card */}
        <div className="p-6 transition-transform duration-300 border rounded-lg shadow-xl hover:scale-105">
          <div className="flex justify-center mb-4">
            <FaLaptopCode className="text-6xl text-[#f0eff6] bg-[#17153B] p-3 rounded-full border-2" />
          </div>
          <h3 className="mb-4 text-2xl font-semibold text-center text-gray-100">
            Web Development
          </h3>
          <p className="text-justify text-gray-300">
            I create responsive and dynamic websites using the latest web
            technologies to ensure your site looks great and functions
            flawlessly.
          </p>
        </div>

        {/* Front-End Development Card */}
        <div className="p-6 transition-transform duration-300 border rounded-lg shadow-xl hover:scale-105">
          <div className="flex justify-center mb-4">
            <FaMobileAlt className="text-6xl text-[#17153B] bg-[#f0eff6] p-3 rounded-full border-2" />
          </div>
          <h3 className="mb-4 text-2xl font-semibold text-center text-gray-100">
            Front-End Development
          </h3>
          <p className="text-justify text-gray-300">
            I specialize in building user interfaces that are both functional
            and aesthetically pleasing, ensuring a seamless user experience.
          </p>
        </div>

        {/* UI/UX Design Card */}
        <div className="p-6 transition-transform duration-300 border rounded-lg shadow-xl hover:scale-105">
          <div className="flex justify-center mb-4">
            <FaPaintBrush className="text-6xl text-[#17153B] bg-[#f0eff6] p-3 rounded-full border-2" />
          </div>
          <h3 className="mb-4 text-2xl font-semibold text-center text-gray-100">
            UI/UX Design
          </h3>
          <p className="text-justify text-gray-300">
            I design user interfaces that are visually appealing and easy to
            use, ensuring a great user experience for your customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
