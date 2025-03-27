import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="left">
        <h3>Products</h3>
      </div>
      <div className="page">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product">Add Products</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
