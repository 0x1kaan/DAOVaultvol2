import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VoteCard from '../components/VoteCard';
import ConnectWallet from '../components/ConnectWallet';
import { Element, scroller } from 'react-scroll';

const VotingPage = () => {
    const scrollToSection = () => {
        scroller.scrollTo('walletSection', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };

    return (
        <div>
            <Header />
            <main>
                <h1>Vote Now</h1>
                <ConnectWallet onClick={scrollToSection} />
                <Element name="walletSection" className="element">
                    <h2>Wallet Section</h2>
                    {/* Diğer içerikler */}
                </Element>
                <VoteCard title="Proposal 1" description="Description of Proposal 1" />
                <VoteCard title="Proposal 2" description="Description of Proposal 2" />
            </main>
            <Footer />
        </div>
    );
};

export default VotingPage;
