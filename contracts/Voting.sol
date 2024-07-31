// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Proposal {
        uint id;
        string title;
        string description;
        uint voteCount;
        address proposer;
    }

    Proposal[] public proposals;
    uint public nextProposalId;
    mapping(address => bool) public hasVoted;

    function createProposal(
        string memory _title,
        string memory _description
    ) public {
        proposals.push(
            Proposal({
                id: nextProposalId,
                title: _title,
                description: _description,
                voteCount: 0,
                proposer: msg.sender
            })
        );
        nextProposalId++;
    }

    function vote(uint _proposalId) public {
        require(!hasVoted[msg.sender], "You have already voted.");
        require(_proposalId < nextProposalId, "Invalid proposal ID.");

        Proposal storage proposal = proposals[_proposalId];
        proposal.voteCount++;
        hasVoted[msg.sender] = true;
    }

    function getProposals() public view returns (Proposal[] memory) {
        return proposals;
    }
}
