import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmOrder, deleteOrder, deliverOrder, getOrders, shipOrder } from "../../State/Admin/Order/Action";
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardHeader,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const OrdersTable = () => {
  const [anchorEl, setAnchorEl] = React.useState([]);
  // const open = Boolean(anchorEl);


  // const handleClick = (event,index) => {
  //   const newAnchorElArray = [...anchorEl];
  //   newAnchorElArray[index]= event.currentTarget
  //   setAnchorEl(newAnchorElArray);
  // };
  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index]= null
    setAnchorEl(newAnchorElArray);
  };

  const dispatch = useDispatch();

  const { adminOrder } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getOrders());
  }, [adminOrder.confirmed,adminOrder.shipped,adminOrder.delivered,adminOrder.deleteOrder]);
  // console.log("admin Orders", adminOrder);

  // const handleShipedOrder=(orderId)=>{
  //   dispatch(shipOrder(orderId))
  //   console.log("handle shipped Order",orderId)
  //   handleClose()
  // }

  // const handleConfirmedOrder=(orderId)=>{
  //   dispatch(confirmOrder(orderId))
  //   console.log("handle Confirmed Order",orderId)
  //   handleClose()
  // }
  // const handleDeliveredOrder=(orderId)=>{
  //   dispatch(deliverOrder(orderId))
  //   console.log("handle Delivered Order",orderId)
  //   handleClose()
  // }

  // const handleDeleteOrder=(orderId)=>{
  //   dispatch(deleteOrder(orderId))
  // }
  
  return (
    <div className="p-10">
      <Card className="mt-2  ">
        <CardHeader title="Recant Products"></CardHeader>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Image</TableCell>
                <TableCell> Title</TableCell>
                <TableCell align="left"> Id</TableCell>
                <TableCell align="left"> Price</TableCell>
                <TableCell align="left"> Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.orders?.map((item,index) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="">
                    <AvatarGroup max={4} sx={{ justifyContent: "start" }}>
                      {item.orderItems?.map((orderItem) => (
                        <Avatar src={orderItem.product?.imageUrl}></Avatar>
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell component="left" scope="row">
                    {item.orderItems?.map((orderItem) => (
                      <p>{orderItem.product?.title}</p>
                    ))}
                    {/* {item.title} */}
                  </TableCell>
                  <TableCell align="left">{item._id}</TableCell>
                  <TableCell align="left">{item.totalPrice}</TableCell>
                  <TableCell align="left">
                    {" "}
                    <span
                      className={`text-white px-5 py-2 rounded-full
                       ${
                        item.orderStatus === "CONFIMED"
                          ? "bg-[green]"
                          : item.orderStatus === "SHIPPED"
                          ? "bg-[blue]"
                          : item.orderStatus === "PLACED"
                          ? "bg-[#02B290]"
                          : item.orderStatus === "PENDING"
                          ? "bg-[gray]"
                          : "bg-[#67855c]"
                      }`}
                    >
                      {item.orderStatus}
                    </span>{" "}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrdersTable;
