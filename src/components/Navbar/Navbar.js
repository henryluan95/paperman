import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import "./Navbar.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../../components/Login/Login";

const Navbar = () => {
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const handleLoginPage = () => {
    setIsLoginClicked(!isLoginClicked);
  };

  const handleLogoClicked = () => {
    setIsLoginClicked(false);
  };

  return (
    <nav className="navbar">
      <Login isLoginClicked={isLoginClicked} />
      <div className="navbar__container">
        <Link to="/" className="navbar-logo" onClick={handleLogoClicked}>
          Paperman
        </Link>
        <div className="navbar-icons">
          <div>
            <PersonOutlineIcon
              className="navbar-icon"
              onClick={handleLoginPage}
            />
          </div>
          <ShoppingBagOutlinedIcon className="navbar-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
