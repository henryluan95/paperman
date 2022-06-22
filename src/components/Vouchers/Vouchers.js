import "./Vouchers.scss";

import React from "react";

const Vouchers = () => {
  return (
    <div className="promotion">
      <div className="promotion__card">
        <span className="promotion__top">20% off</span>
        <h4 className="promotion__center">FREE VOUCHER</h4>
        <span className="promotion__bottom">code: HAPPYSHOPPING</span>
      </div>
      <div className="promotion__card">
        <span className="promotion__top">on orders over $20</span>
        <h4 className="promotion__center">FREE SHIPPING</h4>
        <span className="promotion__bottom">code: HAPPYSHIPPING</span>
      </div>
      <div className="promotion__card">
        <span className="promotion__top">1 week return</span>
        <h4 className="promotion__center">FREE RETURNS</h4>
        <span className="promotion__bottom">Message Us</span>
      </div>
    </div>
  );
};

export default Vouchers;
