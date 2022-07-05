import "./CheckoutPage.scss";
import { useContext } from "react";
import { ProductsContext } from "../../App";
import { v4 as uuid } from "uuid";

const CheckoutPage = () => {
  const cart = useContext(ProductsContext);

  const findSubtotal = () => {
    let subtotal = 0;
    cart.forEach((product) => (subtotal += product.price * product.quantity));
    return subtotal;
  };

  const findTotal = (subtotal, discount = 0, shipping = 0) => {
    return subtotal - discount + shipping;
  };

  const checkingOutProducts = cart.map((product) => {
    return (
      <div className="checkout__item" key={uuid()}>
        <img
          className="checkout__img"
          src={product.image}
          alt="added to cart case"
        />
        <div className="checkout__info">
          <div className="checkout__header">
            <p className="checkout__item-title">{product.title}</p>
            <p className="checkout__item-price">
              {product.price * product.quantity}
            </p>
          </div>
          <p className="checkout__item-modal">Modal: {product.modals}</p>
          <p className="checkout__item-quantity">
            Quantity: {product.quantity}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="checkout-page">
      <div className="checkout">
        <h2 className="checkout__title">Check Out</h2>
        <div className="line  "></div>
        <div className="checkout__content">
          <div className="checkout__items">
            {checkingOutProducts}
            <div className="checkout__subtotal">
              <span>Subtotal:</span>
              <span>${findSubtotal()}</span>
            </div>
            <p className="checkout__discount">Discount: </p>
            <p className="checkout__shipping">Shipping: </p>
            <div className="line checkout__line "></div>
            <div className="checkout__total">
              <span>Total:</span>
              <span>${findTotal(findSubtotal())}</span>
            </div>
          </div>
          <div className="checkout__forms">
            <div className="checkout__shipping shipping">
              <h2 className="shipping__title">Shipping</h2>
              <label className="shipping__label">
                Full Name
                <input
                  type="text"
                  className="shipping__input"
                  name="shippingFullName"
                />
              </label>
              <label className="shipping__label">
                Address
                <input
                  type="text"
                  className="shipping__input"
                  name="shippingAddress"
                />
              </label>
              <label className="shipping__label">
                City
                <input
                  type="text"
                  className="shipping__input"
                  name="shippingCity"
                />
              </label>
              <label className="shipping__label">
                Country
                <input
                  type="text"
                  className="shipping__input"
                  name="shippingCountry"
                />
              </label>
              <label className="shipping__label">
                Postal Code
                <input
                  type="text"
                  className="shipping__input"
                  name="shippingPostalCode"
                />
              </label>
              <label className="shipping__label">
                Phone Number
                <input
                  type="text"
                  className="shipping__input"
                  name="shippingPhoneNumber"
                />
              </label>
            </div>
            <div className="checkout__shipping shipping">
              <h2 className="shipping__title">Billing</h2>
              <label className="shipping__label">
                Full Name
                <input
                  type="text"
                  className="shipping__input"
                  name="billingFullName"
                />
              </label>
              <label className="shipping__label">
                Address
                <input
                  type="text"
                  className="shipping__input"
                  name="billingAddress"
                />
              </label>
              <label className="shipping__label">
                City
                <input
                  type="text"
                  className="shipping__input"
                  name="billingCity"
                />
              </label>
              <label className="shipping__label">
                Country
                <input
                  type="text"
                  className="shipping__input"
                  name="billingCountry"
                />
              </label>
              <label className="shipping__label">
                Postal Code
                <input
                  type="text"
                  className="shipping__input"
                  name="billingPostalCode"
                />
              </label>
              <label className="shipping__label">
                Phone Number
                <input
                  type="text"
                  className="shipping__input"
                  name="billingPhoneNumber"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
