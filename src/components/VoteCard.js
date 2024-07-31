import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VoteCard'; // Stil dosyasını ekleyelim

const VoteCard = ({ title, description, id }) => {
  const navigate = useNavigate();

  const handleVote = () => {
    // Oylama sayfasına yönlendirme
    navigate(`/vote/${id}`);
  };

  return (
    <div className="vote-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={handleVote}>Vote</button>
    </div>
  );
};

export default VoteCard;
