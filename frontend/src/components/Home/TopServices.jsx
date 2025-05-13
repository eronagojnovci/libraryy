import React from "react";
import { FaSearch, FaBookReader, FaUndo } from "react-icons/fa";
import './TopServices.scss';

const TopServices = () => (
  <div className="top-services">
    <h3>Our Top Services</h3>
    <div className="services">
      <div className="service">
        <FaSearch className="icon" />
        <h4>Search</h4>
        <p>Find the book you’re looking for in seconds.</p>
      </div>
      <div className="service">
        <FaBookReader className="icon" />
        <h4>Borrow</h4>
        <p>Borrow your favorite books with just a click.</p>
      </div>
      <div className="service">
        <FaUndo className="icon" />
        <h4>Return</h4>
        <p>Easily return your borrowed books on time.</p>
      </div>
    </div>
  </div>
);

export default TopServices;
