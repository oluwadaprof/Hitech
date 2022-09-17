import React from "react";
import "./sectiontwo.scss";

const SectionTwo = () => {
  return (
    <section className="sectiontwo">
      <h1>My Works</h1>
      <p>
        "There is no such thing as a boring project. There are only boring
        executions" ―
        <br /> <b>Irene Etzkorn</b>
      </p>

      <div className="works-card__one">
        <div className="indicator__one">
          <p className="tag__one">Mobile</p>
        </div>
        <h1 className="title__one" >EduSponsor</h1>
        <p>
          EduSponsor is born out of a simple but empathetic idea <br />
          that every deserving academic candidate irrespective
          <br />
          of their social and financial status deserves a shot at <br />
          their desired conventional exam{" "}
        </p>
        <button className="case">Case Study</button>
        <img className="first__image" src="" alt="" />
        <img className="second__image" src="" alt="" />
      </div>

      <div className="works-card__two">
        <div className="indicator__two">
          <p className="tag__two" >Web</p>
        </div>
        <h1 className="title__two">Rent4Less</h1>
        <p>
        Rent4Less is a rental scheme designed to provide a<br/>
         flexible way to rent homes. With this scheme, you can<br/>
          now spread out the payment for apartments in choice<br/>
           locations, by  on a monthly basis.
        </p>
        <button className="case__two">Case Study</button>
        <img className="third__image" src="" alt="" />
        <img className="fourth__image" src="" alt="" />
      </div>

      <button className="see-all">See all</button>
    </section>
  );
};

export default SectionTwo;
