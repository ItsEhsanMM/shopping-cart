import React from "react";

//component
import Store from "./components/Store";

//context
import ProductsContextProvider from "./context/ProductsContextProvider";

const App = () => {
  return (
    <ProductsContextProvider>
      <Store />
    </ProductsContextProvider>
  );
};

export default App;
