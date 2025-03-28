import React from "react";
import "./product.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
  });
  const { id } = useParams();

  const navigate = useNavigate();

  const onChange = (e, label) => {
    setProduct({ ...product, [label]: e.target.value });
  };
  //   console.log(product);

  const onAddProduct = async () => {
    const response = await axios.post("http://localhost:3000/detail", product);
    console.log(response);
    navigate("/");
  };
  const onEditProduct = async () => {
    const response = await axios.patch(
      `http://localhost:3000/detail/` + id,
      product
    );
    console.log(response);
    navigate(`/`);
  };

  const getById = async () => {
    const response = await axios.get(`http://localhost:3000/detail/` + id);
    setProduct(response.data);
  };
  useEffect(() => {
    if (id) {
      getById();
    }
  }, []);

  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const buttonRef = useRef();

  const titleKey = (e) => {
    if (e.key === "Enter") {
      priceRef.current.focus();
    }
  };
  const priceKey = (e) => {
    if (e.key === "Enter") {
      descriptionRef.current.focus();
    }
  };
  const desKey = (e) => {
    if (e.key === "Enter") {
      buttonRef.current.focus();
    }
  };
  return (
    <div>
      <div className="add-product">
        <h3>{id ? "Edit Product" : "Add Products"}</h3>
        <hr />
      </div>
      <div className="add-product-form">
        <h3>Add Your Product</h3>
        <div className="input-div">
          <label>Title</label>
          <input
            ref={titleRef}
            onKeyDown={titleKey}
            value={product.title}
            onChange={(e) => {
              onChange(e, "title");
            }}
            type="text"
          />
        </div>
        <div className="input-div">
          <label>Price</label>
          <input
            ref={priceRef}
            onKeyDown={priceKey}
            value={product.price}
            onChange={(e) => {
              onChange(e, "price");
            }}
            type="text"
          />
        </div>
        <div className="input-div">
          <label>Description</label>
          <textarea
            ref={descriptionRef}
            onKeyDown={desKey}
            value={product.description}
            onChange={(e) => {
              onChange(e, "description");
            }}
            name=""
            id=""
          ></textarea>
        </div>
        <button ref={buttonRef} onClick={id ? onEditProduct : onAddProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default Product;
