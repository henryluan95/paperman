import "./Vouchers.scss";
import ReactTooltip from "react-tooltip";

const Vouchers = () => {
  return (
    <div className="promotion">
      <ReactTooltip
        afterShow={() => {
          navigator.clipboard.writeText("HAPPYSHOPPING");
          setTimeout(ReactTooltip.hide, 2000);
        }}
        event="click"
        id="happyshopping"
        place="top"
        effect="solid"
      >
        Copied ✅
      </ReactTooltip>
      <ReactTooltip
        afterShow={() => {
          navigator.clipboard.writeText("HAPPYSHIPPING");
          setTimeout(ReactTooltip.hide, 2000);
        }}
        event="click"
        id="happyshipping"
        place="top"
        effect="solid"
      >
        Copied ✅
      </ReactTooltip>
      <div data-tip data-for="happyshopping" className="promotion__card">
        <span className="promotion__top">20% off</span>
        <h4 className="promotion__center">FREE VOUCHER</h4>
        <span className="promotion__bottom">code: HAPPYSHOPPING</span>
      </div>
      <div data-tip data-for="happyshipping" className="promotion__card">
        <span className="promotion__top">on orders over $20</span>
        <h4 className="promotion__center">FREE SHIPPING</h4>
        <span className="promotion__bottom">code: HAPPYSHIPPING</span>
      </div>
      <a
        href="mailto:paperman@gmail.com?subject=Return Enquiry&body=Hi Paperman,%0D%0A%0D%0AI would like to return my item due to%0D%0A%0D%0AMy order number is%0D%0A%0D%0AMy Full Name is%0D%0A%0D%0AMy Phone Number is%0D%0A%0D%0A"
        target="_blank"
        className="promotion__card promotion__card--email"
      >
        <span className="promotion__top">1 week return</span>
        <h4 className="promotion__center">FREE RETURNS</h4>
        <span className="promotion__bottom">Message Us</span>
      </a>
    </div>
  );
};

export default Vouchers;
