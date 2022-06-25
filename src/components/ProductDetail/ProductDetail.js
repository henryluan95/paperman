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
        <h3 className="product-detail__title">Orange Girl</h3>
        <span className="product-detail__price">$6.99</span>

        <div className="product-detail__buttons">
          <button className="button product-detail__buttons-like">Like</button>
          <button className="button product-detail__buttons-add">
            Add to Cart
          </button>
        </div>
        <label className="product-detail__promo">
          Promo Code
          <input
            className="product-detail__promo-input"
            type="text"
            placeholder="Enter Promo Code"
          />
        </label>
        <label className="product-detail__modals">
          <select className="product-detail__modal" name="modal" id="modal">
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
    </div>
  );
};

export default ProductDetail;
