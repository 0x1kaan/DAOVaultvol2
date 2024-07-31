// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Proposal {
    struct ProposalDetails {
        uint id;
        string title;
        string description;
        address creator;
        bool active;
    }

    ProposalDetails[] public proposals;
    uint public nextProposalId;

    function createProposal(string memory _title, string memory _description) public {
        proposals.push(ProposalDetails({
            id: nextProposalId,
            title: _title,
            description: _description,
            creator: msg.sender,
            active: true
        }));
        nextProposalId++;
    }

    function getProposals() public view returns (ProposalDetails[] memory) {
        return proposals;
    }
}
