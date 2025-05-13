import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import "./signup.scss";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        <form className="login-form">
          <input type="text" placeholder="Username" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
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
