import "./ProductsPage.scss";

import React from "react";
import Products from "../../components/Products/Products";

const ProductsPage = () => {
  return (
    <div className="products-page">
      <div className="view">
        {/* filter by price */}
        <label className="view__price">
          <select
            className="input view__price-selection"
            name="price-selection"
            id="price-selection"
          >
            <option className="view__price-option" value="Low to High">
              Low to High
            </option>
            <option className="view__price-option" value="  High to Low">
              High to Low
            </option>
          </select>
        </label>
        {/* search */}
        <label className="view__search">
          <input
            type="text"
            className="input view__search-input"
            placeholder="Search"
          />
        </label>
        {/* filter by modals */}
        <label className="view__modals">
          <select
            className="input view__modals-selection"
            name="modals-selection"
            id="modals-selection"
          >
            <option className="product-detail__modal-option" value="">
              --Please choose a phone modal--
            </option>
            <option className="product-detail__modal-option" value="Iphone 7">
              Iphone 7
            </option>
            <option
              className="product-detail__modal-option"
              value="Iphone 7 Plus"
            >
              Iphone 7 Plus
            </option>
            <option className="product-detail__modal-option" value="Iphone X">
              Iphone X
            </option>
            <option
              className="product-detail__modal-option"
              value="Iphone 12 Pro"
            >
              Iphone 12 Pro
            </option>
          </select>
        </label>
      </div>
      <h2 className="view__title">All Products</h2>
      <div className="line view__line "></div>
      <Products />
    </div>
  );
};

export default ProductsPage;
