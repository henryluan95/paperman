import "./Products.scss";
import { Link } from "react-router-dom";
import Categories from "../Categories/Categories";

const Products = ({ products }) => {
  //create products to displace
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
      {window.location.href === "http://localhost:3000/" && <Categories />}
      <div className="products">{productsElement}</div>
    </div>
  );
};

export default Products;
