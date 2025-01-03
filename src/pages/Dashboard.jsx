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
import EmployeeList from "../components/EmployeeList";
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

      <EmployeeList />
    </Box>
  );
};

export default Dashboard;
