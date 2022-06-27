import "./ProductDetailPage.scss";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import About from "../../components/About/About";
import { db } from "../../firebase";
import { onSnapshot, getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

const ProductDetailPage = () => {
  const [product, setProduct] = useState({});

  //get product id from params
  const { productId } = useParams();
  //create a doc ref
  const docRef = doc(db, "products", productId);
  //create a function to get a specific product
  const getProduct = () => {
    onSnapshot(docRef, (doc) => setProduct({ ...doc.data(), id: doc.id }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProduct();
  }, []);

  return (
    <div className="product-detail__page">
      <ProductDetail product={product} />
      <About />
    </div>
  );
};

export default ProductDetailPage;
