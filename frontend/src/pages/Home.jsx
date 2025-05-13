import React from "react";
import './Home.scss';
import Banner from "../components/Home/Banner";
import TopServices from "../components/Home/TopServices";

const Home = () => (
  <div className="home-section">
    <div className="banner">
    <Banner></Banner>
    </div>
    <div className="topservices">
    <TopServices></TopServices>
    </div>

  </div>
);

export default Home;
