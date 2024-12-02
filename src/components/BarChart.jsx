import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = () => {
  const chartOptions = {
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
    colors: ['#2A3663'],
  };

  const chartSeries = [
    {
      name: 'Incidents',
      data: [
        {
          x: new Date('2024-11-01').getTime(),
          y: 76,
        },
        {
          x: new Date('2024-11-02').getTime(),
          y: 85,
        },
        {
          x: new Date('2024-11-03').getTime(),
          y: 92,
        },
        {
          x: new Date('2024-11-04').getTime(),
          y: 76,
        },
        {
          x: new Date('2024-11-05').getTime(),
          y: 85,
        },
        {
          x: new Date('2024-11-06').getTime(),
          y: 92,
        },
        {
          x: new Date('2024-11-07').getTime(),
          y: 76,
        },
        {
          x: new Date('2024-11-08').getTime(),
          y: 85,
        },
        {
          x: new Date('2024-11-09').getTime(),
          y: 92,
        },
        {
          x: new Date('2024-11-10').getTime(),
          y: 76,
        },
        {
          x: new Date('2024-11-11').getTime(),
          y: 85,
        },
        {
          x: new Date('2024-11-12').getTime(),
          y: 92,
        },
      ],
    },
  ];

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
