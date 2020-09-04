import React, { Component } from "react";
import "../css/skills.scss";
import { RiChromeFill } from "react-icons/ri";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import { SiJekyll, SiJavascript, SiJquery, SiMysql } from "react-icons/si";

class Skills extends Component {
  state = {};
  render() {
    return (
      <>
        <h2>Skills</h2>
        <div className="skill_Container">
          <div className="skill__Element">
            <p>React</p>
            <FaReact title="React" />
          </div>
          <div className="skill__Element">
            <p>HTML5</p> <FaHtml5 title="HTML5" />
          </div>
          <div className="skill__Element">
            <p>Css3</p>
            <FaCss3 title="Css3" />
          </div>
          <div className="skill__Element">
            <p>Jekyll</p>
            <SiJekyll title="Jekyll" />
          </div>
          <div className="skill__Element">
            <p>Bootstrap</p> <FaBootstrap title="Bootstrap" />
          </div>
          <div className="skill__Element">
            <p>Javascript</p> <SiJavascript title="JavaScrip" />
          </div>
          <div className="skill__Element">
            <p>jQUERY</p>
            <SiJquery title="jQUERY" />
          </div>
          <div className="skill__Element">
            <p>GitHub</p> <FaGithub title="GitHUb" />
          </div>
          <div className="skill__Element">
            <p>mySQL</p>
            <SiMysql title="MYSQL" />
          </div>
          <div className="skill__Element">
            <p>chromeDev</p>
            <RiChromeFill title="ChromeDev" />
          </div>
        </div>
      </>
    );
  }
}

export default Skills;
