

import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="px-10 py-6 text-white bg-gray-800">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold text-center lg:text-left">Contact Me</h2>
          <p className="mt-2">Email: <a href="mailto:rebakpi@gmail.com" className="text-blue-400 hover:underline">rebakpi@gmail.com</a></p>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold text-center lg:text-left">Follow Me</h2>
          <div className="flex mt-2 space-x-4">
            <a href="https://www.linkedin.com/in/Rebeka" className="text-blue-400 hover:text-white"><FaLinkedin size={24} /></a>
            <a href="https://github.com/Rebakum" className="text-blue-400 hover:text-white"><FaGithub size={24} /></a>
            <a href="https://twitter.com/Rebeka" className="text-blue-400 hover:text-white"><FaTwitter size={24} /></a>
            <a href="mailto:rebakpi@gmail.com" className="text-blue-400 hover:text-white"><FaEnvelope size={24} /></a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p>call:+088-01914163150</p>
          <p>&copy; {new Date().getFullYear()} Mst: Rebeka Sultana. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
