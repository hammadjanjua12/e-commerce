import React, { useEffect,useState } from "react";
import CartItem from "./CartItem";
import { Button, Divider,CircularProgress  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";

const Cart = () => {
  const navigate = useNavigate();
  const {cart} = useSelector(store=>store)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);
  const handleCheckout = async () => {
    try {
      setLoading(true);
  
      // Perform checkout logic or API calls here
      // Simulate an asynchronous action with setTimeout
      await new Promise(resolve => setTimeout(resolve, 1000));
  
      // Once the checkout is successful, navigate to the next step
      navigate("/checkout?step=2");
    } catch (error) {
      console.error("Checkout failed:", error);
      // Handle error if the checkout fails
    } finally {
      setLoading(false);
    }
  };
  useEffect(()=>{
  dispatch(getCart())
  },[cart.updateCartItem,cart.deleteCartItem])
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative lg:mt-10">
        <div className="col-span-2">
          {cart.cart?.cartItems.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4 pl-0">
              Price Details
            </p>
            <Divider />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                {/* <span>Price</span>
                <span>${cart.cart?.totalPrice}</span> */}
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Total Items</span>
                <span className="text-green-600">{cart.cart?.totalItem}</span>
              </div>
              <div className="flex justify-between pt-3 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">${cart.cart?.totalPrice}</span>
              </div>
            </div>
            <Button
              onClick={handleCheckout}
              variant="contained"
              className="w-full mt-5"
              sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd" }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : "Checkout"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
