import React from 'react'

import { Box, Typography } from "@mui/material";

const UserStatBox = ({ userTitle, userSubtitle, userIcon, userIncrese }) => {
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box sx={{ display: "flex", alignItems: "center", mb: "20px" }}>
          {userIcon}
        </Box>
        <Box>
          <Typography fontSize="14px" fontWeight="bold">
            {userSubtitle}
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
          {userTitle}
        </Typography>
        <Typography>{userIncrese}</Typography>
      </Box>
    </Box>
  );
};


export default UserStatBox;
