import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";

const Product = () => {
  return (
    <div>
      <Header />
      Product page
      <Link to="/home">Product</Link>
    </div>
  );
};

export default Product;
