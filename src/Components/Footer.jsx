// Footer.js
import React from 'react';
import './Footer.css'; // Optional, if you want to add styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>NewsHunter</h2>
        </div>
        <div className="footer-links">
          <ul>
            <li><a >About Us</a></li>
            <li><a >Contact</a></li>
            <li><a >Privacy Policy</a></li>
            <li><a >Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i> {/* You can add icon libraries like Font Awesome */}
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 NewsHunter. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
