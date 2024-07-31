import React from 'react';
import { Link } from 'react-router-dom';
import './Header'; // Stil dosyasını ekleyelim

const Header = () => (
  <header className="header">
    <nav className="nav-container">
      {/* Logo ve Ana Sayfa Bağlantısı */}
      <Link to="/" className="logo">DAO Vault</Link>

      {/* Navigasyon Linkleri */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/vote">Vote</Link>
        <Link to="/results">Results</Link>
        <Link to="/dao-home">DAO Home</Link> {/* DAOHomePage için doğru yol */}
        <Link to="/user-profile">Profile</Link> {/* Kullanıcı profili için link */}
        <Link to="/settings">Settings</Link> {/* Ayarlar için link */}
      </div>
    </nav>
  </header>
);

export default Header;
