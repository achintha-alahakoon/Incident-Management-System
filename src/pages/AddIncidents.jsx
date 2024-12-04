import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Button,
  Grid,
  Box,
  Typography,
} from "@mui/material";

const AddIncident = () => {
  const [formData, setFormData] = useState({
    incident: "",
    incidentType: "",
    clientName: "",
    clientNIC: "",
    clientAddress: "",
    clientTellNo: "",
    clientEmail: "",
  });

  const [errors, setErrors] = useState({});

  const incidentTypes = ["Crucial", "Urgent", "Normal"];

  const handleInputChange = (e) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Incident added successfully!");
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
    <Box
      sx={{
        maxWidth: "100%",
        height: "100%",
        margin: "auto",
        padding: "20px",
        backgroundColor: "#fff",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Row 1 */}
          <Grid item xs={6}>
            <TextField
              variant="standard"
              label="Incident"
              name="incident"
              value={formData.incident}
              onChange={handleInputChange}
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
              value={formData.incidentType}
              onChange={handleInputChange}
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
              value={formData.clientName}
              onChange={handleInputChange}
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
              value={formData.clientNIC}
              onChange={handleInputChange}
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
              value={formData.clientAddress}
              onChange={handleInputChange}
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
              value={formData.clientTellNo}
              onChange={handleInputChange}
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
              value={formData.clientEmail}
              onChange={handleInputChange}
              fullWidth
              error={!!errors.clientEmail}
              helperText={errors.clientEmail}
            />
          </Grid>

          {/* Buttons */}
          <Grid item xs={6}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
          <Grid item xs={6}>
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
      </form>
    </Box>
  );
};

export default AddIncident;
