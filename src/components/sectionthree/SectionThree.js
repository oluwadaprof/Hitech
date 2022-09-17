import React from "react";
import "./sectionthree.scss";
import zeplin from "../../assets/zeplin icon.png";
import adobexd from "../../assets/adobexd.png";
import illustrator from "../../assets/adobe illustrator icon.png";
import aftereffect from "../../assets/after effect icon.png";
import figma from "../../assets/figma icon.png";
import slack from "../../assets/slack icon.png";

const SectionThree = () => {
  return (
    <section className="sectionthree">
      <div className="first">
        <h1 className="text-one">
          “You can’t wait for
          <br />
          inspiration, you have to go <br />
          after it with a club.”
        </h1>
        <p className="text-two">
          If a design is a mindset, a design tool is the hand of
          <br />
          the mind. Here are the tools I take pleasure in
          <br />
          working with;
        </p>
      </div>
      <div className="second">
        <div>
          <div className="zeplin" type="">
            <img src={adobexd} alt="" /> <p>Adobe XD</p>
          </div>
          <div className="zeplin" type="">
            <img src={illustrator} alt="" /> <p>Adobe Illustrator</p>
          </div>
        </div>

        <div>
          <div className="zeplin" type="">
            <img src={aftereffect} alt="" /> <p>Adobe After-Effect</p>
          </div>
          <div className="zeplin" type="">
            <img src={figma} alt="" /> <p>Adobe Figma</p>
          </div>
        </div>

        <div>
          <div className="zeplin" type="">
            <img src={slack} alt="" /> <p>Slack</p>
          </div>
          <div className="zeplin" type="">
            <img src={zeplin} alt="" /> <p>Zeplin</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
