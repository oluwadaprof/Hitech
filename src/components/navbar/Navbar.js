import React, { useState } from "react";
import logo from "../../assets/anna logo.png";
import "./navbar.scss";
import circleMenu from "../../assets/menu.png";
import FloatNav from "../floatnav/FloatNav";

const Navbar = () => {
  const [closenav, setclosenav] = useState(false);
  

  const handleclose = () => {
    setclosenav(false);
  };
  const handleopen = () => {
    setclosenav(true);
  };
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <img src={circleMenu} onClick={handleopen} alt="" />
      {closenav && <FloatNav handleclose={handleclose} />}
    </div>
  );
};

export default Navbar;
