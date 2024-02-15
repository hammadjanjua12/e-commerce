import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Button, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import {useLocation} from "react-router-dom";

const OrderSummary = () => {
  const dispatch = useDispatch()
  const {order} = useSelector(store=>store)
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const orderId = searchParams.get("order_id")

  useEffect(()=>{
    dispatch(getOrderById(orderId))
  },[orderId])
  return (
    <div>
      <div className="p-5 shadow-lg rounded-mb border">
        <AddressCard address={order.order?.shippAddress}/>
      </div>
      <div>
        <div className="lg:grid grid-cols-3  relative lg:mt-10">
          <div className="col-span-2">
            {order.order?.orderItems?.map((item) => (
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
              <div className="flex justify-between pt-3 ">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                {/* <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>${order.order?.totalPrice}</span>
                </div> */}
                {/* <div className="flex justify-between pt-3 ">
                  <span>Discount</span>
                  <span className="text-green-600">${order.order?.discounte}</span>
                </div> */}
                {/* <div className="flex justify-between pt-3 ">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">Free</span>
                </div> */}
                <div className="flex justify-between pt-3 font-bold">
                  <span>Total Amount</span>
                  <span className="text-green-600">${order.order?.totalPrice}</span>
                </div>
              </div>
              <Button
                variant="contained"
                className="w-full mt-5"
                sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd" }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
