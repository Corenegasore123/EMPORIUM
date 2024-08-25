import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);


  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <div className="back-to-top bg-green-800" onClick={scrollToTop} style={backToTopStyle}>
        <p className="text-white">&#8679; Back To Top</p>
      </div>
    )
  );
};

const backToTopStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  padding: '10px',
  color: '#fff',
  cursor: 'pointer',
  borderRadius: '5px',
  fontSize: '14px',
  zIndex: '1000',
};

export default BackToTop;
