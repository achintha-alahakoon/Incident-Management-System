import React from 'react';
import StatBox from '../components/StatBox';
import { Box, IconButton, Typography } from '@mui/material';
import { DownloadOutlined, EmailOutlined } from '@mui/icons-material';
import LineChart from '../components/LineChart';

const Dashboard = () => {
  const statBoxData = [
    { title: '12,361', subtitle: 'Emails Sent', progress: 0.75, increase: '+14%' },
    { title: '12,000', subtitle: 'Emails Sent', progress: 0.55, increase: '+18%' },
    { title: '11,361', subtitle: 'Emails Sent', progress: 0.85, increase: '+24%' },
    { title: '10,350', subtitle: 'Emails Sent', progress: 0.15, increase: '+19%' },
  ];

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="140px"
      gap="20px"
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
            progress={data.progress}
            increase={data.increase}
            icon={<EmailOutlined color="secondary" />}
          />
        </Box>
      ))}

      {/* Row 2 */}
      <Box
        gridColumn="span 8"
        gridRow="span 2"
        backgroundColor="white"
      >
        <Box
          mt="25px"
          p="0 30px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography variant="h5" fontWeight="600">
              Revenue Generated
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <DownloadOutlined sx={{ fontSize: '26px', color: '#1450A3' }} />
            </IconButton>
          </Box>
        </Box>

        <Box height="250px" m="-20px 0 0 0" >
          <LineChart isDashboard={true} height="100px" />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
