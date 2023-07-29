import React from 'react'
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import SkillsDetails from "../components/SkillsDetails";


const Skills = () => {
    return (
        <div>
            <Navbar />
            <Heroimg2 heading="SKILLS" text="My Skills Section" />
            <SkillsDetails />
            <Footer />
        </div>
    )
}

export default Skills