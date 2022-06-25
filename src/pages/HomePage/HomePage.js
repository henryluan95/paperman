import "./HomePage.scss";
import React from "react";
import Hero from "../../components/Hero/Hero";
import Trending from "../../components/Trending/Trending";
import Vouchers from "../../components/Vouchers/Vouchers";
import Sales from "../../components/Sales/Sales";
import Products from "../../components/Products/Products";
import Contact from "../../components/Contact/Contact";
import Login from "../../components/Login/Login";

const HomePage = () => {
  return (
    <>
      <Login />
      {/* <Hero />
      <Vouchers />
      <Trending />
      <Sales />
      <Products />
      <Contact /> */}
    </>
  );
};

export default HomePage;
