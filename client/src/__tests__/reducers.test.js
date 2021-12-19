// import actions
import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  ADD_TO_CART,
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
  TOGGLE_CART
} from "../utils/actions";

import { reducer } from "../utils/reducers";

// create a sample of what our global state will lool like
const initialState = {
  products: [],
  categories: [{ name: "Food" }],
  currentCategory: "1",
  // define initial cart values
  cart: [
    {
      _id: '1',
      name: 'Soup',
      purchaseQuality: 1
    },
    {
      _id: '2',
      name: 'Bread',
      purchaseQuality: 2
    }
  ],
  cartOpen: false 
};

// test to see if we can add a product
test("UPDATE_PRODUCTS", () => {
  let newState = reducer(initialState, {
    type: UPDATE_PRODUCTS,
    products: [{}, {}],
  });

  expect(newState.products.length).toBe(2);
  expect(initialState.products.length).toBe(0);
});

// test to see if we can update the categories array to a new array of categories
test("UPDATE_CATEGORIES", () => {
  let newState = reducer(initialState, {
    type: UPDATE_CATEGORIES,
    categories: [{}, {}],
  });

  expect(newState.categories.length).toBe(2);
  expect(initialState.categories.length).toBe(1);
});

// test to see if state is able to be updated to a new string value
test("UPDATE_CURRENT_CATEGORY", () => {
  let newState = reducer(initialState, {
    type: UPDATE_CURRENT_CATEGORY,
    currentCategory: "2",
  });

  expect(newState.currentCategory).toBe("2");
  expect(initialState.currentCategory).toBe("1");
});

// test add to cart
test('ADD_TO_CART', () => {
  let newState = reducer(initialState, {
    type: ADD_TO_CART,
    product: { purchaseQuality: 1 }
  });

  expect(newState.cart.length).toBe(3);
  expect(initialState.cart.length).toBe(2)
});