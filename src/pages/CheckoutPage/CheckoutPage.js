import "./CheckoutPage.scss";
import { useContext, useState } from "react";
import { ProductsContext } from "../../App";
import { v4 as uuid } from "uuid";
import visa from "../../assets/images/visa.svg";
import mastercard from "../../assets/images/mastercard.svg";
import express from "../../assets/images/express.svg";
import discover from "../../assets/images/discover.svg";
import jcb from "../../assets/images/jcb.png";

const CheckoutPage = () => {
  const cart = useContext(ProductsContext);
  const [isSameAsShipping, setIsSameAsShipping] = useState(true);

  //Create a function to track subtotal
  const findSubtotal = () => {
    let subtotal = 0;
    cart.forEach((product) => (subtotal += product.price * product.quantity));
    return subtotal;
  };

  //Create a function to track total
  const findTotal = (subtotal, discount = 0, shipping = 0) => {
    return subtotal - discount + shipping;
  };

  //Create a function to keep track of billing refill checkbox
  const handleCheck = (e) => {
    setIsSameAsShipping(!isSameAsShipping);
    console.log(e.target.checked);
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
            <label className="checkout__billing-refill">
              <input
                type="checkbox"
                className="checkout__checkbox"
                value={isSameAsShipping}
                onChange={handleCheck}
                defaultChecked={isSameAsShipping}
              />
              Same As Billing Address
            </label>
            {!isSameAsShipping && (
              <div className="checkout__shipping billing">
                <h2 className="billing__title">Billing</h2>
                <label className="billing__label">
                  Full Name
                  <input
                    type="text"
                    className="billing__input"
                    name="billingFullName"
                  />
                </label>
                <label className="billing__label">
                  Address
                  <input
                    type="text"
                    className="billing__input"
                    name="billingAddress"
                  />
                </label>
                <label className="billing__label">
                  City
                  <input
                    type="text"
                    className="billing__input"
                    name="billingCity"
                  />
                </label>
                <label className="billing__label">
                  Country
                  <input
                    type="text"
                    className="billing__input"
                    name="billingCountry"
                  />
                </label>
                <label className="billing__label">
                  Postal Code
                  <input
                    type="text"
                    className="billing__input"
                    name="billingPostalCode"
                  />
                </label>
                <label className="billing__label">
                  Phone Number
                  <input
                    type="text"
                    className="billing__input"
                    name="billingPhoneNumber"
                  />
                </label>
              </div>
            )}
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
