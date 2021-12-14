// these 3 ACTIONS defines how state will be maintained and updated
// update products is used by ProductList
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
// update categories takes the list of categories retrieved from the server by Apollo and store it in a global state
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
// kind of like a connecting piece of data for the previous two actions... selecting from state created by Update_Cat and display for that category from the list created by Update_Products
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";

export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_MULTIPLE_TO_CART = 'ADD_MULTIPLE_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';
export const TOGGLE_CART = 'TOGGLE_CART';