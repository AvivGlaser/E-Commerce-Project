import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import addOrRemoveAmount from "../../Helpers/isProdInCart";
import saveCartToLS from "../../Helpers/saveCartToLS";
import { ICartProd, IProducts, ProductsState } from "../../Utils/interfaces";

const initialState: ProductsState = {
  products: [],
  cart: [],
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state: ProductsState, action: PayloadAction<Array<any>>) => {
      state.products = action.payload;
    },
    setError: (state: ProductsState, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setCart: (state: ProductsState, action: PayloadAction<Array<any>>) => {
      state.cart = action.payload;
      saveCartToLS(state.cart)
    },
    addToCart: (state: ProductsState, action: PayloadAction<any>) => {
      // checks if product in cart to avoid duplication
      const isProdInCart: any = state.cart.find((prod: ICartProd) => {
        if (prod.id === action.payload.id) return true;
      }); // prod already in cart? increase his amount
      if (isProdInCart) {
        addOrRemoveAmount({ state: state.cart,payloadId: action.payload.id,operator: false}) && saveCartToLS(state.cart);
      } // else- add to cart
      else {
        state.cart.push(action.payload) && saveCartToLS(state.cart);
      }
    },
    addAmount: (state: ProductsState, action: PayloadAction<number>) => {
      addOrRemoveAmount({ state: state.cart, payloadId: action.payload, operator: false})
        saveCartToLS(state.cart);
    },
    removeAmount: (state: ProductsState, action: PayloadAction<number>) => {
      addOrRemoveAmount({state: state.cart,payloadId: action.payload,operator: true})
        saveCartToLS(state.cart);
    },
    removeFromCart: (state: ProductsState, action: PayloadAction<number>) => {
      const filterd = state.cart.filter(
        (product) => product.id !== action.payload
      );
      state.cart = filterd;
      saveCartToLS(state.cart);
    },
    addProduct: (state: ProductsState, action: PayloadAction<IProducts>) => {
      state.products.push(action.payload);
    },
  },
});

export const {
  setProducts,
  setError,
  setCart,
  addToCart,
  removeFromCart,
  addAmount,
  removeAmount,
  addProduct,
} = productsSlice.actions;
export default productsSlice.reducer;
