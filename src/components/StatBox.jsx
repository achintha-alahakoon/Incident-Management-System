import React from 'react'
import{ Box,Typography } from '@mui/material'

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography>{title}</Typography>
        </Box>
        <Box>
          <Typography>{subtitle}</Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography>{progress}%</Typography>
        <Typography>{increase}</Typography>
      </Box>
    </Box>
  )
}

export default StatBox
