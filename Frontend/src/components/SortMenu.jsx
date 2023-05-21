import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";

const SortMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        marginTop: "10vh",
      }}>
      <IconButton
        aria-controls="filter-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit">
        <FilterListIcon />
        <Typography
          sx={{
            fontFamily: "'Roboto', monospace",
            fontWeight: "bold",
          }}>
          Filter By :
        </Typography>
      </IconButton>
      <Menu
        id="filter-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        {/* Add more filter options here */}
      </Menu>
    </Box>
  );
};

export default SortMenu;
