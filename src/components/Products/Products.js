import "./Products.scss";
import productsData from "../../data/products.json";

import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  // get products
  const getData = async () => {
    try {
      const result = await fetch(productsData);
      const response = await result.json();
      console.log(result);
      const data = response.items;
      setProducts(data);
      console.log(products);
    } catch (error) {
      console.log("Error happened here!");
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return <div>Products</div>;
};

export default Products;
