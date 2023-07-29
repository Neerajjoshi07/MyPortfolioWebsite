import "./HeroimgStyles.css";

import IntroImg from "../assets/4.jpg";
import Resume from "../assets/resume/resume.pdf";

import React from 'react';
import {Link} from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p><b>HII 
                <br/>MY NAME IS NEERAJ KUMAR JOSHI</b></p>
            <h1>I am a Developer</h1>
            <div className ="btn-sec">
                <a href= {Resume} download="Resume.pdf" className="btn"> Download CV </a>
                <Link to="https://forms.gle/N3rMXHND5gZv3Ab96" target="_blank" className="btn btn-light">contact</Link>
            </div>

        </div>
    </div>
  )
}

export default Heroimg