import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SigninPage.css";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email.");
      return false;
    }
    if (!formData.password) {
      setError("Password cannot be empty.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: formData.email, password: formData.password }),

    })
      .then((response) => {
        if (!response.ok) {
          console.error("Response status:", response.status);
          throw new Error("Sign-in failed");
        }
        return response.json();
      })
      .then((data) => {
        setError("");
        localStorage.setItem("token", data.token);
        navigate("/sidenavbar");
      })
      .catch((error) => {
        if (error.message === "Wait for admin approval.") {
          setError("Your account is pending admin approval.");
        } else if (error.message === "Bad Credentials.") {
          setError("Invalid email or password.");
        } else {
          setError("An error occurred. Please try again.");
        }
      });      
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
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
