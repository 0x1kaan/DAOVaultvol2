import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ConnectWallet from '../components/ConnectWallet';
import DAOCreator from '../components/DAOCreator';
import './HomePage'; // Stil dosyasını ekleyelim

const HomePage = () => (
  <div className="home-page">
    <Header />
    <main>
      <section className="hero-section">
        <h1>Welcome to the DAO Vault</h1>
        <p>Your gateway to decentralized organizations.</p>
        <ConnectWallet />
      </section>
      <section className="dao-creator-section">
        <DAOCreator />
      </section>
    </main>
    <Footer />
  </div>
);

export default HomePage;
