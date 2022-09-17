import React from "react";
import "./sectionone.scss";
import research from "../../assets/research icon.png";
// import wp from "../../assets/wp icon.png";

const SectionOne = () => {
  return (
    <section className="sectionone">
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
          <img src={research} alt="" />
          <p className="skills-title">Design Strategy</p>
          <p className="skills-content">
            Through the use of a suitable user research <br />
            method, I strive to understand how users <br />
            go about performing tasks and achieving <br />
            goals.
          </p>
        </div>

        <div className="skill-card">
          <img src={research} alt="" />
          <p className="skills-title">Wireframing & prototyping</p>
          <p className="skills-content">
            Through the use of a suitable user research <br />
            method, I strive to understand how users <br />
            go about performing tasks and achieving <br />
            goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
