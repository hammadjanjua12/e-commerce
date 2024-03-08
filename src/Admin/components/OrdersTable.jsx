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
  const open = Boolean(anchorEl);


  const handleClick = (event,index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index]= event.currentTarget
    setAnchorEl(newAnchorElArray);
  };
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

  const handleShipedOrder=(orderId)=>{
    dispatch(shipOrder(orderId))
    console.log("handle shipped Order",orderId)
    handleClose()
  }

  const handleConfirmedOrder=(orderId)=>{
    dispatch(confirmOrder(orderId))
    console.log("handle Confirmed Order",orderId)
    handleClose()
  }
  const handleDeliveredOrder=(orderId)=>{
    dispatch(deliverOrder(orderId))
    console.log("handle Delivered Order",orderId)
    handleClose()
  }

  const handleDeleteOrder=(orderId)=>{
    dispatch(deleteOrder(orderId))
  }
  
  return (
    <div className="p-10">
      <Card className="mt-2  ">
        <CardHeader title="All Products"></CardHeader>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Image</TableCell>
                <TableCell> Title</TableCell>
                <TableCell align="left"> Id</TableCell>
                <TableCell align="left"> Price</TableCell>
                <TableCell align="left"> Status</TableCell>
                <TableCell align="left"> Update</TableCell>
                <TableCell align="left"> Delete</TableCell>
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
                    </span>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      id="basic-button"
                      // aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      // aria-expanded={open ? "true" : undefined}
                      onClick={(event)=>handleClick(event,index)}
                      aria-controls={`basic-menu=${item._id}`}
                      aria-expanded={Boolean(anchorEl[index])}
                    >
                      Status
                    </Button>
                    <Menu
                      id={`basic-menu-${item._id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={()=>handleClose(index)}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={()=>handleConfirmedOrder(item._id)}>Confirmed Order</MenuItem>
                      <MenuItem onClick={()=>handleShipedOrder(item._id)}>Shipped Order</MenuItem>
                      <MenuItem onClick={()=>handleDeliveredOrder(item._id)}>Delivered</MenuItem>
                    </Menu>
                  </TableCell>
                  <TableCell align="left">
                    <Button onClick={()=>handleDeleteOrder(item._id)} variant="outlined" >Delete</Button>
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
