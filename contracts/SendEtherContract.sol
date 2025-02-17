// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "hardhat/console.sol";

contract SendEtherContract {
    address owner;
    uint count = 0;
    event Deposit(uint value, address from);

    constructor() {
        owner = msg.sender;
        console.log(" ~ constructor ~ owner %s:", owner);
    }

    receive() external payable {}

    function destroy() public {
        require(msg.sender == owner, "only owner can destroy this contract");
        selfdestruct(payable(owner));
    }

    function showBalance() public view returns (uint) {
        return address(this).balance;
    }

    function emitEvent() public {
        emit Deposit(count, owner);
        count++;
    }

    function getOwnerAddress() public view returns (address) {
        console.log(" ~ constructor ~ owner 2 %s:", owner);
        return owner;
    }
}
