import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Education from "../Component/Education/Education";
import About from "../Component/pages/About/About";
import Contact from "../Component/pages/Contact/Contact";
import Footer from "../Component/pages/Footer/Footer";
import Home from "../Component/pages/Home/Home";
import Menus from "../Component/pages/Menus/Menus";
import Services from "../Component/pages/Services/Services";
import Projects from "../Component/Projects/Projects";
import TechStack from "../Component/TechStack/TechStack";
import './Layout.css';

const Layout = () => {
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div className="flex min-h-screen font-poppins ">
            <div className={`bg-gray-950 text-white ${toggle ? 'w-16' : 'w-64'} transition-width duration-300 ease-in-out fixed  h-full`}>
                <div className="flex justify-end p-2">
                    <button onClick={handleToggle} className="focus:outline-none">
                        {toggle ? <RiArrowRightSLine size={30} /> : <RiArrowLeftSLine size={30} />}
                    </button>
                </div>
                <Menus toggle={toggle} />
            </div>
            <div className="flex-1 transition-all duration-300 ease-in-out " style={{ marginLeft: toggle ? '4rem' : '16rem' }}>
                <div className="w-full p-4 bg-[#090732]">
                    <Home />
                    <About />
                    <Services />
                    <TechStack />
                    <Education />
                    <Projects />
                    <Contact />
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default Layout;
