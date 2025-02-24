import React from 'react';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import HomePage from './components/pages/HomePage';
import MenuPage from './components/pages/MenuPage';
import ReservationsPage from './components/pages/ReservationsPage';
import AboutPage from './components/pages/AboutPage';
import './styles/App.css';


const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <HomePage />
        <MenuPage />
        <ReservationsPage />
        <AboutPage />
      </main>
      <Footer />
    </div>
  );
};

export default App;
