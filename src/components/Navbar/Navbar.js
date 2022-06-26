import "./Navbar.scss";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../../components/Login/Login";
import Cart from "../../components/Cart/Cart";

const Navbar = () => {
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [isCartClicked, setIsCartClicked] = useState(false);

  //Close login and cart component when return home
  const handleLogoClicked = () => {
    setIsLoginClicked(false);
    setIsCartClicked(false);
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

  return (
    <nav className="navbar">
      <Login isLoginClicked={isLoginClicked} />
      <Cart isCartClicked={isCartClicked} />
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
          <ShoppingBagOutlinedIcon
            className="navbar__bag-icon"
            onClick={handleCartPage}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
