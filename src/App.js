import React from "react";
import Home from "./Components/Heading/Home";
import ProductContext from "./Components/Context/ProductContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartBilling from "./Components/Pages/CartBilling";
import DispatchProduct from "./Components/Pages/DispatchProduct";
import DisplayProducts from "./Components/Pages/DisplayProducts";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
// import Cart from "./Components/Pages/Cart";

function App() {
  return (
    // <ProductContext>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Home />}>
    //         <Route path="/" element={<DisplayProducts />} />
    //         <Route path="/cart" element={<CartBilling />} />
    //       </Route>
    //       <Route path="/dispatchproduct" element={<DispatchProduct />} />
    //       <Route path="login" element={<LoginPage />} />
    //     </Routes>
    //   </BrowserRouter>
    // </ProductContext>

    <ProductContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/home" element={<Home />}>
            <Route path="/home" element={<DisplayProducts />} />
          </Route>
          <Route path="/cart" element={<CartBilling />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/dispatchproduct" element={<DispatchProduct />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ProductContext>
  );
}

export default App;
