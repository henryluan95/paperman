import "./HomePage.scss";
import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Trending from "../../components/Trending/Trending";
import Vouchers from "../../components/Vouchers/Vouchers";
import Sales from "../../components/Sales/Sales";
import Products from "../../components/Products/Products";
import Contact from "../../components/Contact/Contact";
import { productsColRef } from "../../firebase";
import useCollection from "../../hooks/useCollection";

const HomePage = () => {
  const { products, loading } = useCollection(productsColRef);
  // if (loading) {
  //   return <h1>Hi</h1>;
  // }

  return (
    <>
      <Hero />
      <Vouchers />
      <Trending />
      <Sales />
      <Products products={products} />
      <Contact />
    </>
  );
};

export default HomePage;
