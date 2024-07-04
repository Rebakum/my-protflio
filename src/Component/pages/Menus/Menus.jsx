import { FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReading, FcVoicePresentation, FcWorkflow } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import Profile from '../../../assets/images/potfolio.jpg';

const Menus = ({ toggle }) => {
  return (
    <div className="text-white">
      {toggle ? (
        <>
          <div className="flex justify-center mt-4">
            <img src={Profile} alt="profile" className="w-24 h-24 rounded-full" />
          </div>
          <div className="mt-8 space-y-4">
            <div className="nav-item">
              <Link to="/" className="flex items-center p-2 rounded hover:bg-gray-700">
                <FcHome className="mr-2" /> Home
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/about" className="flex items-center p-2 rounded hover:bg-gray-700">
                <FcAbout className="mr-2" /> About
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/work" className="flex items-center p-2 rounded hover:bg-gray-700">
                <FcPortraitMode className="mr-2" /> Work
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/tech-stack" className="flex items-center p-2 rounded hover:bg-gray-700">
                <FcBiotech className="mr-2" /> Tech stack
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/education" className="flex items-center p-2 rounded hover:bg-gray-700">
                <FcReading className="mr-2" /> Education
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/projects" className="flex items-center p-2 rounded hover:bg-gray-700">
                <FcWorkflow className="mr-2" /> Projects
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/testimonial" className="flex items-center p-2 rounded hover:bg-gray-700">
                <FcVoicePresentation className="mr-2" /> Testimonial
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/contact" className="flex items-center p-2 rounded hover:bg-gray-700">
                <FcBusinessContact className="mr-2" /> Contact
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-center p-2">
            <FcHome title="Home" className="w-8 h-8" />
          </div>
          <div className="flex items-center justify-center p-2">
            <FcAbout title="About" className="w-8 h-8" />
          </div>
          <div className="flex items-center justify-center p-2">
            <FcPortraitMode title="Work" className="w-8 h-8" />
          </div>
          <div className="flex items-center justify-center p-2">
            <FcBiotech title="Tech stack" className="w-8 h-8" />
          </div>
          <div className="flex items-center justify-center p-2">
            <FcReading title="Education" className="w-8 h-8" />
          </div>
          <div className="flex items-center justify-center p-2">
            <FcWorkflow title="Projects" className="w-8 h-8" />
          </div>
          <div className="flex items-center justify-center p-2">
            <FcVoicePresentation title="Testimonial" className="w-8 h-8" />
          </div>
          <div className="flex items-center justify-center p-2">
            <FcBusinessContact title="Contact" className="w-8 h-8" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menus;
