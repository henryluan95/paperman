import "./HomePage.scss";
import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Trending from "../../components/Trending/Trending";
import Vouchers from "../../components/Vouchers/Vouchers";
import Sales from "../../components/Sales/Sales";
import Products from "../../components/Products/Products";
import Contact from "../../components/Contact/Contact";
import Loader from "../../components/Loader/Loader";
import { first } from "../../firebase";
import useCollection from "../../hooks/useCollection";
import Inspiration from "../../components/Inspiration/Inspiration";

const HomePage = () => {
  const { products, loading } = useCollection(first);

  //Set page title
  useEffect(() => {
    document.title = "Paperman";
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Hero />
      <Vouchers />
      <Trending />
      <Sales />
      <Products products={products} />
      <Inspiration />
      <Contact />
    </>
  );
};

export default HomePage;
