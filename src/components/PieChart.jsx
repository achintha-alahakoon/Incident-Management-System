import React from "react";
import ReactApexChart from "react-apexcharts";

const RadialBarChart = () => {

  const rawSeries = [12000, 300, 61];
  const series = rawSeries.map((value) => (value / 12361) * 100); // Convert to percentages

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
          size: "30%",
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
    colors: ["seaGreen","#1450A3", "red"],
    labels: ["Completed", "In Progress", "Declined"],
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
      fontSize: "14px",
      position: "left",
      offsetX: 0,
      offsetY: 0,
    },
  };

  return (
    <div>
      <ReactApexChart options={options} series={series} type="radialBar" height={300} />
    </div>
  );
};

export default RadialBarChart;

