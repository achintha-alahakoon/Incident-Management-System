import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { BiEdit } from "react-icons/bi";
import { styled } from "@mui/material/styles";
import { Tooltip } from "@mui/material";
import "../styles/Incidents.css";

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
  "& .progress-assigned": {
    backgroundColor: "#1450A3",
  },
  "& .progress-not-assigned": {
    backgroundColor: "red",
  },
  "& .MuiDataGrid-row:hover": {
    backgroundColor: "#f5f5f5",
  },
}));

const columns = [
  { field: "id", headerName: "Job No", width: 80 },
  { field: "incident", headerName: "Incident", width: 170, editable: true },
  {
    field: "incidentType",
    headerName: "Incident Type",
    width: 130,
    editable: true,
  },
  { field: "client", headerName: "Client", width: 160, editable: true },
  {
    field: "clientTellNo",
    headerName: "Client Tell No",
    width: 120,
    editable: true,
  },
  {
    field: "clientEmail",
    headerName: "Client Email",
    width: 170,
    editable: true,
  },
  {
    field: "assignedEmployee",
    headerName: "Assigned Employee",
    width: 160,
    editable: true,
  },
  {
    field: "progressStatus",
    headerName: "Progress Status",
    width: 150,
    sortable: false,
    renderCell: (params) => {
      const statusClass = `progress-${params.value.toLowerCase().replace(/\s+/g, "-")}`;
      return (
        <div className={`progress-status ${statusClass}`}>{params.value}</div>
      );
    },
  },
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
    incident: "Incident 1",
    incidentType: "Crucial",
    client: "Client 1",
    clientTellNo: "070 3212590",
    clientEmail: "achinth@gmail.com",
    assignedEmployee: "Saman Kumara",
    progressStatus: "Assigned",
  },
  {
    id: 2,
    incident: "Incident 2",
    incidentType: "Urgent",
    client: "Client 2",
    clientTellNo: "072 6881781",
    clientEmail: "isuru@gmail.com",
    assignedEmployee: "Dinushi Tharushika",
    progressStatus: "Assigned",
  },
  {
    id: 3,
    incident: "Incident 3",
    incidentType: "Normal",
    client: "Client 3",
    clientTellNo: "076 3212590",
    clientEmail: "achinth@gmail.com",
    assignedEmployee: "Saman Kumara",
    progressStatus: "Assigned",
  },
  {
    id: 4,
    incident: "Incident 4",
    incidentType: "Urgent",
    client: "Client 4",
    clientTellNo: "072 6881781",
    clientEmail: "isuru@gmail.com",
    assignedEmployee: "",
    progressStatus: "Not Assigned",
  },
  {
    id: 5,
    incident: "Incident 5",
    incidentType: "Normal",
    client: "Client 5",
    clientTellNo: "076 3212590",
    clientEmail: "achinth@gmail.com",
    assignedEmployee: "Saman Kumara",
    progressStatus: "Assigned",
  },
  {
    id: 6,
    incident: "Incident 6",
    incidentType: "Normal",
    client: "Client 6",
    clientTellNo: "076 3212590",
    clientEmail: "achinth@gmail.com",
    assignedEmployee: "Saman Kumara",
    progressStatus: "Assigned",
  },
];

const handleEditClick = (row) => {
  alert(`Edit clicked for Job No: ${row.id}`);
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
