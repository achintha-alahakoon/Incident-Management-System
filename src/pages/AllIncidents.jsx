import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { BiEdit } from "react-icons/bi";
import { styled } from "@mui/material/styles";
import { Tooltip } from "@mui/material";
import EditIncident from "./EditIncidents";
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

const getColumns = (handleEditClick) => [
  { field: "id", headerName: "Job No", width: 80 },
  { field: "incident", headerName: "Incident", width: 170 },
  { field: "categoryId", headerName: "Incident Category", width: 130 },
  { field: "customerName", headerName: "Customer Name", width: 160 },
  { field: "customerTelNo", headerName: "Mobile", width: 120 },
  { field: "customerEmail", headerName: "Email", width: 170 },
  { field: "incidentDescription", headerName: "Description", width: 200 },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    sortable: false,
    renderCell: (params) => (
      <div
        className={`progress-status ${
          params.value === "true" ? "progress-assigned" : "progress-not-assigned"
        }`}
      >
        {params.value === "true" ? "Assigned" : "Not Assigned"}
      </div>
    ),
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

export default function AllIncidents() {

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editData, setEditData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  React.useEffect(() => {
    const fetchIncidents = async () => {
        const token = localStorage.getItem("token");

        try {
            const response = await fetch("http://localhost:8080/incident/get", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log("Response status:", response);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Data:", data);

            const formattedData = data.map((incident) => ({
                id: incident.id,
                incident: incident.incident,
                categoryId: incident.categoryId,
                customerName: incident.customerName,
                customerNIC: incident.customerNIC,
                customerTelNo: incident.customerTelNo,
                customerEmail: incident.customerEmail,
                incidentDescription: incident.incidentDescription,
                status: incident.status,
                address: incident.address
            }));

            setRows(formattedData);
        } catch (error) {
            console.error("Failed to fetch incidents:", error);
        } finally {
            setLoading(false);
        }
    };

    fetchIncidents();
}, []);
  

  const handleEditClick = (row) => {
    setEditData(row);
    setIsEditing(true);
  };

  const handleBack = () => {
    setIsEditing(false);
  };

  return (
    <div className="all-incidents-container">
      {isEditing ? (
        <EditIncident data={editData} onBack={handleBack} />
      ) : (
        <Box sx={{ height: 585, width: "100%" }}>
          <StyledDataGrid
            rows={rows}
            columns={getColumns(handleEditClick)}
            loading={loading}
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
      )}
    </div>
  );
}
