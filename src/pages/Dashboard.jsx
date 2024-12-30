import React from "react";
import StatBox from "../components/StatBox";
import { BiSearch } from "react-icons/bi";
import { Box, Typography } from "@mui/material";
import { PlaylistRemoveOutlined } from "@mui/icons-material";
import {
  SoundOutlined,
  ScheduleOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import { Button } from "antd";
import Calendar from "../components/Calendar";
import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";
import Avatar3 from "../assets/Avatar3.png";
import "../styles/Dashboard.css";

const Dashboard = () => {
  
  const statBoxData = [
    {
      title: "12,361",
      subtitle: "TOTAL INCIDENTS",
      increase: "+14%",
      icon: <SoundOutlined style={{ color: "purple", fontSize: "30px" }} />,
    },
    {
      title: "12,000",
      subtitle: "COMPLETED INCIDENTS",
      increase: "+18%",
      icon: (
        <ScheduleOutlined style={{ color: "seagreen", fontSize: "30px" }} />
      ),
    },
    {
      title: "300",
      subtitle: "IN PROGRESS INCIDENTS",
      increase: "+24%",
      icon: <SyncOutlined style={{ color: "#1450A3", fontSize: "30px" }} />,
    },
    {
      title: "61",
      subtitle: "DECLINED INCIDENTS",
      increase: "+19%",
      icon: (
        <PlaylistRemoveOutlined style={{ color: "red", fontSize: "30px" }} />
      ),
    },
  ];

  const incidentData = [
    {
      title: "Incident 1",
      jobno: "120",
      status: "In Progress",
    },
    {
      title: "Incident 2",
      jobno: "100",
      status: "Completed",
    },
    {
      title: "Incident 3",
      jobno: "110",
      status: "In Progress",
    },
    {
      title: "Incident 4",
      jobno: "125",
      status: "In Progress",
    },
  ];

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
          gridColumn="span 3"
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

      <Box gridColumn="span 4" gridRow="span 2" backgroundColor="white">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="h6"
            fontWeight="600"
            sx={{ p: "20px 30px 10px 30px", borderBottom: "1px solid #eee" }}
          >
            CRUCIAL INCIDENTS
          </Typography>
          {/* <div className="search-box">
            <input type="text" placeholder="Search" />
            <BiSearch className="icon" />
          </div> */}
        </Box>

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
          {incidentData.map((incident, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
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
              <Box display="flex" flexDirection="column">
                <Typography fontSize="16px" fontWeight="600" color="#333">
                  {incident.title}
                </Typography>
                <Typography fontSize="12px" color="#666">
                  Job No: {incident.jobno}
                </Typography>
              </Box>

              <Button
                type="text"
                style={{
                  backgroundColor:
                    incident.status === "In Progress" ? "#1450A3" : "seagreen",
                  color: "#fff",
                  fontWeight: "600",
                  borderRadius: "15px",
                }}
              >
                {incident.status}
              </Button>
            </Box>
          ))}
        </Box>
      </Box>

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
