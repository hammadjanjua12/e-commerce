import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import Ordertracker from "./Ordertracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className="lg:px-20 px-5 mb-10">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <Ordertracker activeStep={3} />
      </div>
      <Grid className="space-y-5" container>
        {[1,1,1,1,1].map((item) => 
        <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-cente space-x-4">
              <img
              className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/i/v/x/xxl-br-ad-kt-105-adwyn-peter-original-imagj4zyd2q7t6cg.jpeg?q=70"
                alt=""
              />
              <div className="space-y-2 ml-5">
                <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
                <p className="space-x-5 opacity-50 text-xs font-semibold "><span>Color : white</span>
                <span>Size : M</span></p>
                <p>Seller : linaria</p>
                <p>$1099</p>
              </div>
            </div>
            <Grid>

            </Grid>
          </Grid>
          <Grid item>
            <Box sx={{color:deepPurple[500]}}>
                <StarBorderIcon sx={{fontSize:"2rem"}} className="px-2 text-5xl"/>
                <span>Rate and Review Product</span>
            </Box>
          </Grid>
        </Grid>
        )}
      </Grid>
    </div>
  );
};

export default OrderDetails;
