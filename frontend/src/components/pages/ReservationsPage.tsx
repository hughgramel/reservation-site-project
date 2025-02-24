import React from 'react';
import '../../styles/ReservationsPage.css';

const ReservationsPage: React.FC = () => {
  return (
    <div className="reservations-page" id="reservations">
      <div className="reservations-content">
        <div className="reservations-info">
          <h1>Make a Reservation</h1>
          <p>Join us for an unforgettable dining experience</p>
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Phone: (123) 456-7890</p>
            <p>Email: reservations@lamaison.com</p>
            <p>Hours: Monday - Sunday, 5:00 PM - 10:00 PM</p>
          </div>
        </div>

        <div className="reservation-form-container">
          <form className="reservation-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" placeholder="Your Phone Number" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" />
              </div>

              <div className="form-group">
                <label htmlFor="time">Time</label>
                <input type="time" id="time" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="guests">Number of Guests</label>
              <select id="guests">
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6">6 People</option>
                <option value="7">7 People</option>
                <option value="8">8 People</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="special-requests">Special Requests</label>
              <textarea id="special-requests" rows={4} placeholder="Any special requests or dietary requirements?"></textarea>
            </div>

            <button type="submit" className="submit-button">
              Request Reservation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationsPage; 