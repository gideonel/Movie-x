import React from "react";
import { Link } from "react-router-dom";
import "../LandingPage.css"; // Make sure to update your CSS

const LandingPage = () => {
  return (
    <div className="landing-container-bg">
      <div className="landing-overlay">
        <h1 className="landing-title">Movie-X</h1>
        <p className="landing-tagline">Discover your next favorite movie</p>
        
        <div className="landing-buttons">
          <Link to="/movie" className="btn btn-primary">Browse Movies</Link>
          <Link to="/favorites" className="btn btn-secondary">View Favorites</Link>
        </div>

        <p className="landing-description">
          Movie-X is your go-to app for exploring movies, saving favorites, and filtering by year, genre, and rating.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
