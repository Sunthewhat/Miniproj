import React from "react";
import { Box, Typography } from "@mui/material";
const CustomButton = ({
  text = "",
  handle = () => {},
  fontSize = {},
  color = {},
}) => {
  return (
    <Box
      onClick={handle}
      sx={{
        backgroundColor: color,
        color: "#F4F4F4",
        padding: "6px 18px",
        borderRadius: 12,
        border: "1px solid white",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: color,
          transform: "scale(1.05)",
          transition: "all 0.1s ease-in-out",
        },
        "&:active": {
          backgroundColor: color,
          transform: "scale(0.95)",
          transition: "all 0.1s ease-in-out",
        },
      }}>
      <Typography fontSize={fontSize} fontFamily="kanit">
        {text}
      </Typography>
    </Box>
  );
};

export default CustomButton;
