import { FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReading, FcVoicePresentation, FcWorkflow } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import Protfolio from '../../../assets/images/profile-pic.png';

const Menus = ({ toggle }) => {
  return (
    <div className="text-white">
      {toggle ? (
        <>

          <div className="mt-3 space-y-4">
            <div className="nav-item">
              <Link to="/" className="flex items-center p-2 rounded hover:bg-gray-700">
                <FcHome className="w-6 h-6 mr-2" title='Home' />
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/about" className="flex items-center p-2 rounded hover:bg-gray-700">
                <FcAbout className="w-6 h-6 mr-2" title='About' />
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/services" className="flex items-center p-2 rounded hover:bg-gray-700">
                <FcPortraitMode className="w-6 h-6 mr-2" title='Services' />
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/tech-stack" className="flex items-center p-2 rounded hover:bg-gray-700">
                <FcBiotech className="w-6 h-6 mr-2" title='Teach Stack' />
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/education" className="flex items-center p-2 rounded hover:bg-gray-700">
                <FcReading className="w-6 h-6 mr-2" title='Education' />
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/projects" className="flex items-center p-2 rounded hover:bg-gray-700">
                <FcWorkflow className="w-6 h-6 mr-2" title='Project' />
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/testimonial" className="flex items-center p-2 rounded hover:bg-gray-700">
                <FcVoicePresentation className="w-6 h-6 mr-2" title='Testimonials' />
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/contact" className="flex items-center p-2 rounded hover:bg-gray-700">
                <FcBusinessContact className="w-6 h-6 mr-2" title='Contact' />
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="mt-5 ml-16 space-y-4">
          <div className="flex mt-4">
            <img src={Protfolio} alt="profile" className="w-24 h-24 rounded-full" />
          </div>


          <div className="flex p-1">
            <FcHome  className="w-6 h-6 mr-2 hover:text-[#E88D67]" />Home
          </div>
          <div className="flex p-1">
            <FcAbout  className="w-6 h-6 mr-2 hover:text-[#E88D67]" />About
          </div>
          <div className="flex p-1">
            <FcPortraitMode  className="w-6 h-6 mr-2 hover:text-[#E88D67]" />Services
          </div>
          <div className="flex p-1">
            <FcBiotech  className="w-6 h-6 mr-2 hover:text-[#E88D67]" />Tech stack
          </div>
          <div className="flex p-1">
            <FcReading  className="w-6 h-6 mr-2 hover:text-[#E88D67]" />Education
          </div>
          <div className="flex p-1">
            <FcWorkflow  className="w-6 h-6 mr-2 hover:text-[#E88D67]" />Projects
          </div>
          <div className="flex p-1">
            <FcVoicePresentation  className="w-6 h-6 mr-2 hover:text-[#E88D67]" />Testimonial
          </div>
          <div className="flex p-1">
            <FcBusinessContact  className="w-6 h-6 mr-2 hover:text-[#E88D67]" />Contact
          </div>
        </div>   
  )
}
  </div>
)
}   
 
export default Menus;
