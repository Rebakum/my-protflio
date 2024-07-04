import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { TechstackList } from "../Utility/TechStackList";

const TechStack = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Easing option
        });
    }, []);

    return (
        <div>
            <div className="my-20">
                <h2 className="mb-3 text-3xl text-center text-[#005C78] uppercase">Technologies Stack</h2>

                <p className="mb-5 text-center">
                    👍 Including languages, frameworks, databases, front-end tools, and APIs
                </p>
                <div className="grid justify-center grid-cols-5 gap-4 ">
                    {TechstackList.map((tech) => (
                        <div data-aos="fade-right" key={tech._id}>
                            <div className="m-2 card bg-[#005C78] text-[#F3F7EC] hover:bg-[#E88D67]">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex justify-content-center">
                                            <div className="flex items-center justify-center align-self-center">
                                                <tech.icon className="tech-icon" />
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
