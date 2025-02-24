import React from 'react';
import '../../styles/AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page" id="about">
      <div className="about-header">
        <h1>Our Story</h1>
        <p>A tradition of excellence since 1995</p>
      </div>

      <div className="about-content">
        <div className="story-section">
          <div className="story-image"></div>
          <div className="story-text">
            <h2>The Beginning</h2>
            <p>
              La Maison was founded by Chef Pierre Dubois with a vision to bring authentic French cuisine to the heart of the city. What started as a small family restaurant has grown into one of the most respected establishments in the culinary world.
            </p>
          </div>
        </div>

        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Quality</h3>
              <p>We source only the finest ingredients from local producers and French importers.</p>
            </div>
            <div className="value-item">
              <h3>Tradition</h3>
              <p>Our recipes have been perfected over generations of French culinary expertise.</p>
            </div>
            <div className="value-item">
              <h3>Innovation</h3>
              <p>While respecting tradition, we continuously evolve our menu with modern techniques.</p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image chef"></div>
              <h3>Chef Pierre Dubois</h3>
              <p>Executive Chef & Founder</p>
            </div>
            <div className="team-member">
              <div className="member-image sommelier"></div>
              <h3>Marie Laurent</h3>
              <p>Head Sommelier</p>
            </div>
            <div className="team-member">
              <div className="member-image pastry"></div>
              <h3>Jean Petit</h3>
              <p>Pastry Chef</p>
            </div>
          </div>
        </div>

        <div className="awards-section">
          <h2>Recognition & Awards</h2>
          <div className="awards-grid">
            <div className="award">
              <h3>Michelin Star</h3>
              <p>Awarded 2 Michelin stars for excellence in cuisine</p>
            </div>
            <div className="award">
              <h3>Wine Spectator</h3>
              <p>Best of Award of Excellence for our outstanding wine selection</p>
            </div>
            <div className="award">
              <h3>James Beard</h3>
              <p>Outstanding Restaurant Award finalist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 