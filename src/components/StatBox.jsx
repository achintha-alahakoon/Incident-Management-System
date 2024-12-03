import React from "react";
import { Box, Typography } from "@mui/material";

const StatBox = ({ title, subtitle, icon, increase }) => {
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box sx={{ display: "flex", alignItems: "center", mb: "20px" }}>
          {icon}
        </Box>
        <Box>
          <Typography fontSize="14px" fontWeight="bold">
            {subtitle}
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        mt="2px"
        alignItems="center"
      >
        <Typography fontSize="26px" fontWeight="bold">
          {title}
        </Typography>
        <Typography>{increase}</Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
