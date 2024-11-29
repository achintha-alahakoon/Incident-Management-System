import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
  const chartOptions = {
    chart: {
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      type: 'datetime',
    },
    stroke: {
      curve: 'smooth',
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy',
      },
    },
  };

  const chartSeries = [
    {
      name: 'Series 1',
      data: [
        {
          x: new Date('2018-02-12').getTime(),
          y: 76,
        },
        {
          x: new Date('2018-02-13').getTime(),
          y: 85,
        },
        {
          x: new Date('2018-02-14').getTime(),
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
        type="line"
        height={350}
      />
    </div>
  );
};

export default LineChart;
