import React from "react";
import { Button  } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";

const CartItem = ({item}) => {
  const dispatch=useDispatch()
  const handleUpdateCartItem =(num)=>{
    const data ={data:{quantity:item.quantity+num},cartItemId:item?._id
    }
    dispatch(updateCartItem(data))
  }

  const handleemoveCartItem =()=>{
    dispatch(removeCartItem(item._id))
  }
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex item-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item.product.imageUrl}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item.product.title}</p>
          <p className="opacity-70 "> Size: {item.size}</p>
          <p className="opacity-70 "> Color: {item.product.color}</p>
          <p className="opacity-70 mt-2">Seller: {item.product.brand}</p>
          <div className="flex space-x-5 items-center  text-gray-900 pt-6">
            <p className="font-semibold">${item.price}</p>
            <p className="opacity-50 line-through">${item.totaldiscountedPrice}</p>
            <p className="text-green-600 font-semibold">{item.discountedPresent}% Off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton>
              <RemoveCircleOutlineIcon 
              onClick={()=>handleUpdateCartItem(-1)}
              disabled={item.quantity<=1}
              />
            </IconButton>
            <span className="py-1 px-7 border rounded-sm">{item.quantity}</span>
            <IconButton sx={{color:"RGB(145 85 253)"}}>
              <AddCircleOutlineIcon
              onClick={()=>handleUpdateCartItem(1)}
              // disabled={item.quantity>=1}
              />
            </IconButton>
            
          </div>
          <div>
            <Button 
            onClick={handleemoveCartItem}
            sx={{color:"RGB(145 85 253)"}}>Remove</Button>
          </div>
        </div>
    </div>
  );
};

export default CartItem;
