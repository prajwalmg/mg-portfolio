import React, { useState } from "react";
import { Parallax } from "react-parallax";

import "./projects.css";
import laptopBackground from "../../assets/laptop.png";
import screenBlog from "../../assets/blog-webapp.png";
import phoneBackground from "../../assets/phone.png";
import phoneWeatherApp from "../../assets/phoneWeatherApp.png";
import bg1 from "../../assets/bg1.png";

export default function Projects() {
  // const [offset, setOffset] = useState(0);

  // window.addEventListener("scroll", () => {
  //   // console.log(window.scrollY);
  //   setOffset(window.scrollY);
  // });

  return (
    <div className="projects">
      <Parallax bgImage={bg1} strength={500} blur={{ min: -3, max: 5 }}>
        <div className="projectsContainer">
          <h1 className="projectsTitle">Take a look at my projects</h1>
          <div className="project">
              <div className="laptop">
                <img src={laptopBackground} alt="" />
                <div className="laptopScreen">
                  <img src={screenBlog} alt="" className="laptopWebApp" />
                </div>
              </div>
            <div className="projectDetails">
              <h1 className="projectTitle">Blog Web App</h1>
              <p className="projectDescription">
                Built a personal blog web application using MERN stack. Frontend
                of the application is done on React. You can register as a new
                user and login using those credentials. User details are stored
                in MongoDB database and are accessed by the REST API built by
                using NodeJS. Here in the API, I have used Mongoose for
                connecting it to the DB. Tested the API on Postman. For fetching
                the data from the database on frontend, I have used Axios. For
                state management, I have used Context API by React. Finally,
                deployed the web App on Render.
              </p>
              <button className="projectButton">Learn More</button>
            </div>
          </div>
          <div className="project">
            <div className="phone">
              <img src={phoneBackground} alt="" className="phoneFrame" />
              <div className="phoneScreen">
                <img src={phoneWeatherApp} alt="" className="phoneApp" />
              </div>
            </div>
            <div className="projectDetails">
              <h1 className="projectTitle">Weather App</h1>
              <p className="projectDescription">
                Built a mobile application using React Native and TypeScript
                which fetches the weather data of the entered country and also
                displayes its capital's weather.
              </p>
              <button className="projectButton">Learn More</button>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
