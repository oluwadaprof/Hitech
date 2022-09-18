import React from "react";
import "./sectionone.scss";
import research from "../../assets/research icon.png";
import wp from "../../assets/wp icon.png";
import design from "../../assets/design st icon.png";

const SectionOne = () => {
  return (
    <section id="about" className="sectionone">
      <h1>What i do in Nutshell</h1>
      <p>
        “Perfection is achieved, not when there is nothing more to add, but when
        there is <br />
        nothing left to take away.” <b>— Antoine de Saint-Exupery.</b>{" "}
      </p>

      <div className="skills">
        <div className="skill-card">
          <img src={research} alt="" />
          <p className="skills-title">User Research</p>
          <p className="skills-content">
            Through the use of a suitable user research <br />
            method, I strive to understand how users <br />
            go about performing tasks and achieving <br />
            goals.
          </p>
        </div>

        <div className="skill-card">
          <img src={design} alt="" />
          <p className="skills-title">Design Strategy</p>
          <p className="skills-content">
          I iteratively seek to redefine problems in an<br/>
           attempt to identify better alternative<br/>
            strategies and solutions that might not be<br/>
             instantly apparent.
          </p>
        </div>

        <div className="skill-card">
          <img src={wp} alt="" />
          <p className="skills-title">Wireframing & prototyping</p>
          <p className="skills-content">
          I ensure useful and usable user interfaces <br/>
          that work across multiple devices is an<br/>
           important part of the work we do on<br/>
            today’s web. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
