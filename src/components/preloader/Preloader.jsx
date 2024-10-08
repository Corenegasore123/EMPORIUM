import React from 'react';
import './Preloader.css'; 

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Preloader;
