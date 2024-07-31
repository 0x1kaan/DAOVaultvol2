import React, { useState } from 'react';
import Web3 from 'web3';
import ProposalContract from '../abis/Proposal.json'; // ABI dosyasını import edin

const Proposal = () => {
    const [web3, setWeb3] = useState(null);
    const [contract, setContract] = useState(null);
    const [proposals, setProposals] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [account, setAccount] = useState(null);

    useEffect(() => {
        const init = async () => {
            if (window.ethereum) {
                const web3Instance = new Web3(window.ethereum);
                setWeb3(web3Instance);

                const networkId = await web3Instance.eth.net.getId();
                const deployedNetwork = ProposalContract.networks[networkId];
                const instance = new web3Instance.eth.Contract(
                    ProposalContract.abi,
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

    const handleSubmit = async () => {
        await contract.methods.createProposal(title, description).send({ from: account });
        const updatedProposals = await contract.methods.getProposals().call();
        setProposals(updatedProposals);
    };

    return (
        <div>
            <h1>Proposals</h1>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />
            <button onClick={handleSubmit}>Submit Proposal</button>
            <ul>
                {proposals.map((proposal) => (
                    <li key={proposal.id}>
                        {proposal.title} - {proposal.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Proposal;
