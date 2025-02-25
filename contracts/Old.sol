// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Old {
    uint public x;

    function setX(uint _x) public {
        x = _x;
    }

    function getX() public view returns (uint) {
        return x;
    }
}
