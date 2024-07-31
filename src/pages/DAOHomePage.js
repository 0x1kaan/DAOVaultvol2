import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './DAOHomePage'; // Stil dosyasını ekleyelim

const DAOHomePage = () => {
    const { daoId } = useParams(); // URL'den DAO ID'sini al

    return (
        <div className="dao-home-page">
            <Header />
            <main>
                <section className="dao-intro">
                    <h1>DAO Home Page</h1>
                    <p>Welcome to DAO with ID: <strong>{daoId}</strong></p>
                </section>
                <section className="dao-details">
                    <h2>DAO Details</h2>
                    {/* Burada DAO'ya özgü bilgileri göstermek için dinamik içerik ekleyebilirsiniz */}
                    <div className="dao-profile-card">
                        <h3>DAO Profile</h3>
                        <p><strong>Name:</strong> Example DAO Name</p>
                        <p><strong>Description:</strong> This DAO is responsible for... (Add description here)</p>
                        <p><strong>Members:</strong> 150</p>
                    </div>
                </section>
                <section className="dao-interactions">
                    <h2>Interactions</h2>
                    <button>View Proposals</button>
                    <button>Create Proposal</button>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default DAOHomePage;
