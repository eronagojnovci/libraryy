import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.placeholder.toLowerCase()]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      localStorage.setItem("user", JSON.stringify(formData));
      alert("Login successful");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" className="login-input" onChange={handleChange} required />
          <input type="password" placeholder="Password" className="login-input" onChange={handleChange} required />
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-text">
          Don’t have an account? <Link to="/signup" className="signup-link">Create one</Link>
        </p>
        <p className="home-text">
          <Link to="/" className="home-link">← Back to Home</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
