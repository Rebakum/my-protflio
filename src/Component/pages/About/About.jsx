import React from 'react';
import potfolio from '../../../assets/images/potfolio.jpg';
import './About.css';

const About = () => {
    return (
        <div className=" hover:border-b-2 hover:border-[#E88D67] w-full  p-10 mx-auto my-10 shadow-xl rounded transition bg-[#F3F7EC]" >
            <div className="flex  lg:justify-between items-center flex-col lg:flex-row h-[300px] container my-20   ">
                <div className="w-3/4 p-3 size-70 poppins ">
                    <h1 className='my-3 text-3xl text-center  border-b-2 border-[#E88D67]'>About Me</h1>
                    <p className='p-5'> I am a passionate Front-End Web Developer with a robust foundation in HTML, CSS, Tailwind CSS, and JavaScript. My expertise extends to building dynamic, responsive web applications using React.js, and I am well-versed in back-end technologies such as Node.js with MongoDB. I have hands-on experience in building dynamic,responsive web applications.I am passionate about coding and continuously learning new
                    technologies to enhance my capabilities. I thrive in collaborative environments and am committed
                     to delivering high-quality, efficient solutions.</p>

                </div>
                <div className="flex items-center justify-center w-1/2 p-3 ">

                    <img className='w-full rounded-2xl' src={potfolio} alt="potfolio" />
                </div>
            </div>

        </div>
    );
};

export default About;