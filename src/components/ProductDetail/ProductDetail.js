import "./ProductDetail.scss";
import salesImage from "../../assets/images/sales-image.jpg";

import React from "react";

const ProductDetail = () => {
  return (
    <div className="product-detail">
      <img
        className="product-detail__img"
        src={salesImage}
        alt="selected product"
      />
      <div className="product-detail__info">
        <h3 className="product-detail__title">
          This is the title of the product
        </h3>
        <span className="product-detail__price"></span>
        <label className="product-detail__modals">
          Choose a phone modal:
          <select className="product-detail__modal" name="modal" id="modal">
            <option className="product-detail__modal-option" value="">
              --Please choose an option--
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
        <div className="product-detail__buttons">
          <button className="product-detail__buttons-like">Like</button>
          <button className="product-detail__buttons-add">Add to Cart</button>
        </div>
        <label className="product-detail__promo">
          Promo Code:
          <input
            className="product-detail__promo-input"
            type="text"
            placeholder="Enter Promo Code"
          />
        </label>
      </div>
    </div>
  );
};

export default ProductDetail;
