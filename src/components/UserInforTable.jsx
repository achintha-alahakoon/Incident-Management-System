import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import '../styles/Incidents.css';

const UserInforTable = () => {


  // Styled DataGrid for custom appearance
  const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 'none',
    '& .MuiDataGrid-columnHeaders': {
      backgroundColor: '#f3f4f6',
      color: '#333',
      fontSize: 16,
      fontWeight: 'bold',
    },
    '& .MuiDataGrid-cell': {
      borderBottom: '1px solid #e0e0e0',
      fontSize: 14,
    },
    '& .progress-status': {
      borderRadius: '8px',
      padding: '4px 8px',
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
      width: '100%',
    },
    '& .progress-completed': {
      backgroundColor: 'green',
    },
    '& .progress-in-progress': {
      backgroundColor: 'blue',
    },
    '& .progress-declined': {
      backgroundColor: 'red',
    },
    '& .MuiDataGrid-row:hover': {
      backgroundColor: '#f5f5f5',
    },
  }));

  // Table column definitions
  const columns = [
    { field: 'incidentId', headerName: 'Incident ID', width: 170 },
    { field: 'incidentType', headerName: 'Incident Type', width: 300 },
    { field: 'incidentCategory', headerName: 'Incident Category', width: 260 },
    { field: 'clientName', headerName: 'Client Name', width: 300 },
    { field: 'clientPhone', headerName: 'Client Phone', width: 260 },
    {
      field: 'progressStatus',
      headerName: 'Progress Status',
      width: 260,
      sortable: false,
      renderCell: (params) => {
        const statusClass = `progress-${params.value.toLowerCase().replace(/\s+/g, '-')}`;
        return (
          <div className={`progress-status ${statusClass}`}>{params.value}</div>
        );
      },
    },
  ];

  // Table rows data
  const rows = [
    {
      id:1,
      incidentId: 1,
      incidentType: 'Normal',
      incidentCategory: 'PEO TV',
      clientName: 'Saman Kumara',
      clientPhone: '0712225556',
      progressStatus: 'Completed',
    },
    {
      id:2,
      incidentId: 2,
      incidentType: 'Normal',
      incidentCategory: 'Router',
      clientName: 'Kamal Perera',
      clientPhone: '0773334445',
      progressStatus: 'In Progress',
    },
    { 
      id:3,
      incidentId: 3,
      incidentType: 'Crucial',
      incidentCategory: 'Router',
      clientName: 'Amara Silva',
      clientPhone: '0705556667',
      progressStatus: 'Declined',
    },
    { 
      id:4,
      incidentId: 4,
      incidentType: 'Crucial',
      incidentCategory: 'Router',
      clientName: 'Amara Silva',
      clientPhone: '0705556667',
      progressStatus: 'Declined',
    },
    { 
      id:5,
      incidentId: 5,
      incidentType: 'Crucial',
      incidentCategory: 'Router',
      clientName: 'Amara Silva',
      clientPhone: '0705556667',
      progressStatus: 'Declined',
    },
  ];

  // Pagination model
  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <div className="all-incidents-container"
    
    >
      <Box sx={{ height: '80%', width: '100%' }}>
        <StyledDataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: paginationModel,
            },
          }}
          pageSizeOptions={[5, 10, 25, 50]}
        />
      </Box>
    </div>
    
  );
};

export default UserInforTable;




