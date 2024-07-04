import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Home from "../Component/pages/Home/Home";
import Menus from "../Component/pages/Menus/Menus";
import './Layout.css';

const Layout = () => {
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div className="flex min-h-screen font-poppins">
            <div className={`flex-shrink-0 bg-gray-800 text-white ${toggle ? 'w-16' : 'w-64'} transition-width duration-300 ease-in-out`}>
                <div className="flex justify-end p-2">
                    <button onClick={handleToggle} className="focus:outline-none">
                        {toggle ? <RiArrowRightSLine size={30} /> : <RiArrowLeftSLine size={30} />}
                    </button>
                </div>
                <Menus toggle={toggle} />
            </div>
            <div className="flex-grow p-4">
                <Home />
            </div>
        </div>
    );
};

export default Layout;
