import React from 'react';
import '../../styles/HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page" id="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to La Maison</h1>
          <p>Experience authentic French cuisine in the heart of the city</p>
          <a href="#reservations" className="cta-button">Make a Reservation</a>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <div className="feature-image cuisine"></div>
          <h2>Exquisite Cuisine</h2>
          <p>Savor the finest French dishes prepared by our master chefs</p>
        </div>

        <div className="feature">
          <div className="feature-image ambiance"></div>
          <h2>Elegant Ambiance</h2>
          <p>Dine in a sophisticated atmosphere with perfect lighting and decor</p>
        </div>

        <div className="feature">
          <div className="feature-image wine"></div>
          <h2>Fine Wines</h2>
          <p>Choose from our extensive collection of premium wines</p>
        </div>
      </section>

      <section className="special-offers">
        <h2>Special Offerings</h2>
        <div className="offers-grid">
          <div className="offer">
            <h3>Weekend Brunch</h3>
            <p>Join us for a delightful French brunch experience</p>
          </div>
          <div className="offer">
            <h3>Chef's Tasting Menu</h3>
            <p>Experience our seasonal seven-course tasting menu</p>
          </div>
          <div className="offer">
            <h3>Wine Pairing</h3>
            <p>Expert wine pairing with every course</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 