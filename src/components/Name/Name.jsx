import React from "react";
import profileImage from "../../assets/Angel.jpg";
import reactLogo from "../../assets/react.svg";
 
import "./Name.css";

const Name = () => {
  return (
    <>
    <div className="name">
      <h1>Ángel Fernández Bravo</h1>
    </div>
      <img src={profileImage} alt="Profile" className="name-image" />
    </>
  );
};

export default Name;