import "./Cart.scss";
import { Link } from "react-router-dom";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useContext } from "react";
import { ProductsContext } from "../../App";
import { v4 as uuid } from "uuid";
import CloseButton from "../CloseButton/CloseButton";

const Cart = ({
  isCartClicked,
  reduceProduct,
  addProduct,
  deleteProduct,
  setIsCartClicked,
}) => {
  const cart = useContext(ProductsContext);

  //create a function to get total of all products
  const getTotal = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += Number(product.price) * product.quantity;
    });
    const formattedTotal = (Math.round(total * 100) / 100).toFixed(2);
    return formattedTotal;
  };

  const productsInCart = cart.map((product) => {
    return (
      <div className="cart__item" key={uuid()}>
        <div className="cart__product">
          <img
            className="cart__product-img"
            src={product.image}
            alt="added to cart case"
          />
          <div className="cart__info">
            <div className="cart__header">
              <p className="cart__product-title">{product.title}</p>
              <RemoveCircleOutlineIcon
                className="cart__product-delete"
                onClick={() => deleteProduct(product, product.modals)}
              />
            </div>

            <div className="cart__product-quantity">
              <button
                className="cart__product-decrease"
                onClick={() => reduceProduct(product, product.modals)}
              >
                -
              </button>
              <span className="cart__product-counter">{product.quantity}</span>
              <button
                className="cart__product-increase"
                onClick={() => addProduct(product, product.modals)}
              >
                +
              </button>
            </div>
            <p className="cart__product-modal">Modal: {product.modals}</p>
            <p className="cart__product-price">{product.price}</p>
          </div>
        </div>
        <div className="line cart__line "></div>
      </div>
    );
  });

  return (
    <div className="cart">
      <div
        className={`cart__overlay ${
          isCartClicked ? "cart__overlay--active" : ""
        } `}
        onClick={() => setIsCartClicked()}
      ></div>
      <div
        className={`cart__content ${
          isCartClicked ? "cart__content--active" : ""
        } `}
      >
        <CloseButton handleClick={setIsCartClicked} />
        <h4 className="cart__title">Your Cart</h4>
        <div className="cart__products">{productsInCart}</div>
        <p className="cart__total">Total: ${getTotal(cart)}</p>
        <Link
          to="/checkout"
          className="cart__checkout"
          onClick={() => setIsCartClicked()}
        >
          Check Out
        </Link>
      </div>
    </div>
  );
};

export default Cart;
