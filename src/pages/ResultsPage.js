import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResultChart from '../components/ResultChart';

const ResultsPage = () => {
  const dummyData = { proposal1: 60, proposal2: 40 };

  return (
    <div>
      <Header />
      <main>
        <h1>Results</h1>
        <ResultChart data={dummyData} />
      </main>
      <Footer />
    </div>
  );
};

export default ResultsPage;
