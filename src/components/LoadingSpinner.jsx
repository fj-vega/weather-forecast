import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const LoadingSpinner = ({ size }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress size={size} />
    </Box>
  );
};

export default LoadingSpinner;
