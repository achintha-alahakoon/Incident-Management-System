import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { BiEdit } from "react-icons/bi";
import { styled } from "@mui/material/styles";
import {
  Box,
  Tooltip,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";

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
  "& .MuiDataGrid-row:hover": {
    backgroundColor: "#f5f5f5",
  },
}));

export default function DataGridDemo() {
  const [rows, setRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:8081/api/employees");
        setRows(response.data);
      } catch (error) {
        console.error("Error fetching employee data:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to fetch employee data. Please try again.",
        });
      }
    };

    fetchEmployees();
  }, []);

  const handleEditClick = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `http://localhost:8081/api/employees/${selectedRow.empNo}`,
        selectedRow
      );
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Employee details updated successfully!",
      });
      setRows((prevRows) =>
        prevRows.map((row) =>
          row.empNo === selectedRow.empNo ? selectedRow : row
        )
      );
      handleClose();
    } catch (error) {
      console.error("Error updating employee:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update employee. Please try again.",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedRow((prev) => ({ ...prev, [name]: value }));
  };

  const columns = [
    { field: "empNo", headerName: "Emp No", width: 85 },
    { field: "name", headerName: "Name", width: 170 },
    { field: "address", headerName: "Address", width: 170 },
    { field: "gender", headerName: "Gender", width: 80 },
    { field: "department", headerName: "Department", width: 120 },
    { field: "role", headerName: "Role", width: 160 },
    { field: "nic", headerName: "NIC", width: 110 },
    { field: "telNo", headerName: "Tel No", width: 110 },
    { field: "email", headerName: "Email", width: 165 },
    {
      field: "action",
      headerName: "Action",
      width: 70,
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

  return (
    <div className="all-incidents-container">
      <Box sx={{ height: 514, width: "100%" }}>
        <StyledDataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row.empNo}
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

      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            width: "1200px",
            height: "85%",
            maxWidth: "none",
          },
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(220, 220, 220, 0.48)",
            backdropFilter: "blur(2px)",
          },
        }}
      >
        <DialogTitle sx={{ fontSize: "1.5rem", fontWeight: "bold", mb: "10px", mt: "20px" }}>Edit Employee Details</DialogTitle>
        <DialogContent>
          {selectedRow && (
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Name"
                    name="name"
                    value={selectedRow.name}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="NIC"
                    name="nic"
                    value={selectedRow.nic}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Email"
                    name="email"
                    value={selectedRow.email}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Tel No"
                    name="telNo"
                    value={selectedRow.telNo}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Gender"
                    name="gender"
                    value={selectedRow.gender}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Address"
                    name="address"
                    value={selectedRow.address || ""}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Department"
                    name="department"
                    value={selectedRow.department}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Role"
                    name="role"
                    value={selectedRow.role}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
              </Grid>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
