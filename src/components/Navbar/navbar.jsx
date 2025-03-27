import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="left">
        <h3>Products</h3>
      </div>
      <div className="page">
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/product">
          Add Products
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
