import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSelectedProducts } from "../../redux/actions/productsActions";
import { removeSelectedProduct } from "../../redux/slices/productsSlice";

const SelectedProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector((state) => state.products?.selectedProduct);

  useEffect(() => {
    dispatch(fetchSelectedProducts(id, true));
    return () => dispatch(removeSelectedProduct());
  }, [id, dispatch]);

  return (
    <div>
      <ul>
        <li>{data?.title}</li>
        <li>{data?.description}</li>
        <li>{data?.price}</li>
      </ul>
      <Link
        to="/products"
        className="nav_button"
        style={{ marginLeft: "0.5em" }}
      >
        Back
      </Link>
    </div>
  );
};

export default SelectedProduct;
