import "./CheckoutPage.scss";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../App";
import { v4 as uuid } from "uuid";
import visa from "../../assets/images/visa.svg";
import mastercard from "../../assets/images/mastercard.svg";
import express from "../../assets/images/express.svg";
import discover from "../../assets/images/discover.svg";
import jcb from "../../assets/images/jcb.png";

const CheckoutPage = () => {
  const cart = useContext(ProductsContext);
  const [subtotal, setSubtotal] = useState(0);

  //Create a function to track subtotal
  const findSubtotal = () => {
    let subtotal = 0;
    cart.forEach(
      (product) => (subtotal += Number(product.price) * product.quantity)
    );
    let formattedSubtotal = (Math.round(subtotal * 100) / 100).toFixed(2);
    return setSubtotal(Number(formattedSubtotal));
  };

  //Create a function to track total
  const findTotal = (subtotal, discount = 0, shipping = 0) => {
    const total = subtotal - discount + shipping;
    let formattedTotal = (Math.round(total * 100) / 100).toFixed(2);
    return formattedTotal;
  };

  //Create a function to handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
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
              ${(Number(product.price) * product.quantity).toFixed(2)}
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

  useEffect(() => {
    findSubtotal();
  }, [checkingOutProducts]);

  return (
    <div className="checkout-page">
      <div className="checkout">
        <h2 className="checkout__title">Check Out</h2>
        <div className="line  "></div>
        <div className="checkout__content">
          <div className="checkout__items-container">
            <div className="checkout__items">
              {checkingOutProducts}
              <div className="checkout__subtotal">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <p className="checkout__discount">Discount: </p>
              <p className="checkout__shipping">Shipping: </p>
              <div className="line checkout__line "></div>
              <div className="checkout__total">
                <span>Total:</span>
                <span>${findTotal(subtotal)}</span>
              </div>
            </div>
          </div>
          <form className="checkout__forms" onSubmit={handleSubmit}>
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
            <div className="checkout__payment payment">
              <h2 className="payment__title">Payment</h2>
              <div className="payment__icons">
                <img src={visa} alt="visa" className="payment__icon" />
                <img
                  src={mastercard}
                  alt="mastercard"
                  className="payment__icon"
                />
                <img src={express} alt="express" className="payment__icon" />
                <img src={discover} alt="discover" className="payment__icon" />
                <img src={jcb} alt="jcb" className="payment__icon" />
              </div>
              <label className="payment__label">
                Name on Card
                <input
                  type="text"
                  className="payment__input"
                  name="paymentNameOnCard"
                  placeholder="Michael Kalinichenko"
                />
              </label>
              <label className="payment__label">
                Credit card number
                <input
                  type="text"
                  className="payment__input"
                  name="paymentCreditCardNumber"
                  placeholder="1111-2222-3333-4444"
                />
              </label>
              <label className="payment__label">
                Exp Month
                <input
                  type="text"
                  className="payment__input"
                  name="paymentExpMonth"
                  placeholder="September"
                />
              </label>
              <div className="payment__year-cvv">
                <label className="payment__label">
                  Exp Year
                  <input
                    type="text"
                    className="payment__input"
                    name="paymentExpYear"
                    placeholder="2018"
                  />
                </label>
                <label className="payment__label">
                  CVV
                  <input
                    type="text"
                    className="payment__input"
                    name="paymentCVV"
                    placeholder="352"
                  />
                </label>
              </div>
            </div>
            <button className="button checkout__place-order">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
