import "./ProductDetailPage.scss";
import React from "react";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import About from "../../components/About/About";

const ProductDetailPage = () => {
  return (
    <div className="product-detail__page">
      <ProductDetail />
      <About />
    </div>
  );
};

export default ProductDetailPage;
