import "./Navbar.scss";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Login from "../../components/Login/Login";
import Cart from "../../components/Cart/Cart";
import { ProductsContext } from "../../App";
import Accessibility from "../Accessibility/Accessibility";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

const Navbar = ({
  reduceProduct,
  addProduct,
  deleteProduct,
  isADHDModeOn,
  setIsADHDModeOn,
}) => {
  const cart = useContext(ProductsContext);

  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [isAccessibilityClicked, setIsAccessibilityClicked] = useState(false);

  //Close login and cart component when return home
  const handleLogoClicked = () => {
    setIsLoginClicked(false);
    setIsCartClicked(false);
  };

  //Open accessibility tab
  const handleAccessibility = () => {
    setIsAccessibilityClicked(!isAccessibilityClicked);
  };

  //Open and close log in component while always having cart component closed
  const handleLoginPage = () => {
    setIsLoginClicked(!isLoginClicked);
    setIsCartClicked(false);
  };

  //Open and close cart component while always having login component closed
  const handleCartPage = () => {
    setIsCartClicked(!isCartClicked);
    setIsLoginClicked(false);
  };

  //Create a function to count the number of item in the bag
  const countItem = (products) => {
    let quantity = 0;
    products.forEach((product) => (quantity += product.quantity));
    return quantity;
  };

  return (
    <nav className="navbar">
      <Accessibility
        isAccessibilityClicked={isAccessibilityClicked}
        setIsAccessibilityClicked={setIsAccessibilityClicked}
        setIsADHDModeOn={setIsADHDModeOn}
        isADHDModeOn={isADHDModeOn}
      />
      <Login
        isLoginClicked={isLoginClicked}
        setIsLoginClicked={setIsLoginClicked}
      />
      <Cart
        isCartClicked={isCartClicked}
        reduceProduct={reduceProduct}
        addProduct={addProduct}
        deleteProduct={deleteProduct}
        setIsCartClicked={setIsCartClicked}
      />

      <AccessibilityIcon
        className="navbar__accessibility-icon"
        onClick={handleAccessibility}
      />
      <div className="navbar__container">
        <Link to="/" className="navbar-logo" onClick={handleLogoClicked}>
          Paperman
        </Link>
        <div className="navbar-icons">
          <PersonOutlineIcon
            className="navbar__user-icon"
            onClick={handleLoginPage}
          />
          <Link to="/liked" className="navbar__liked-icon">
            <FavoriteBorderIcon />
          </Link>
          <div className="navbar__bag">
            <span className="navbar__bag-counter">{countItem(cart)}</span>
            <ShoppingBagOutlinedIcon
              className="navbar__bag-icon"
              onClick={handleCartPage}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
