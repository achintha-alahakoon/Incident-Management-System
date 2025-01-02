import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "antd";

const CrucialIncidents = () => {

  const [incidentData, setIncidentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch("http://localhost:8080/incident/get", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          
          const filteredData = data
            .filter((incident) => incident.incidentDescription === "Crucial")
            .map((incident) => ({
              jobNo: incident.id,
              title: incident.incident,
              status: incident.status === "true" ? "In Progress" : "Completed",
            }));

          setIncidentData(filteredData);
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
    <Box gridColumn="span 4" gridRow="span 2" backgroundColor="white">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          variant="h6"
          fontWeight="600"
          sx={{ p: "20px 30px 10px 30px", borderBottom: "1px solid #eee" }}
        >
          CRUCIAL INCIDENTS
        </Typography>
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
                Job No: {incident.jobNo}
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
  );
};

export default CrucialIncidents;
