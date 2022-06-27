import "./Products.scss";
import { Link } from "react-router-dom";
import Categories from "../Categories/Categories";
import { useLocation } from "react-router-dom";

const Products = ({ products }) => {
  //get Products component current url to display/not display Categories section
  const location = useLocation();

  //create products to display
  const productsElement = products.map((product) => {
    return (
      <div className="product" key={product.id}>
        <Link to={`/product/${product.id}`} className="button product__button">
          View Product
        </Link>
        <img className="product__img" src={product.image} alt="case" />
        <h3 className="product__title">{product.title}</h3>
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
