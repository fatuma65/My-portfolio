import { Link } from "react-router-dom";
import introImg from "../assets/intro-bg (1).jpg";
import "./HeroImageStyles.css";
// import React from 'react'

const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={introImg} alt="IntroImg"></img>
      </div>
      <div className="content">
        <p>I am a Software Developer</p>
        <h1>React Developer</h1>
        <div>
            {/* these are our buttons since they are going to link to somewhere else */}
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
