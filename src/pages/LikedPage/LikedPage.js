import "./LikedPage.scss";
import { useState, useEffect } from "react";
import Products from "../../components/Products/Products";
import { productsColRef } from "../../firebase";
import { onSnapshot, where, query } from "firebase/firestore";

const LikedPage = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  //create a function to query
  const getProducts = () => {
    //query data to get only liked product
    const likedQuery = query(productsColRef, where("isLiked", "==", true));

    //get all data that are queried
    onSnapshot(likedQuery, (snapshot) => {
      const fetchedProducts = [];
      snapshot.docs.forEach((doc) =>
        fetchedProducts.push({ ...doc.data(), id: doc.id })
      );
      setProducts(fetchedProducts);
      setLoading(false);
    });
  };

  //get all liked products on load
  useEffect(() => {
    getProducts();
  }, []);

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
