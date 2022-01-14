import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
        <h1>Header</h1>
        <button className="nav_button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Header;
