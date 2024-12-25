import React from 'react';
import portfolio from '../../../assets/images/profile.png';

const About = () => {
    return (
        <div id="about" className="w-full py-20 mx-auto border-t border-t-blue-950 text-[#F3F7EC]">
            <h1 className="text-3xl font-bold text-center text-white uppercase title-border lg:text-4xl">About Me</h1>

            <div className="flex flex-col-reverse items-center justify-between my-10 lg:flex-row-reverse">
                <div className="items-center justify-center flex-1 w-full lg:w-1/2">
                    <p className="p-6 w-[90%] text-justify ">
                        I am a passionate Front-End Web Developer with a robust foundation in HTML, CSS, Tailwind CSS, and JavaScript. My expertise extends to building dynamic, responsive web applications using React.js, and I am well-versed in back-end technologies such as Node.js with MongoDB. I have hands-on experience in building dynamic, responsive web applications. I am passionate about coding and continuously learning new technologies to enhance my capabilities. I thrive in collaborative environments and am committed to delivering high-quality, efficient solutions.
                    </p>
                </div>
                <div className="flex items-center justify-center flex-1 w-full p-10">
                    <img className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] rounded-lg" src={portfolio} alt="portfolio" />
                </div>
            </div>
        </div>
    );
};

export default About;
