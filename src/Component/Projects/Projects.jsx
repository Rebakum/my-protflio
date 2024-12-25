import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import foodKing from "../../assets/images/food-king.png";
import ex from "../../assets/images/logo/ex.png";
import mongo from "../../assets/images/logo/mongo.png";
import node from "../../assets/images/logo/node.png";
import react01 from "../../assets/images/logo/react01.png";
import restTravel from "../../assets/images/rest-travel.png";
import touristGuide from "../../assets/images/tourist-guide.png";

const Projects = () => {
  return (
    <div id="project" className="px-10 py-20 border-t border-t-blue-950">
      <h2 className="my-10 text-3xl font-bold text-center uppercase lg:text-4xl title-border">
        TOP RECENT PROJECTS
      </h2>

      <p className="text-center text-white " data-aos="flip-left">
        As a dedicated and innovative front-end developer, I've had the
        opportunity to work on various
        <br /> exciting projects that showcase my skills in modern web
        technologies. <br />
      </p>
      {/* card design 1 */}
      <div className="grid grid-cols-1 gap-5 p-10 my-10 lg:grid-cols-3">
        <div className=" col-md-4" data-aos="fade-right">
          <div className="transition border border-blue-200 rounded hover:shadow-2xl card ">
            <div className="card-image">
              <img src={touristGuide} alt="project1" />
            </div>
            <div className="flex items-center justify-center gap-2 m-auto mt-3 ">
              <span className="size-4 rounded-3xl">
                <img className="size-4 rounded-3xl" src={node} alt="" />
              </span>
              <span className="size-7 rounded-3xl">
                <img className="size-7 rounded-3xl" src={ex} alt="" />
              </span>
              <span className="size-4 rounded-3xl">
                <img className="size-4 rounded-3xl" src={react01} alt="" />
              </span>
              <span className="size-7 rounded-3xl">
                <img className="size-7 rounded-3xl" src={mongo} alt="" />
              </span>
            </div>
            <div className="text-center card-body">
              <div className="flex flex-col items-center justify-center gap-3 m-auto ad-title">
                <h4 className="text-white text-uppercase">
                  Tour Guide Website
                </h4>

                <a
                  href="https://tourist-guide-3bd84.firebaseapp.com/"
                  className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
                >
                  <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                  <span className="relative flex items-center justify-center gap-3 px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                    <span className="relative text-white ">view </span>
                    <FaArrowTrendUp className="text-white" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* card design 2 */}
        <div className="p-3 col-md-3" data-aos="flip-left">
          <div className="transition border border-blue-200 rounded hover:shadow-2xl card ">
            <div className="card-image">
              <img src={foodKing} alt="project1" />
            </div>
            <div className="flex items-center justify-center gap-2 m-auto mt-3 ">
              <span className="size-4 rounded-3xl">
                <img className="size-4 rounded-3xl" src={node} alt="" />
              </span>
              <span className="size-7 rounded-3xl">
                <img className="size-7 rounded-3xl" src={ex} alt="" />
              </span>
              <span className="size-4 rounded-3xl">
                <img className="size-4 rounded-3xl" src={react01} alt="" />
              </span>
              <span className="size-7 rounded-3xl">
                <img className="size-7 rounded-3xl" src={mongo} alt="" />
              </span>
            </div>
            <div className="text-center card-body">
              <div className="flex flex-col items-center justify-center gap-3 m-auto ad-title ">
                <h4 className="text-white text-uppercase">
                  Restrurent Website
                </h4>
                <a
                  href="https://food-king-747d6.web.app"
                  className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
                >
                  <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                  <span className="relative flex items-center justify-center gap-3 px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                    <span className="relative text-white ">view </span>
                    <FaArrowTrendUp className="text-white" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* card design 3 */}
        <div className="col-md-4" data-aos="flip-left">
          <div className="transition border border-blue-200 rounded card ">
            <div className="card-image">
              <img src={restTravel} alt="project1" />
            </div>
            <div className="flex items-center justify-center gap-2 m-auto mt-3 ">
              <span className="size-4 rounded-3xl">
                <img className="size-4 rounded-3xl" src={node} alt="" />
              </span>
              <span className="size-7 rounded-3xl">
                <img className="size-7 rounded-3xl" src={ex} alt="" />
              </span>
              <span className="size-4 rounded-3xl">
                <img className="size-4 rounded-3xl" src={react01} alt="" />
              </span>
              <span className="size-7 rounded-3xl">
                <img className="size-7 rounded-3xl" src={mongo} alt="" />
              </span>
            </div>
            <div className="text-center card-body">
              <div className="flex flex-col items-center justify-center gap-3 m-auto ad-title ">
                <h4 className="text-white text-uppercase">
                  Real State Luxuery Website
                </h4>
                <a
                  href="https://tourist-guide-3bd84.firebaseapp.com/"
                  className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
                >
                  <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                  <span className="relative flex items-center justify-center gap-3 px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                    <span className="relative text-white ">view </span>
                    <FaArrowTrendUp className="text-white" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
