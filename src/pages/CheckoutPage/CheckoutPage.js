import "./CheckoutPage.scss";
import { useContext, useEffect, useState, useRef } from "react";
import { ProductsContext } from "../../App";
import { v4 as uuid } from "uuid";
import momo from "../../assets/images/momo.png";
import qr from "../../assets/images/qr.png";
import emailjs from "@emailjs/browser";

const CheckoutPage = () => {
  const cart = useContext(ProductsContext);
  const [subtotal, setSubtotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  const formRef = useRef(null);

  //Create a function to track total
  const findTotal = (subtotal, discount = 0, shipping = 0) => {
    const total = subtotal - discount + shipping;
    let formattedTotal = (Math.round(total * 100) / 100).toFixed(2);
    return formattedTotal;
  };

  //Create a message
  let message = "";

  cart.forEach(
    (product) =>
      (message += `[${product.title}: ${product.modals} x ${product.quantity}] `)
  );

  //Create a function to handle submit
  //Uncomment this to receive actual orders
  const handleSubmit = (e) => {
    e.preventDefault();
    // const form = formRef.current;

    // //Send an email
    // emailjs
    //   .sendForm(
    //     "service_hn7u257",
    //     "template_v0e4bah",
    //     form,
    //     "UTPj7qiThvY6A00o7"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  //Create a function to handle radio select
  const handleRadioSelect = (e) => {
    setPaymentMethod(e.target.value);
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
    //Create a function to track subtotal
    const findSubtotal = () => {
      let subtotal = 0;
      cart.forEach(
        (product) => (subtotal += Number(product.price) * product.quantity)
      );
      let formattedSubtotal = (Math.round(subtotal * 100) / 100).toFixed(2);
      return setSubtotal(Number(formattedSubtotal));
    };

    findSubtotal();
  }, [checkingOutProducts, cart]);

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
          <form
            className="checkout__forms"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <div className="checkout__shipping shipping">
              <h2 className="shipping__title">Shipping</h2>
              <label className="shipping__label">
                Full Name
                <input
                  type="text"
                  className="shipping__input"
                  name="shippingFullName"
                  required
                />
              </label>
              <label className="shipping__label">
                Full Address
                <input
                  type="text"
                  className="shipping__input"
                  name="shippingFullAddress"
                  required
                />
              </label>
              <label className="shipping__label">
                Phone Number
                <input
                  type="text"
                  className="shipping__input"
                  name="shippingPhoneNumber"
                  required
                />
              </label>
              <label className="shipping__label--hide">
                Message
                <input
                  type="text"
                  className="shipping__input--hide"
                  name="shippingMessage"
                  required
                  defaultValue={message}
                />
              </label>
            </div>
            <div className="checkout__payment payment">
              <h2 className="payment__title">Payment Methods</h2>
              <label className="payment__label payment__label--row">
                <input
                  type="radio"
                  id="cod"
                  name="payment_type"
                  value="cod"
                  className="payment__radio-input"
                  checked={paymentMethod === "cod"}
                  onChange={handleRadioSelect}
                  required
                />
                Collect On Delivery (COD)
              </label>
              {paymentMethod === "cod" && (
                <div className="payment__instruction">
                  <p className="payment__instruction-text">
                    Please check your order upon delivery and complete your
                    payment.
                  </p>
                </div>
              )}
              <label className="payment__label payment__label--row">
                <input
                  type="radio"
                  id="transfer"
                  name="payment_type"
                  value="transfer"
                  checked={paymentMethod === "transfer"}
                  className="payment__radio-input"
                  onChange={handleRadioSelect}
                  required
                />
                E-transfer
              </label>
              {paymentMethod === "transfer" && (
                <div className="payment__instruction">
                  <p className="payment__instruction-text">
                    Please make an e-transfer of {` $${findTotal(subtotal)} `}
                    with the following message: "web - your phone number", then
                    PLACE ORDER.
                  </p>
                  <p className="payment__instruction-text">
                    Nguyen Thuy Mai Anh
                  </p>
                  <ul>
                    <li>
                      Bank: <b>VIETCOMBANK</b>
                    </li>
                    <li>
                      Account Number: <b>0071001073262</b>
                    </li>
                  </ul>
                </div>
              )}
              <label className="payment__label payment__label--row">
                <input
                  type="radio"
                  id="momo"
                  name="payment_type"
                  value="momo"
                  checked={paymentMethod === "momo"}
                  className="payment__radio-input"
                  onChange={handleRadioSelect}
                  required
                />
                Momo
                <img src={momo} alt="momo icon" className="payment__icon" />
              </label>
              {paymentMethod === "momo" && (
                <div className="payment__instruction">
                  <p className="payment__instruction-text">
                    Please scan the QR code to process your payment via Momo
                    Wallet, then PLACE ORDER. Your total is
                    {` $${findTotal(subtotal)}.`}
                  </p>
                  <img src={qr} alt="momo qr code" className="payment__qr" />
                </div>
              )}
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
