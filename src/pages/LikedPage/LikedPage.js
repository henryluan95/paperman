import "./LikedPage.scss";

import React from "react";
import Products from "../../components/Products/Products";

const LikedPage = () => {
  return (
    <div className="liked-page">
      <div className="liked">
        <h2 className="liked__title">Liked Products</h2>
        <div className="line liked__line "></div>
        <Products />
      </div>
    </div>
  );
};

export default LikedPage;
