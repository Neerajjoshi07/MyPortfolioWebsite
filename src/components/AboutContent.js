import "./AboutContentStyles.css";

import React from 'react'
import { Link } from "react-router-dom";
import Myimg from "../assets/myimage.jpg";

const AboutContent = () => {
  return <div className= "about">
            <div className= "left">
                <h1>Who Am I?</h1>
    
                <p> Hii.. my name is <b>Neeraj Kumar Joshi</b>. </p>
                <p> I am a 22-year-old front-end developer and I have Completed my graduation in BCA at</p>
                <p>  year 2021 from Amrapali Group of Institutes, Haldwani and Currently I am pursuing my Masters in Computer Applications.</p>"/n"
                <p>Which allows me to deepen my knowledge and skills in the field of computer science. </p>
                <p> I am looking to secure a challenging position</p>
                <p> where I can effectively contribute by skills as</p>
                <p> a developer for growth of organization and myself. </p> 
                
            <Link to="https://forms.gle/N3rMXHND5gZv3Ab96" target="_blank">
                <button className= "btn">Contact</button>
            </Link>
    </div>
    <div className= "right">
        <div className= "img-container">
            <img src={Myimg} className="img" alt="true" />
        </div>
    </div>
  </div>
}

export default AboutContent