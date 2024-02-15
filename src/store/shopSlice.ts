import { OrderType, ProductType, ShopType } from "@/types/orderTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ShopType = {
  basket: [],
  summaryOrder: null,
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<ProductType>) => {
      const { id, name, price, image } = action.payload;
      const existingProduct = state.basket.find(product => product.id === id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.basket.push({ id, name, price, image, quantity: 1 });
      }
    },
    editBasket: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const existingProduct = state.basket.find(product => product.id === id);

      if (existingProduct) {
        existingProduct.quantity = quantity;
      }
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const existingProduct = state.basket.find(product => product.id === productId);

      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const existingProduct = state.basket.find(product => product.id === productId);

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      }
    },
    removeFromBasket: (state, action: PayloadAction<number>) => {
      const id  = action.payload;
      state.basket = state.basket.filter(product => product.id !== id);
    },
    addSummaryOrder: (state, action: PayloadAction<OrderType>) => {
      state.summaryOrder = action.payload;
    },
    clearBasket: (state) => {
      state.basket = [];
    },
  },
});

export const { addToBasket, editBasket, increaseQuantity, decreaseQuantity, removeFromBasket, addSummaryOrder, clearBasket } = shopSlice.actions;
