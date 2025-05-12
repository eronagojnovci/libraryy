import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="boho-footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-section brand">
            <h1><Link to="/">Library</Link></h1>
            <p>
              Welcome to our online library system. We aim to bring knowledge and resources
              closer to everyone. 
            </p>
          </div>

          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/books">Books</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p><strong>Address:</strong> Prishtine</p>
            <p><strong>Phone:</strong> +38344123456</p>
            <p><strong>Email:</strong> library@example.com</p>
            <p><strong>Hours:</strong> Mon-Fri, 9:00 - 18:00</p>
          </div>

          <div className="footer-section social">
            <h3>Connect With Us</h3>
            <div className="icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="mailto:library@example.com"><FaEnvelope /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} Library Management. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
