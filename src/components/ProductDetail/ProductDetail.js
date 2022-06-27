import "./ProductDetail.scss";
import { db } from "../../firebase";
import { onSnapshot, getDoc, doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

import React from "react";

const ProductDetail = ({ product }) => {
  // const [isLiked, setIsLiked] = useState(product.isLiked);
  //get all the modals that is available for this product
  const modals = [...new Set(product.modals?.map((modal) => modal))];

  //Create a function to update like
  const updateProduct = () => {
    const docRef = doc(db, "products", product.id);
    updateDoc(docRef, {
      isLiked: !product.isLiked,
    });
  };

  return (
    <div className="product-detail">
      <img
        className="product-detail__img"
        src={product.image}
        alt="selected product"
      />
      <div className="product-detail__info">
        <h3 className="product-detail__title">{product.title}</h3>
        <span className="product-detail__price">${product.price}</span>

        <div className="product-detail__buttons">
          <button
            className={`button product-detail__buttons-like ${
              product.isLiked ? "product-detail__buttons-like--liked" : ""
            } `}
            onClick={updateProduct}
          >
            {product.isLiked ? "Liked" : "Like"}
          </button>
          <button className="button product-detail__buttons-add">
            Add to Cart
          </button>
        </div>
        <label className="product-detail__promo">
          Promo Code
          <input
            className="input product-detail__promo-input"
            type="text"
            placeholder="Enter Promo Code"
          />
        </label>
        <label className="product-detail__modals">
          Phone Modal
          <select
            className="input product-detail__modal"
            name="modal"
            id="modal"
          >
            <option className="product-detail__modal-option" value="">
              --Please choose a phone modal--
            </option>
            {/* map through all modals variable created above to create options */}
            {modals.map((modal) => (
              <option
                className="product-detail__modal-option"
                value={modal}
                key={modal}
              >
                {modal}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default ProductDetail;
