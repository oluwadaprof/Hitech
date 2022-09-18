import React, {useState} from "react";
import "./floatnav.scss";
import logo from '../../assets/darklogo.png'
import closebutton from "../../assets/close button.png";

const FloatNav = ({closenav, handleclose}) => {

  return (
 <div className="floatnav">
      <div className="menu" >
        <img src={logo} alt="" />
        <img onClick={handleclose} closenav={closenav} src={closebutton} alt="" />
      </div>
      <div className="nav__items" >
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>My works</li>
            <li>Resume</li>
            <li>Contact Me</li>
        </ul>
      </div>
    </div>
  );
};

export default FloatNav;
