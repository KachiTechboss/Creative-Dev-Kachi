import React from "react";
import { 
  SiGithub, 
  SiReact, 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiGit 
} from "react-icons/si";
import "../styles/App.css";

const Skills = () => {
  return (
    <div className="skills-grid">
      <div className="skill-icon"><SiGithub /></div>
      <div className="skill-icon"><SiReact /></div>
      <div className="skill-icon"><SiHtml5 /></div>
      <div className="skill-icon"><SiCss3 /></div>
      <div className="skill-icon"><SiJavascript /></div>
      <div className="skill-icon"><SiGit /></div>
    </div>
  );
};

export default Skills;
