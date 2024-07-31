import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import VotingContract from '../abis/Voting.json'; // ABI dosyasını import edin

const Voting = () => {
    const [web3, setWeb3] = useState(null);
    const [contract, setContract] = useState(null);
    const [proposals, setProposals] = useState([]);
    const [account, setAccount] = useState(null);

    useEffect(() => {
        const init = async () => {
            if (window.ethereum) {
                const web3Instance = new Web3(window.ethereum);
                setWeb3(web3Instance);

                const networkId = await web3Instance.eth.net.getId();
                const deployedNetwork = VotingContract.networks[networkId];
                const instance = new web3Instance.eth.Contract(
                    VotingContract.abi,
                    deployedNetwork && deployedNetwork.address
                );
                setContract(instance);

                const accounts = await web3Instance.eth.requestAccounts();
                setAccount(accounts[0]);

                const proposalList = await instance.methods.getProposals().call();
                setProposals(proposalList);
            }
        };

        init();
    }, []);

    const handleVote = async (proposalId) => {
        await contract.methods.vote(proposalId).send({ from: account });
        const updatedProposals = await contract.methods.getProposals().call();
        setProposals(updatedProposals);
    };

    return (
        <div>
            <h1>Voting</h1>
            <ul>
                {proposals.map((proposal) => (
                    <li key={proposal.id}>
                        {proposal.title} - {proposal.voteCount} votes
                        <button onClick={() => handleVote(proposal.id)}>Vote</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Voting;
