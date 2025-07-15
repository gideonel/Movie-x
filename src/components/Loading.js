// src/components/Loading.jsx
import React from "react";
import "./Loading.css"; // CSS styles
import loadingImage from "../assets/loading.gif"; // Adjust path if needed

const Loading = () => {
  return (
    <div className="loading-container">
      <img src={loadingImage} alt="Loading..." className="loading-image" />
    </div>
  );
};

export default Loading;
