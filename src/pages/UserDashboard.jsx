import React from "react";
import UserStatBox from "../components/UserStatBox";
import { Box } from "@mui/material";
import { PlaylistRemoveOutlined } from "@mui/icons-material";
import { SoundOutlined, ScheduleOutlined, SyncOutlined } from "@ant-design/icons";
import UserInforTable from "../components/UserInforTable";
import "../styles/Dashboard.css";

const UserDashboard = () => {
  const UserStatBoxData = [
    {
      userTitle: "11,361",
      userSubtitle: "TOTAL INCIDENTS",
      userIncrease: "+79%",
      userIcon: <SoundOutlined style={{ color: "purple", fontSize: "30px" }} />,
    },
    {
      userTitle: "15,050",
      userSubtitle: "COMPLETED INCIDENTS",
      userIncrease: "+54%",
      userIcon: (
        <ScheduleOutlined style={{ color: "seagreen", fontSize: "30px" }} />
      ),
    },
    {
      userTitle: "60",
      userSubtitle: "IN PROGRESS INCIDENTS",
      userIncrease: "+68%",
      userIcon: <SyncOutlined style={{ color: "#1450A3", fontSize: "30px" }} />,
    },
    {
      userTitle: "11",
      userSubtitle: "DECLINED INCIDENTS",
      userIncrease: "+36%",
      userIcon: (
        <PlaylistRemoveOutlined style={{ color: "red", fontSize: "30px" }} />
      ),
    },
  ];




  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="140px"
      gap="20px"
      sx={{
        
        Height: "54vh",
        "&::-webkit-scrollbar": { display: "none" },
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      {/* Row 1: User Stats */}
      {UserStatBoxData.map((data, index) => (
        <Box
          key={index}
          gridColumn="span 3"
          backgroundColor="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <UserStatBox
            userTitle={data.userTitle}
            userSubtitle={data.userSubtitle}
            userIncrease={data.userIncrease}
            userIcon={data.userIcon}
          />
        </Box>
      ))}

      {/* Row 2: User Info Table */}
   
     
       <Box
        gridColumn="span 12"
        sx={{
          height: "550px", // Adjust to fit within the page
          width: "100%",  // Full width of the container
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          padding: 2,
          overflow: "auto", // Scroll only this box if necessary
        }}
      >
      
      <UserInforTable  />
       
      </Box>
    </Box>
  );
};

export default UserDashboard;
