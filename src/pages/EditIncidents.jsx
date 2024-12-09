import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Grid,
  MenuItem,
  Typography,
} from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";

export default function EditIncident({ data, onBack }) {
  const [formData, setFormData] = useState(data || {}); // Initialize formData with provided data
  const [errors, setErrors] = useState({});

  const incidentTypes = ["Normal", "Urgent", "Crucial"]; // Define incident types

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required.";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Updated Data:", formData);
      alert("Incident updated successfully!");
      onBack();
    }
  };

  const handleReset = () => {
    setFormData({
      incident: "",
      incidentType: "",
      clientName: "",
      clientNIC: "",
      clientAddress: "",
      clientTellNo: "",
      clientEmail: "",
    });
    setErrors({});
  };

  return (
    <div className="edit-incident-container">
      <Button
        onClick={onBack}
        startIcon={
          <ArrowBackIosNew
            style={{ color: "black", width: "15px", height: "15px" }}
          />
        }
        style={{ marginBottom: "20px", color: "black" }}
      >
        Back
      </Button>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "90%",
          alignItems: "center",
          margin: "0 auto",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Grid container spacing={2} mt={2}>
          {/* Row 1 */}
          <Grid item xs={6}>
            <TextField
              variant="standard"
              label="Incident"
              name="incident"
              value={formData.incident || ""}
              onChange={handleChange}
              fullWidth
              error={!!errors.incident}
              helperText={errors.incident}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="standard"
              label="Incident Type"
              name="incidentType"
              value={formData.incidentType || ""}
              onChange={handleChange}
              select
              fullWidth
              error={!!errors.incidentType}
              helperText={errors.incidentType}
            >
              {incidentTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Row 2 */}
          <Grid item xs={6}>
            <TextField
              variant="standard"
              label="Client Name"
              name="clientName"
              value={formData.clientName || ""}
              onChange={handleChange}
              fullWidth
              error={!!errors.clientName}
              helperText={errors.clientName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="standard"
              label="Client NIC"
              name="clientNIC"
              value={formData.clientNIC || ""}
              onChange={handleChange}
              fullWidth
              error={!!errors.clientNIC}
              helperText={errors.clientNIC}
            />
          </Grid>

          {/* Row 3 */}
          <Grid item xs={6}>
            <TextField
              variant="standard"
              label="Client Address"
              name="clientAddress"
              value={formData.clientAddress || ""}
              onChange={handleChange}
              fullWidth
              error={!!errors.clientAddress}
              helperText={errors.clientAddress}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="standard"
              label="Client Tell No"
              name="clientTellNo"
              value={formData.clientTellNo || ""}
              onChange={handleChange}
              fullWidth
              error={!!errors.clientTellNo}
              helperText={errors.clientTellNo}
            />
          </Grid>

          {/* Row 4 */}
          <Grid item xs={12}>
            <TextField
              variant="standard"
              label="Client Email"
              name="clientEmail"
              type="email"
              value={formData.clientEmail || ""}
              onChange={handleChange}
              fullWidth
              error={!!errors.clientEmail}
              helperText={errors.clientEmail}
            />
          </Grid>

          {/* Row 5 */}
          <Grid item xs={12}>
            <Typography variant="h6" fontWeight={"bold"} gutterBottom mt={3}>
              Assigning an employee
            </Typography>
          </Grid>

          {/* Row 6 */}
          <Grid item xs={6}>
            <TextField
              variant="standard"
              label="Employee Name"
              name="assignedEmployee"
              value={formData.assignedEmployee || ""}
              onChange={handleChange}
              fullWidth
              error={!!errors.assignedEmployee}
              helperText={errors.assignedEmployee}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="standard"
              label="Gender"
              name="gender"
              value={formData.gender || ""}
              onChange={handleChange}
              fullWidth
              error={!!errors.gender}
              helperText={errors.gender}
            />
          </Grid>

        {/* Row 7 */}
        <Grid item xs={6}>
            <TextField
              variant="standard"
              label="Employee Department"
              name="employeeDept"
              value={formData.employeeDept || ""}
              onChange={handleChange}
              fullWidth
              error={!!errors.employeeDept}
              helperText={errors.employeeDept}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="standard"
              label="Job Role"
              name="jobrole"
              value={formData.jobrole || ""}
              onChange={handleChange}
              fullWidth
              error={!!errors.jobrole}
              helperText={errors.jobrole}
            />
          </Grid>

         {/* Row 8 */}
          <Grid item xs={6}>
            <TextField
              variant="standard"
              label="Employee Tell No"
              name="employeeTellNo"
              value={formData.employeeTellNo || ""}
              onChange={handleChange}
              fullWidth
              error={!!errors.employeeTellNo}
              helperText={errors.employeeTellNo}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="standard"
              label="Employee NIC"
              name="employeeNIC"
              value={formData.employeeNIC || ""}
              onChange={handleChange}
              fullWidth
              error={!!errors.employeeNIC}
              helperText={errors.employeeNIC}
            />
          </Grid>

          {/* Buttons */}
          <Grid item xs={6} mt={3}>
            <Button type="submit" variant="contained" color="success" fullWidth>
              Save
            </Button>
          </Grid>
          <Grid item xs={6} mt={3}>
            <Button
              type="button"
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={handleReset}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
