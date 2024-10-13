// src/pages/Logout/Logout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

const Logout = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  const handleRegisterClick = () => {
    navigate('/register'); 
  };

  return (
    <div className="logout-container">
      <h1 className="logout-message">You have been logged out!</h1>
      <p className="logout-submessage">We hope to see you again soon!</p>
      <div className="logout-buttons">
        <button className="logout-button" onClick={handleLoginClick}>
          Login
        </button>
        <button className="logout-button" onClick={handleRegisterClick}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Logout;
