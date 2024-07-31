import React from 'react';
import Web3 from 'web3';

const ConnectMetaMask = ({ setWeb3, setAccount }) => {
    const connect = async () => {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            const ConnectMetaMask = ({ setWeb3, setAccount }) => {
                const connect = async () => {
                    if (window.ethereum) {
                        try {
                            const web3 = new Web3(window.ethereum);
                            await window.ethereum.request({ method: 'eth_requestAccounts' });
                            const accounts = await web3.eth.getAccounts();
                            setWeb3(web3);
                            setAccount(accounts[0]);
                        } catch (error) {
                            console.error("Failed to connect MetaMask:", error);
                        }
                    } else {
                        alert('Please install MetaMask!');
                    }
                };

                return (
                    <button onClick={connect}>
                        Connect to MetaMask
                    </button>
                );
            };

            export default ConnectMetaMask;
