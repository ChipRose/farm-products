import React, { useContext } from "react";
import productsData from "/src/mocks/productsData";

const ProductsContext = React.createContext();

const useProducts = () => {
  return useContext(ProductsContext);
};

function ProductsHook({ children }) {
  return (
    <ProductsContext.Provider
      value={{
        products: productsData
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export { useProducts, ProductsHook };
