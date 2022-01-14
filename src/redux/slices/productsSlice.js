import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    totalproducts: [],
    selectedProduct: {},
  },

  reducers: {
    getProducts: (state, { payload }) => {
      state.totalproducts = payload;
    },
    getSelectedProduct: (state, { payload }) => {
      state.selectedProduct = payload;
    },
    removeSelectedProduct: (state) => {
      state.selectedProduct = {};
    },
    removeTotalProducts: (state) => {
      state.totalproducts = [];
    },
  },
});

export const {
  getProducts,
  getSelectedProduct,
  removeSelectedProduct,
  removeTotalProducts,
} = productsSlice.actions;
export default productsSlice.reducer;
