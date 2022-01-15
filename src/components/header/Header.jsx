import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  removeSelectedProduct,
  removeTotalProducts,
} from "../../redux/slices/productsSlice";
import { login } from "../../redux/slices/userSlice";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(login(false));
    dispatch(removeTotalProducts());
    dispatch(removeSelectedProduct());
    navigate("/");
  };
  return (
    <nav>
      <div className="nav_header">
        <div className="nav_links">
          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
        </div>

        <button className="nav_button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Header;
