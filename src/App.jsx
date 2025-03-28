import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Product from "./pages/AboutProduct/product";
import Navbar from "./components/Navbar/navbar";
import Footbar from "./components/Footbar/footbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/edit/:id" element={<Product />} />
      </Routes>
      <Footbar />
    </div>
  );
};

export default App;
