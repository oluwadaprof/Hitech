import React from "react";
import "./sectionfour.scss";
import avatarone from "../../assets/Rectangle 20.png";
import avatartwo from "../../assets/Rectangle 22.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const SectionFour = () => {
  return (
    <section className="sectionfour">
      <h1>My Publications</h1>
      <p>
        Through writing, I come to understand my internal psychologies more
        intimately <br />
        than through any other form of semantic exploration.
      </p>
      <div className="publication">
        <div className="publication-card__one">
          <img src={avatarone} alt="" />
          <h2>Designing Better Interface</h2>
          <p>
            {" "}
            Design is the process of creating machines, interactive <br />
            systems, buildings, vehicles, software, objects, etc. It <br />
            user-centered, i.e. users are at the heart of the design. It is
            <br />
            about creating solutions for people, physical items, or <br />
            abstract systems to address a need or a problem. Simply put,
            <br />
            Design is a science of creating things: from inception to <br />
            delivery.
          </p>
          <div className="icon-circle__one">
            <AiOutlineArrowRight className="icon" />
          </div>
        </div>

        <div className="publication-card__two">
          <img src={avatartwo} alt="" />
          <h2 className="header__two" >UI, UX: What’s the difference?</h2>
          <p>
            {" "}
            The line between UX and UI is a pretty thin one; it is indeed so{" "}
            <br />
            thin that it is arguably one of the most discussed issues in <br />
            recent times. Although there is a plethora of information on <br />
            the internet seeking to shed more light on the UX and UI and <br />
            corresponding job descriptions and requirements of these <br />
            fields, the boundary between UI and
          </p>
          <div className="icon-circle__two">
            <AiOutlineArrowRight className="icon" />
          </div>
        </div>
      </div>
      <button className="see-all">See all</button>
    </section>
  );
};

export default SectionFour;
