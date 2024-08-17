import React from "react";
import "./Card.css";

const Card = ({ imageSrc, title, subtitle, content }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-image">
          <img src={imageSrc} alt={title} />
        </div>
        <div className="card-content">
          <h4>{title}</h4>
          {subtitle && <h6>{subtitle}</h6>} 
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

