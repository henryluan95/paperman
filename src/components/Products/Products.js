import "./Products.scss";
import { Link } from "react-router-dom";
import Categories from "../Categories/Categories";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

const Products = ({ products }) => {
  //get Products component current url to display/not display Categories section
  const location = useLocation();
  const [isOnSamePage, setIsOnSamePage] = useState(true);

  //Create a function to unlike
  const unLiked = (productId) => {
    const docRef = doc(db, "products", productId);
    updateDoc(docRef, {
      isLiked: false,
    });
  };

  useEffect(() => {
    if (isOnSamePage) {
      //force Products Component to rerender all products when navigate back with back button;
      setIsOnSamePage(false);
    }
  }, []);

  //create products to display
  const productsElement = products.map((product) => {
    return (
      <div className="product" key={product.id}>
        <Link to={`/product/${product.id}`} className="button product__button">
          View Product
        </Link>
        <img className="product__img" src={product.image} alt="case" />
        <div className="product__mid-container">
          <h3 className="product__title">{product.title}</h3>
          {location.pathname === "/liked" && (
            <HeartBrokenIcon
              className="product__dislike"
              onClick={() => unLiked(product.id)}
            />
          )}
        </div>
        <span className="product__price">${product.price}</span>
      </div>
    );
  });

  return (
    <div className="products-wrapper">
      {location.pathname === "/" && <Categories />}
      <div className="products">{productsElement}</div>
    </div>
  );
};

export default Products;
