import React from "react";
import { useSelector } from "react-redux";
import "./Loader.css";
const Loader = () => {
  const loader = useSelector((state) => state.loader);

  if (loader) {
    return (
      <div className="loader_wrapper">
        <div className="loader"></div>
      </div>
    );
  } else {
    return null;
  }
};

export default Loader;
