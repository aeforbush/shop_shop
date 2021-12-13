import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "./actions";

import { useReducer } from 'react';

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
