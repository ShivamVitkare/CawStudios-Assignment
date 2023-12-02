import { createSlice } from "@reduxjs/toolkit";
import { productList } from "./productList";
const productSlice = createSlice({
  name: "products",
  initialState: productList,
  reducers: {
    approveProduct: (state, action) => {
      const id = action.payload;
      const selectedProduct = state.find((product) => product.id == id);
      if (selectedProduct) {
        selectedProduct.status = "Approved";
      }
    },
    missingProduct: (state, action) => {
      const { id, value } = action.payload;
      const selectedProduct = state.find((product) => product.id == id);
      if (selectedProduct && value == "Missing") {
        selectedProduct.status = "Missing";
      } else {
        selectedProduct.status = "Missing-Urgent";
      }
    },
    changeProduct: (state, action) => {
      const { id, productPrice } = action.payload;
      const selectedProduct = state.find((product) => product.id == id);
      const { price, quantity } = productPrice;
      if (selectedProduct) {
        if (
          selectedProduct.price != price &&
          selectedProduct.quantity != quantity
        ) {
          selectedProduct.status = "Price & Quantity Updated";
        } else if (selectedProduct.price != price) {
          selectedProduct.status = "Price Updated";
        } else if (selectedProduct.quantity != quantity) {
          selectedProduct.status = "Quantity Updated";
        }
        selectedProduct.price = price;
        selectedProduct.quantity = quantity;
      }
    },
  },
});

export const { approveProduct, missingProduct, changeProduct } =
  productSlice.actions;
export default productSlice.reducer;
