import React, { useContext, useEffect, useReducer } from "react";
import { CartReducer } from "./CartReducer";

const cartContext = React.createContext();

function GetCartData() {
  let data = localStorage.getItem("CART");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}

function ProductContext({ children }) {
  useEffect(() => {
    const GetData = async () => {
      await fetch("https://api.escuelajs.co/api/v1/products")
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          dispatch({ type: "FETCH_DATA", payload: result });
        });
    };
    GetData();
  }, []);

  const [state, dispatch] = useReducer(CartReducer, {
    product: [],
    cart: GetCartData(),
    sort: "",
    sortByPrice: "",
    serachProd: "",
  });

  useEffect(() => {
    localStorage.setItem("CART", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
}

function GlobalContext() {
  return useContext(cartContext);
}
export default ProductContext;
export { cartContext, GlobalContext };
