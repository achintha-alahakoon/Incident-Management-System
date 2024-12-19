import React, { useState } from "react";
import Swal from "sweetalert2";
import "../styles/ForgotPassword.css";

const InputField = ({ label, name, type, value, onChange, placeholder, required }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      aria-label={label}
    />
  </div>
);

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:8080/user/forgotPassword", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: formData.email }),
        });

        const result = await response.json();

        if (response.ok) {
          
          Swal.fire({
            icon: "success",
            title: "Success",
            text: result.message || "Check your mail for the temporary password.",
          });

          setFormData({
            email: "",
          });

        } else {
          
          Swal.fire({
            icon: "error",
            title: "Error",
            text: result.message || "Email does not exist.",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An unexpected error occurred. Please try again later.",
        });
        console.error("An error occurred:", error);
      }
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ed/SLTMobitel_Logo.svg"
          alt="SLTMobitel Logo"
        />
      </div>
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>

        <InputField
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        {errors.email && <span className="error-text">{errors.email}</span>}

        <button type="submit" className="forgot-password-button">
          Reset Password
        </button>

        <p>
          Remember your password? <a href="/">Sign in here</a>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
