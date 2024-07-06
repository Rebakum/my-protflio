import { FaCloudDownloadAlt } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
const Home = () => {
  return (
    <div className="py-20 text-white bg-[#006989]  h-[350px]"  id='home'>
      <div className="container px-4 mx-auto">
        <div className="text-center *:my-3">
          <h2 className="text-xl font-bold " data-aos="fade-right">Hi 👏 I'm a </h2>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl" data-aos="fade-right">
            <span className='text-[#E88D67]'>Mst: Rebeka</span> Sultana
          </h1>
          <h1 className="text-xl  font-bold md:text-2xl lg:text-4xl uppercase text-[rgb(232,141,103)]" data-aos="fade-right">
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
         
          <div className="flex flex-col items-center justify-center pt-5 md:flex-row">
            <button className=" text-[#E88D67] px-6 py-2 mb-3 font-semibold transition duration-300 ease-in-out bg-white rounded-lg shadow-lg hover:bg-blue-200 focus:outline-none md:mb-0 md:mr-3" data-aos="fade-right">
              Hire Me
            </button>
            <a
              data-aos="fade-right"
              className="flex items-center justify-center gap-2 px-6 py-2 font-semibold text-white transition duration-300 ease-in-out bg-transparent border border-white rounded-lg shadow-lg hover:bg-white hover:text-blue-900 focus:outline-none"
              href="https://drive.google.com/file/d/1hQii66lhkJgns-TJTCzxZinUQNIAqgfW/view?usp=sharing"
              download="reba.pdf"
            >
              My Resume <FaCloudDownloadAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
