import React, { useState } from 'react';
import Web3 from 'web3';

const DAO_CREATION_CONTRACT_ADDRESS = "0xYourDAOContractAddress"; // DAO kontrat adresinizi buraya ekleyin
const DAO_CREATION_ABI = [ /* DAO creation ABI here */]; // DAO oluşturma ABI'nizi buraya ekleyin

const DAOCreator = () => {
  const [daoName, setDaoName] = useState('');
  const [daoDescription, setDaoDescription] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCreateDAO = async (event) => {
    event.preventDefault(); // Formun varsayılan gönderimini engelle

    if (!daoName) {
      setError("DAO name is required.");
      return;
    }

    setLoading(true);
    setError(null);

    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.requestAccounts();
        const contract = new web3.eth.Contract(DAO_CREATION_ABI, DAO_CREATION_CONTRACT_ADDRESS);

        // DAO oluşturma fonksiyonunu çağır
        const transaction = contract.methods.createDAO(daoName, daoDescription); // createDAO fonksiyonu kontratınızda tanımlanmış olmalı
        const gas = await transaction.estimateGas({ from: accounts[0] });

        await transaction.send({ from: accounts[0], gas });

        alert('DAO created successfully!');
        // Kaydırma işlemi
        document.getElementById('transaction-section').scrollIntoView({ behavior: 'smooth' });
      } catch (error) {
        console.error("Error creating DAO:", error);
        setError("Failed to create DAO.");
      } finally {
        setLoading(false);
      }
    } else {
      setError("MetaMask is not installed. Please install MetaMask and try again.");
    }
  };

  return (
    <div>
      <h2>Create a New DAO</h2>
      <form onSubmit={handleCreateDAO}>
        <div>
          <label htmlFor="daoName">DAO Name:</label>
          <input
            type="text"
            id="daoName"
            value={daoName}
            onChange={(e) => setDaoName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="daoDescription">DAO Description:</label>
          <textarea
            id="daoDescription"
            value={daoDescription}
            onChange={(e) => setDaoDescription(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Creating DAO...' : 'Create DAO'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default DAOCreator;
