// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract CountContract {
    int num = 0;
    
    function increase(int value) public returns (int) {
        num += value;
        return num;
    }

    function decrease(int value) public returns (int) {
        num -= value;
        return num;
    }

    function getNumber() public view returns (int) {
        return num;
    }
}