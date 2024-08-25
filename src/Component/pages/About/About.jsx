import React from 'react';
import portfolio from '../../../assets/images/profile.png';


const About = () => {
    return (
        <div id='about'
         className="w-full py-20   mx-auto border-t border-t-blue-950   text-[#F3F7EC]  ">
                <h1 className="text-3xl font-bold text-center text-white uppercase title-border lg:text-4xl text">About Me</h1>

        
                <div className="flex flex-col lg:gap-10 lg:justify-between items-center lg:flex-row-reverse my-20 px-10  h-auto lg:h-[300px]">
                   
                <div className="flex-1 w-full lg:w-1/2">
                       
                        <p className="text-justify">
                            I am a passionate Front-End Web Developer with a robust foundation in HTML, CSS, Tailwind CSS, and JavaScript. My expertise extends to building dynamic, responsive web applications using React.js, and I am well-versed in back-end technologies such as Node.js with MongoDB. I have hands-on experience in building dynamic, responsive web applications. I am passionate about coding and continuously learning new technologies to enhance my capabilities. I thrive in collaborative environments and am committed to delivering high-quality, efficient solutions.
                            I thrive in collaborative environments and am committed to delivering high-quality, efficient solutions.
                        </p>
                    </div>
                    <div className="items-center justify-center flex-1 w-full ">
                        <img className="w-full rounded-lg " src={portfolio} alt="portfolio" />
                    </div>
                </div>
            

        </div>
    );
};

export default About;
