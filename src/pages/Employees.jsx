import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AllEmployees from './AllEmployees';
import AddEmployee from './AddEmployee';


const Employees = () => {

  const [value, setValue] = useState('allEmployees');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="secondary tabs example"
      >
        <Tab value="allEmployees" label="All Employees" />
        <Tab value="addEmployee" label="Add Employee" />
      </Tabs>

      <Box sx={{ marginTop: 2 }}>
        {value === 'allEmployees' && <AllEmployees />}
        {value === 'addEmployee' && <AddEmployee />}
      </Box>

    </Box>
  )
}

export default Employees
