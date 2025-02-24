import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>La Maison</h1>
        </div>
        <nav className="nav-menu">
          <a href="#home" className="nav-link">Home</a>
          <a href="#menu" className="nav-link">Menu</a>
          <a href="#reservations" className="nav-link">Reservations</a>
          <a href="#about" className="nav-link">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 