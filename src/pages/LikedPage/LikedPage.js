import "./LikedPage.scss";
import { useState, useEffect } from "react";
import Products from "../../components/Products/Products";
import { productsColRef } from "../../firebase";
import { where, query } from "firebase/firestore";
import useCollection from "../../hooks/useCollection";

const LikedPage = () => {
  //query data to get only liked product
  const likedQuery = query(productsColRef, where("isLiked", "==", true));
  const { products, loading } = useCollection(likedQuery);

  if (loading) {
    return <h1>Hi</h1>;
  }

  return (
    <div className="liked-page">
      <div className="liked">
        <h2 className="liked__title">Liked Products</h2>
        <div className="line liked__line "></div>
        <Products products={products} />
      </div>
    </div>
  );
};

export default LikedPage;
