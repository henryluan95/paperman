import "./About.scss";

import React from "react";

const About = () => {
  return (
    <>
      <div className="line about__line"></div>
      <div className="about">
        <div className="about__us">
          <div className="about__us-img"></div>
          <div className="about__us-info">
            <h4 className="about__us-title">Our Mission</h4>
            <p className="about__info">
              Paperman is the industry leader in stylish and thoughtful phone
              cases. We're committed to turn your iPhone into an accessory to
              brag about.
            </p>
          </div>
        </div>
        <div className="about__products">
          <div className="about__products-img"></div>
          <div className="about__us-info">
            <h4 className="about__us-title">Our Products</h4>
            <p className="about__info">
              Let's be honest, a pretty phone case is nice to have but it has to
              protect your phone from daily drops. Our cases are tested to
              provide you an all around protection.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
