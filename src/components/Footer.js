import React from 'react';
import './Footer'; // Stil dosyasını ekleyelim

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>&copy; {new Date().getFullYear()} DAO Vault. All rights reserved.</p>
      <div className="footer-links">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
      <div className="footer-social">
        <a href="https://www.instagram.com/yigit.eth/" target="_blank" rel="noopener noreferrer">
          <img src="path_to_twitter_icon" alt="Twitter" />
        </a>
        <a href="https://github.com/0x1kaan/DAOVault" target="_blank" rel="noopener noreferrer">
          <img src="path_to_github_icon" alt="GitHub" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
