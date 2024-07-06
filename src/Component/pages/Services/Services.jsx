import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';
import { Fade, Zoom } from 'react-reveal';

const Services = () => {
  return (
    <div className=" mx-auto py-20 px-10 w-full bg-[#006989]">

      <h2 className="mb-10 text-4xl font-bold text-center text-white uppercase">
        My Services
      </h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* Web Development Card */}
        <Zoom>
          <div className="p-6 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-xl hover:transform hover:-translate-y-2 hover:border-b-8 hover:border-l-8 hover:border-b-[#E88D67] hover:border-l-[#E88D67]">
            <div className="flex justify-center mb-4">
              <FaLaptopCode className="text-5xl text-[#005C78]" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-center">Web Development</h3>
            <p className="text-center text-gray-700">
              I create responsive and dynamic websites using the latest web technologies to ensure your site looks great and functions flawlessly.
            </p>
          </div>
        </Zoom>

        {/* Front-End Development Card */}
        <Fade>
          <div className="p-6 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-xl hover:transform hover:-translate-y-2 hover:border-b-8 hover:border-l-8 hover:border-b-[#E88D67] hover:border-l-[#E88D67]">
            <div className="flex justify-center mb-4">
              <FaMobileAlt className="text-5xl text-[#005C78]" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-center">Front-End Development</h3>
            <p className="text-center text-gray-700">
              I specialize in building user interfaces that are both functional and aesthetically pleasing, ensuring a seamless user experience.
            </p>
          </div>
        </Fade>

        {/* UI/UX Design Card */}
        <Zoom>
          <div className="p-6 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-xl hover:transform hover:-translate-y-2 hover:border-b-8 hover:border-l-8 hover:border-b-[#E88D67] hover:border-l-[#E88D67]">
            <div className="flex justify-center mb-4">
              <FaPaintBrush className="text-5xl text-[#005C78]" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-center">UI/UX Design</h3>
            <p className="text-center text-gray-700">
              I design user interfaces that are visually appealing and easy to use, ensuring a great user experience for your customers.
            </p>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Services;
