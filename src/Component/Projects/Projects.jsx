import React from "react";
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
    <div id="project"
      className="px-10 py-20 border-t border-t-blue-950">
      <h2 className="my-10 text-3xl font-bold text-center uppercase lg:text-4xl title-border">
        TOP RECENT PROJECTS
      </h2>

      <p className="text-center text-white " data-aos="flip-left">
        As a dedicated and innovative front-end developer,

        I've had the opportunity to work on various
        <br /> exciting projects that showcase my skills in modern web technologies. <br />
        Here are some highlights of my top recent projects
      </p>
      {/* card design */}
      <div className="grid grid-cols-1 gap-5 my-20 lg:grid-cols-3">
        <div className=" col-md-4" data-aos="fade-right">
         
            <div className="transition border-2 rounded card hover:shadow-2xl " >
              <div className="card-image">
                <img
                  src={touristGuide}
                  alt="project1"
                />
              </div>
              <div className="flex gap-2 m-auto mt-3 ">
                <span className="size-4 rounded-3xl"><img className="size-4 rounded-3xl" src={node} alt="" /></span>
                <span className="size-4 rounded-3xl"><img className="size-4 rounded-3xl" src={ex} alt="" /></span>
                <span className="size-4 rounded-3xl"><img className="size-4 rounded-3xl" src={react01} alt="" /></span>
                <span className="size-4 rounded-3xl"><img className="size-4 rounded-3xl" src={mongo} alt="" /></span>
              </div>
              <div className="text-center card-body">
                <div className="flex flex-col items-center justify-center gap-3 m-auto ad-title">
                  <h4 className="text-white text-uppercase">Tour Guide Website</h4>
                  <a href="https://tourist-guide-3bd84.firebaseapp.com/"  >
                    <button className="flex items-center justify-center gap-2 button gradient-border">view <FaArrowTrendUp className="text-white" /> </button>

                  </a>
                </div>


              </div>
            </div>
         
        </div>
        <div className="p-3 col-md-3" data-aos="flip-left">
         
            <div className="transition border-2 rounded card hover:shadow-2xl ">
              <div className="card-image">
                <img
                  src={foodKing}
                  alt="project1"
                />
              </div>
              <div className="flex gap-2 m-auto mt-3 ">
                <span className="size-4 rounded-3xl"><img className="size-4 rounded-3xl" src={node} alt="" /></span>
                <span className="size-4 rounded-3xl"><img className="size-4 rounded-3xl" src={ex} alt="" /></span>
                <span className="size-4 rounded-3xl"><img className="size-4 rounded-3xl" src={react01} alt="" /></span>
                <span className="size-4 rounded-3xl"><img className="size-4 rounded-3xl" src={mongo} alt="" /></span>
              </div>
              <div className="text-center card-body">
                <div className="flex flex-col items-center justify-center gap-3 m-auto ad-title ">
                  <h4 className="text-white text-uppercase">Restrurent Website</h4>
                 <a href="https://food-king-747d4.firebaseapp.com">
                    <button className="flex items-center justify-center gap-2 button gradient-border">view <FaArrowTrendUp className="text-white" /> </button>

                  </a>
                </div>
                
                 

              </div>
            </div>
          
        </div>
        <div className="col-md-4" data-aos="flip-left">
       
            <div className="transition border-2 rounded card hover:shadow-2xl ">
              <div className="card-image">
                <img
                  src={restTravel}
                  alt="project1"
                />
              </div>
              <div className="flex gap-2 m-auto mt-3 ">
                <span className="size-4 rounded-3xl"><img className="size-4 rounded-3xl" src={node} alt="" /></span>
                <span className="size-4 rounded-3xl"><img className="size-4 rounded-3xl" src={ex} alt="" /></span>
                <span className="size-4 rounded-3xl"><img className="size-4 rounded-3xl" src={react01} alt="" /></span>
                <span className="size-4 rounded-3xl"><img className="size-4 rounded-3xl" src={mongo} alt="" /></span>
              </div>
              <div className="text-center card-body">
                <div className="flex flex-col items-center justify-center gap-3 m-auto ad-title ">
                  <h4 className="text-white text-uppercase">Real State Luxuery Website</h4>
                  <a href="https://tourist-guide-3bd84.firebaseapp.com/"  >
                    <button className="flex items-center justify-center gap-2 button gradient-border">view <FaArrowTrendUp className="text-white" /> </button>

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
