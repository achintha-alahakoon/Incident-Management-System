import React, { useEffect, useState } from "react";
import StatBox from "../components/StatBox";
import { Box, Typography } from "@mui/material";
import {
  SoundOutlined,
  ScheduleOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import Calendar from "../components/Calendar";
import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";
import Avatar3 from "../assets/Avatar3.png";
import CrucialIncidents from "../components/CrucialIncidents";
import "../styles/Dashboard.css";

const Dashboard = () => {
  
  const [statBoxData, setStatBoxData] = useState([
    {
      title: "0",
      subtitle: "TOTAL INCIDENTS",
      icon: <SoundOutlined style={{ color: "purple", fontSize: "30px" }} />,
    },
    {
      title: "0",
      subtitle: "COMPLETED INCIDENTS",
      icon: <ScheduleOutlined style={{ color: "seagreen", fontSize: "30px" }} />,
    },
    {
      title: "0",
      subtitle: "IN PROGRESS INCIDENTS",
      icon: <SyncOutlined style={{ color: "#1450A3", fontSize: "30px" }} />,
    },
  ]);

  const [employeeData] = useState([
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
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch("http://localhost:8080/incident/getCount", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setStatBoxData([
            {
              title: data.total.toString(),
              subtitle: "TOTAL INCIDENTS",
              icon: (
                <SoundOutlined style={{ color: "purple", fontSize: "30px" }} />
              ),
            },
            {
              title: data.completed.toString(),
              subtitle: "COMPLETED INCIDENTS",
              icon: (
                <ScheduleOutlined
                  style={{ color: "seagreen", fontSize: "30px" }}
                />
              ),
            },
            {
              title: data.inProgress.toString(),
              subtitle: "IN PROGRESS INCIDENTS",
              icon: (
                <SyncOutlined
                  style={{ color: "#1450A3", fontSize: "30px" }}
                />
              ),
            },
          ]);
        } else {
          console.error("Failed to fetch incident data");
        }
      } catch (error) {
        console.error("Error fetching incident data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="140px"
      gap="20px"
      sx={{
        overflowY: "auto",
        maxHeight: "84vh",
        "&::-webkit-scrollbar": { display: "none" },
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      {/* Row 1 */}
      {statBoxData.map((data, index) => (
        <Box
          key={index}
          gridColumn="span 4"
          backgroundColor="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={data.title}
            subtitle={data.subtitle}
            increase={data.increase}
            icon={data.icon}
          />
        </Box>
      ))}

      {/* Row 2 */}
      <Box gridColumn="span 8" gridRow="span 2" backgroundColor="white">
        <Box
          mt="25px"
          p="0 30px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography variant="h6" fontWeight="600">
              DAILY INCIDENTS TRENDS
            </Typography>
          </Box>
        </Box>
        <Box height="250px">
          <BarChart isDashboard={true} style={{ marginTop: "20px" }} />
        </Box>
      </Box>

      <CrucialIncidents />

      {/* Row 3 */}
      <Box gridColumn="span 4" gridRow="span 2" backgroundColor="white">
        <Box height="250px">
          <PieChart isDashboard={true} />
        </Box>
      </Box>

      <Box gridColumn="span 4" gridRow="span 2" backgroundColor="white">
        <Box height="250px">
          <Calendar />
        </Box>
      </Box>

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
              <img src={employee.pp} alt="avatar" width="45px" height="45px" />
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
    </Box>
  );
};

export default Dashboard;
