import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className="py-10 text-white bg-blue-900">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Hi 👏 I'm a </h2>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            <span className='text-[#F3F7EC]'>Mst: Rebeka</span> Sultana
          </h1>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
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
          <p className="max-w-lg mx-auto mt-5 text-lg md:text-xl lg:text-2xl">
            A MERN stack developer specializing in building web applications using MongoDB, Express.js, React, and Node.js.
          </p>
          <div className="flex flex-col items-center justify-center mt-5 md:flex-row">
            <button className="px-6 py-2 mb-3 font-semibold text-blue-900 transition duration-300 ease-in-out bg-white rounded-lg shadow-lg hover:bg-blue-200 focus:outline-none md:mb-0 md:mr-3">
              Hire Me
            </button>
            <a
              className="px-6 py-2 font-semibold text-white transition duration-300 ease-in-out bg-transparent border border-white rounded-lg shadow-lg hover:bg-white hover:text-blue-900 focus:outline-none"
              href="https://docs.google.com/document/d/1yjTwM5GjxojsgFatQKaJwlU1jzfJfR8QBPobJmaFI7M/edit?usp=sharing"
              download="reba.pdf"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
