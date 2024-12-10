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
    incidentType: "",
    incident: "",
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
        incidentType: "",
        incident: "",
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
      incidentType: "",
      incident: "",
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
        position: "relative",
        borderRadius: "8px", 
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
      }}
    >
      <form onSubmit={handleSubmit}>
      <Grid container spacing={2} sx={{ position: "relative", zIndex: 1 }}>
          
          {/* Row 1 */}
          <Grid item xs={5.5} marginTop={10} marginLeft={2.75} marginRight={2}>
            <TextField
              variant="outlined"
              label="Incident"
              name="incident"
              value={formData.incident}
              onChange={handleInputChange}
              fullWidth
              error={!!errors.incident}
              helperText={errors.incident}
            />
          </Grid>
          <Grid item xs={5.5} marginTop={10}>
            <TextField
              variant="outlined"
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
          <Grid item xs={5.5}  marginLeft={2.75} marginRight={2} marginTop={2}>
            <TextField
              variant="outlined"
              label="Name with Initials"
              name="clientName"
              value={formData.clientName}
              onChange={handleInputChange}
              fullWidth
              error={!!errors.clientName}
              helperText={errors.clientName}
            />
          </Grid>
          <Grid item xs={5.5} marginTop={2}>
            <TextField
              variant="outlined"
              label="NIC"
              name="clientNIC"
              value={formData.clientNIC}
              onChange={handleInputChange}
              fullWidth
              error={!!errors.clientNIC}
              helperText={errors.clientNIC}
            />
          </Grid>

          {/* Row 3 */}
          <Grid item xs={5.5} marginLeft={2.75} marginRight={2} marginTop={2}>
            <TextField
              variant="outlined"
              label="Home Address"
              name="clientAddress"
              value={formData.clientAddress}
              onChange={handleInputChange}
              fullWidth
              error={!!errors.clientAddress}
              helperText={errors.clientAddress}
            />
          </Grid>
          <Grid item xs={5.5} marginTop={2} >
            <TextField
              variant="outlined"
              label="Telephone No"
              name="clientTellNo"
              value={formData.clientTellNo}
              onChange={handleInputChange}
              fullWidth
              error={!!errors.clientTellNo}
              helperText={errors.clientTellNo}
            />
          </Grid>

          {/* Row 4 */}
          <Grid item xs={11.15} marginLeft={2.75} marginTop={2}>
            <TextField
              variant="outlined"
              label="Email Address"
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
          <Grid item xs={5.5} marginLeft={2.75} marginRight={2} marginTop={4}>
            <Button 
            type="button" 
            variant="contained" 
            color="success"
            fullWidth>
              Submit
            </Button>
          </Grid>
          <Grid item xs={5.5} marginTop={4}>
            <Button
              type="button"
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleReset}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>

      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <img
          src="src/assets/Incident.png"
          alt="Incident"
          style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
        />
      </Box>
    </Box>
  );
};

export default AddIncident;