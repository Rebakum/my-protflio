import { FaCloudDownloadAlt } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import reba11 from '../../../assets/images/reba11.png';

const Home = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-between gap-10 py-20 text-white lg:flex-row lg:gap-20" id="home">
      <div className="container flex-1 px-6 mx-auto text-center lg:px-10 lg:text-left">
        <div className="flex flex-col items-center px-10 lg:items-start ">
          <div className="w-5 h-5 mb-2 bg-white rounded-full lg:mb-0"></div>
          <div className="pl-6 ml-0 mr-0 border-l-2 lg:pl-10 lg:ml-2 lg:mr-2">
            <h2 className="text-lg font-bold md:text-xl lg:text-2xl" data-aos="fade-right">Hi 👏 I'm a</h2>
            <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl" data-aos="fade-right">Mst: Rebeka Sultana</h1>
            <h1 className="text-xl font-bold uppercase md:text-3xl lg:text-4xl" data-aos="fade-right">
              <Typewriter
                options={{
                  strings: [
                    "MERN stack developer!",
                    "UI/UX designer!",
                    "from Bangladesh!"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <div className="flex flex-col items-center gap-3 pt-5 lg:items-start md:flex-row">
            <a href="#contact" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
              <span className="w-full h-full bg-gradient-to-br from-[#ffc077] via-[#fc194a] to-[#fa87e1] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Hire Me</span>
              </span>
            </a>

            <a href="https://drive.google.com/file/d/1pEtx8oGtHzHt4FTZ5KB8LEAOI8QPPlAJ/view?usp=sharing" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative flex items-center justify-center gap-3 px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">My Resume</span>
                <FaCloudDownloadAlt />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1">
        <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden">
          <img className="object-cover w-full h-full rounded-full" src={reba11} alt="Rebeka Sultana" />
        </div>
      </div>
    </div>
  );
};

export default Home;
