import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/userSlice";

import "./Header.css";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout(false));
    navigate("/");
  };
  return (
    <nav>
      <div className="nav_header">
        <h1>Header</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Header;
