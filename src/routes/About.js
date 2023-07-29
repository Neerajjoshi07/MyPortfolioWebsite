import React from 'react'

import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT" text="Hi there! My name is Neeraj Kumar Joshi, and I'm an enthusiastic beginner developer. I'm on an exciting journey to explore the world of software development, where I can use my creativity and problem-solving skills. Every line of code I write is fueled by my curiosity to learn and improve." />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About