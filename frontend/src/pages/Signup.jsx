import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.scss";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        localStorage.setItem(
          "user",
          JSON.stringify({ username: formData.username, email: formData.email })
        );
        navigate("/login");
      } else {
        const data = await res.text();
        alert(data || "Username already exists");
      }
    } catch (error) {
      alert("Failed to connect to server");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">Sign Up</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="signup-input"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="signup-input"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="signup-input"
            onChange={handleChange}
            required
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <p className="login-text">
          Already have an account? <Link to="/login" className="login-link">Log in</Link>
        </p>
        <p className="home-text">
          <Link to="/" className="home-link">← Back to Home</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;