import { FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReading, FcWorkflow } from 'react-icons/fc';
import { Link } from 'react-scroll';
import Protfolio from '../../../assets/images/profile-pic.png';
import './Menus.css';

const Menus = ({ toggle }) => {
  return (
    <div className="overflow-y-auto text-white min-h-fit">
      {toggle ? (
        <>
         
            <div className="mt-3 space-y-4">
              <div className="">
                <Link to="home"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className="flex items-center p-2 rounded ">
                  <FcHome className="w-6 h-6 mr-2" title='Home' />
                </Link>
              </div>
              <div className="nav-item">
                <Link to="about"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className="flex items-center p-2 rounded ">
                  <FcAbout className="w-6 h-6 mr-2" title='About' />
                </Link>
              </div>
              <div className="nav-item">
                <Link to='services'
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className="flex items-center p-2 rounded ">
                  <FcPortraitMode className="w-6 h-6 mr-2" title='Services' />
                </Link>
              </div>
              <div className="nav-item">
                <Link to='techStack'
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className="flex items-center p-2 rounded ">
                  <FcBiotech className="w-6 h-6 mr-2" title='Teach Stack' />
                </Link>
              </div>
              <div className="nav-item">
                <Link to='education'
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className="flex items-center p-2 rounded ">
                  <FcReading className="w-6 h-6 mr-2" title='Education' />
                </Link>
              </div>
              <div className="nav-item">
                <Link to='project'
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className="flex items-center p-2 rounded ">
                  <FcWorkflow className="w-6 h-6 mr-2" title='Project' />
                </Link>
              </div>
             
              <div className="nav-item">
                <Link to='contact'
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className="flex items-center p-2 rounded ">
                  <FcBusinessContact className="w-6 h-6 mr-2" title='Contact' />
                </Link>
              </div>
            </div>
          
        </>
      ) : (
        <div className="mt-5 ml-16 space-y-4">
          <>
            <div className="flex mt-4">
              <img src={Protfolio} alt="profile" className="w-24 h-24 rounded-full" />
            </div>
          </>
         
            <Link to='home'
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}>
              <div className="flex p-1 cursor-pointer hover:text-[#E88D67]">
                <FcHome className="w-6 h-6 mr-2" />Home
              </div>
            </Link>
            <Link to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}>
              <div className="flex p-1 cursor-pointer hover:text-[#E88D67]">
                <FcAbout className="w-6 h-6 mr-2" />About
              </div>
            </Link>
            <Link to='services'
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}>
              <div className="flex p-1 cursor-pointer hover:text-[#E88D67]">
                <FcPortraitMode className="w-6 h-6 mr-2" />Services
              </div>
            </Link>
            <Link to='techStack'
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}>
              <div className="flex p-1 cursor-pointer hover:text-[#E88D67]">
                <FcBiotech className="w-6 h-6 mr-2" />Tech stack
              </div>
            </Link>
            <Link to='education'
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}>
              <div className="flex p-1 cursor-pointer hover:text-[#E88D67]">
                <FcReading className="w-6 h-6 mr-2" />Education
              </div>
            </Link>
            <Link to='project'
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}>
              <div className="flex p-1 cursor-pointer hover:text-[#E88D67]">
                <FcWorkflow className="w-6 h-6 mr-2" />Projects
              </div>
            </Link>
           
           
            <Link to='contact'
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}>
              <div className="flex p-1 cursor-pointer hover:text-[#E88D67]">
                <FcBusinessContact className="w-6 h-6 mr-2" />Contact
              </div>
            </Link>
          
        </div>
      )}
    </div>
  )
}

export default Menus;
