import "./Cart.scss";
import productsData from "../../data/products.json";
import { Link } from "react-router-dom";

const Cart = () => {
  const image1 = productsData.items[0].fields.image.fields.file.url;

  return (
    <div className="cart">
      <h4 className="cart__title">Your Cart</h4>
      <div className="cart__products">
        <div className="cart__product">
          <img
            className="cart__product-img"
            src={image1}
            alt="added to cart case"
          />
          <div className="cart__info">
            <div className="cart__header">
              <p className="cart__product-title">Pink Peach</p>
              <button className="cart__product-delete">Delete</button>
            </div>

            <div className="cart__product-quantity">
              <button className="cart__product-decrease">-</button>
              <span className="cart__product-counter">1</span>
              <button className="cart__product-increase">+</button>
            </div>

            <p className="cart__total">
              Total: <span className="cart__total-counter">$9.99</span>
            </p>
          </div>
        </div>
      </div>
      <Link to="#" className="cart__checkout">
        Check Out
      </Link>
    </div>
  );
};

export default Cart;
