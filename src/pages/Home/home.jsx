import React, { useState, useEffect } from "react";
import "./home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/detail");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const onDeleteProduct = async (id) => {
    try {
      const response = await axios.delete("http://localhost:3000/detail/" + id);
      getProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const onEditProduct = (id) => {
    navigate(`/product/edit/${id}`);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="head">
        <h3>Your Products</h3>
        <hr />
      </div>
      <div className="product-container">
        {products.length === 0 ? (
          <p className="no-products">No products available</p>
        ) : (
          products.map((item) => (
            <div key={item.id} className="product-card">
              <div className="icon-container">
                <i
                  onClick={() => onDeleteProduct(item.id)}
                  className="fa-solid fa-trash"
                ></i>
                <i
                  onClick={() => onEditProduct(item.id)}
                  className="fa-solid fa-pen-to-square"
                ></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <p>{item.description}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
