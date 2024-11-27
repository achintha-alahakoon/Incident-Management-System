import React, { useState } from "react";
import "../styles/SignupPage.css";


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

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.username) newErrors.username = "Username is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.password || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters long.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
     
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ed/SLTMobitel_Logo.svg"
          alt="SLTMobitel Logo"
        />
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Your Account</h2>
        
        <InputField
          label="First Name"
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
          required
        />
        {errors.firstName && <span className="error-text">{errors.firstName}</span>}

        <InputField
          label="Last Name"
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
          required
        />
        {errors.lastName && <span className="error-text">{errors.lastName}</span>}

        <InputField
          label="Username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          placeholder="Choose a username"
          required
        />
        {errors.username && <span className="error-text">{errors.username}</span>}

        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        {errors.email && <span className="error-text">{errors.email}</span>}

        <InputField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Create a password"
          required
        />
        {errors.password && <span className="error-text">{errors.password}</span>}

        <button type="submit" className="signup-button">
          Create Account
        </button>

        <p>
          Already have an account? <a href="/">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
