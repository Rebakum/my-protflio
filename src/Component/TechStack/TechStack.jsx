import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import bootstrap01 from '../../assets/images/logo/bootstap01.png';
import css01 from '../../assets/images/logo/css01.png';
import ex from '../../assets/images/logo/ex.png';
import html01 from '../../assets/images/logo/html01.png';
import js01 from '../../assets/images/logo/js01.png';
import mongo from '../../assets/images/logo/mongo.png';
import node from '../../assets/images/logo/node.png';
import react02 from '../../assets/images/logo/react02.png';
import tailwind from '../../assets/images/logo/tailwind.png';
import './TechStack.css';

const TechStack = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div className="py-20 bg-[#005C78]">
            <h2 className="mb-3 text-4xl font-bold text-center  text-[#F3F7EC] uppercase">Technologies Stack</h2>
           
            <p className="mb-5 text-center">
                👍 Including languages, frameworks, databases, front-end tools, and APIs
            </p>
            <div className="flex flex-col items-center">
                <div className="flex justify-center mb-4 ">
                    <div className="bg-white diamond rounded-2xl" data-aos="fade-up">
                        <img src={html01} alt="HTML" />
                    </div>
                </div>
                <div className="flex justify-center mb-4 space-x-4">
                    <div className="bg-white diamond rounded-2xl " data-aos="fade-up">
                        <img src={css01} alt="CSS" />
                    </div>
                    <div className="bg-white diamond rounded-2xl " data-aos="fade-up">
                        <img src={bootstrap01} alt="Bootstrap" />
                    </div>
                </div>
                <div className="flex justify-center mb-4 space-x-4">
                    <div className="bg-white diamond rounded-2xl " data-aos="fade-up">
                        <img src={tailwind} alt="Tailwind" />
                    </div>
                    <div className="bg-white diamond rounded-2xl " data-aos="fade-up">
                        <img src={js01} alt="JavaScript" />
                    </div>
                    <div className="bg-white diamond rounded-2xl " data-aos="fade-up">
                        <img src={react02} alt="React" />
                    </div>
                </div>
                <div className="flex justify-center mb-4 space-x-4">
                    <div className="bg-white diamond rounded-2xl " data-aos="fade-up">
                        <img src={node} alt="Node" />
                    </div>
                    <div className="bg-white diamond rounded-2xl " data-aos="fade-up">
                        <img src={ex} alt="Express" />
                    </div>
                </div>
                <div className="flex justify-center space-x-4">
                    <div className="bg-white diamond rounded-2xl " data-aos="fade-up">
                        <img src={mongo} alt="MongoDB" />
                    </div>
                    
                    {/* <div className="bg-white diamond rounded-2xl " data-aos="fade-up">
                        <img src={next} alt="Next.js" />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
