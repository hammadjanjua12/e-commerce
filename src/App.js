// App.js
import React, { useState, useEffect } from "react";
import { CircularProgress, Typography } from "@mui/material";
import CustomerRoutes from "./Routers/CustomerRoutes";
import AdminRoutes from "./Routers/AdminRoutes"; // Import your AdminRoutes component

const CircularProgressWithLabel = ({ value, size }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <CircularProgress size={size} variant="determinate" value={value} />
      <Typography variant="h6" color="textSecondary" style={{ fontSize: 18, marginTop: 8 }}>
        {`${Math.round(value)}%`}
      </Typography>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const isAdminRoute = window.location.pathname.startsWith('/admin'); 

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 200);

    const loadingTimer = setTimeout(() => {
      setLoading(false);
      clearInterval(timer);
    }, 2000);

    return () => {
      clearInterval(timer);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <div className="">
      {loading && (
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          <CircularProgressWithLabel value={progress} size={100} />
        </div>
      )}
      {!loading && (
        <div>
          {isAdminRoute ? <AdminRoutes /> : <CustomerRoutes showNavigation={!isAdminRoute} />}
        </div>
      )}
    </div>
  );
}

export default App;
