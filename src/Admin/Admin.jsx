import React, { useEffect, useState } from "react";
import {
  useTheme,
  // useMediaQuery,
  Box,
  // Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  CssBaseline,
  // Drawer,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import { Route, Routes, useNavigate } from "react-router-dom";
import CreateProductForm from "./components/CreateProductForm";
import ProductTable from "./components/ProductTable";
import OrdersTable from "./components/OrdersTable";
import CustomerTable from "./components/CustomerTable";
import AdminDashboard from "./components/Dashboard";
import { useSelector } from "react-redux";
const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <InventoryIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <PersonRoundedIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <BorderColorOutlinedIcon /> },
  {
    name: "Add Product",
    path: "/admin/product/create",
    icon: <AddCircleOutlinedIcon />,
  },
];

const Admin = () => {
  const theme = useTheme();
  // const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  // const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.token !== null);

  useEffect(() => {
    // Check if the user is authenticated
    if (!isAuthenticated) {
      // Redirect to login or registration page if not authenticated
      navigate('/login'); // You need to define your login route
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = () => {
    navigate('/admin/login');
  };

  const handleRegister = () => {
    navigate('/admin/register');
  };


  const drawer = [
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height:"100%"
      }}
    >
        <>
      {/* {isLargeScreen && <Toolbar />} */}
      <List>
        {menu.map((item, index) => 
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
            >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>
                {item.name}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        )}
      </List>
        </>
        <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Person3OutlinedIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleLogin}>
            <ListItemIcon>
              <Person3OutlinedIcon />
            </ListItemIcon>
            <ListItemText>Login</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleRegister}>
            <ListItemIcon>
              <Person3OutlinedIcon />
            </ListItemIcon>
            <ListItemText>Register</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  ];
  return (
    
      <div className="flex h-[100vh] relative ">
        <CssBaseline />
        <div className="w-[15%] border border-r-gray-300 h-full fixed top-0 ">
            {drawer}
        </div>
        <div className="w-[85%] h-full ml-[15%]">

            <Routes>
                <Route path="/admin" element={<AdminDashboard/>}></Route>
                <Route path="/admin/product/create" element={<CreateProductForm/>}></Route>
                <Route path="/admin/products" element={<ProductTable/>}></Route>
                <Route path="/admin/orders" element={<OrdersTable/>}></Route>
                <Route path="/admin/customers" element={<CustomerTable/>}></Route>
            </Routes>

        </div>
      </div>
  )
};

export default Admin;
