import "./HomePage.scss";
import Hero from "../../components/Hero/Hero";

import React from "react";
import Trending from "../../components/Trending/Trending";
import Vouchers from "../../components/Vouchers/Vouchers";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Vouchers />
      <Trending />
      <div className="homepage">HomePage</div>;
    </>
  );
};

export default HomePage;
