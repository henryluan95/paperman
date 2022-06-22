import "./Hero.scss";
import { Link } from "react-router-dom";

import React from "react";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero">
        <h1 className="hero-title">Paperman</h1>
        <h3 className="hero-subtitle">Welcome to Paperman</h3>
        <p className="hero-text">
          Our cases provide protection for your phone while presenting your
          fashion statement.
        </p>
        <Link className="hero-cta">Shop Now</Link>
      </div>
    </section>
  );
};

export default Hero;
