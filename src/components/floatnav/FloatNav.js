import React, {useState} from "react";
import "./floatnav.scss";
import logo from '../../assets/darklogo.png'
import closebutton from "../../assets/close button.png";
import zigzag from "../../assets/Vector 5.png";
import triangle from "../../assets/Polygon 1.png";

const FloatNav = ({closenav, handleclose}) => {
  const [isActive, setIsActive] = useState('home')
  return (
 <div className="floatnav">
      <div className="menu" >
        <img src={logo} alt="" />
        <img onClick={handleclose} closenav={closenav} src={closebutton} alt="" />
      </div>
      <div className="nav__items" >
        <ul>
            <li onClick={handleclose}><a href="#home">Home</a></li>
            <li onClick={handleclose} ><a href="#about">About</a></li>
            <li onClick={handleclose}><a href="#mywork">My Works</a></li>
            <li onClick={handleclose}><a href="#resume">Resume</a></li>
            <li onClick={handleclose}><a href="#contact">Contact Me</a></li>
        </ul>
      </div>
      <img className="zigzag" src={zigzag} alt="" />
      <img className="triangle" src={triangle} alt="" />
    </div>
  );
};

export default FloatNav;
