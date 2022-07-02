import "./ProductDetailPage.scss";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import About from "../../components/About/About";
import { db } from "../../firebase";
import { onSnapshot, getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";

const ProductDetailPage = ({ addProduct }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  //get product id from params
  const { productId } = useParams();
  //create a doc ref
  const docRef = doc(db, "products", productId);
  //create a function to get a specific product
  const getProduct = () => {
    onSnapshot(docRef, (doc) => setProduct({ ...doc.data(), id: doc.id }));
  };

  //Get product on Load
  useEffect(() => {
    window.scrollTo(0, 0);

    //fetch data before set loading state
    const fetchProduct = () => {
      try {
        const unsubscribe = getProduct();
        return () => unsubscribe();
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="product-detail__page">
      <ProductDetail product={product} addProduct={addProduct} />
      <About />
    </div>
  );
};

export default ProductDetailPage;
