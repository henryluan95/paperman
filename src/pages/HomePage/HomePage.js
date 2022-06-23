import "./HomePage.scss";
import Hero from "../../components/Hero/Hero";

import React from "react";
import Trending from "../../components/Trending/Trending";
import Vouchers from "../../components/Vouchers/Vouchers";
import Sales from "../../components/Sales/Sales";
import Products from "../../components/Products/Products";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Vouchers />
      <Trending />
      <Sales />
      <Products />
    </>
  );
};

export default HomePage;
