import React from "react";
import "./home.css";
import { useState } from "react";

const Home = () => {
  const [products, setProducts] = useState();
  return (
    <>
      <div className="head">
        <h3>Your Products</h3>
        <hr />
      </div>
      <div className="product-contanier">{Map.product}</div>
    </>
  );
};

export default Home;
