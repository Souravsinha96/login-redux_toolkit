import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../redux/actions/productsActions";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.products.totalproducts);
  useEffect(() => {
    if (data.length === 0) dispatch(fetchProducts(true));
  }, [dispatch, data]);
  const handleProduct = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <div>
      {data.map((item) => {
        return (
          <ul key={item.id}>
            <li
              onClick={() => handleProduct(item.id)}
              style={{ cursor: "pointer" }}
            >
              {item.title}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Product;
