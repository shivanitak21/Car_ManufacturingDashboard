// Card.js
import React from 'react';

const DetailsPage = ({ title, description }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default DetailsPage;
