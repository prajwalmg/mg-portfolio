import React, { useState } from "react";
import { Parallax } from "react-parallax";

import "./introduction.css";
import salImg from "../../assets/person.png";
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";

export default function Introduction() {
  const [offset, setOffset] = useState(0);

  window.addEventListener("scroll", () => {
    // console.log(window.scrollY);
    setOffset(window.scrollY);
  });

  return (
    <div className="intro">
      <div className="salute">
        <div className="saluteTextContainer">
          <Parallax
            style={{
              transform: `translate(${-offset * 0.1}px, ${offset * 0.3}px)`,
            }}
          >
            <h1 className="saluteText">Hi</h1>
          </Parallax>
        </div>
        <div className="saluteImgContainer">
          <Parallax
            style={{
              transform: `translate(${offset * 0.4}px, ${offset * 0.5}px)`,
            }}
          >
            <img src={salImg} alt="" className="saluteImg" />
          </Parallax>
        </div>
      </div>
      <div className="nameContainer">
        <Parallax style={{ transform: `translateX(calc(${offset * 0.2}px)` }}>
          <h2 className="name">I'm Prajwal</h2>
        </Parallax>
      </div>
      <Parallax bgImage={bg1}>
      <div className="jobTitleContainer">
        <Parallax
          style={{ transform: `translateX(calc(100vh + ${-offset * 0.3}px))` }}
        >
          <h2 className="jobTitle">a Web Developer</h2>
        </Parallax>
      </div>
      </Parallax>
      <Parallax bgImage={bg2} style={{backgroundColor: "rebeccapurple"}} strength={100} blur={{min: -5, max: 5}}>
      <div className="jobTitleContainer">
        <Parallax
          style={{ transform: `translateX(calc(-100vh + ${offset * 0.3}px))` }}
        >
          <h2 className="jobTitle secondTitle">and a Mobile App Developer</h2>
        </Parallax>
      </div>
      </Parallax>
    </div>
  );
}
