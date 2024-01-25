// import logo from './logo.svg';
import "./App.css";
import Navigation from "./Customer/components/Navigation/Navigation";
import HomePage from "./Customer/components/pages/HomePage/HomePage";
import Footer from "./Customer/components/Footer/Footer1";
import Product from "./Customer/components/Product/Product";
import ProductDetails from "./Customer/components/ProductDetails/ProductDetails";
import Cart from "./Customer/components/Cart/Cart";
import Checkout from "./Customer/components/Checkout/Checkout";
import Order from "./Customer/components/Order/Order";
import OrderDetails from "./Customer/components/Order/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./Routers/CustomerRoutes";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
      </Routes>
    </div>
  );
}

export default App;
