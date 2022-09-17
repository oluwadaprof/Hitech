import React from "react";
import logo from "../../assets/anna logo.png";
import twitter from "../../assets/twitter.png";
import behance from "../../assets/behance.png";
import dribble from "../../assets/web.png";
import facebook from "../../assets/facebook.png";
import './footer.scss'

const Footer = () => {

    const handlescroll = ()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
  return (
    <footer>
      <img onClick={handlescroll} src={logo} alt="" />
      <div className="social-icons">
        <img className="t" src={twitter} alt="" />
        <img className="t" src={behance} alt="" />
        <img className="" src={dribble} alt="" />
        <img className="" src={facebook} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
