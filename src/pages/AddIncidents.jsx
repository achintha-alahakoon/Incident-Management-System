import React, { useState, useEffect } from "react";
import { TextField, MenuItem, Button, Grid, Box } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";

const AddIncident = () => {
  const [formData, setFormData] = useState({
    incident: "",
    categoryId: "",
    customerName: "",
    customerNIC: "",
    customerTelNo: "",
    customerEmail: "",
    incidentDescription: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("http://localhost:8080/category/get", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to fetch categories. Please try again.",
        });
      }
    };

    fetchCategories();
  }, []);

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
      const token = localStorage.getItem("token");
      try {
        await axios.post(
          "http://localhost:8080/incident/add",
          {
            incident: formData.incident,
            categoryId: formData.categoryId,
            customerName: formData.customerName,
            customerNIC: formData.customerNIC,
            customerTelNo: formData.customerTelNo,
            customerEmail: formData.customerEmail,
            incidentDescription: formData.incidentDescription,
            address: formData.address,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Incident added successfully!",
        });
        setFormData({
          incident: "",
          categoryId: "",
          customerName: "",
          customerNIC: "",
          address: "",
          customerTelNo: "",
          customerEmail: "",
          incidentDescription: "",
        });
        setErrors({});
      } catch (error) {
        console.error("Error submitting form:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to add incident. Please try again.",
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
      incident: "",
      categoryId: "",
      customerName: "",
      customerNIC: "",
      customerTelNo: "",
      customerEmail: "",
      incidentDescription: "",
      address: "",
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
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ position: "relative", zIndex: 1 }}>
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
              label="Incident Category"
              name="categoryId"
              value={formData.categoryId}
              onChange={handleInputChange}
              select
              fullWidth
              error={!!errors.categoryId}
              helperText={errors.categoryId}
            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.incidentType}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={5.5} marginLeft={2.75} marginRight={2} marginTop={2}>
            <TextField
              variant="outlined"
              label="Customer Name"
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
              fullWidth
              error={!!errors.customerName}
              helperText={errors.customerName}
            />
          </Grid>
          <Grid item xs={5.5} marginTop={2}>
            <TextField
              variant="outlined"
              label="Customer NIC"
              name="customerNIC"
              value={formData.customerNIC}
              onChange={handleInputChange}
              fullWidth
              error={!!errors.customerNIC}
              helperText={errors.customerNIC}
            />
          </Grid>

          <Grid item xs={5.5} marginLeft={2.75} marginRight={2} marginTop={2}>
            <TextField
              variant="outlined"
              label="Customer Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              fullWidth
              error={!!errors.address}
              helperText={errors.address}
            />
          </Grid>
          <Grid item xs={5.5} marginTop={2}>
            <TextField
              variant="outlined"
              label="Telephone No"
              name="customerTelNo"
              value={formData.customerTelNo}
              onChange={handleInputChange}
              fullWidth
              error={!!errors.customerTelNo}
              helperText={errors.customerTelNo}
            />
          </Grid>

          <Grid item xs={5.5} marginLeft={2.75} marginRight={2} marginTop={2}>
            <TextField
              variant="outlined"
              label="Customer Email"
              name="customerEmail"
              type="email"
              value={formData.customerEmail}
              onChange={handleInputChange}
              fullWidth
              error={!!errors.customerEmail}
              helperText={errors.customerEmail}
            />
          </Grid>

          <Grid item xs={5.5} marginTop={2}>
            <TextField
              variant="outlined"
              label="Incident Description"
              name="incidentDescription"
              value={formData.incidentDescription}
              onChange={handleInputChange}
              select
              fullWidth
              error={!!errors.incidentDescription}
              helperText={errors.incidentDescription}
            >
              <MenuItem value="Normal">Normal</MenuItem>
              <MenuItem value="Crucial">Crucial</MenuItem>
              <MenuItem value="Urgent">Urgent</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={5.5} marginLeft={2.75} marginRight={2} marginTop={4}>
            <Button type="submit" variant="contained" color="success" fullWidth>
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
    </Box>
  );
};

export default AddIncident;
