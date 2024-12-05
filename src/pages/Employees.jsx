import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { BiEdit } from "react-icons/bi";
import { styled } from "@mui/material/styles";
import { Tooltip } from "@mui/material";

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: "none",
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#f3f4f6",
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
  "& .MuiDataGrid-cell": {
    borderBottom: "1px solid #e0e0e0",
    fontSize: 14,
  },
  "& .progress-status": {
    borderRadius: "8px",
    padding: "4px 8px",
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  },
  "& .MuiDataGrid-row:hover": {
    backgroundColor: "#f5f5f5",
  },
}));

const columns = [
  { field: "id", headerName: "Emp No", width: 90 },
  { field: "name", headerName: "Name", width: 190, editable: true },
  { field: "gender", headerName: "Gender", width: 80, editable: true },
  { field: "department", headerName: "Department", width: 140, editable: true },
  { field: "role", headerName: "Role", width: 180, editable: true },
  { field: "nic", headerName: "NIC", width: 140, editable: true },
  { field: "TellNo", headerName: "Tell No", width: 130, editable: true },
  { field: "Email", headerName: "Email", width: 190, editable: true },
  {
    field: "action",
    headerName: "Action",
    width: 100,
    sortable: false,
    renderCell: (params) => (
      <Tooltip title="Edit">
        <span>
          <BiEdit
            className="edit-icon"
            onClick={() => handleEditClick(params.row)}
            style={{ cursor: "pointer" }}
          />
        </span>
      </Tooltip>
   ),   
  },
];

const rows = [
  {
    id: 1,
    name: "Saman Kumara",
    gender: "Male",
    department: "IT",
    role: "Software Engineer",
    nic: "123456789V",
    TellNo: "070 3212590",
    Email: "achinth@gmail.com",
  },
  {
    id: 2,
    name: "Dinushi Tharushika",
    gender: "Female",
    department: "IT",
    role: "Network Engineer",
    nic: "987654321V",
    TellNo: "072 6881781",
    Email: "isuru@gmail.com",
  },
  {
    id: 3,
    name: "Kamal Perera",
    gender: "Male",
    department: "HR",
    role: "HR Manager",
    nic: "456789123V",
    TellNo: "076 3212590",
    Email: "achinth@gmail.com",
  },
  {
    id: 4,
    name: "Chathura Disanayake",
    gender: "Male",
    department: "IT",
    role: "Sytem Engineer",
    nic: "789123456V",
    TellNo: "072 6881781",
    Email: "isuru@gmail.com",
  },
  {
    id: 5,
    name: "Thushani Dilhara",
    gender: "Female",
    department: "Marketing",
    role: "Marketing Manager",
    nic: "321654987V",
    TellNo: "076 3212590",
    Email: "achinth@gmail.com",
  },
];

const handleEditClick = (row) => {
  alert(`Edit clicked for Emp No: ${row.id}`);
};

export default function DataGridDemo() {
  return (
    <div className="all-incidents-container">
      <Box sx={{ height: 585, width: "100%" }}>
        <StyledDataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5, 10, 25, 50]}
        />
      </Box>
    </div>
  );
}
