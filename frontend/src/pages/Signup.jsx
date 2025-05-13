import React from "react";
import { Link } from "react-router-dom";
import "./signup.scss";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">Sign Up</h1>
        <form className="signup-form">
          <input type="text" placeholder="Username" className="signup-input" />
          <input type="email" placeholder="Email" className="signup-input" />
          <input type="password" placeholder="Password" className="signup-input" />
          <button type="submit" className="signup-button">Sign Up</button>
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
