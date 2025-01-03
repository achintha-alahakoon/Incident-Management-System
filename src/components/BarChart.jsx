import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = () => {
  const [chartSeries, setChartSeries] = useState([]);
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'bar',
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        format: 'dd MMM',
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy',
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#3498DB'],
  });

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch('http://localhost:8080/incident/get', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        const groupedData = data.reduce((acc, incident) => {
          const date = incident.incidentDate;
          acc[date] = (acc[date] || 0) + 1;
          return acc;
        }, {});

        const transformedData = Object.entries(groupedData).map(([date, count]) => ({
          x: new Date(date).getTime(),
          y: count,
        }));

        setChartSeries([{ name: 'Incidents', data: transformedData }]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={230}
      />
    </div>
  );
};

export default BarChart;
