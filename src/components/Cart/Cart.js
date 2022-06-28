import "./Cart.scss";
import { Link } from "react-router-dom";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import getCurrentCart from "../../util/getCurrentCart";
import decreaseQuantity from "../../util/decreaseQuantity";
import setCart from "../../util/setCart";

const Cart = ({ isCartClicked }) => {
  const currentCart = getCurrentCart();

  //create a function to decrease quantity of a product in cart
  const handleDecreaseQuantity = (product) => {
    const updatedCart = decreaseQuantity(currentCart, product);
    console.log(currentCart);
    console.log(updatedCart);
    setCart(updatedCart);
  };

  const productsInCart = currentCart.map((product) => {
    return (
      <>
        <div className="cart__product">
          <img
            className="cart__product-img"
            src={product.image}
            alt="added to cart case"
          />
          <div className="cart__info">
            <div className="cart__header">
              <p className="cart__product-title">{product.title}</p>
              <RemoveCircleOutlineIcon className="cart__product-delete" />
            </div>

            <div className="cart__product-quantity">
              <button
                className="cart__product-decrease"
                onClick={() => handleDecreaseQuantity(product)}
              >
                -
              </button>
              <span className="cart__product-counter">{product.quantity}</span>
              <button className="cart__product-increase">+</button>
            </div>
            <p className="cart__product-price">{product.price}</p>
          </div>
        </div>
        <div className="line cart__line "></div>
      </>
    );
  });

  return (
    <div className={`cart ${isCartClicked ? "cart--active" : ""} `}>
      <h4 className="cart__title">Your Cart</h4>
      <div className="cart__products">{productsInCart}</div>
      <p className="cart__total">Total: $9.99</p>
      <Link to="#" className="cart__checkout">
        Check Out
      </Link>
    </div>
  );
};

export default Cart;
