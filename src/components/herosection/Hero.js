import React from "react";
import "./hero.scss";
import zigzag from "../../assets/Vector 5.png";
import triangle from "../../assets/Polygon 1.png";
import twitter from "../../assets/twitter.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="text-section">
        <h1>Hello I'm</h1>
        <p className="heroname">
          <span>Juli</span>anna
        </p>
        <p>
          I specialize in designing and developing user interfaces and digital
          products. I don’t restrict myself to design. The blend of design, user
          experience, marketing, and business is where I feel I excel.
        </p>
      </div>
      <div className="grouped-button">
        <button className="hire">Hire Me</button>
        <button className="contact">Contact Us</button>
      </div>
      <img className="zigzag" src={zigzag} alt="" />
      <img className="triangle" src={triangle} alt="" />
      <div className="social-icons">
        <img className="triangle" src={twitter} alt="" />
        <img className="triangle" src={twitter} alt="" />
        <img className="triangle" src={twitter} alt="" />
        <img className="triangle" src={twitter} alt="" />
      </div>
    </div>
  );
};

export default Hero;
