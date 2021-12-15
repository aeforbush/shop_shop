import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  ADD_TO_CART,
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
  TOGGLE_CART,
} from "./actions";

import { useReducer } from "react";

export const reducer = (state, action) => {
  switch (action.type) {
    // if action type value is the value of `UPDATE_PRODUCTS`, return
    case UPDATE_PRODUCTS:
      return {
        ...state,
        // set products key to new value []
        products: [...action.products],
      };

    // if action type value is the value of `UPDATE_CATEGORIES`, return
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };
    case ADD_TO_CART:
      return {
        // include ...state to perserve everything else on state
        ...state,
        cartOpen: true,
        // add action.property at the end of the array
        cart: [...state.cart, action.product],
      };
    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };
    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((product) => {
          const newQuantity = {...product}
          if (action._id === product._id) {
            newQuantity.purchaseQuantity = action.purchaseQuantity;
          }
          return newQuantity;
        }),
      };
    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };
    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    // if it's none of these actions, don't update state at all
    default:
      return state;
  }
};

// this func helps initialize our global state object and automatically runs it through the custom reducer
// useReducer Hook is meant specifically for managing a greater level of state
export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
