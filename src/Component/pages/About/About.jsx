import React from 'react';
import Zoom from 'react-reveal/Zoom';
import portfolio from '../../../assets/images/profile.png';
import './About.css';

const About = () => {
    return (
        <div className="w-full bg-[#006989] p-10 mx-auto  shadow-xl  text-[#F3F7EC]  ">
            <Zoom>
                <div className="flex flex-col lg:flex-row lg:justify-between items-center container my-20 h-auto lg:h-[300px]">
                    <div className="w-full p-3 lg:w-3/4">
                        <h1 className="my-3  text-4xl font-bold text-center text-white uppercase border-b-2 border-[#E88D67]">About Me</h1>
                        <p className="p-5">
                            I am a passionate Front-End Web Developer with a robust foundation in HTML, CSS, Tailwind CSS, and JavaScript. My expertise extends to building dynamic, responsive web applications using React.js, and I am well-versed in back-end technologies such as Node.js with MongoDB. I have hands-on experience in building dynamic, responsive web applications. I am passionate about coding and continuously learning new technologies to enhance my capabilities. I thrive in collaborative environments and am committed to delivering high-quality, efficient solutions.
                        </p>
                    </div>
                    <div className="flex items-center justify-center w-full p-3 ">
                        <img className="w-full " src={portfolio} alt="portfolio" />
                    </div>
                </div>
            </Zoom>

        </div>
    );
};

export default About;
