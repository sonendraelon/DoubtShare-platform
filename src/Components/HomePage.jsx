// HomePage.js
import React from "react";
import HomeImage from "../Images/home2.png";
import "../CSS/HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="text-container">
        <h2>
        "DoubtShare invites you to unlock knowledge collaboratively! Join a dynamic community where students seamlessly share and resolve doubts, fostering real-time collaboration and concept clarification. Elevate your academic experience with interactive learning, peer support, and instant doubt assistance. Bid farewell to uncertainties – let's embark on a journey of learning and growth together!"        </h2>
      </div>

      <img className="homepage-image" src={HomeImage} alt="DoubtHub" />
    </div>
  );
};

export default HomePage;
