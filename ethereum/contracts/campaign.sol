pragma solidity ^0.4.17;

contract FactoryCampaign {
    address[] public deployedCampaign;

    function createCampaign(uint minimum) public {
        address newcampaign = new Campaign(minimum, msg.sender);
        deployedCampaign.push(newcampaign);
    }

    function getDeployedCampaign() public view returns(address[]) {
        return deployedCampaign;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint countApprovers;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public countApprovals;

    modifier restricted () {
        require(msg.sender == manager);
        _;
    }

    function Campaign(uint minimum, address creator) public {
        manager = creator;

        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        approvers[msg.sender] = true;
        countApprovals++;
    }
 
    function createRequest (string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
            description : description,
            value : value,
            recipient : recipient,
            complete : false,
            countApprovers : 0
        });

        requests.push(newRequest);
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.countApprovers++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];

        require(request.countApprovers > (countApprovals / 2));
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete = true; 
    }

    function getSummary() public view 
    returns(
        uint, uint, uint, uint, address
    ) {
        return (
            minimumContribution,
            this.balance,
            requests.length,
            countApprovals,
            manager
        );
    }

    function getRequestCount() public view returns(uint) {
        return requests.length;
    }
}