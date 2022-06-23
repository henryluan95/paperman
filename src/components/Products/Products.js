import "./Products.scss";
import productsData from "../../data/products.json";
import React from "react";

const Products = () => {
  //create product to displace
  const productElement = productsData.items.map((product) => {
    return (
      <div className="product" key={product.sys.id}>
        <div className="product__btn">Add To Bag</div>
        <img
          className="product__img"
          src={product.fields.image.fields.file.url}
          alt="case"
        />
        <span className="product__title">{product.fields.title}</span>
        <span className="product__price">{product.fields.price}</span>
      </div>
    );
  });

  return <section className="products">{productElement}</section>;
};

export default Products;
