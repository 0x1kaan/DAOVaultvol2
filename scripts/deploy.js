const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const Voting = await hre.ethers.getContractFactory("Voting");
    const voting = await Voting.deploy();
    await voting.deployed();
    console.log("Voting contract deployed to:", voting.address);

    const Proposal = await hre.ethers.getContractFactory("Proposal");
    const proposal = await Proposal.deploy();
    await proposal.deployed();
    console.log("Proposal contract deployed to:", proposal.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
