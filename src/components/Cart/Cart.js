import "./Cart.scss";
import productsData from "../../data/products.json";
import { Link } from "react-router-dom";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const Cart = ({ isCartClicked }) => {
  const productsInCart = productsData.items.map((product) => {
    return (
      <>
        <div className="cart__product">
          <img
            className="cart__product-img"
            src={product.fields.image.fields.file.url}
            alt="added to cart case"
          />
          <div className="cart__info">
            <div className="cart__header">
              <p className="cart__product-title">{product.fields.title}</p>
              <RemoveCircleOutlineIcon className="cart__product-delete" />
            </div>

            <div className="cart__product-quantity">
              <button className="cart__product-decrease">-</button>
              <span className="cart__product-counter">1</span>
              <button className="cart__product-increase">+</button>
            </div>
            <p className="cart__product-price">{product.fields.price}</p>
          </div>
        </div>
        <div className="line cart__line "></div>
      </>
    );
  });

  return (
    <div className={`cart ${isCartClicked ? "cart--active" : ""} `}>
      <h4 className="cart__title">Your Cart</h4>
      <div className="cart__products">
        {productsInCart}
        {/* <div className="cart__product">
          <img
            className="cart__product-img"
            src={image1}
            alt="added to cart case"
          />
          <div className="cart__info">
            <div className="cart__header">
              <p className="cart__product-title">Pink Peach</p>
              <RemoveCircleOutlineIcon className="cart__product-delete" />
            </div>

            <div className="cart__product-quantity">
              <button className="cart__product-decrease">-</button>
              <span className="cart__product-counter">1</span>
              <button className="cart__product-increase">+</button>
            </div>
            <p className="cart__product-price">$9.99</p>
          </div>
        </div> */}
      </div>
      <p className="cart__total">Total: $9.99</p>
      <Link to="#" className="cart__checkout">
        Check Out
      </Link>
    </div>
  );
};

export default Cart;
