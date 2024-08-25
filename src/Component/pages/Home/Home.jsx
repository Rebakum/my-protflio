import { FaCloudDownloadAlt } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import reba11 from '../../../assets/images/reba11.png';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-10 py-10 text-white lg:flex-row " id='home'>
      <div className="container flex-1 px-10 mx-auto">
        <div className='w-5 h-5 bg-white rounded-full'></div>
        <div className='pl-10 ml-2 border-l-2'>
        <div className="text-left  *:my-3">
          <h2 className="text-xl font-bold " data-aos="fade-right">Hi 👏 I'm a </h2>
          <h1 className="text-3xl font-bold md:text-5xl lg:text-4xl" data-aos="fade-right">
            Mst: Rebeka Sultana
          </h1>
          <h1 className="text-3xl font-bold uppercase text md:text-3xl lg:text-4xl " data-aos="fade-right">
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

          <div className="flex flex-col items-start justify-start gap-3 pt-5 md:flex-row">

            <a href="#contact" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
              <span className="w-full h-full bg-gradient-to-br from-[#ffc077] via-[#fc194a] to-[#fa87e1] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white"> Hire Me</span>
              </span>
            </a>

            <a href="https://drive.google.com/file/d/1pEtx8oGtHzHt4FTZ5KB8LEAOI8QPPlAJ/view?usp=sharing" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative flex items-center justify-center gap-3 px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">My Resume </span><FaCloudDownloadAlt />
                
              </span>
            </a>

           
          </div>
        </div>
        </div>
      </div>
      <div className='flex-1 '>
        <div className='flex items-center justify-center w-[400px] h-[250px] border-img  rounded-full '>
        <img className='w-full h-full rounded-full border-img' src={reba11} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
