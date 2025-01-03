import React from "react";
import { Box, Typography } from "@mui/material";
import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";
import Avatar3 from "../assets/Avatar3.png";

const EmployeeList = () => {
  const employeeData = [
    {
      name: "Saman Kumara",
      role: "Engineer",
      pp: Avatar1,
    },
    {
      name: "Dinushi Tharushika",
      role: "Network Engineer",
      pp: Avatar2,
    },
    {
      name: "Kamal Perera",
      role: "HR Manager",
      pp: Avatar3,
    },
    {
      name: "Chathura Dissanayake",
      role: "System Engineer",
      pp: Avatar1,
    },
  ];

  return (
    <Box gridColumn="span 4" gridRow="span 2" backgroundColor="white">
      <Typography
        variant="h6"
        fontWeight="600"
        sx={{ p: "20px 30px 10px 30px", borderBottom: "1px solid #eee" }}
      >
        EMPLOYEES
      </Typography>

      <Box
        height="230px"
        sx={{
          overflowY: "auto",
          p: "10px 20px",
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {employeeData.map((employee, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            mb="15px"
            p="10px"
            borderRadius="8px"
            boxShadow={1}
            sx={{
              backgroundColor: "#f9f9f9",
              "&:hover": {
                backgroundColor: "#f0f0f0",
                boxShadow: 3,
              },
            }}
          >
            <img
              src={employee.pp}
              alt="avatar"
              width="45px"
              height="45px"
              style={{ borderRadius: "50%" }}
            />
            <Box display="flex" flexDirection="column" marginLeft="1.5rem">
              <Typography fontSize="16px" fontWeight="600" color="#333">
                {employee.name}
              </Typography>
              <Typography fontSize="12px" color="#666">
                {employee.role}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default EmployeeList;
