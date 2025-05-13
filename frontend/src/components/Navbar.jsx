import React from "react";
import { Link } from "react-router-dom";
import './Navbar.scss'; // Import the SCSS file

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/books">Books</Link>
      <div className="auth-links">
                {/* {!isLoggedIn && <Link to="/login">Login</Link>} */}

      <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
