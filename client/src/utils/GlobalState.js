// createContext creates a container to store the global state data
// useContext is another React Hook that allows us to use state created from the createContext function
import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

// instantiate the global state object
const StoreContext = createContext();
// Context comes with two components (Provider/Consumer) Provider is a special type of React component that we wrap our app in so it can make the state data passed into it as a prop available to all other components.  Consumer is how we grab and use the data the Provider holds for us
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
  });
  // use this to confirm it works!
  console.log(state);
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };