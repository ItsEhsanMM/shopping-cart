/* eslint-disable default-case */
import React, { useReducer, createContext } from "react";

const initialState = {
   selectedItem: [],
   itemCounter: 0,
   total: 0,
   checkout: false,
};

const totalItem = (items) => {
   const itemCounter = items.reduce((total, item) => total + item.quantity, 0);
   const total = items.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
   return { itemCounter, total };
};

const cartReducer = (state, action) => {
   switch (action.type) {
      case "ADD_ITEM":
         if (!state.selectedItem.find((item) => item.id === action.payload.id)) {
            state.selectedItem.push({
               ...action.payload,
               quantity: 1,
            });
         }
         return {
            ...state,
            selectedItem: [...state.selectedItem],
            ...totalItem(state.selectedItem),
            checkout: false,
         };

      case "REMOVE":
         const newSelectedItem = state.selectedItem.filter((item) => item.id !== action.payload.id);
         return {
            ...state,
            selectedItem: [...newSelectedItem],
            ...totalItem(newSelectedItem),
         };

      case "INCREASE":
         const indexI = state.selectedItem.findIndex((item) => item.id === action.payload.id);
         state.selectedItem[indexI].quantity++;
         return {
            ...state,
            ...totalItem(state.selectedItem),
         };

      case "DECREASE":
         const indexD = state.selectedItem.findIndex((item) => item.id === action.payload.id);
         state.selectedItem[indexD].quantity--;
         return { ...state, ...totalItem(state.selectedItem) };

      case "CHECKOUT":
         return {
            selectedItem: [],
            itemCounter: 0,
            total: 0,
            checkout: true,
         };

      case "CLEAR":
         return { selectedItem: [], itemCounter: 0, total: 0, checkout: false };

      default:
         return state;
   }
};

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(cartReducer, initialState);

   return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
