import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';


const Services = () => {
  return (
    <div id='services'
     className="w-full px-10 py-10 mx-auto border-t border-t-blue-950 ">

      <h2 className="my-20 text-4xl font-bold text-center uppercase title-border text">
        My Services
      </h2>
      <div className="grid grid-cols-1 gap-10 pb-20 md:grid-cols-3">
        {/* Web Development Card */}
        <>
          <div className="p-6 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-2xl hover:transform hover:-translate-y-2">
            
            <div className="flex justify-center mb-4 ">
              <FaLaptopCode className="text-5xl text-[#17153B] rounded-full border-2 size-16 p-3" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-center">Web Development</h3>
            <p className="text-justify text-gray-700 ">
              I create responsive and dynamic websites using the latest web technologies to ensure your site looks great and functions flawlessly.
            </p>
          </div>
        </>

        {/* Front-End Development Card */}
      
          <div className="p-6 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-xl hover:transform hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <FaMobileAlt className="text-5xl text-[#17153B] rounded-full border-2 size-16 p-3" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-center">Front-End Development</h3>
            <p className="text-justify text-gray-700">
              I specialize in building user interfaces that are both functional and aesthetically pleasing, ensuring a seamless user experience.
            </p>
          </div>
       

        {/* UI/UX Design Card */}
        <>
          <div className="p-6 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-xl hover:transform hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <FaPaintBrush className="text-5xl text-[#17153B] rounded-full border-2 size-16 p-3" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-center">UI/UX Design</h3>
            <p className="text-justify text-gray-700">
              I design user interfaces that are visually appealing and easy to use, ensuring a great user experience for your customers.
            </p>
          </div>
        </>
      </div>
    </div>
  );
};

export default Services;
