import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Customer/components/pages/HomePage/HomePage";
import Cart from "../Customer/components/Cart/Cart";
import Navigation from "../Customer/components/Navigation/Navigation";
import Footer from "../Customer/components/Footer/Footer1";
import Product from "../Customer/components/Product/Product";
import ProductDetails from "../Customer/components/ProductDetails/ProductDetails";
import Checkout from "../Customer/components/Checkout/Checkout";
import Order from "../Customer/components/Order/Order";
import OrderDetails from "../Customer/components/Order/OrderDetails";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route
          path="/:lavelOne/:lavelTwo/:lavelThre"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
        {/*
      
        <Order/>
        <OrderDetails/> 
         */}
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;
