import React from 'react'
import "./SkillsDetailsStyles.css"
import HtmlImg from "../assets/html.png"
import CssImg from "../assets/css.png"
import JavascriptImg from "../assets/javascript.png"
import ReactImg from "../assets/react.png"
import NodeImg from "../assets/node.png"

const SkillsDetails = () => {
    return (
        <div className="skills-container">
            <h1 className="skills-heading">Skills</h1>
            <div className="img-container">
                <div className="img-details">
                    <h2 >HTML</h2>
                    <img style={{ width: "100%" }} src={HtmlImg} />
                </div>
                <div className="img-details">
                    <h2 >CSS</h2>
                    <img style={{ width: "100%" }} src={CssImg} />
                </div>
                <div className="img-details">
                    <h2 >JavaScript</h2>
                    <img style={{ width: "100%" }} src={JavascriptImg} />
                </div>
                <div className="img-details">
                    <h2 >ReactJS</h2>
                    <img style={{ width: "100%" }} src={ReactImg} />
                </div>
                <div className="img-details">
                    <h2 >NodeJS</h2>
                    <img style={{ width: "100%" }} src={NodeImg} />
                </div>
                
                
                
            </div>
        </div>
    )
}
export default SkillsDetails