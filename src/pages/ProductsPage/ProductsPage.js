import "./ProductsPage.scss";

import React from "react";

const ProductsPage = () => {
  return (
    <>
      <div className="view">
        <label className="view__price">
          <select className="view__price-selection" name="modal" id="modal">
            <option className="view__price-option" value="Low to High">
              Low to High
            </option>
            <option className="view__price-option" value="  High to Low">
              High to Low
            </option>
          </select>
        </label>
      </div>
    </>
  );
};

export default ProductsPage;
