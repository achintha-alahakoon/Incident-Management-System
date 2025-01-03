import React, { useState } from "react";
import { TextField, MenuItem, Button, Grid, Box } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telNo: "",
    address: "",
    nic: "",
    gender: "",
    role: "",
    department: "",
  });

  const [errors, setErrors] = useState({});

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await axios.post("http://localhost:8081/api/employees", formData);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Employee added successfully!",
        });
        setFormData({
          name: "",
          email: "",
          telNo: "",
          address: "",
          nic: "",
          gender: "",
          role: "",
          department: "",
        });
        setErrors({});
      } catch (error) {
        console.error("Error submitting form:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to add employee. Please try again.",
        });
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "Please fill in all required fields.",
      });
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      telNo: "",
      address: "",
      nic: "",
      gender: "",
      role: "",
      department: "",
    });
    setErrors({});
  };

  return (
    <Box sx={{ maxWidth: "100%", height: "75vh", margin: "auto", padding: "20px", backgroundColor: "#fff", position: "relative" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={4} marginTop={2}>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              variant="outlined"
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              variant="outlined"
              label="Telephone Number"
              name="telNo"
              value={formData.telNo}
              onChange={handleInputChange}
              fullWidth
              error={!!errors.telNo}
              helperText={errors.telNo}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              variant="outlined"
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              fullWidth
              error={!!errors.address}
              helperText={errors.address}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              variant="outlined"
              label="NIC"
              name="nic"
              value={formData.nic}
              onChange={handleInputChange}
              fullWidth
              error={!!errors.nic}
              helperText={errors.nic}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              variant="outlined"
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              select
              fullWidth
              error={!!errors.gender}
              helperText={errors.gender}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField
              variant="outlined"
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              fullWidth
              error={!!errors.role}
              helperText={errors.role}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              variant="outlined"
              label="Department"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              select
              fullWidth
              error={!!errors.department}
              helperText={errors.department}
            >
              <MenuItem value="IT">IT</MenuItem>
              <MenuItem value="HR">HR</MenuItem>
              <MenuItem value="Marketing">Marketing</MenuItem>
              <MenuItem value="Sales">Sales</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <Button type="submit" variant="contained" color="success" fullWidth>
              Submit
            </Button>
          </Grid>

          <Grid item xs={6}>
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
    </Box>
  );
};

export default AddEmployee;
