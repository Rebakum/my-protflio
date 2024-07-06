import { FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReading, FcVoicePresentation, FcWorkflow } from 'react-icons/fc';
import { Fade, Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';
import Protfolio from '../../../assets/images/profile-pic.png';

const Menus = ({ toggle }) => {
  return (
    <div className="overflow-y-auto text-white min-h-fit">
      {toggle ? (
        <>
          <Fade left>
            <div className="mt-3 space-y-4">
              <div className="nav-item">
                <Link to="/" className="flex items-center p-2 rounded hover:bg-#E88D67">
                  <FcHome className="w-6 h-6 mr-2" title='Home' />
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/about" className="flex items-center p-2 rounded hover:bg-#E88D67">
                  <FcAbout className="w-6 h-6 mr-2" title='About' />
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/services" className="flex items-center p-2 rounded hover:bg-#E88D67">
                  <FcPortraitMode className="w-6 h-6 mr-2" title='Services' />
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/tech-stack" className="flex items-center p-2 rounded hover:bg-#E88D67">
                  <FcBiotech className="w-6 h-6 mr-2" title='Teach Stack' />
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/education" className="flex items-center p-2 rounded hover:bg-#E88D67">
                  <FcReading className="w-6 h-6 mr-2" title='Education' />
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/projects" className="flex items-center p-2 rounded hover:bg-#E88D67">
                  <FcWorkflow className="w-6 h-6 mr-2" title='Project' />
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/testimonial" className="flex items-center p-2 rounded hover:bg-#E88D67">
                  <FcVoicePresentation className="w-6 h-6 mr-2" title='Testimonials' />
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/contact" className="flex items-center p-2 rounded hover:bg-#E88D67">
                  <FcBusinessContact className="w-6 h-6 mr-2" title='Contact' />
                </Link>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <div className="mt-5 ml-16 space-y-4">
          <Zoom>
            <div className="flex mt-4">
              <img src={Protfolio} alt="profile" className="w-24 h-24 rounded-full" />
            </div>
          </Zoom>
          <Fade left>
            <Link to='/'>
              <div className="flex p-1 hover:text-[#E88D67] cursor-pointer">
                <FcHome className="w-6 h-6 mr-2" />Home
              </div>
            </Link>
            <Link to='/about'>
              <div className="flex p-1 hover:text-[#E88D67] cursor-pointer">
                <FcAbout className="w-6 h-6 mr-2" />About
              </div>
            </Link>
            <Link to='/services'>
              <div className="flex p-1 hover:text-[#E88D67] cursor-pointer">
                <FcPortraitMode className="w-6 h-6 mr-2" />Services
              </div>
            </Link>
            <Link to='/techStack'>
              <div className="flex p-1 hover:text-[#E88D67] cursor-pointer">
                <FcBiotech className="w-6 h-6 mr-2" />Tech stack
              </div>
            </Link>
            <Link to='/education'>
              <div className="flex p-1 hover:text-[#E88D67] cursor-pointer">
                <FcReading className="w-6 h-6 mr-2" />Education
              </div>
            </Link>
            <Link to='/project'>
              <div className="flex p-1 hover:text-[#E88D67] cursor-pointer">
                <FcWorkflow className="w-6 h-6 mr-2" />Projects
              </div>
            </Link>
            <Link to='/testimonial'>
              <div className="flex p-1 hover:text-[#E88D67] cursor-pointer">
                <FcVoicePresentation className="w-6 h-6 mr-2" />Testimonial
              </div>
            </Link>
            <Link to='/contact'>
              <div className="flex p-1 hover:text-[#E88D67] cursor-pointer">
                <FcBusinessContact className="w-6 h-6 mr-2" />Contact
              </div>
            </Link>
          </Fade>
        </div>
      )}
    </div>
  )
}

export default Menus;
