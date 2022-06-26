import "./Cart.scss";
import productsData from "../../data/products.json";

import React from "react";

const Cart = () => {
  const image1 = productsData.items[0].fields.image.fields.file.url;

  return (
    <div className="cart">
      <h4>Your Cart</h4>
      <div className="cart__products">
        <div className="cart__product">
          <img
            className="cart__product-img"
            src={image1}
            alt="added to cart case"
          />
          <div className="cart__top">
            <p className="cart__product-title">some title</p>
            <button className="cart__product-delete">Delete</button>
          </div>
          <div className="cart__bottom">
            <div className="cart__product-quantity">
              <button className="cart__product-decrease">-</button>
              <span className="cart__product-counter">1</span>
              <button className="cart__product-increase">+</button>
            </div>
            <p className="cart__total">
              Total: <span className="cart__total-counter">$9.99</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
