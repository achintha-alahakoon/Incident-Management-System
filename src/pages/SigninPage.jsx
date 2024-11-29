import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SigninPage.css";

const SignIn = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo login
    if (formData.username === "admin" && formData.password === "1234") {
      navigate("/sidenavbar");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ed/SLTMobitel_Logo.svg"
          alt="SLT Mobitel Logo"
        />
      </div>
      <form className="signin-form" onSubmit={handleSubmit}>
        <h1>Sign In</h1>

        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            required
          />
        </div>

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
