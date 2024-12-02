import React from 'react';
import StatBox from '../components/StatBox';
import { Box, Typography } from '@mui/material';
import { PlaylistRemoveOutlined } from '@mui/icons-material';
import { SoundOutlined, ScheduleOutlined, SyncOutlined } from '@ant-design/icons';
import BarChart from '../components/BarChart';

const Dashboard = () => {
  const statBoxData = [
    { title: '12,361', subtitle: 'TOTAL INCIDENTS', progress: 0.75, increase: '+14%', icon: <SoundOutlined style={{ color: 'purple', fontSize: '30px' }}/> },
    { title: '12,000', subtitle: 'COMPLETED INCIDENTS', progress: 0.55, increase: '+18%', icon: <ScheduleOutlined style={{ color: 'seagreen', fontSize: '30px' }}/> },
    { title: '11,361', subtitle: 'IN PROGRESS INCIDENTS', progress: 0.85, increase: '+24%', icon: <SyncOutlined style={{ color: '#1450A3', fontSize: '30px' }} /> },
    { title: '10,350', subtitle: 'DECLINED INCIDENTS', progress: 0.15, increase: '+19%', icon: <PlaylistRemoveOutlined style={{ color: 'red', fontSize: '30px' }} /> },
  ];

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="140px"
      gap="20px"
      sx={{ overflowY: 'auto', maxHeight: '84vh' }}
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
            icon={data.icon}
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
            <Typography variant="h6" fontWeight="600">
              DAILY INCIDENTS TRENDS
            </Typography>
          </Box>
        </Box>

        <Box height="250px" >
          <BarChart isDashboard={true} style={{ marginTop: '20px'}} />
        </Box>
      </Box>

      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor="white"
      >
        <Typography
          variant="h6"
          fontWeight="600"
          sx={{ p: '30px 30px 0 30px' }}
        >
          CRUCIAL INCIDENTS
        </Typography>
        <Box height="250px">
          
        </Box>
      </Box>

      {/* Row 3 */}
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor="white"
      >
        <Typography
          variant="h5"
          fontWeight="600"
          sx={{ p: '30px 30px 0 30px' }}
        >
          CHART 1
        </Typography>
        <Box height="250px">
          
        </Box>
      </Box>

      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor="white"
      >
        <Typography
          variant="h5"
          fontWeight="600"
          sx={{ p: '30px 30px 0 30px' }}
        >
          CHART 2
        </Typography>
        <Box height="250px">
          
        </Box>
      </Box>

      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor="white"
      >
        <Typography
          variant="h5"
          fontWeight="600"
          sx={{ p: '30px 30px 0 30px' }}
        >
          CHART 3
        </Typography>
        <Box height="250px">
          
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
