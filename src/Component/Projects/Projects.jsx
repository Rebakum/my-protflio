import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaArrowTrendUp } from "react-icons/fa6";
import foodKing from '../../assets/images/food-king.png';
import ex from '../../assets/images/logo/ex.png';
import mongo from '../../assets/images/logo/mongo.png';
import node from '../../assets/images/logo/node.png';
import react01 from '../../assets/images/logo/react01.png';
import restTravel from '../../assets/images/rest-travel.png';
import touristGuide from '../../assets/images/tourist-guide.png';

const Projects = () => {
  return (
    <div className=" bg-[#005C78] py-20 px-10  ">
      <h2 className="mb-3 text-4xl font-bold text-center text-white uppercase">
        TOP RECENT PROJECTS
      </h2>

      <p className="py-5 text-center w-4/3" data-aos="flip-left">
        As a dedicated and innovative front-end developer, I've had the opportunity to work on various exciting projects that showcase my skills in modern web technologies. Here are some highlights of my top recent projects
      </p>
      {/* card design */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className=" col-md-4" data-aos="fade-right">
          <Fade >
            <div className="rounded card border-2  transition  hover:shadow-2xl hover:border-b-8 hover:border-l-8 hover:border-b-[#E88D67] hover:border-l-[#E88D67] bg-[#F3F7EC]" >
              <div className="card-image">
                <img
                  src={touristGuide}
                  alt="project1"
                />
              </div>
              <div className="flex gap-2 m-auto mt-3 ">
                <span className="size-6 rounded-3xl"><img className="size-6 rounded-3xl" src={node} alt="" /></span>
                <span className="size-6 rounded-3xl"><img className="size-6 rounded-3xl" src={ex} alt="" /></span>
                <span className="size-6 rounded-3xl"><img className="size-6 rounded-3xl" src={react01} alt="" /></span>
                <span className="size-6 rounded-3xl"><img className="size-6 rounded-3xl" src={mongo} alt="" /></span>
              </div>
              <div className="text-center card-body">
                <div className="m-auto ad-title">
                  <h6 className="text-uppercase">Tour Guide Website</h6>
                </div>
                <a
                  className=" btn text-center bg-[#005C78] text-[#E88D67] hover:border-[#005C78] hover:text-[#005C78]"
                  href="https://tourist-guide-3bd84.firebaseapp.com"
                >
                  View <FaArrowTrendUp />
                </a>
              </div>
            </div>
          </Fade>
        </div>
        <div className="p-3 col-md-3" data-aos="flip-left">
          <Fade >
            <div className="rounded card border-2 transition  hover:shadow-2xl hover:border-b-8 hover:border-l-8 hover:border-b-[#E88D67] hover:border-l-[#E88D67] bg-[#F3F7EC]">
              <div className="card-image">
                <img
                  src={foodKing}
                  alt="project1"
                />
              </div>
              <div className="flex gap-2 m-auto mt-3 ">
                <span className="size-6 rounded-3xl"><img className="size-6 rounded-3xl" src={node} alt="" /></span>
                <span className="size-6 rounded-3xl"><img className="size-6 rounded-3xl" src={ex} alt="" /></span>
                <span className="size-6 rounded-3xl"><img className="size-6 rounded-3xl" src={react01} alt="" /></span>
                <span className="size-6 rounded-3xl"><img className="size-6 rounded-3xl" src={mongo} alt="" /></span>
              </div>
              <div className="text-center card-body">
                <div className="m-auto ad-title">
                  <h6 className="text-uppercase">Restrurent Website</h6>
                </div>
                <a
                  className="btn text-center bg-[#005C78] text-[#E88D67] outline-none hover:border-[#005C78] hover:text-[#005C78]"
                  href="https://food-king-747d6.firebaseapp.com"
                >
                  View <FaArrowTrendUp />
                </a>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-md-4" data-aos="flip-left">
          <Fade >
            <div className="rounded card border-2 transition  hover:shadow-2xl hover:border-b-8 hover:border-l-8 hover:border-b-[#E88D67] hover:border-l-[#E88D67] bg-[#F3F7EC]">
              <div className="card-image">
                <img
                  src={restTravel}
                  alt="project1"
                />
              </div>
              <div className="flex gap-2 m-auto mt-3 ">
                <span className="size-6 rounded-3xl"><img className="size-6 rounded-3xl" src={node} alt="" /></span>
                <span className="size-6 rounded-3xl"><img className="size-6 rounded-3xl" src={ex} alt="" /></span>
                <span className="size-6 rounded-3xl"><img className="size-6 rounded-3xl" src={react01} alt="" /></span>
                <span className="size-6 rounded-3xl"><img className="size-6 rounded-3xl" src={mongo} alt="" /></span>
              </div>
              <div className="text-center card-body">
                <div className="m-auto ad-title">
                  <h6 className="text-uppercase">Real State Luxuery Website</h6>
                </div>
                <a
                  className="btn text-center bg-[#005C78] text-[#E88D67] outline-none hover:border-[#005C78] hover:text-[#005C78]"
                  href="https://i.postimg.cc/VNvSSp36/1.png"
                >
                  View <FaArrowTrendUp />
                </a>
              </div>
            </div>
          </Fade>
        </div>

      </div>
    </div>
  );
};

export default Projects;
