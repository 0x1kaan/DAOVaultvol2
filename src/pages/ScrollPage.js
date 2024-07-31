import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ScrollPage = () => (
    <div>
        <Header />
        <main>
            <h1>Scroll Network</h1>
            <p>Welcome to the Scroll network. Here you can perform actions related to the Scroll network.</p>
            {/* Buraya Scroll ağı ile ilgili içerikleri ekleyebilirsin */}
        </main>
        <Footer />
    </div>
);

export default ScrollPage;