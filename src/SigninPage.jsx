import React, { useState } from "react";
import "./SigninPage.css";



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

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required.";
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
    <div className="signin-container">
      <div className="signin-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ed/SLTMobitel_Logo.svg"
          alt="SLTMobitel Logo"
        />
      </div>
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>

        <InputField
          label="Username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your username"
          required
        />
        {errors.username && <span className="error-text">{errors.username}</span>}

        <InputField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
        {errors.password && <span className="error-text">{errors.password}</span>}

        <button type="submit" className="signin-button">
          Sign In
        </button>

        <p>
          Forgot your password? <a href="/forgot-password">Reset it here</a>
        </p>

        <p>
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
