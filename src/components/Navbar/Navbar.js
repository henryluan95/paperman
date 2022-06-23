import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import "./Navbar.scss";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Paperman
      </Link>
      <div className="navbar-icons">
        <div>
          <PersonOutlineIcon className="navbar-icon" />
        </div>
        <ShoppingBagOutlinedIcon className="navbar-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
