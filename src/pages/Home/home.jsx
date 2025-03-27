import React from "react";
import "./home.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:3000/detail");
    setProducts(response.data);
    // console.log(response);
  };
  useEffect(() => {
    getProducts(), [];
  });
  return (
    <>
      <div className="head">
        <h3>Your Products</h3>
        <hr />
      </div>
      <div className="product-container">
        {products.map((item) => {
          return (
            <div className="product-card">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
