import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

// Home component manages state currentCategory which is passed to ProductList as a prop, instructing which cat products should be retrieved by Apollo.
const Home = () => {
  const [currentCategory, setCategory] = useState("");

  // state updated by CategoryMenu and used by ProductList component
  return (
    <div className="container">
      <CategoryMenu setCategory={setCategory} />
      <ProductList currentCategory={currentCategory} />
    </div>
  );
};

export default Home;
