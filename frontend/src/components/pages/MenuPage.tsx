import React from 'react';
import '../../styles/MenuPage.css';

const MenuPage: React.FC = () => {
  return (
    <div className="menu-page" id="menu">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>Savor the flavors of authentic French cuisine</p>
      </div>

      <section className="menu-section">
        <h2>Appetizers</h2>
        <div className="menu-items">
          <div className="menu-item">
            <div className="menu-item-header">
              <h3>French Onion Soup</h3>
              <span className="price">$12</span>
            </div>
            <p>Classic onion soup with melted Gruyère cheese and crusty bread</p>
          </div>

          <div className="menu-item">
            <div className="menu-item-header">
              <h3>Escargots de Bourgogne</h3>
              <span className="price">$16</span>
            </div>
            <p>Burgundy snails in garlic-herb butter</p>
          </div>
        </div>
      </section>

      <section className="menu-section">
        <h2>Main Courses</h2>
        <div className="menu-items">
          <div className="menu-item">
            <div className="menu-item-header">
              <h3>Coq au Vin</h3>
              <span className="price">$32</span>
            </div>
            <p>Braised chicken in red wine with mushrooms and pearl onions</p>
          </div>

          <div className="menu-item">
            <div className="menu-item-header">
              <h3>Beef Bourguignon</h3>
              <span className="price">$36</span>
            </div>
            <p>Classic beef stew with red wine, mushrooms, and bacon lardons</p>
          </div>
        </div>
      </section>

      <section className="menu-section">
        <h2>Desserts</h2>
        <div className="menu-items">
          <div className="menu-item">
            <div className="menu-item-header">
              <h3>Crème Brûlée</h3>
              <span className="price">$10</span>
            </div>
            <p>Classic vanilla custard with caramelized sugar crust</p>
          </div>

          <div className="menu-item">
            <div className="menu-item-header">
              <h3>Tarte Tatin</h3>
              <span className="price">$12</span>
            </div>
            <p>Upside-down caramelized apple tart with vanilla ice cream</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage; 