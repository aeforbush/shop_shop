// these 3 ACTIONS defines how state will be maintained and updated
// update products is used by ProductList
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
// update categories takes the list of categories retrieved from the server by Apollo and store it in a global state
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
// kind of like a connecting piece of data for the previous two actions... selecting from state created by Update_Cat and display for that category from the list created by Update_Products
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";

