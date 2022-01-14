import { loading } from "../slices/loaderSlice";
import { getProducts, getSelectedProduct } from "../slices/productsSlice";

export const fetchProducts = (showLoader) => async (dispatch) => {
  if (showLoader) {
    dispatch(loading(true));
  }
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    if (response) {
      if (showLoader) {
        dispatch(loading(false));
      }
      dispatch(getProducts(data));
    }
  } catch (error) {
    if (showLoader) {
      dispatch(loading(false));
    }
    console.log("Error");
  }
};
export const fetchSelectedProducts = (id, showLoader) => async (dispatch) => {
  if (showLoader) {
    dispatch(loading(true));
  }
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);

    const data = await response.json();
    if (response) {
      if (showLoader) {
        dispatch(loading(false));
      }
      dispatch(getSelectedProduct(data));
    }
  } catch (error) {
    if (showLoader) {
      dispatch(loading(false));
    }
    console.log("Error");
  }
};
