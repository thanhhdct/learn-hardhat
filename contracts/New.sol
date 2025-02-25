// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract New {
    uint public x;

    function delegateCallSetX(address bAddress, uint _x) public {
        (bool success, ) = bAddress.delegatecall(
            abi.encodeWithSignature("setX(uint256)", _x + 6)
        );
        require(success, "Delegatecall failed");
    }

    function getX() public view returns (uint) {
        return x;
    }
}