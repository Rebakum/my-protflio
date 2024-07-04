import React from "react";
import { Fade } from "react-awesome-reveal";
import foodKing from '../../assets/images/food-king.png';
import restTravel from '../../assets/images/rest-travel.png';
import touristGuide from '../../assets/images/tourist-guide.png';

const Projects = () => {
  return (
    <div className="container ">
      <h2 className="mb-3 text-3xl text-center text-[#005C78] uppercase">
        TOP RECENT PROJECTS
      </h2>
      <hr />
      <p className="pb-3 text-center">
      As a dedicated and innovative front-end developer, I've had the opportunity to work on various exciting projects that showcase my skills in modern web technologies. Here are some highlights of my top recent projects
      </p>
      {/* card design */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="col-md-4">
          <Fade cascade>
            <div className="rounded card border-2 bg-[#F3F7EC]">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img
                  src={touristGuide}
                  alt="project1"
                />
              </div>
              <div className="m-auto mt-3 card-image-overlay">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="text-center card-body">
                <div className="m-auto ad-title">
                  <h6 className="text-uppercase">Techinfoyt Shopping Website</h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/Rebakum/food-king-client"
                >
                  View
                </a>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-md-4">
          <Fade cascade>
            <div className="rounded card border-2 bg-[#F3F7EC]">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img
                  src={foodKing}
                  alt="project1"
                />
              </div>
              <div className="m-auto mt-3 card-image-overlay ">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="text-center card-body">
                <div className="m-auto ad-title">
                  <h6 className="text-uppercase">Techinfoyt Shopping Website</h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/Rebakum/tourist-guide"
                >
                  View
                </a>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-md-4">
          <Fade cascade>
            <div className="rounded card border-2 bg-[#F3F7EC]">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img
                  src={restTravel}
                  alt="project1"
                />
              </div>
              <div className="m-auto mt-3 card-image-overlay ">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="text-center card-body">
                <div className="m-auto ad-title">
                  <h6 className="text-uppercase">Techinfoyt Shopping Website</h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/Rebakum/food-king-client"
                >
                  View
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
