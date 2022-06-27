import "./HomePage.scss";
import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Trending from "../../components/Trending/Trending";
import Vouchers from "../../components/Vouchers/Vouchers";
import Sales from "../../components/Sales/Sales";
import Products from "../../components/Products/Products";
import Contact from "../../components/Contact/Contact";
import { productsColRef } from "../../firebase";
import { onSnapshot } from "firebase/firestore";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  //create a function to get all products
  const getProducts = () =>
    onSnapshot(productsColRef, (snapshot) => {
      const fetchedProducts = [];
      snapshot.docs.forEach((doc) =>
        fetchedProducts.push({ ...doc.data(), id: doc.id })
      );
      setProducts(fetchedProducts);
      setLoading(false);
    });

  //get all products on load
  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <h1>Hi</h1>;
  }

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
