import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

const RadialBarChart = () => {
  const [series, setSeries] = useState([0, 0]); // Initial series values

  const options = {
    chart: {
      height: 300,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "50%",
          background: "transparent",
        },
        dataLabels: {
          name: {
            show: true,
          },
          value: {
            show: true,
            formatter: (value) => `${Math.round(value)}%`,
          },
        },
      },
    },
    colors: ["#2ECC71", "#3498DB"],
    labels: ["Completed", "In Progress"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      show: true,
      floating: true,
      fontSize: "16px",
      position: "left",
      offsetX: 0,
      offsetY: 0,
    },
  };

  useEffect(() => {
    
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:8080/incident/getCount", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { completed, inProgress, total } = response.data;
        const completedPercentage = (completed / total) * 100 || 0;
        const inProgressPercentage = (inProgress / total) * 100 || 0;
        setSeries([completedPercentage, inProgressPercentage]);
      })
      .catch((error) => {
        console.error("Error fetching incident data:", error);
      });
  }, []);

  return (
    <div>
      <ReactApexChart options={options} series={series} type="radialBar" height={330} />
    </div>
  );
};

export default RadialBarChart;
