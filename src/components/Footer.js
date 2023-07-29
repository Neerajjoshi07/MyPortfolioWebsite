import "./FooterStyles.css";

import React from "react";
import {FaPhone, FaMailBulk, FaLinkedin, FaInstagram, FaFacebook, FaGithub} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="phone"><h4>
            <FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}} />
            +916398065018</h4>
          </div>
          <div className="email"><h4>
            <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} />
            joshineeraj017@gmail.com</h4>
          </div>
        </div>
        <div className="right">
          <div className= "social">
            <i><a href="https://www.facebook.com/profile.php?id=100037648662266" target="_blank" rel="noopener noreferrer" >  <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}} /> </a> </i>
            <i><a href="https://www.linkedin.com/in/neeraj-joshi-084a78192?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5sCMOrrGSleujGs4eBYRAQ%3D%3D" target="_blank" rel="noopener noreferrer" > <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}} /> </a></i>
            <i><a href="https://instagram.com/neerajoshi_07" target="_blank" rel="noopener noreferrer" > <FaInstagram size={30} style={{color:"#fff", marginRight: "1rem"}} /> </a> </i>
            <i><a href="https://github.com/Neerajjoshi07" target="_blank" rel="noopener noreferrer" > <FaGithub size={30} style={{color:"#fff", marginRight: "1rem"}} /> </a> </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
