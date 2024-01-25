import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

const steps = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out For Delivery",
  "Delivered",
];

const Ordertracker = ({activeStep}) => {
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((Label) => (
          <Step>
            <StepLabel sx={{ color: "#9155fd", fontSize: "44px" }}>
              {Label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default Ordertracker;
