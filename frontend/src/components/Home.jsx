import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="logo">EcoEats</div>
        <nav className="nav-links">
          <Link to="/login" className="nav-button">Login</Link>
          <Link to="/signup" className="nav-button">Signup</Link>
        </nav>
      </header>

      <main className="home-main">
        <div className="hero-section">
          <div className="hero-content">
            <h2 className="hero-title">Connecting Communities Through Food</h2>
            <p className="hero-subtitle">
              Join us in reducing food waste and hunger. Your small actions can make a huge impact!
            </p>
            <button className="hero-button">Get Involved</button>
          </div>
        </div>

        <section className="info-cards">
          <div className="card">
            <h3>Donate Food</h3>
            <p>Help us fight food waste by donating your resources to those in need.</p>
          </div>
          <div className="card">
            <h3>Find Food</h3>
            <p>Search for local food sharing events and community kitchens in your area.</p>
          </div>
          <div className="card">
            <h3>Track Impact</h3>
            <p>See the difference you're making through our real-time impact tracker.</p>
          </div>
        </section>

        <footer className="home-footer">
          <div className="footer-column">
            <h4>Connect with Us</h4>
            <p>Email: support@ecoeats.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div className="footer-column">
            <h4>Newsletter</h4>
            <input type="email" placeholder="Your email" className="newsletter-input" />
            <button className="newsletter-button">Subscribe</button>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Home;
