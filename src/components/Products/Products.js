import "./Products.scss";
import productsData from "../../data/products.json";
import React from "react";
import Categories from "../Categories/Categories";

const Products = () => {
  //create product to displace
  const productsElement = productsData.items.map((product) => {
    return (
      <div className="product" key={product.sys.id}>
        <div className="product__btn">Add To Bag</div>
        <img
          className="product__img"
          src={product.fields.image.fields.file.url}
          alt="case"
        />
        <h3 className="product__title">{product.fields.title}</h3>
        <span className="product__price">{product.fields.price}</span>
      </div>
    );
  });

  return (
    <div className="products-wrapper">
      <Categories />
      <div className="products">{productsElement}</div>
    </div>
  );
};

export default Products;
