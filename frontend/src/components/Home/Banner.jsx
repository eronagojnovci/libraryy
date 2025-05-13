import React from "react";
import {Link} from 'react-router-dom';
import './Banner.scss';

const Banner = () => (
  <div className="banner">
    <div className="home-content">
      <div className="text-content">
        <h1>ONLINE LIBRARY</h1>
        <h2>Visit our <span>Online library</span></h2>
        <p>Grab your book and go</p>
        <Link to="/books">
            <button className="see-more-button">See More</button>
          </Link>
      </div>
      <div className="carousel">
        <div className="carousel-track">
          <img src="https://m.media-amazon.com/images/I/81yYLUTgWdL.jpg" alt="Anna Karenina" />
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555160733i/1432.jpg" alt="Hamlet" />
          <img src="https://m.media-amazon.com/images/I/61HkdyBpKOL.jpg" alt="1984" />
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
