import React from "react";
import "./Footer.scss";

const Footer = () => (
  <footer className="boho-footer">
    <span>© {new Date().getFullYear()} Library Management</span>
  </footer>
);

export default Footer;