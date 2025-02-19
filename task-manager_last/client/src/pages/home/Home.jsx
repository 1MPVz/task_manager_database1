import React from "react";
import "./home.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import homeImage from "../../assets/home.png";

const Home = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth;

  return (
    <div className="home-container">
      <div className="container">
        <div className="content">
          <h1>
            Welcome to <br /> WorkFlow
          </h1>
          <p>
            The ultimate platform for managing work, tracking progress, and
            collaborating with your team—all in one place!
          </p>
          {currentUser && currentUser.token ? (
            <Link to="/dashboard" className="cta-btn">Get Started</Link>
          ) : (
            <Link to="/signin" className="cta-btn">Get Started</Link>
          )}
        </div>
        <div className="image-container">
          <img src={homeImage} alt="Team Work Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Home;
